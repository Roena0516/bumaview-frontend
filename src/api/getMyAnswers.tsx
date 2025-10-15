import apiClient from './config';

interface MyAnswersParams {
  category?: string;
  company?: string;
  questionAt?: string;
}

interface MyAnswer {
  id: number;
  questionId: number;
  content: string;
  time: number;
  userId: string;
  averageScore: number;
}

export const getMyAnswers = async (params?: MyAnswersParams): Promise<MyAnswer[]> => {
  const queryParams = new URLSearchParams();

  if (params?.category) {
    queryParams.append('category', params.category);
  }
  if (params?.company) {
    queryParams.append('company', params.company);
  }
  if (params?.questionAt) {
    queryParams.append('questionAt', params.questionAt);
  }

  const url = queryParams.toString()
    ? `/answers/my?${queryParams.toString()}`
    : '/answers/my';

  const response = await apiClient.get<MyAnswer[]>(url);
  return response.data;
};

export type { MyAnswer, MyAnswersParams };
