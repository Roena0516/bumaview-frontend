import { css } from '@emotion/css';

export const answerDetailContainer = css`
  background: white;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`;

export const header = css`
  background: white;
  width: 100%;
  padding: 20px 40px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const logo = css`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
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

export const authSection = css`
  display: flex;
  gap: 35px;
  align-items: center;
  font-family: 'Pretendard', sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #1a1515;
`;

export const authLink = css`
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const content = css`
  flex: 1;
  width: 100%;
  padding: 32px 250px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  justify-content: flex-start;
  overflow-y: auto;
  position: relative;
`;

export const backButtonContainer = css`
  position: absolute;
  top: 32px;
  right: 250px;
`;

export const answerSection = css`
  width: 780px;
  display: flex;
  flex-direction: column;
  gap: 51px;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const answerHeader = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: center;
  justify-content: center;
  font-family: 'Pretendard', sans-serif;
  color: #868686;
`;

export const userName = css`
  font-size: 20px;
  font-weight: 400;
  line-height: normal;
`;

export const time = css`
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
`;

export const questionAndAnswer = css`
  width: 100%;
  padding: 4px 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const questionSection = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  justify-content: center;
`;

export const questionTitle = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 36px;
  font-weight: 500;
  color: #1a1515;
  line-height: normal;
`;

export const questionDetail = css`
  width: 100%;
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
  font-family: 'Pretendard', sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #868686;
  line-height: normal;
`;

export const answerBox = css`
  background: white;
  width: 100%;
  height: 300px;
  border: 1px solid #c47e7e;
  border-radius: 8px;
  padding: 16px 20px;
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const answerContent = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #1a1515;
  line-height: normal;
  white-space: pre-line;
`;

export const evaluationSection = css`
  background: rgba(255, 203, 207, 0.8);
  width: 100%;
  padding: 50px 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  justify-content: flex-start;
`;

export const evaluationInput = css`
  width: 780px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const starsContainer = css`
  width: 780px;
  height: 34px;
  display: flex;
  gap: 2px;
  align-items: center;
  justify-content: flex-start;
`;

export const starIcon = css`
  width: 34px;
  height: 34px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const inputContainer = css`
  width: 780px;
  padding: 0 10px;
  box-sizing: border-box;
`;

export const inputField = css`
  background: white;
  width: 100%;
  height: 41px;
  border: 1px solid #c47e7e;
  border-radius: 8px;
  padding: 10px 20px;
  box-sizing: border-box;
  font-family: 'Pretendard', sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #1a1515;

  &::placeholder {
    color: rgba(0, 0, 0, 0.25);
  }

  &:focus {
    outline: none;
    border-color: #c47e7e;
  }
`;

export const submitButton = css`
  background: rgba(255, 255, 255, 0.8);
  width: 120px;
  height: 45px;
  border: none;
  border-radius: 8px;
  padding: 10px;
  box-sizing: border-box;
  font-family: 'Pretendard', sans-serif;
  font-size: 20px;
  font-weight: 500;
  color: #1a1515;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const evaluationsContainer = css`
  background: rgba(255, 255, 255, 0.8);
  width: 780px;
  min-height: 300px;
  border-radius: 8px;
  padding: 18px 30px 24px 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const evaluationsHeader = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  box-sizing: border-box;
  font-family: 'Pretendard', sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #868686;
`;

export const contentHeader = css`
  flex: 1;
  text-align: center;
`;

export const detailsHeader = css`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const nameHeader = css`
  width: 100px;
`;

export const timeHeader = css`
  width: 70px;
`;

export const scoreHeader = css`
  width: 48px;
  text-align: right;
`;

export const evaluationItem = css`
  width: 100%;
  padding: 16px 24px;
  box-sizing: border-box;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
`;

export const evaluationContent = css`
  flex: 1;
  font-family: 'Pretendard', sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #1a1515;
  line-height: normal;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const evaluationDetails = css`
  display: flex;
  gap: 10px;
  align-items: center;
  font-family: 'Pretendard', sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #868686;
`;

export const evaluationName = css`
  width: 100px;
`;

export const evaluationTime = css`
  width: 70px;
`;

export const evaluationScore = css`
  width: 48px;
  text-align: right;
`;

// 점수별 색상 정의
export const getScoreColor = (score: number): string => {
  if (score >= 0 && score < 1) return '#f7a8a8'; // 0점대
  if (score >= 1 && score < 2) return '#f9bfa8'; // 1점대
  if (score >= 2 && score < 3) return '#ffdead'; // 2점대
  if (score >= 3 && score < 4) return '#fcf8b3'; // 3점대
  if (score >= 4 && score <= 5) return '#faff95'; // 4점대
  return '#faff95'; // 기본값
};