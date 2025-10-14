import { css } from '@emotion/css';

export const adminContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background: white;
`;

export const mainContent = css`
  display: flex;
  flex-direction: column;
  width: 1280px;
`;

// Header
export const header = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: white;
  padding: 20px 40px;
  box-sizing: border-box;
`;

export const headerInner = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const logo = css`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const logoText = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 30px;
  color: #1a1515;
  font-weight: 300;
  white-space: pre;

  .logo-bu {
    font-weight: 300;
  }

  .logo-ma {
    font-weight: 400;
    color: #c47e7e;
  }
`;

export const adminLabel = css`
  display: flex;
  gap: 35px;
  align-items: center;
`;

export const adminText = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #1a1515;
  white-space: pre;
`;

// Section (Pink banner)
export const section = css`
  display: flex;
  gap: 10px;
  align-items: center;
  background: rgba(255, 203, 207, 0.8);
  padding: 14px 120px;
  box-sizing: border-box;
  height: 190px;
  width: 100%;
`;

export const titleContainer = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  justify-content: center;
  flex: 1;
  height: 100%;
  color: #1a1515;
  white-space: pre;
`;

export const titleMain = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 40px;
  font-weight: 500;
`;

export const titleSub = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 32px;
  font-weight: 400;
`;

export const addButtonContainer = css`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
`;

export const addButton = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  background: white;
  height: 70px;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 2px 4px 8px 0px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  cursor: pointer;
  transition: transform 0.1s ease;

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const addButtonText = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 26px;
  font-weight: 500;
  color: #1a1515;
  white-space: pre;
`;

// Content
export const content = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  padding: 30px 92px;
  box-sizing: border-box;
  width: 100%;
`;

export const contentInner = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
`;

export const topSection = css`
  display: flex;
  gap: 10px;
  align-items: center;
  width: 100%;
`;

export const searchContainer = css`
  flex: 1;
  max-width: 970px;
`;

export const filterButtonContainer = css`
  width: 120px;
`;

// Questions section
export const questionsContainer = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  background: rgba(255, 203, 207, 0.8);
  padding: 18px 30px 24px;
  border-radius: 8px;
  box-sizing: border-box;
`;

export const questionsTop = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 24px;
  box-sizing: border-box;
`;

export const questionsTopContent = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #868686;
  text-align: center;
  flex: 1;
`;

export const questionsTopDetail = css`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: flex-end;
  font-family: 'Pretendard', sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #868686;
`;

export const questionsTopDetailItem = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const questionsTopCompany = css`
  width: 100px;
`;

export const questionsTopField = css`
  width: 70px;
`;

export const questionsTopYear = css`
  width: 48px;
`;

// Question item
export const questionItem = css`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
  background: white;
  padding: 16px 24px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
  width: 1040px;
  box-sizing: border-box;
  cursor: pointer;
  transition: transform 0.1s ease;

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const questionContent = css`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const questionText = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #1a1515;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const questionDetail = css`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: flex-end;
  font-family: 'Pretendard', sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #868686;
`;

export const questionCompany = css`
  width: 100px;
`;

export const questionField = css`
  width: 70px;
`;

export const questionYear = css`
  width: 48px;
  text-align: right;
`;
