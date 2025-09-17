import { css } from '@emotion/css';

export const interviewSetupContainer = css`
  background: white;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
`;

export const header = css`
  background: #ffcbcf;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-sizing: border-box;
`;

export const backSection = css`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: #1a1515;

  &:hover {
    opacity: 0.7;
  }
`;

export const backText = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
`;

export const timer = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #1a1515;
  line-height: normal;
`;

export const mainContent = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 80px);
  padding: 20px;
  box-sizing: border-box;
`;

export const modal = css`
  background: white;
  border-radius: 20px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  width: 456px;
  padding: 40px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const formFields = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const fieldGroup = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const fieldLabel = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #1a1515;
  line-height: normal;
`;

export const fieldInput = css`
  width: 100%;
  height: 45px;
`;

export const buttonSection = css`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

export const cancelButton = css`
  background: #f5f5f5;
  border-radius: 8px;
  width: 120px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const cancelButtonText = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #666;
  line-height: normal;
`;

export const startButton = css`
  background: rgba(255, 203, 207, 0.8);
  border-radius: 8px;
  width: 120px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const startButtonText = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #1a1515;
  line-height: normal;
`;