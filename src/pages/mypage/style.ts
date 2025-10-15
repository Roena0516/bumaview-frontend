import { css } from '@emotion/css';
import { pxToRem } from '../../shared/utils/pxToRem';

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

export const nickname = css`
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const heroSection = css`
  background: rgba(255, 203, 207, 0.8);
  width: 100%;
  height: ${pxToRem(190)};
  padding: ${pxToRem(14)} ${pxToRem(120)};
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const heroTitle = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(10)};
  align-items: flex-start;
  justify-content: center;
  color: #1a1515;
`;

export const heroMainTitle = css`
  font-family: 'Pretendard', sans-serif;
  font-size: ${pxToRem(48)};
  font-weight: 500;
  line-height: normal;
`;

export const logoutButton = css`
  background: white;
  width: ${pxToRem(180)};
  height: ${pxToRem(70)};
  border: none;
  border-radius: ${pxToRem(8)};
  padding: ${pxToRem(10)};
  box-sizing: border-box;
  font-family: 'Pretendard', sans-serif;
  font-size: ${pxToRem(26)};
  font-weight: 500;
  color: #1a1515;
  cursor: pointer;
  box-shadow: ${pxToRem(2)} ${pxToRem(4)} ${pxToRem(8)} rgba(0, 0, 0, 0.25);

  &:hover {
    opacity: 0.9;
  }
`;

export const content = css`
  width: 100%;
  padding: ${pxToRem(48)} ${pxToRem(72)};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(24)};
`;

export const infoSection = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(15)};
  align-items: center;
`;

export const infoCard = css`
  background: #ffe8e8;
  border-radius: ${pxToRem(8)};
  padding: ${pxToRem(18)} ${pxToRem(30)} ${pxToRem(24)} ${pxToRem(30)};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(12)};
  align-items: center;
`;

export const infoRow = css`
  width: ${pxToRem(620)};
  padding: ${pxToRem(8)} ${pxToRem(16)};
  box-sizing: border-box;
  border-radius: ${pxToRem(8)};
  display: flex;
  gap: ${pxToRem(28)};
  align-items: center;
  justify-content: flex-start;
`;

export const infoLabel = css`
  width: ${pxToRem(120)};
  font-family: 'Pretendard', sans-serif;
  font-size: ${pxToRem(20)};
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
  font-size: ${pxToRem(22)};
  font-weight: 600;
  color: #1a1515;
  line-height: normal;
  text-align: right;
`;

export const sectionTitle = css`
  width: 100%;
  padding: ${pxToRem(4)} 0;
  box-sizing: border-box;
  font-family: 'Pretendard', sans-serif;
  font-size: ${pxToRem(40)};
  font-weight: 500;
  color: #1a1515;
  line-height: normal;
`;

export const answersSection = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(15)};
  align-items: center;
`;

export const answersContainer = css`
  background: #ffe8e8;
  width: 100%;
  min-height: ${pxToRem(300)};
  border-radius: ${pxToRem(8)};
  padding: ${pxToRem(18)} ${pxToRem(30)} ${pxToRem(24)} ${pxToRem(30)};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(12)};
`;

export const answersHeader = css`
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

export const timeHeader = css`
  width: ${pxToRem(70)};
`;

export const scoreHeader = css`
  width: ${pxToRem(48)};
  text-align: right;
`;

export const answerItem = css`
  width: 100%;
  height: ${pxToRem(72)};
  perspective: ${pxToRem(1000)};
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
  gap: ${pxToRem(16)};
  align-items: center;
  justify-content: space-between;
  padding: ${pxToRem(16)} ${pxToRem(24)};
  border-radius: ${pxToRem(8)};
  box-shadow: ${pxToRem(0)} ${pxToRem(2)} ${pxToRem(4)} rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  transition: all 0.2s ease;

  ${answerItem}:hover & {
    transform: translateY(${pxToRem(-1)});
    box-shadow: ${pxToRem(0)} ${pxToRem(4)} ${pxToRem(8)} rgba(0, 0, 0, 0.15);
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
  border-radius: ${pxToRem(8)};
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
  font-size: ${pxToRem(18)};
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
  font-size: ${pxToRem(18)};
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
  font-size: ${pxToRem(20)};
  font-weight: 400;
  color: #1a1515;
  line-height: normal;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const answerDetails = css`
  display: flex;
  gap: ${pxToRem(10)};
  align-items: center;
  font-family: 'Pretendard', sans-serif;
  font-size: ${pxToRem(20)};
  font-weight: 400;
  color: #868686;
`;

export const answerTime = css`
  width: ${pxToRem(70)};
`;

export const answerScore = css`
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
