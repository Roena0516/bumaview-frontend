import apiClient from "./config";

interface Score {
  id: number;
  score: number;
  content: string;
  userId: string;
}

interface AnswerDetail {
  id: number;
  content: string;
  time: number;
  userId: string;
  questionId: number;
  scores: Score[];
}

export const getAnswerById = async (
  answerId: number
): Promise<AnswerDetail> => {
  const response = await apiClient.get<AnswerDetail>(`/answers/${answerId}`);
  return response.data;
};

export type { AnswerDetail, Score };
