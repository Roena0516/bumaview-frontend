import { MainPage } from './pages/main';
import { LoginPage } from './pages/login';
import { SignupPage } from './pages/signup';
import { InterviewSetupPage } from './pages/interview-setup';
import { InterviewLoadingPage } from './pages/interview-loading';
import { InterviewPage } from './pages/interview';
import { InterviewCompletePage } from './pages/interview-complete';
import { QuestionAnswersPage } from './pages/question-answers';
import { AnswerDetailPage } from './pages/answer-detail';
import { MyPage } from './pages/mypage';
import { NavigationProvider, useNavigation } from './shared/context/NavigationContext';
import { AuthProvider } from './shared/context/AuthContext';
import { ToastProvider } from './shared/context/ToastContext';

function AppContent() {
  const { currentPage, isTransitioning, isPartialTransition } = useNavigation();

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <LoginPage />;
      case 'signup':
        return <SignupPage />;
      case 'interview-setup':
        return <InterviewSetupPage />;
      case 'interview-loading':
        return <InterviewLoadingPage />;
      case 'interview':
        return <InterviewPage />;
      case 'interview-complete':
        return <InterviewCompletePage />;
      case 'question-answers':
        return <QuestionAnswersPage />;
      case 'answer-detail':
        return <AnswerDetailPage />;
      case 'mypage':
        return <MyPage />;
      case 'main':
      default:
        return <MainPage />;
    }
  };

  const pageStyle = {
    opacity: (isTransitioning && !isPartialTransition) ? 0 : 1,
    transition: 'opacity 0.1s ease-in-out'
  };

  return (
    <div style={pageStyle}>
      {renderPage()}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <NavigationProvider>
        <ToastProvider>
          <AppContent />
        </ToastProvider>
      </NavigationProvider>
    </AuthProvider>
  );
}

export default App;