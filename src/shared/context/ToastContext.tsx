import { createContext, useContext, useState, useCallback } from 'react';
import { Toast } from '../components/Toast';

interface ToastMessage {
  id: string;
  message: string;
  type?: 'error' | 'success' | 'info';
  duration?: number;
  isClosing?: boolean;
}

interface ToastContextType {
  showToast: (message: string, type?: 'error' | 'success' | 'info', duration?: number) => void;
}

const ToastContext = createContext<ToastContextType | null>(null);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

interface ToastProviderProps {
  children: React.ReactNode;
}

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const showToast = useCallback((message: string, type: 'error' | 'success' | 'info' = 'info', duration: number = 3000) => {
    const id = Date.now().toString();
    const newToast: ToastMessage = {
      id,
      message,
      type,
      duration
    };

    setToasts(prev => [...prev, newToast]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts(prev =>
      prev.map(toast =>
        toast.id === id ? { ...toast, isClosing: true } : toast
      )
    );

    // 애니메이션 시간 후 실제 제거
    setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    }, 200);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        zIndex: 2000
      }}>
        {toasts.map((toast, index) => (
          <Toast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            duration={toast.duration}
            isClosing={toast.isClosing}
            stackIndex={index}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
};