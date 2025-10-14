import apiClient from './config';

interface SubmitAnswerRequest {
  questionId: number;
  answer: string;
  time: number;
}

export const submitAnswer = async (data: SubmitAnswerRequest): Promise<void> => {
  const requestBody = {
    questionId: data.questionId,
    answer: data.answer,
    time: data.time
  };

  await apiClient.post('/answers', requestBody);
};

export type { SubmitAnswerRequest };
