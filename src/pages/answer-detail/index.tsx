import { useState, useEffect } from 'react';
import { useNavigation } from '../../shared/context/NavigationContext';
import { useAuth } from '../../shared/context/AuthContext';
import { useToast } from '../../shared/context/ToastContext';
import { getAnswerById } from '../../api/getAnswerById';
import type { AnswerDetail } from '../../api/getAnswerById';
import * as styles from './style';
import type { AnswerDetailPageProps, AnswerEvaluation } from './types';

const imgStars = "http://localhost:3845/assets/31fa271100de921ae7c60118d038319415893c26.svg";

export const AnswerDetailPage = () => {
  const { navigateToPage, selectedAnswerId } = useNavigation();
  const { isLoggedIn, user } = useAuth();
  const { showToast } = useToast();
  const [answerData, setAnswerData] = useState<AnswerDetail | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentRating, setCurrentRating] = useState(0);
  const [evaluationText, setEvaluationText] = useState('');

  // 답변 데이터 가져오기
  useEffect(() => {
    const fetchAnswer = async () => {
      if (!selectedAnswerId) {
        showToast('답변을 선택해주세요.', 'error');
        navigateToPage('main');
        return;
      }

      setIsLoading(true);
      try {
        const data = await getAnswerById(selectedAnswerId);
        console.log('Answer API Response:', data);
        setAnswerData(data);
      } catch (error) {
        let errorMessage = '답변을 불러오는 중 오류가 발생했습니다.';
        if (error && typeof error === 'object' && 'response' in error) {
          const response = (error as { response?: { data?: { message?: string } } }).response;
          if (response?.data?.message) {
            errorMessage = response.data.message;
          }
        }
        showToast(errorMessage, 'error');
        navigateToPage('main');
      } finally {
        setIsLoading(false);
      }
    };

    fetchAnswer();
  }, [selectedAnswerId]);

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

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  if (isLoading || !answerData) {
    return (
      <div className={styles.answerDetailContainer}>
        <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'Pretendard, sans-serif', fontSize: '18px', color: '#868686' }}>
          {isLoading ? '로딩 중...' : '답변이 없습니다.'}
        </div>
      </div>
    );
  }

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
            <div className={styles.userName}>{answerData.userId}</div>
            <div className={styles.time}>{formatTime(answerData.time)}</div>
          </div>

          <div className={styles.questionAndAnswer}>
            <div className={styles.questionSection}>
              <div className={styles.questionTitle}>{answerData.question.content}</div>
              <div className={styles.questionDetail}>
                <div>{answerData.question.company}</div>
                <div>{answerData.question.category}</div>
                <div>{answerData.question.questionAt}</div>
              </div>
            </div>

            <div className={styles.answerBox}>
              <div className={styles.answerContent}>{answerData.content}</div>
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

            {answerData.evaluations.length === 0 ? (
              <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'Pretendard, sans-serif', fontSize: '18px', color: '#868686' }}>
                평가가 없습니다.
              </div>
            ) : (
              answerData.evaluations.map((evaluation) => {
                const backgroundColor = styles.getScoreColor(evaluation.score);

                return (
                  <div
                    key={evaluation.id}
                    className={styles.evaluationItem}
                    style={{ backgroundColor }}
                  >
                    <div className={styles.evaluationContent}>{evaluation.content}</div>
                    <div className={styles.evaluationDetails}>
                      <div className={styles.evaluationName}>{evaluation.userId}</div>
                      <div className={styles.evaluationTime}>-</div>
                      <div className={styles.evaluationScore}>{evaluation.score.toFixed(2)}</div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};