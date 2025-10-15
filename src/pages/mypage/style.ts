import { css } from '@emotion/css';

export const myPageContainer = css`
  background: white;
  width: 100vw;
  min-height: 100vh;
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

export const nickname = css`
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const heroSection = css`
  background: rgba(255, 203, 207, 0.8);
  width: 100%;
  height: 190px;
  padding: 14px 120px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const heroTitle = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  justify-content: center;
  color: #1a1515;
`;

export const heroMainTitle = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 48px;
  font-weight: 500;
  line-height: normal;
`;

export const logoutButton = css`
  background: white;
  width: 180px;
  height: 70px;
  border: none;
  border-radius: 8px;
  padding: 10px;
  box-sizing: border-box;
  font-family: 'Pretendard', sans-serif;
  font-size: 26px;
  font-weight: 500;
  color: #1a1515;
  cursor: pointer;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.25);

  &:hover {
    opacity: 0.9;
  }
`;

export const content = css`
  width: 100%;
  padding: 48px 72px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const infoSection = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
`;

export const infoCard = css`
  background: #ffe8e8;
  border-radius: 8px;
  padding: 18px 30px 24px 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
`;

export const infoRow = css`
  width: 620px;
  padding: 8px 16px;
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  gap: 28px;
  align-items: center;
  justify-content: flex-start;
`;

export const infoLabel = css`
  width: 120px;
  font-family: 'Pretendard', sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #1a1515;
  line-height: normal;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const infoValue = css`
  flex: 1;
  font-family: 'Pretendard', sans-serif;
  font-size: 22px;
  font-weight: 600;
  color: #1a1515;
  line-height: normal;
  text-align: right;
`;

export const sectionTitle = css`
  width: 100%;
  padding: 4px 0;
  box-sizing: border-box;
  font-family: 'Pretendard', sans-serif;
  font-size: 40px;
  font-weight: 500;
  color: #1a1515;
  line-height: normal;
`;

export const answersSection = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
`;

export const answersContainer = css`
  background: #ffe8e8;
  width: 100%;
  min-height: 300px;
  border-radius: 8px;
  padding: 18px 30px 24px 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const answersHeader = css`
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

export const timeHeader = css`
  width: 70px;
`;

export const scoreHeader = css`
  width: 48px;
  text-align: right;
`;

export const answerItem = css`
  width: 100%;
  height: 72px;
  perspective: 1000px;
  cursor: pointer;
`;

export const cardInner = css`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
`;

export const cardInnerFlipped = css`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  transform: rotateX(180deg);
`;

export const cardFront = css`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  transition: all 0.2s ease;

  ${answerItem}:hover & {
    transform: translateY(-1px);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  }
`;

export const cardBack = css`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  box-sizing: border-box;
  transform: rotateX(180deg);
  overflow: hidden;
`;

export const detailButton = css`
  flex: 1;
  height: 100%;
  background: #4a90e2;
  border: none;
  border-radius: 0;
  font-family: 'Pretendard', sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #357abd;
  }

  &:active {
    background: #2d6399;
  }
`;

export const deleteAnswerButton = css`
  flex: 1;
  height: 100%;
  background: #ff6b6b;
  border: none;
  border-radius: 0;
  font-family: 'Pretendard', sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #ff5252;
  }

  &:active {
    background: #e63939;
  }
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