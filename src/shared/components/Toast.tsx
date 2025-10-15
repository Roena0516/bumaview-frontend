import { useEffect } from 'react';
import { css, keyframes } from '@emotion/css';
import { pxToRem } from '../utils/pxToRem';

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
  border-radius: ${pxToRem(8)};
  padding: ${pxToRem(16)} ${pxToRem(20)};
  box-shadow: ${pxToRem(0)} ${pxToRem(4)} ${pxToRem(12)} rgba(0, 0, 0, 0.15);
  font-family: 'Pretendard', sans-serif;
  font-size: ${pxToRem(16)};
  font-weight: 400;
  color: #1a1515;
  max-width: ${pxToRem(350)};
  animation: ${slideUp} 0.3s ease-out;

  &.closing {
    animation: ${fadeOut} 0.2s ease-out;
  }
`;

const errorStyle = css`
  border-left: ${pxToRem(4)} solid #ff4444;
`;

const successStyle = css`
  border-left: ${pxToRem(4)} solid #44ff44;
`;

const infoStyle = css`
  border-left: ${pxToRem(4)} solid rgba(255, 203, 207, 0.8);
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