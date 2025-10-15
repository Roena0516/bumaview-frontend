import { css } from '@emotion/css';
import { pxToRem } from '../../shared/utils/pxToRem';

export const loginContainer = css`
  background: white;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
`;

export const mainContent = css`
  display: flex;
  flex-direction: column;
  height: ${pxToRem(832)};
  width: 100%;
  max-width: ${pxToRem(1280)};
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
`;

export const header = css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: ${pxToRem(20)};
  width: 100%;
  box-sizing: border-box;
`;

export const backButton = css`
  width: ${pxToRem(44)};
  height: ${pxToRem(44)};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #1a1515;

  &:hover {
    opacity: 0.7;
  }
`;

export const logo = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${pxToRem(78)};
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const logoText = css`
  font-family: 'Pretendard', sans-serif;
  font-size: ${pxToRem(30)};
  color: #1a1515;
  line-height: normal;

  .logo-bu {
    font-weight: 300;
  }

  .logo-ma {
    font-weight: 400;
    color: #c47e7e;
  }
`;

export const spacer = css`
  width: ${pxToRem(44)};
  height: ${pxToRem(44)};
`;

export const formContainer = css`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(50)};
  align-items: center;
  justify-content: center;
  width: ${pxToRem(456)};
  overflow: hidden;
`;

export const titleSection = css`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(10)};
  align-items: center;
  justify-content: flex-start;
`;

export const title = css`
  font-family: 'Pretendard', sans-serif;
  font-size: ${pxToRem(42)};
  font-weight: 400;
  color: #1a1515;
  line-height: normal;
`;

export const formFields = css`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(20)};
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
`;

export const fieldGroup = css`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(5)};
  align-items: flex-start;
  justify-content: flex-start;
  width: ${pxToRem(456)};
`;

export const fieldLabel = css`
  font-family: 'Pretendard', sans-serif;
  font-size: ${pxToRem(18)};
  font-weight: 400;
  color: #1a1515;
  line-height: normal;
  text-align: center;
`;

export const fieldInput = css`
  background: white;
  border-radius: ${pxToRem(8)};
  width: 100%;
  height: ${pxToRem(45)};
`;

export const loginButton = css`
  background: rgba(255, 203, 207, 0.8);
  border-radius: ${pxToRem(8)};
  height: ${pxToRem(45)};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: ${pxToRem(10)};
  box-sizing: border-box;
`;

export const signupSection = css`
  display: flex;
  gap: ${pxToRem(10)};
  align-items: center;
  justify-content: center;
  padding: ${pxToRem(50)} 0;
  box-sizing: border-box;
`;

export const signupLink = css`
  font-family: 'Pretendard', sans-serif;
  font-size: ${pxToRem(18)};
  font-weight: 400;
  color: #868686;
  line-height: normal;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;
