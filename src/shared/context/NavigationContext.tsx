import { createContext, useContext, useState, ReactNode } from 'react';

type Page = 'main' | 'login' | 'signup' | 'interview-setup' | 'interview-loading' | 'interview' | 'interview-complete' | 'question-answers' | 'answer-detail' | 'mypage';

interface NavigationContextType {
  currentPage: Page;
  isTransitioning: boolean;
  navigateToPage: (page: Page) => void;
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

  const navigateToPage = (page: Page) => {
    if (page === currentPage) return;

    setIsTransitioning(true);

    // 페이드 아웃 후 페이지 변경
    setTimeout(() => {
      setCurrentPage(page);

      // 페이드 인 완료 후 전환 상태 해제
      setTimeout(() => {
        setIsTransitioning(false);
      }, 150);
    }, 150);
  };

  return (
    <NavigationContext.Provider value={{ currentPage, isTransitioning, navigateToPage }}>
      {children}
    </NavigationContext.Provider>
  );
};