import apiClient from './config';

interface Evaluation {
  id: number;
  content: string;
  score: number;
  userId: string;
  createdAt: string;
}

interface AnswerDetail {
  id: number;
  content: string;
  time: number;
  userId: string;
  questionId: number;
  question: {
    id: number;
    content: string;
    company: string;
    category: string;
    questionAt: string;
  };
  evaluations: Evaluation[];
  averageScore: number | null;
}

export const getAnswerById = async (answerId: number): Promise<AnswerDetail> => {
  const response = await apiClient.get<AnswerDetail>(`/answers/${answerId}`);
  return response.data;
};

export type { AnswerDetail, Evaluation };
