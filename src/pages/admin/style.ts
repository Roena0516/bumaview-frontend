import { css, keyframes } from '@emotion/css';
import { pxToRem } from '../../shared/utils/pxToRem';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const adminContainer = css`
  background: white;
  width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
  animation: ${fadeIn} 0.2s ease-out;
`;

export const mainContent = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  align-items: center;
  justify-content: flex-start;
`;

export const header = css`
  background: white;
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(10)};
  padding: ${pxToRem(20)} ${pxToRem(40)};
  width: 100%;
  box-sizing: border-box;
`;

export const headerContent = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const logo = css`
  display: flex;
  gap: ${pxToRem(10)};
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

export const navigation = css`
  display: flex;
  gap: ${pxToRem(35)};
  align-items: center;
  font-family: 'Pretendard', sans-serif;
  font-size: ${pxToRem(20)};
  color: #1a1515;
  font-weight: 400;
  cursor: pointer;

  > div:hover {
    opacity: 0.7;
  }
`;

export const heroSection = css`
  background: rgba(255, 203, 207, 0.8);
  display: flex;
  gap: ${pxToRem(10)};
  height: ${pxToRem(190)};
  padding: ${pxToRem(14)} ${pxToRem(120)};
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  box-sizing: border-box;
`;

export const heroTitle = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(10)};
  height: 100%;
  align-items: flex-start;
  justify-content: center;
  color: #1a1515;
`;

export const heroMainTitle = css`
  font-family: 'Pretendard', sans-serif;
  font-size: ${pxToRem(40)};
  font-weight: 500;
  line-height: normal;
`;

export const heroSubTitle = css`
  font-family: 'Pretendard', sans-serif;
  font-size: ${pxToRem(32)};
  font-weight: 400;
  line-height: normal;
`;

export const heroButton = css`
  display: flex;
  gap: ${pxToRem(10)};
  height: 100%;
  align-items: center;
  justify-content: flex-end;
`;

export const contentSection = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(16)};
  padding: ${pxToRem(30)} ${pxToRem(72)};
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
`;

export const contentTitle = css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: ${pxToRem(4)} 0;
  width: 100%;
`;

export const contentTitleText = css`
  font-family: 'Pretendard', sans-serif;
  font-size: ${pxToRem(40)};
  font-weight: 500;
  color: #1a1515;
  line-height: normal;
`;

export const searchArea = css`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(15)};
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

export const searchTop = css`
  display: flex;
  gap: ${pxToRem(10)};
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

export const searchInputContainer = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(6)};
  padding: ${pxToRem(8)} 0;
  min-width: 0;
`;

export const searchInput = css`
  background: white;
  border-radius: ${pxToRem(8)};
  width: 100%;
  height: ${pxToRem(45)};
`;

export const filterButton = css`
  width: ${pxToRem(120)};
  flex-shrink: 0;
  display: flex;
  align-items: center;
`;

export const questionsContainer = css`
  background: rgba(255, 203, 207, 0.8);
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(12)};
  padding: ${pxToRem(18)} ${pxToRem(30)} ${pxToRem(24)};
  border-radius: ${pxToRem(8)};
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  box-sizing: border-box;
`;

export const questionsHeader = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${pxToRem(24)};
  width: 100%;
`;

export const questionsHeaderContent = css`
  flex: 1;
  font-family: 'Pretendard', sans-serif;
  font-size: ${pxToRem(20)};
  font-weight: 400;
  color: #868686;
  text-align: center;
  line-height: normal;
`;

export const questionsHeaderDetail = css`
  display: flex;
  gap: ${pxToRem(10)};
  align-items: center;
  justify-content: flex-end;
  font-family: 'Pretendard', sans-serif;
  font-size: ${pxToRem(20)};
  font-weight: 400;
  color: #868686;
  line-height: normal;
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(${pxToRem(20)});
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const questionItem = css`
  width: 100%;
  height: ${pxToRem(72)};
  perspective: ${pxToRem(1000)};
  cursor: pointer;
  opacity: 0;
  animation: ${fadeInUp} 0.5s ease-out forwards;

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
  background: white;
  display: flex;
  gap: ${pxToRem(16)};
  align-items: center;
  justify-content: center;
  padding: ${pxToRem(16)} ${pxToRem(24)};
  border-radius: ${pxToRem(8)};
  box-shadow: ${pxToRem(0)} ${pxToRem(2)} ${pxToRem(4)} ${pxToRem(0)} rgba(0, 0, 0, 0.1);
  box-sizing: border-box;

  ${questionItem}:hover & {
    background: #f8f8f8;
    box-shadow: ${pxToRem(0)} ${pxToRem(4)} ${pxToRem(8)} ${pxToRem(0)} rgba(0, 0, 0, 0.15);
  }
`;

export const cardBack = css`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: #ff6b6b;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${pxToRem(8)};
  box-shadow: ${pxToRem(0)} ${pxToRem(2)} ${pxToRem(4)} ${pxToRem(0)} rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  transform: rotateX(180deg);
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: 'Pretendard', sans-serif;
  font-size: ${pxToRem(20)};
  font-weight: 500;
  color: white;

  &:hover {
    background: #ff5252;
    box-shadow: ${pxToRem(0)} ${pxToRem(4)} ${pxToRem(8)} ${pxToRem(0)} rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: rotateX(180deg) scale(0.98);
  }
`;

export const questionContent = css`
  flex: 1;
  display: flex;
  gap: ${pxToRem(10)};
  align-items: center;
  justify-content: flex-start;
  min-width: 0;
`;

export const questionText = css`
  flex: 1;
  font-family: 'Pretendard', sans-serif;
  font-size: ${pxToRem(20)};
  font-weight: 400;
  color: #1a1515;
  line-height: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const questionDetail = css`
  display: flex;
  gap: ${pxToRem(10)};
  align-items: center;
  justify-content: flex-end;
  font-family: 'Pretendard', sans-serif;
  font-size: ${pxToRem(20)};
  font-weight: 400;
  color: #868686;
  line-height: normal;
  flex-shrink: 0;
`;

export const detailColumn = css`
  &.company {
    width: ${pxToRem(150)};
  }

  &.field {
    width: ${pxToRem(100)};
  }

  &.year {
    width: ${pxToRem(48)};
    text-align: right;
  }
`;

export const loadingContainer = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${pxToRem(40)} ${pxToRem(20)};
  color: #868686;
  font-family: 'Pretendard', sans-serif;
  font-size: ${pxToRem(18)};
  font-weight: 400;
`;

export const emptyContainer = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${pxToRem(40)} ${pxToRem(20)};
  color: #868686;
  font-family: 'Pretendard', sans-serif;
  font-size: ${pxToRem(18)};
  font-weight: 400;
`;

