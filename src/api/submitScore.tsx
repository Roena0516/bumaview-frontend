import apiClient from "./config";

interface SubmitScoreRequest {
  answerId: number;
  content: string;
  score: number;
}

export const submitScore = async (data: SubmitScoreRequest): Promise<void> => {
  const requestBody = {
    answerId: data.answerId,
    content: data.content,
    score: data.score,
  };

  await apiClient.post("/scores", requestBody);
};

export type { SubmitScoreRequest };
