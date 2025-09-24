import { css, keyframes } from '@emotion/css';

export const interviewContainer = css`
  background: white;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
`;

export const header = css`
  background: rgba(255, 203, 207, 0.8);
  width: 100%;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 32px;
  box-sizing: border-box;
`;

export const backSection = css`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: #1a1515;
  flex: 1;
  justify-content: flex-start;

  &:hover {
    opacity: 0.7;
  }
`;

export const backText = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: normal;
`;

export const timer = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 24px;
  font-weight: 500;
  color: #1a1515;
  line-height: normal;
  flex: 1;
  text-align: center;
`;

export const spacer = css`
  flex: 1;
`;

export const mainContent = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 75px);
  padding: 32px 250px;
  box-sizing: border-box;
  gap: 6px;
`;

export const questionHeader = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 343px;
  width: 100%;
  box-sizing: border-box;
`;

export const questionCount = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #868686;
  line-height: normal;
`;

const slideOutLeft = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(-50%);
    opacity: 0;
  }
`;

const slideInRight = keyframes`
  from {
    transform: translateX(50%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const questionSection = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 10px;
  flex: 1;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
`;

export const questionContentWrapper = css`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const questionAnswerContainer = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;

  &.sliding-out {
    animation: ${slideOutLeft} 0.3s ease-in-out;
  }

  &.sliding-in {
    animation: ${slideInRight} 0.3s ease-in-out;
  }
`;

export const questionArea = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 100%;
`;

export const questionText = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 36px;
  font-weight: 500;
  color: #1a1515;
  line-height: normal;
  text-align: center;
`;

export const questionDetail = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  font-family: 'Pretendard', sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #868686;
  line-height: normal;
`;

export const answerArea = css`
  background: white;
  border: 1px solid #c47e7e;
  border-radius: 8px;
  flex: 1;
  width: 100%;
  padding: 16px 20px;
  box-sizing: border-box;
  font-family: 'Pretendard', sans-serif;
  font-size: 18px;
  color: #1a1515;
  resize: none;
  outline: none;

  &::placeholder {
    color: rgba(0, 0, 0, 0.25);
  }
`;

export const footer = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
`;

export const skipButton = css`
  background: rgba(197, 197, 197, 0.8);
  border-radius: 8px;
  width: 120px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 10px;
  box-sizing: border-box;
  border: none;

  &:hover {
    opacity: 0.8;
  }
`;

export const confirmButton = css`
  background: rgba(255, 203, 207, 0.8);
  border-radius: 8px;
  width: 120px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 10px;
  box-sizing: border-box;
  border: none;

  &:hover {
    opacity: 0.8;
  }
`;

export const skipButtonText = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 20px;
  font-weight: 500;
  color: #1a1515;
  line-height: normal;
  text-align: center;
`;

export const confirmButtonText = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 20px;
  font-weight: 500;
  color: #1a1515;
  line-height: normal;
  text-align: center;
`;

export const successOverlay = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  pointer-events: none;
`;

export const successCheck = css`
  background: #8fff69;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 72px;
  color: white;
  font-weight: 500;
  font-family: 'Pretendard', sans-serif;
  animation: checkAppear 0.3s ease-out;

  @keyframes checkAppear {
    0% {
      opacity: 0;
      transform: scale(0.3);
    }
    60% {
      opacity: 1;
      transform: scale(1.1);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const skipMark = css`
  background: #ff6969;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  color: white;
  font-weight: 500;
  font-family: 'Pretendard', sans-serif;
  animation: skipAppear 0.3s ease-out;

  @keyframes skipAppear {
    0% {
      opacity: 0;
      transform: scale(0.3);
    }
    60% {
      opacity: 1;
      transform: scale(1.1);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;