import { css } from '@emotion/css';
import { pxToRem } from '../../shared/utils/pxToRem';

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
  height: ${pxToRem(75)};
  padding: ${pxToRem(10)} ${pxToRem(32)};
  box-sizing: border-box;
  display: flex;
  gap: ${pxToRem(10)};
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
`;

export const exitButton = css`
  flex: 1;
  display: flex;
  gap: ${pxToRem(10)};
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  font-family: 'Pretendard', sans-serif;
  font-size: ${pxToRem(20)};
  font-weight: 400;
  color: #1a1515;
  line-height: normal;

  &:hover {
    opacity: 0.7;
  }
`;

export const timer = css`
  font-family: 'Pretendard', sans-serif;
  font-size: ${pxToRem(24)};
  font-weight: 500;
  color: #1a1515;
  line-height: normal;
`;

export const spacer = css`
  flex: 1;
  height: ${pxToRem(24)};
`;

export const content = css`
  flex: 1;
  width: 100%;
  padding: ${pxToRem(32)} ${pxToRem(250)};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(6)};
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const loadingCard = css`
  background: white;
  width: ${pxToRem(800)};
  padding: ${pxToRem(16)} ${pxToRem(10)};
  box-sizing: border-box;
  border-radius: ${pxToRem(16)};
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(30)};
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const loadingText = css`
  font-family: 'Pretendard', sans-serif;
  font-size: ${pxToRem(32)};
  font-weight: 500;
  color: #1a1515;
  line-height: normal;
`;
