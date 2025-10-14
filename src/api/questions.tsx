import apiClient from './config';

interface QuestionFilters {
  company?: string;
  category?: string;
  question_at?: string;
  query?: string;
}

interface Question {
  id: number;
  company: string;
  category: string;
  content: string;
  questionAt: string;
}

export const getQuestions = async (filters?: QuestionFilters): Promise<Question[]> => {
  const params = new URLSearchParams();

  if (filters?.company) {
    params.append('company', filters.company);
  }
  if (filters?.category) {
    params.append('category', filters.category);
  }
  if (filters?.question_at) {
    params.append('question_at', filters.question_at);
  }
  if (filters?.query) {
    params.append('query', filters.query);
  }

  const url = `/questions${params.toString() ? `?${params.toString()}` : ''}`;
  const response = await apiClient.get<Question[]>(url);
  return response.data;
};

export type { Question, QuestionFilters };