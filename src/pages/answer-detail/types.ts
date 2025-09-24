export interface Answer {
  id: number;
  content: string;
  userName: string;
  time: string;
  score: number;
}

export interface QuestionInfo {
  title: string;
  company: string;
  field: string;
  year: string;
}

export interface AnswerEvaluation {
  id: number;
  content: string;
  userName: string;
  time: string;
  score: number;
}

export interface AnswerDetailPageProps {
  answer?: Answer;
  questionInfo?: QuestionInfo;
  evaluations?: AnswerEvaluation[];
}