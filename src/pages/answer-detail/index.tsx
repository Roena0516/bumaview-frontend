import { useState } from 'react';
import { useNavigation } from '../../shared/context/NavigationContext';
import { useAuth } from '../../shared/context/AuthContext';
import * as styles from './style';
import type { AnswerDetailPageProps, AnswerEvaluation } from './types';

const imgStars = "http://localhost:3845/assets/31fa271100de921ae7c60118d038319415893c26.svg";

const mockEvaluations: AnswerEvaluation[] = [
  {
    id: 1,
    content: "답변 이렇게 하시면 안됩니다...",
    userName: "김유찬",
    time: "1:23",
    score: 0.5,
  },
  {
    id: 2,
    content: "장난으로 쓴건가요??",
    userName: "박소은",
    time: "0:03",
    score: 1,
  },
  {
    id: 3,
    content: "자신감 넘치는 모습이 보기 좋네요.",
    userName: "류승찬",
    time: "1:54",
    score: 2.5,
  },
];

export const AnswerDetailPage = ({
  answer = {
    id: 1,
    content: "저는 대단한 개발자입니다.\n저를 뽑지 않으면 큰 후회를 하게 될 것입니다.",
    userName: "Nickname",
    time: "1:23",
    score: 2.5,
  },
  questionInfo = {
    title: "간단한 자기소개 부탁드립니다.",
    company: "마이다스IT",
    field: "백엔드",
    year: "2023",
  },
  evaluations = mockEvaluations,
}: AnswerDetailPageProps) => {
  const { navigateToPage } = useNavigation();
  const { isLoggedIn, user } = useAuth();
  const [currentRating, setCurrentRating] = useState(0);
  const [evaluationText, setEvaluationText] = useState('');

  const handleLogoClick = () => {
    navigateToPage('main');
  };

  const handleLoginClick = () => {
    navigateToPage('login');
  };

  const handleStarClick = (rating: number) => {
    setCurrentRating(rating);
  };

  const handleEvaluationSubmit = () => {
    if (evaluationText.trim() && currentRating > 0) {
      console.log('Submit evaluation:', {
        rating: currentRating,
        text: evaluationText,
      });
      setEvaluationText('');
      setCurrentRating(0);
    }
  };

  const handleEvaluationTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEvaluationText(e.target.value);
  };

  const handleNicknameClick = () => {
    navigateToPage('mypage');
  };

  return (
    <div className={styles.answerDetailContainer}>
      {/* 헤더 */}
      <div className={styles.header}>
        <div className={styles.logo} onClick={handleLogoClick}>
          <div className={styles.logoText}>
            <span className="logo-bu">부마</span>
            <span className="logo-ma">뷰</span>
          </div>
        </div>
        <div className={styles.authSection}>
          {isLoggedIn && user ? (
            <div className={styles.authLink} onClick={handleNicknameClick}>
              {user.nickname}
            </div>
          ) : (
            <div className={styles.authLink} onClick={handleLoginClick}>
              로그인
            </div>
          )}
        </div>
      </div>

      {/* 메인 콘텐츠 */}
      <div className={styles.content}>
        <div className={styles.answerSection}>
          <div className={styles.answerHeader}>
            <div className={styles.userName}>{answer.userName}</div>
            <div className={styles.time}>{answer.time}</div>
          </div>

          <div className={styles.questionAndAnswer}>
            <div className={styles.questionSection}>
              <div className={styles.questionTitle}>{questionInfo.title}</div>
              <div className={styles.questionDetail}>
                <div>{questionInfo.company}</div>
                <div>{questionInfo.field}</div>
                <div>{questionInfo.year}</div>
              </div>
            </div>

            <div className={styles.answerBox}>
              <div className={styles.answerContent}>{answer.content}</div>
            </div>
          </div>
        </div>

        {/* 평가 섹션 */}
        <div className={styles.evaluationSection}>
          <div className={styles.evaluationInput}>
            <div className={styles.starsContainer}>
              {[1, 2, 3, 4, 5].map((star) => (
                <div
                  key={star}
                  className={styles.starIcon}
                  onClick={() => handleStarClick(star)}
                >
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 2L20.326 12.326H31L22.837 18.348L26.163 28.674L17 22.652L7.837 28.674L11.163 18.348L3 12.326H13.674L17 2Z"
                      fill={currentRating >= star ? "#F2FF00" : "transparent"}
                      stroke="#868686"
                      strokeWidth="1"
                    />
                  </svg>
                </div>
              ))}
            </div>

            <div className={styles.inputContainer}>
              <input
                type="text"
                className={styles.inputField}
                placeholder="답변의 의견을 적어주세요."
                value={evaluationText}
                onChange={handleEvaluationTextChange}
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <button
                className={styles.submitButton}
                onClick={handleEvaluationSubmit}
              >
                확인
              </button>
            </div>
          </div>

          <div className={styles.evaluationsContainer}>
            <div className={styles.evaluationsHeader}>
              <div className={styles.contentHeader}>내용</div>
              <div className={styles.detailsHeader}>
                <div className={styles.nameHeader}>이름</div>
                <div className={styles.timeHeader}>시간</div>
                <div className={styles.scoreHeader}>점수</div>
              </div>
            </div>

            {evaluations.map((evaluation) => (
              <div
                key={evaluation.id}
                className={styles.evaluationItem}
                style={{ backgroundColor: styles.getScoreColor(evaluation.score) }}
              >
                <div className={styles.evaluationContent}>{evaluation.content}</div>
                <div className={styles.evaluationDetails}>
                  <div className={styles.evaluationName}>{evaluation.userName}</div>
                  <div className={styles.evaluationTime}>{evaluation.time}</div>
                  <div className={styles.evaluationScore}>{evaluation.score}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};