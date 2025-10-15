import { useEffect } from 'react';
import { css, keyframes } from '@emotion/css';

interface ToastProps {
  message: string;
  type?: 'error' | 'success' | 'info';
  onClose: () => void;
  duration?: number;
  isClosing?: boolean;
  stackIndex?: number;
}

const slideUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const toastStyle = css`
  background: white;
  border-radius: 8px;
  padding: 16px 20px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  font-family: 'Pretendard', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #1a1515;
  max-width: 350px;
  animation: ${slideUp} 0.3s ease-out;

  &.closing {
    animation: ${fadeOut} 0.2s ease-out;
  }
`;

const errorStyle = css`
  border-left: 4px solid #ff4444;
`;

const successStyle = css`
  border-left: 4px solid #44ff44;
`;

const infoStyle = css`
  border-left: 4px solid rgba(255, 203, 207, 0.8);
`;

export const Toast = ({
  message,
  type = 'info',
  onClose,
  duration = 3000,
  isClosing = false,
}: ToastProps) => {
  useEffect(() => {
    if (isClosing) return;

    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [onClose, duration, isClosing]);

  const getTypeStyle = () => {
    switch (type) {
      case 'error':
        return errorStyle;
      case 'success':
        return successStyle;
      default:
        return infoStyle;
    }
  };

  return (
    <div className={`${toastStyle} ${getTypeStyle()} ${isClosing ? 'closing' : ''}`}>
      {message}
    </div>
  );
};