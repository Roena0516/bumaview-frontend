import apiClient from './config';

export const deleteQuestion = async (questionId: number): Promise<void> => {
  await apiClient.delete(`/questions/${questionId}`);
};
