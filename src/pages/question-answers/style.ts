import { css, keyframes } from '@emotion/css';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const questionAnswersContainer = css`
  background: white;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  animation: ${fadeIn} 0.2s ease-out;
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

export const questionSection = css`
  background: rgba(255, 203, 207, 0.8);
  width: 100%;
  height: 190px;
  padding: 14px 120px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const pageTitleSection = css`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 4px 0;
`;

// 뒤로가기 버튼 컨테이너 (메인 페이지 heroButton과 동일한 스타일)
export const backButtonContainer = css`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const questionInfo = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: #1a1515;
`;

export const questionTitle = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 40px;
  font-weight: 500;
  line-height: normal;
`;

export const questionDetail = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 32px;
  font-weight: 400;
  line-height: normal;
`;

export const mainContent = css`
  flex: 1;
  width: 100%;
  padding: 30px 72px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const pageTitle = css`
  flex: 1;
  font-family: 'Pretendard', sans-serif;
  font-size: 40px;
  font-weight: 500;
  color: #1a1515;
  line-height: normal;
  padding: 4px 0;
`;

export const answersContainer = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const answersSection = css`
  background: rgba(255, 203, 207, 0.8);
  border-radius: 8px;
  padding: 18px 30px 24px 30px;
  box-sizing: border-box;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const answersHeader = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
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

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const answerItem = css`
  width: 100%;
  padding: 16px 24px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.2s ease;
  opacity: 0;
  animation: ${fadeInUp} 0.5s ease-out forwards;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  }

  &:nth-child(2) { animation-delay: 0.1s; }
  &:nth-child(3) { animation-delay: 0.15s; }
  &:nth-child(4) { animation-delay: 0.2s; }
  &:nth-child(5) { animation-delay: 0.25s; }
  &:nth-child(6) { animation-delay: 0.3s; }
  &:nth-child(7) { animation-delay: 0.35s; }
  &:nth-child(8) { animation-delay: 0.4s; }
  &:nth-child(9) { animation-delay: 0.45s; }
  &:nth-child(10) { animation-delay: 0.5s; }
  &:nth-child(11) { animation-delay: 0.55s; }
  &:nth-child(12) { animation-delay: 0.6s; }
  &:nth-child(13) { animation-delay: 0.65s; }
  &:nth-child(14) { animation-delay: 0.7s; }
  &:nth-child(15) { animation-delay: 0.75s; }
  &:nth-child(16) { animation-delay: 0.8s; }
`;

export const answerContent = css`
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

export const answerDetails = css`
  display: flex;
  gap: 10px;
  align-items: center;
  font-family: 'Pretendard', sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #868686;
`;

export const answerName = css`
  width: 100px;
`;

export const answerTime = css`
  width: 70px;
`;

export const answerScore = css`
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