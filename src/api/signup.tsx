import apiClient from './config';

interface SignupRequest {
  id: string;
  nickname: string;
  password: string;
}

interface SignupResponse {
  accessToken: string;
  refreshToken: string;
}

export const signup = async (userData: SignupRequest): Promise<SignupResponse> => {
  const response = await apiClient.post<SignupResponse>('/auth/signup', userData);
  return response.data;
};