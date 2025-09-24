import { MainPage } from './pages/main';
import { LoginPage } from './pages/login';
import { SignupPage } from './pages/signup';
import { InterviewSetupPage } from './pages/interview-setup';
import { InterviewPage } from './pages/interview';
import { InterviewCompletePage } from './pages/interview-complete';
import { QuestionAnswersPage } from './pages/question-answers';
import { AnswerDetailPage } from './pages/answer-detail';
import { MyPage } from './pages/mypage';
import { NavigationProvider, useNavigation } from './shared/context/NavigationContext';
import { AuthProvider } from './shared/context/AuthContext';

function AppContent() {
  const { currentPage } = useNavigation();

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <LoginPage />;
      case 'signup':
        return <SignupPage />;
      case 'interview-setup':
        return <InterviewSetupPage />;
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

  return renderPage();
}

function App() {
  return (
    <AuthProvider>
      <NavigationProvider>
        <AppContent />
      </NavigationProvider>
    </AuthProvider>
  );
}

export default App;