import { createContext, useContext, useState, ReactNode } from 'react';

type Page = 'main' | 'login' | 'signup' | 'interview-setup' | 'interview-loading' | 'interview' | 'interview-complete' | 'question-answers' | 'answer-detail' | 'mypage' | 'admin';

interface InterviewSettings {
  category?: string;
  company?: string;
  questionAt?: string;
  amount: number;
}

interface NavigationContextType {
  currentPage: Page;
  isTransitioning: boolean;
  isPartialTransition: boolean;
  selectedQuestionId: number | null;
  selectedAnswerId: number | null;
  interviewSettings: InterviewSettings | null;
  navigateToPage: (page: Page) => void;
  setSelectedQuestionId: (id: number | null) => void;
  setSelectedAnswerId: (id: number | null) => void;
  setInterviewSettings: (settings: InterviewSettings) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};

interface NavigationProviderProps {
  children: ReactNode;
}

export const NavigationProvider = ({ children }: NavigationProviderProps) => {
  const [currentPage, setCurrentPage] = useState<Page>('main');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPartialTransition, setIsPartialTransition] = useState(false);
  const [selectedQuestionId, setSelectedQuestionId] = useState<number | null>(null);
  const [selectedAnswerId, setSelectedAnswerId] = useState<number | null>(null);
  const [interviewSettings, setInterviewSettings] = useState<InterviewSettings | null>(null);

  const navigateToPage = (page: Page) => {
    if (page === currentPage) return;

    // 메인에서 답변 리스트로 가는 경우만 부분 전환
    const isMainToAnswers = currentPage === 'main' && page === 'question-answers';

    // 면접 흐름 페이지들 간 전환은 페이드 없음
    const interviewFlowPages: Page[] = ['interview-setup', 'interview-loading', 'interview', 'interview-complete'];
    const isInterviewFlow = interviewFlowPages.includes(currentPage) && interviewFlowPages.includes(page);

    if (isInterviewFlow) {
      // 면접 흐름에서는 즉시 전환
      setCurrentPage(page);
      return;
    }

    setIsTransitioning(true);
    setIsPartialTransition(isMainToAnswers);

    // 페이드 아웃 후 페이지 변경
    setTimeout(() => {
      setCurrentPage(page);

      // 페이드 인 완료 후 전환 상태 해제
      setTimeout(() => {
        setIsTransitioning(false);
        setIsPartialTransition(false);
      }, 100);
    }, 100);
  };

  return (
    <NavigationContext.Provider value={{ currentPage, isTransitioning, isPartialTransition, selectedQuestionId, selectedAnswerId, interviewSettings, navigateToPage, setSelectedQuestionId, setSelectedAnswerId, setInterviewSettings }}>
      {children}
    </NavigationContext.Provider>
  );
};

export type { InterviewSettings };