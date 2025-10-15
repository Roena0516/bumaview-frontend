import { css, keyframes } from '@emotion/css';
import { pxToRem } from '../utils/pxToRem';

interface ConfirmModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
  confirmText?: string;
  cancelText?: string;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

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

const overlayStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: ${fadeIn} 0.2s ease-out;
`;

const modalStyle = css`
  background: white;
  border-radius: ${pxToRem(16)};
  width: ${pxToRem(400)};
  max-width: 90vw;
  padding: ${pxToRem(30)} ${pxToRem(20)} ${pxToRem(20)};
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(20)};
  box-sizing: border-box;
  animation: ${slideUp} 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;

const titleStyle = css`
  font-family: 'Pretendard', sans-serif;
  font-size: ${pxToRem(20)};
  font-weight: 500;
  color: #1a1515;
  text-align: center;
  line-height: normal;
`;

const messageStyle = css`
  font-family: 'Pretendard', sans-serif;
  font-size: ${pxToRem(16)};
  font-weight: 400;
  color: #666;
  text-align: center;
  line-height: 1.4;
`;

const buttonsStyle = css`
  display: flex;
  gap: ${pxToRem(12)};
  align-items: center;
  justify-content: center;
  margin-top: ${pxToRem(10)};
`;

const buttonBaseStyle = css`
  border: none;
  border-radius: ${pxToRem(8)};
  height: ${pxToRem(42)};
  width: ${pxToRem(100)};
  font-family: 'Pretendard', sans-serif;
  font-size: ${pxToRem(16)};
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.9;
  }
`;

const cancelButtonStyle = css`
  ${buttonBaseStyle}
  background: rgba(197, 197, 197, 0.8);
  color: #1a1515;
`;

const confirmButtonStyle = css`
  ${buttonBaseStyle}
  background: rgba(255, 203, 207, 0.8);
  color: #1a1515;
`;

export const ConfirmModal = ({
  isOpen,
  title,
  message,
  onConfirm,
  onCancel,
  confirmText = '예',
  cancelText = '아니오'
}: ConfirmModalProps) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onCancel();
    }
  };

  return (
    <div className={overlayStyle} onClick={handleOverlayClick}>
      <div className={modalStyle}>
        <div className={titleStyle}>{title}</div>
        <div className={messageStyle}>{message}</div>
        <div className={buttonsStyle}>
          <button className={cancelButtonStyle} onClick={onCancel}>
            {cancelText}
          </button>
          <button className={confirmButtonStyle} onClick={onConfirm}>
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};