import apiClient from './config';

interface RandomQuestionsParams {
  category?: string;
  company?: string;
  question_at?: string;
  amount: number;
}

interface RandomQuestion {
  id: number;
  content: string;
  category: string;
  company: string;
  questionAt: string;
}

export const getRandomQuestions = async (params: RandomQuestionsParams): Promise<RandomQuestion[]> => {
  const queryParams = new URLSearchParams();

  queryParams.append('amount', params.amount.toString());

  if (params.category) {
    queryParams.append('category', params.category);
  }
  if (params.company) {
    queryParams.append('company', params.company);
  }
  if (params.question_at) {
    queryParams.append('question_at', params.question_at);
  }

  const response = await apiClient.get<RandomQuestion[]>(`/questions/random?${queryParams.toString()}`);
  return response.data;
};

export type { RandomQuestion, RandomQuestionsParams };
