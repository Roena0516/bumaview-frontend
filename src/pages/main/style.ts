import { css } from '@emotion/css';

export const mainContainer = css`
  background: white;
  width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
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
  gap: 10px;
  padding: 20px 40px;
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
  gap: 10px;
  align-items: center;
  justify-content: center;
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

export const navigation = css`
  display: flex;
  gap: 35px;
  align-items: center;
  font-family: 'Pretendard', sans-serif;
  font-size: 20px;
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
  gap: 10px;
  height: 190px;
  padding: 14px 120px;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  box-sizing: border-box;
`;

export const heroTitle = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
  align-items: flex-start;
  justify-content: center;
  color: #1a1515;
`;

export const heroMainTitle = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 40px;
  font-weight: 500;
  line-height: normal;
`;

export const heroSubTitle = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 32px;
  font-weight: 400;
  line-height: normal;
`;

export const heroButton = css`
  display: flex;
  gap: 10px;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
`;

export const contentSection = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 30px 72px;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
`;

export const contentTitle = css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 4px 0;
  width: 100%;
`;

export const contentTitleText = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 40px;
  font-weight: 500;
  color: #1a1515;
  line-height: normal;
`;

export const searchArea = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

export const searchTop = css`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

export const searchInputContainer = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 8px 0;
  min-width: 0;
`;

export const searchInput = css`
  background: white;
  border-radius: 8px;
  width: 100%;
  height: 45px;
`;

export const filterButton = css`
  width: 120px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
`;

export const questionsContainer = css`
  background: rgba(255, 203, 207, 0.8);
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 18px 30px 24px;
  border-radius: 8px;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  box-sizing: border-box;
`;

export const questionsHeader = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  width: 100%;
`;

export const questionsHeaderContent = css`
  flex: 1;
  font-family: 'Pretendard', sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #868686;
  text-align: center;
  line-height: normal;
`;

export const questionsHeaderDetail = css`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: flex-end;
  font-family: 'Pretendard', sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #868686;
  line-height: normal;
`;

export const questionItem = css`
  background: white;
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
  padding: 16px 24px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
  width: 100%;
  box-sizing: border-box;
`;

export const questionContent = css`
  flex: 1;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;
  min-width: 0;
`;

export const questionText = css`
  flex: 1;
  font-family: 'Pretendard', sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #1a1515;
  line-height: normal;
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
  line-height: normal;
  flex-shrink: 0;
`;

export const detailColumn = css`
  &.company {
    width: 100px;
  }

  &.field {
    width: 70px;
  }

  &.year {
    width: 48px;
    text-align: right;
  }
`;