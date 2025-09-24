import { css } from '@emotion/css';

export const interviewSetupContainer = css`
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

export const mainContent = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 75px);
  padding: 32px 250px;
  box-sizing: border-box;
`;

export const modal = css`
  background: white;
  border-radius: 16px;
  width: 780px;
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
  gap: 10px;
  padding: 8px 16px;
  width: 780px;
  box-sizing: border-box;
`;

export const fieldLabel = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 20px;
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
  gap: 12px;
  justify-content: flex-end;
  padding: 8px 16px;
  width: 100%;
  box-sizing: border-box;
`;

export const cancelButton = css`
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

  &:hover {
    opacity: 0.8;
  }
`;

export const cancelButtonText = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 20px;
  font-weight: 500;
  color: #1a1515;
  line-height: normal;
  text-align: center;
  flex: 1;
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
  padding: 10px;
  box-sizing: border-box;

  &:hover {
    opacity: 0.8;
  }
`;

export const startButtonText = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 20px;
  font-weight: 500;
  color: #1a1515;
  line-height: normal;
  text-align: center;
  flex: 1;
`;

export const fieldRow = css`
  display: flex;
  gap: 10px;
  width: 100%;
`;

export const halfFieldGroup = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 8px 16px;
  width: 385px;
  box-sizing: border-box;
`;

export const spacer = css`
  flex: 1;
`;