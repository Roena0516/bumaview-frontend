import apiClient from './config';

interface RefreshTokenResponse {
  accessToken: string;
  refreshToken: string;
}

export const refreshToken = async (): Promise<RefreshTokenResponse> => {
  const response = await apiClient.post<RefreshTokenResponse>('/auth/refresh');
  return response.data;
};
