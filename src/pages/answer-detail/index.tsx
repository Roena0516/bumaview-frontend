import { useState, useEffect } from 'react';
import { useNavigation } from '../../shared/context/NavigationContext';
import { useAuth } from '../../shared/context/AuthContext';
import { useToast } from '../../shared/context/ToastContext';
import { getAnswerById } from '../../api/getAnswerById';
import { getQuestionById } from '../../api/getQuestionById';
import { submitScore } from '../../api/submitScore';
import { Button } from '../../shared/components';
import type { AnswerDetail } from '../../api/getAnswerById';
import type { QuestionDetail } from '../../api/getQuestionById';
import * as styles from './style';

export const AnswerDetailPage = () => {
  const { navigateToPage, selectedAnswerId } = useNavigation();
  const { isLoggedIn, user } = useAuth();
  const { showToast } = useToast();
  const [answerData, setAnswerData] = useState<AnswerDetail | null>(null);
  const [questionData, setQuestionData] = useState<QuestionDetail | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentRating, setCurrentRating] = useState(0);
  const [evaluationText, setEvaluationText] = useState('');

  // 답변 및 질문 데이터 가져오기
  useEffect(() => {
    const fetchData = async () => {
      if (!selectedAnswerId) {
        showToast('답변을 선택해주세요.', 'error');
        navigateToPage('main');
        return;
      }

      setIsLoading(true);
      try {
        const answer = await getAnswerById(selectedAnswerId);
        console.log('Answer API Response:', answer);
        setAnswerData(answer);

        // 답변의 questionId로 질문 정보 가져오기
        const question = await getQuestionById(answer.questionId);
        console.log('Question API Response:', question);
        setQuestionData(question);
      } catch (error) {
        let errorMessage = '데이터를 불러오는 중 오류가 발생했습니다.';
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

    fetchData();
  }, [selectedAnswerId]);

  const handleLogoClick = () => {
    navigateToPage('main');
  };

  const handleLoginClick = () => {
    navigateToPage('login');
  };

  const handleStarClick = (starIndex: number, isHalf: boolean) => {
    const rating = isHalf ? starIndex - 0.5 : starIndex;
    setCurrentRating(rating);
  };

  const handleEvaluationSubmit = async () => {
    if (!evaluationText.trim()) {
      showToast('평가 내용을 입력해주세요.', 'error');
      return;
    }

    if (currentRating <= 0) {
      showToast('별점을 선택해주세요.', 'error');
      return;
    }

    try {
      // 0.5 단위 점수를 1~10 정수로 변환 (0.5 -> 1, 1.0 -> 2, ..., 5.0 -> 10)
      const scoreAsInteger = Math.round(currentRating * 2);

      await submitScore({
        answerId: answerData!.id,
        content: evaluationText.trim(),
        score: scoreAsInteger
      });

      showToast('평가가 제출되었습니다.', 'success');
      setEvaluationText('');
      setCurrentRating(0);

      // 답변 데이터 다시 가져오기
      const updatedAnswer = await getAnswerById(answerData!.id);
      setAnswerData(updatedAnswer);
    } catch (error) {
      let errorMessage = '평가 제출 중 오류가 발생했습니다.';
      if (error && typeof error === 'object' && 'response' in error) {
        const response = (error as { response?: { data?: { message?: string } } }).response;
        if (response?.data?.message) {
          errorMessage = response.data.message;
        }
      }
      showToast(errorMessage, 'error');
    }
  };

  const handleEvaluationTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEvaluationText(e.target.value);
  };

  const handleNicknameClick = () => {
    navigateToPage('mypage');
  };

  const handleBackClick = () => {
    navigateToPage('question-answers');
  };

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  if (isLoading || !answerData || !questionData) {
    return (
      <div className={styles.answerDetailContainer}>
        <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'Pretendard, sans-serif', fontSize: '18px', color: '#868686' }}>
          {isLoading ? '로딩 중...' : '데이터가 없습니다.'}
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
        {/* 뒤로가기 버튼 */}
        <div className={styles.backButtonContainer}>
          <Button
            variant="primary"
            size="medium"
            onClick={handleBackClick}
          >
            뒤로가기
          </Button>
        </div>

        <div className={styles.answerSection}>
          <div className={styles.answerHeader}>
            <div className={styles.userName}>{answerData.userId}</div>
            <div className={styles.time}>{formatTime(answerData.time)}</div>
          </div>

          <div className={styles.questionAndAnswer}>
            <div className={styles.questionSection}>
              <div className={styles.questionTitle}>{questionData.content}</div>
              <div className={styles.questionDetail}>
                <div>{questionData.company}</div>
                <div>{questionData.category}</div>
                <div>{questionData.questionAt}</div>
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
              {[1, 2, 3, 4, 5].map((star) => {
                const isFullFilled = currentRating >= star;
                const isHalfFilled = currentRating >= star - 0.5 && currentRating < star;

                return (
                  <div
                    key={star}
                    className={styles.starIcon}
                    style={{ position: 'relative', cursor: 'pointer' }}
                  >
                    {/* 왼쪽 반 (반칸) */}
                    <div
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        width: '50%',
                        height: '100%',
                        zIndex: 1,
                      }}
                      onClick={() => handleStarClick(star, true)}
                    />
                    {/* 오른쪽 반 (전체) */}
                    <div
                      style={{
                        position: 'absolute',
                        right: 0,
                        top: 0,
                        width: '50%',
                        height: '100%',
                        zIndex: 1,
                      }}
                      onClick={() => handleStarClick(star, false)}
                    />
                    <svg
                      width="34"
                      height="34"
                      viewBox="0 0 34 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ display: 'block' }}
                    >
                      <defs>
                        <linearGradient id={`half-${star}`}>
                          <stop offset="50%" stopColor="#F2FF00" />
                          <stop offset="50%" stopColor="transparent" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M17 2L20.326 12.326H31L22.837 18.348L26.163 28.674L17 22.652L7.837 28.674L11.163 18.348L3 12.326H13.674L17 2Z"
                        fill={
                          isFullFilled
                            ? "#F2FF00"
                            : isHalfFilled
                            ? `url(#half-${star})`
                            : "transparent"
                        }
                        stroke="#868686"
                        strokeWidth="1"
                      />
                    </svg>
                  </div>
                );
              })}
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
                <div className={styles.scoreHeader}>점수</div>
              </div>
            </div>

            {answerData.scores.length === 0 ? (
              <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'Pretendard, sans-serif', fontSize: '18px', color: '#868686' }}>
                평가가 없습니다.
              </div>
            ) : (
              answerData.scores.map((score) => {
                // 1~10 정수를 0.5~5.0 범위로 변환
                const displayScore = score.score / 2;
                const backgroundColor = styles.getScoreColor(displayScore);

                return (
                  <div
                    key={score.id}
                    className={styles.evaluationItem}
                    style={{ backgroundColor }}
                  >
                    <div className={styles.evaluationContent}>{score.content}</div>
                    <div className={styles.evaluationDetails}>
                      <div className={styles.evaluationName}>{score.userId}</div>
                      <div className={styles.evaluationScore}>{displayScore.toFixed(1)}</div>
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