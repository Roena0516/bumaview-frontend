import { createContext, useContext, useState, ReactNode } from 'react';

type Page = 'main' | 'login' | 'signup' | 'interview-setup' | 'interview-loading' | 'interview' | 'interview-complete' | 'question-answers' | 'answer-detail' | 'mypage';

interface NavigationContextType {
  currentPage: Page;
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

  const navigateToPage = (page: Page) => {
    setCurrentPage(page);
  };

  return (
    <NavigationContext.Provider value={{ currentPage, navigateToPage }}>
      {children}
    </NavigationContext.Provider>
  );
};