import axios, { AxiosError, type InternalAxiosRequestConfig } from 'axios';
import { getCookie, deleteAllAuthCookies, setCookie } from '../shared/utils/cookies';

// API 베이스 URL 설정 (환경 변수에서 가져오기)
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://bumaview-production.up.railway.app';

// axios 인스턴스 생성
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // 10초 타임아웃
  headers: {
    'Content-Type': 'application/json',
  },
});

// 토큰 갱신 중인지 확인하는 플래그
let isRefreshing = false;
// 토큰 갱신을 기다리는 요청들을 저장하는 큐
let failedQueue: Array<{
  resolve: (value?: unknown) => void;
  reject: (reason?: unknown) => void;
}> = [];

const processQueue = (error: AxiosError | null, token: string | null = null) => {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

// 요청 인터셉터 (토큰 자동 첨부 등)
apiClient.interceptors.request.use(
  (config) => {
    const token = getCookie('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터 (토큰 자동 갱신 처리)
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };

    // 401 에러이고 refresh 엔드포인트가 아닌 경우
    if (error.response?.status === 401 && !originalRequest.url?.includes('/auth/refresh')) {
      if (isRefreshing) {
        // 이미 토큰 갱신 중이면 큐에 추가
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        }).then(() => {
          return apiClient(originalRequest);
        }).catch(err => {
          return Promise.reject(err);
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      const refreshTokenValue = getCookie('refreshToken');

      if (!refreshTokenValue) {
        // refreshToken이 없으면 로그아웃
        deleteAllAuthCookies();
        window.location.href = '/';
        return Promise.reject(error);
      }

      try {
        // refreshToken으로 새 토큰 요청
        const response = await axios.post(`${API_BASE_URL}/auth/refresh`, null, {
          headers: {
            Authorization: `Bearer ${refreshTokenValue}`
          }
        });

        const { accessToken, refreshToken: newRefreshToken } = response.data;

        // 새 토큰 저장
        setCookie('accessToken', accessToken, {
          days: 1,
          secure: true,
          sameSite: 'Strict'
        });
        setCookie('refreshToken', newRefreshToken, {
          days: 7,
          secure: true,
          sameSite: 'Strict'
        });

        // 대기 중인 요청들 처리
        processQueue(null, accessToken);
        isRefreshing = false;

        // 원래 요청 재시도
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return apiClient(originalRequest);
      } catch (refreshError) {
        // 토큰 갱신 실패 시 로그아웃
        processQueue(refreshError as AxiosError, null);
        isRefreshing = false;
        deleteAllAuthCookies();
        window.location.href = '/';
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default apiClient;