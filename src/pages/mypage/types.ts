export interface UserAnswer {
  id: number;
  content: string;
  time: string;
  score: number;
}

export interface MyPageProps {
  userAnswers?: UserAnswer[];
}