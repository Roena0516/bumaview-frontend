import { css } from '@emotion/css';
import { pxToRem } from '../../shared/utils/pxToRem';

export const interviewCompleteContainer = css`
  background: white;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
`;

export const header = css`
  background: rgba(255, 203, 207, 0.8);
  width: 100%;
  height: ${pxToRem(75)};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${pxToRem(10)} ${pxToRem(32)};
  box-sizing: border-box;
`;

export const backSection = css`
  display: flex;
  align-items: center;
  gap: ${pxToRem(8)};
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
  font-size: ${pxToRem(20)};
  font-weight: 400;
  line-height: normal;
`;

export const timer = css`
  font-family: 'Pretendard', sans-serif;
  font-size: ${pxToRem(24)};
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
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - ${pxToRem(75)});
  padding: ${pxToRem(32)} ${pxToRem(250)};
  box-sizing: border-box;
`;

export const completionCard = css`
  background: white;
  border-radius: ${pxToRem(16)};
  width: ${pxToRem(800)};
  padding: ${pxToRem(16)} ${pxToRem(10)};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${pxToRem(30)};
`;

export const questionCount = css`
  font-family: 'Pretendard', sans-serif;
  font-size: ${pxToRem(20)};
  font-weight: 400;
  color: #868686;
  line-height: normal;
`;

export const completionTitle = css`
  font-family: 'Pretendard', sans-serif;
  font-size: ${pxToRem(32)};
  font-weight: 500;
  color: #1a1515;
  line-height: normal;
`;

export const footer = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${pxToRem(10)};
  width: 100%;
`;

export const completeButton = css`
  background: rgba(255, 203, 207, 0.8);
  border-radius: ${pxToRem(8)};
  width: ${pxToRem(120)};
  height: ${pxToRem(45)};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: ${pxToRem(10)};
  box-sizing: border-box;
  border: none;

  &:hover {
    opacity: 0.8;
  }
`;

export const completeButtonText = css`
  font-family: 'Pretendard', sans-serif;
  font-size: ${pxToRem(20)};
  font-weight: 500;
  color: #1a1515;
  line-height: normal;
  text-align: center;
`;
