import axios from 'axios';

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
  const response = await axios.post<SignupResponse>('/auth/signup', userData);
  return response.data;
};