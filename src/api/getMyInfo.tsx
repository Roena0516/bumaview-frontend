import apiClient from './config';

interface MyInfo {
  id: string;
  nickname: string;
  answerCount: number;
  averageScore: number;
  evaluatedCount: number;
}

export const getMyInfo = async (): Promise<MyInfo> => {
  const response = await apiClient.get<MyInfo>('/auth/me');
  return response.data;
};

export type { MyInfo };
