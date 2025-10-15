import { css } from '@emotion/css';
import { pxToRem } from '../../shared/utils/pxToRem';

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
  padding: ${pxToRem(20)} ${pxToRem(40)};
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

export const authSection = css`
  display: flex;
  gap: ${pxToRem(35)};
  align-items: center;
  font-family: 'Pretendard', sans-serif;
  font-size: ${pxToRem(20)};
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
  padding: ${pxToRem(32)} ${pxToRem(250)};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(50)};
  align-items: center;
  justify-content: flex-start;
  overflow-y: auto;
  position: relative;
`;

export const backButtonContainer = css`
  position: absolute;
  top: ${pxToRem(32)};
  right: ${pxToRem(250)};
`;

export const answerSection = css`
  width: ${pxToRem(780)};
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(51)};
  align-items: flex-start;
  justify-content: flex-start;
`;

export const answerHeader = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(2)};
  align-items: center;
  justify-content: center;
  font-family: 'Pretendard', sans-serif;
  color: #868686;
`;

export const userName = css`
  font-size: ${pxToRem(20)};
  font-weight: 400;
  line-height: normal;
`;

export const time = css`
  font-size: ${pxToRem(16)};
  font-weight: 400;
  line-height: normal;
`;

export const questionAndAnswer = css`
  width: 100%;
  padding: ${pxToRem(4)} ${pxToRem(10)};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(12)};
`;

export const questionSection = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(4)};
  align-items: center;
  justify-content: center;
`;

export const questionTitle = css`
  font-family: 'Pretendard', sans-serif;
  font-size: ${pxToRem(36)};
  font-weight: 500;
  color: #1a1515;
  line-height: normal;
`;

export const questionDetail = css`
  width: 100%;
  display: flex;
  gap: ${pxToRem(16)};
  align-items: center;
  justify-content: center;
  font-family: 'Pretendard', sans-serif;
  font-size: ${pxToRem(18)};
  font-weight: 400;
  color: #868686;
  line-height: normal;
`;

export const answerBox = css`
  background: white;
  width: 100%;
  height: ${pxToRem(300)};
  border: ${pxToRem(1)} solid #c47e7e;
  border-radius: ${pxToRem(8)};
  padding: ${pxToRem(16)} ${pxToRem(20)};
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const answerContent = css`
  font-family: 'Pretendard', sans-serif;
  font-size: ${pxToRem(18)};
  font-weight: 400;
  color: #1a1515;
  line-height: normal;
  white-space: pre-line;
`;

export const evaluationSection = css`
  background: rgba(255, 203, 207, 0.8);
  width: 100%;
  padding: ${pxToRem(50)} 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(50)};
  align-items: center;
  justify-content: flex-start;
`;

export const evaluationInput = css`
  width: ${pxToRem(780)};
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(10)};
`;

export const starsContainer = css`
  width: ${pxToRem(780)};
  height: ${pxToRem(34)};
  display: flex;
  gap: ${pxToRem(2)};
  align-items: center;
  justify-content: flex-start;
`;

export const starIcon = css`
  width: ${pxToRem(34)};
  height: ${pxToRem(34)};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const inputContainer = css`
  width: ${pxToRem(780)};
  padding: 0 ${pxToRem(10)};
  box-sizing: border-box;
`;

export const inputField = css`
  background: white;
  width: 100%;
  height: ${pxToRem(41)};
  border: ${pxToRem(1)} solid #c47e7e;
  border-radius: ${pxToRem(8)};
  padding: ${pxToRem(10)} ${pxToRem(20)};
  box-sizing: border-box;
  font-family: 'Pretendard', sans-serif;
  font-size: ${pxToRem(18)};
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
  width: ${pxToRem(120)};
  height: ${pxToRem(45)};
  border: none;
  border-radius: ${pxToRem(8)};
  padding: ${pxToRem(10)};
  box-sizing: border-box;
  font-family: 'Pretendard', sans-serif;
  font-size: ${pxToRem(20)};
  font-weight: 500;
  color: #1a1515;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const evaluationsContainer = css`
  background: rgba(255, 255, 255, 0.8);
  width: ${pxToRem(780)};
  min-height: ${pxToRem(300)};
  border-radius: ${pxToRem(8)};
  padding: ${pxToRem(18)} ${pxToRem(30)} ${pxToRem(24)} ${pxToRem(30)};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(12)};
`;

export const evaluationsHeader = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${pxToRem(24)};
  box-sizing: border-box;
  font-family: 'Pretendard', sans-serif;
  font-size: ${pxToRem(20)};
  font-weight: 400;
  color: #868686;
`;

export const contentHeader = css`
  flex: 1;
  text-align: center;
`;

export const detailsHeader = css`
  display: flex;
  gap: ${pxToRem(10)};
  align-items: center;
`;

export const nameHeader = css`
  width: ${pxToRem(100)};
`;

export const timeHeader = css`
  width: ${pxToRem(70)};
`;

export const scoreHeader = css`
  width: ${pxToRem(48)};
  text-align: right;
`;

export const evaluationItem = css`
  width: 100%;
  padding: ${pxToRem(16)} ${pxToRem(24)};
  box-sizing: border-box;
  border-radius: ${pxToRem(8)};
  box-shadow: ${pxToRem(0)} ${pxToRem(2)} ${pxToRem(4)} rgba(0, 0, 0, 0.1);
  display: flex;
  gap: ${pxToRem(16)};
  align-items: center;
  justify-content: space-between;
`;

export const evaluationContent = css`
  flex: 1;
  font-family: 'Pretendard', sans-serif;
  font-size: ${pxToRem(20)};
  font-weight: 400;
  color: #1a1515;
  line-height: normal;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const evaluationDetails = css`
  display: flex;
  gap: ${pxToRem(10)};
  align-items: center;
  font-family: 'Pretendard', sans-serif;
  font-size: ${pxToRem(20)};
  font-weight: 400;
  color: #868686;
`;

export const evaluationName = css`
  width: ${pxToRem(100)};
`;

export const evaluationTime = css`
  width: ${pxToRem(70)};
`;

export const evaluationScore = css`
  width: ${pxToRem(48)};
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
