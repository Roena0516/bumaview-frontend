import { css } from '@emotion/css';

export const loadingContainer = css`
  background: white;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const topBar = css`
  background: rgba(255, 203, 207, 0.8);
  width: 100%;
  height: 75px;
  padding: 10px 32px;
  box-sizing: border-box;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
`;

export const exitButton = css`
  flex: 1;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  font-family: 'Pretendard', sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #1a1515;
  line-height: normal;

  &:hover {
    opacity: 0.7;
  }
`;

export const timer = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 24px;
  font-weight: 500;
  color: #1a1515;
  line-height: normal;
`;

export const spacer = css`
  flex: 1;
  height: 24px;
`;

export const content = css`
  flex: 1;
  width: 100%;
  padding: 32px 250px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const loadingCard = css`
  background: white;
  width: 800px;
  padding: 16px 10px;
  box-sizing: border-box;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const loadingText = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 32px;
  font-weight: 500;
  color: #1a1515;
  line-height: normal;
`;