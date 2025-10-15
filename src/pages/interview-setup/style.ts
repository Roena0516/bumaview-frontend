import { css } from '@emotion/css';
import { pxToRem } from '../../shared/utils/pxToRem';

export const interviewSetupContainer = css`
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

export const mainContent = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - ${pxToRem(75)});
  padding: ${pxToRem(32)} ${pxToRem(250)};
  box-sizing: border-box;
`;

export const modal = css`
  background: white;
  border-radius: ${pxToRem(16)};
  width: ${pxToRem(780)};
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(30)};
`;

export const formFields = css`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(20)};
`;

export const fieldGroup = css`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(10)};
  padding: ${pxToRem(8)} ${pxToRem(16)};
  width: ${pxToRem(780)};
  box-sizing: border-box;
`;

export const fieldLabel = css`
  font-family: 'Pretendard', sans-serif;
  font-size: ${pxToRem(20)};
  font-weight: 400;
  color: #1a1515;
  line-height: normal;
`;

export const fieldInput = css`
  width: 100%;
  height: ${pxToRem(45)};
`;

export const buttonSection = css`
  display: flex;
  gap: ${pxToRem(12)};
  justify-content: flex-end;
  padding: ${pxToRem(8)} ${pxToRem(16)};
  width: 100%;
  box-sizing: border-box;
`;

export const cancelButton = css`
  background: rgba(197, 197, 197, 0.8);
  border-radius: ${pxToRem(8)};
  width: ${pxToRem(120)};
  height: ${pxToRem(45)};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: ${pxToRem(10)};
  box-sizing: border-box;

  &:hover {
    opacity: 0.8;
  }
`;

export const cancelButtonText = css`
  font-family: 'Pretendard', sans-serif;
  font-size: ${pxToRem(20)};
  font-weight: 500;
  color: #1a1515;
  line-height: normal;
  text-align: center;
  flex: 1;
`;

export const startButton = css`
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

  &:hover {
    opacity: 0.8;
  }
`;

export const startButtonText = css`
  font-family: 'Pretendard', sans-serif;
  font-size: ${pxToRem(20)};
  font-weight: 500;
  color: #1a1515;
  line-height: normal;
  text-align: center;
  flex: 1;
`;

export const fieldRow = css`
  display: flex;
  gap: ${pxToRem(10)};
  width: 100%;
`;

export const halfFieldGroup = css`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(10)};
  padding: ${pxToRem(8)} ${pxToRem(16)};
  width: ${pxToRem(385)};
  box-sizing: border-box;
`;

export const spacer = css`
  flex: 1;
`;
