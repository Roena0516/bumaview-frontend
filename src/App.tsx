import { MainPage } from './pages/main';
import { LoginPage } from './pages/login';
import { SignupPage } from './pages/signup';
import { InterviewSetupPage } from './pages/interview-setup';
import { InterviewPage } from './pages/interview';
import { InterviewCompletePage } from './pages/interview-complete';
import { NavigationProvider, useNavigation } from './shared/context/NavigationContext';

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
      case 'main':
      default:
        return <MainPage />;
    }
  };

  return renderPage();
}

function App() {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
}

export default App;