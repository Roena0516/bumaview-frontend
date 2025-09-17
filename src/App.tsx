import { MainPage } from './pages/main';
import { LoginPage } from './pages/login';
import { NavigationProvider, useNavigation } from './shared/context/NavigationContext';

function AppContent() {
  const { currentPage } = useNavigation();

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <LoginPage />;
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