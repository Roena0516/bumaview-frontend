import { css } from '@emotion/css';

export const signupContainer = css`
  background: white;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
`;

export const mainContent = css`
  display: flex;
  flex-direction: column;
  height: 832px;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
`;

export const header = css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
`;

export const backButton = css`
  width: 44px;
  height: 44px;
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
  width: 78px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const logoText = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 30px;
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
  width: 44px;
  height: 44px;
`;

export const formContainer = css`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  justify-content: center;
  width: 456px;
  overflow: hidden;
`;

export const titleSection = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;
`;

export const title = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 42px;
  font-weight: 400;
  color: #1a1515;
  line-height: normal;
`;

export const formFields = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
`;

export const fieldGroup = css`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: flex-start;
  justify-content: flex-start;
  width: 456px;
`;

export const fieldLabel = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #1a1515;
  line-height: normal;
  text-align: center;
`;

export const fieldInput = css`
  background: white;
  border-radius: 8px;
  width: 100%;
  height: 45px;
`;

export const passwordFields = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
`;

export const passwordInput = css`
  background: white;
  border-radius: 8px;
  width: 456px;
  height: 41px;
`;

export const signupButton = css`
  background: rgba(255, 203, 207, 0.8);
  border-radius: 8px;
  height: 45px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 10px;
  box-sizing: border-box;
`;

export const loginSection = css`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
  box-sizing: border-box;
`;

export const loginLink = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #868686;
  line-height: normal;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;