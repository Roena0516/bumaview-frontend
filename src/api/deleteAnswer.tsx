import apiClient from './config';

export const deleteAnswer = async (answerId: number): Promise<void> => {
  await apiClient.delete(`/answers/${answerId}`);
};
