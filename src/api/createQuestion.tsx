import apiClient from "./config";

interface CreateQuestionRequest {
  content: string;
  category: string;
  company?: string;
  questionAt?: string;
}

interface CreateQuestionResponse {
  questionId: number;
}

export const createQuestion = async (
  data: CreateQuestionRequest
): Promise<CreateQuestionResponse> => {
  const requestBody = {
    content: data.content,
    category: data.category,
    ...(data.company && { company: data.company }),
    ...(data.questionAt && { questionAt: data.questionAt }),
  };

  const response = await apiClient.post<CreateQuestionResponse>(
    "/questions",
    requestBody
  );
  return response.data;
};

export type { CreateQuestionRequest };
