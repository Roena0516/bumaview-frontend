import apiClient from './config';

interface Answer {
  id: number;
  userId: string;
  content: string;
  time: number;
  questionId: number;
  averageScore: number | null;
}

interface QuestionDetail {
  id: number;
  content: string;
  category: string;
  company: string;
  questionAt: string;
  answers: Answer[];
}

export const getQuestionById = async (questionId: number): Promise<QuestionDetail> => {
  const response = await apiClient.get<QuestionDetail>(`/questions/${questionId}`);
  return response.data;
};

export type { QuestionDetail, Answer };
