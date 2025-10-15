import { useState, useEffect } from 'react';
import { BackIcon } from '../../shared/components/BackIcon';
import { ConfirmModal } from '../../shared/components';
import { useNavigation } from '../../shared/context/NavigationContext';
import { useToast } from '../../shared/context/ToastContext';
import { getRandomQuestions } from '../../api/getRandomQuestions';
import { submitAnswer } from '../../api/submitAnswer';
import type { RandomQuestion } from '../../api/getRandomQuestions';
import * as styles from './style';

export const InterviewPage = () => {
  const { navigateToPage, interviewSettings, setInterviewResult } = useNavigation();
  const { showToast } = useToast();
  const [questions, setQuestions] = useState<RandomQuestion[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [answers, setAnswers] = useState<string[]>([]);
  const [questionStartTimes, setQuestionStartTimes] = useState<number[]>([]);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [showSuccessCheck, setShowSuccessCheck] = useState(false);
  const [showSkipMark, setShowSkipMark] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [prevQuestionIndex, setPrevQuestionIndex] = useState(-1);

  const totalQuestions = questions.length;
  const currentQuestion = questions[currentQuestionIndex];

  // 랜덤 질문 가져오기
  useEffect(() => {
    const fetchQuestions = async () => {
      if (!interviewSettings) {
        showToast('면접 설정이 없습니다.', 'error');
        navigateToPage('interview-setup');
        return;
      }

      setIsLoading(true);
      try {
        const fetchedQuestions = await getRandomQuestions({
          amount: interviewSettings.amount,
          category: interviewSettings.category,
          company: interviewSettings.company,
          question_at: interviewSettings.questionAt
        });

        if (fetchedQuestions.length === 0) {
          showToast('조건에 맞는 질문이 없습니다.', 'error');
          navigateToPage('interview-setup');
          return;
        }

        setQuestions(fetchedQuestions);
        setAnswers(new Array(fetchedQuestions.length).fill(''));
        setQuestionStartTimes(new Array(fetchedQuestions.length).fill(0));
        setQuestionStartTimes(prev => {
          const newTimes = [...prev];
          newTimes[0] = Date.now();
          return newTimes;
        });
      } catch (error) {
        let errorMessage = '질문을 불러오는 중 오류가 발생했습니다.';
        if (error && typeof error === 'object' && 'response' in error) {
          const response = (error as { response?: { data?: { message?: string } } }).response;
          if (response?.data?.message) {
            errorMessage = response.data.message;
          }
        }
        showToast(errorMessage, 'error');
        navigateToPage('interview-setup');
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  // 타이머
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleBackClick = () => {
    setShowConfirmModal(true);
  };

  const handleConfirmExit = () => {
    setShowConfirmModal(false);
    navigateToPage('main');
  };

  const handleCancelExit = () => {
    setShowConfirmModal(false);
  };

  const handleAnswerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAnswer(e.target.value);
  };

  const handleSkipClick = () => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = ''; // 스킵 시 빈 답변으로 저장

    setAnswers(newAnswers);

    // X 표시 보여주기
    setShowSkipMark(true);

    // 1초 후 다음 동작 실행
    setTimeout(() => {
      setShowSkipMark(false);

      if (currentQuestionIndex < totalQuestions - 1) {
        // 트랜지션 시작
        setIsTransitioning(true);
        setPrevQuestionIndex(currentQuestionIndex);

        // 다음 질문 시작 시간 기록
        const newStartTimes = [...questionStartTimes];
        newStartTimes[currentQuestionIndex + 1] = Date.now();
        setQuestionStartTimes(newStartTimes);

        // 즉시 다음 질문으로 변경
        setCurrentQuestionIndex(prev => prev + 1);
        setAnswer(''); // 다음 질문으로 이동 시 답변 초기화

        // 트랜지션 완료 후 정리
        setTimeout(() => {
          setIsTransitioning(false);
          setPrevQuestionIndex(-1);
        }, 300);
      } else {
        // 답변한 질문 수 계산 (빈 답변 제외)
        const answeredCount = newAnswers.filter(ans => ans.trim() !== '').length;
        setInterviewResult({
          answeredCount,
          totalCount: totalQuestions,
          finalTime: formatTime(timeElapsed)
        });
        navigateToPage('interview-complete');
      }
    }, 1000);
  };

  const handleConfirmClick = async () => {
    if (!answer.trim()) {
      showToast('답변을 입력해 주세요.', 'error');
      return;
    }

    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = answer;
    setAnswers(newAnswers);

    // 답변 시간 계산 (초 단위)
    const startTime = questionStartTimes[currentQuestionIndex];
    const endTime = Date.now();
    const timeTaken = Math.floor((endTime - startTime) / 1000);

    // 체크 표시 보여주기
    setShowSuccessCheck(true);

    // API로 답변 제출
    try {
      await submitAnswer({
        questionId: currentQuestion.id,
        answer: answer.trim(),
        time: timeTaken
      });
    } catch (error) {
      console.error('답변 제출 실패:', error);
      // 에러가 나도 계속 진행 (사용자 경험을 위해)
    }

    // 1초 후 다음 동작 실행
    setTimeout(() => {
      setShowSuccessCheck(false);

      if (currentQuestionIndex < totalQuestions - 1) {
        // 트랜지션 시작
        setIsTransitioning(true);
        setPrevQuestionIndex(currentQuestionIndex);

        // 다음 질문 시작 시간 기록
        const newStartTimes = [...questionStartTimes];
        newStartTimes[currentQuestionIndex + 1] = Date.now();
        setQuestionStartTimes(newStartTimes);

        // 즉시 다음 질문으로 변경
        setCurrentQuestionIndex(prev => prev + 1);
        setAnswer(''); // 다음 질문으로 이동 시 답변 초기화

        // 트랜지션 완료 후 정리
        setTimeout(() => {
          setIsTransitioning(false);
          setPrevQuestionIndex(-1);
        }, 300);
      } else {
        // 답변한 질문 수 계산 (빈 답변 제외)
        const answeredCount = newAnswers.filter(ans => ans.trim() !== '').length;
        setInterviewResult({
          answeredCount,
          totalCount: totalQuestions,
          finalTime: formatTime(timeElapsed)
        });
        navigateToPage('interview-complete');
      }
    }, 1000);
  };

  if (isLoading || !currentQuestion) {
    return (
      <div className={styles.interviewContainer}>
        <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'Pretendard, sans-serif', fontSize: '18px', color: '#868686' }}>
          {isLoading ? '질문을 불러오는 중...' : '질문이 없습니다.'}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.interviewContainer}>
      {/* 헤더 */}
      <div className={styles.header}>
        <div className={styles.backSection} onClick={handleBackClick}>
          <BackIcon />
          <span className={styles.backText}>면접 종료</span>
        </div>
        <div className={styles.timer}>{formatTime(timeElapsed)}</div>
        <div className={styles.spacer}></div>
      </div>

      {/* 메인 콘텐츠 */}
      <div className={styles.mainContent}>
        {/* 질문 헤더 */}
        <div className={styles.questionHeader}>
          <div className={styles.questionCount}>
            {currentQuestionIndex + 1} / {totalQuestions} 질문
          </div>
        </div>

        {/* 질문 섹션 */}
        <div className={styles.questionSection}>
          <div className={styles.questionContentWrapper}>
            {/* 이전 질문 (슬라이딩 아웃) */}
            {isTransitioning && prevQuestionIndex >= 0 && questions[prevQuestionIndex] && (
              <div className={`${styles.questionAnswerContainer} sliding-out`}>
                <div className={styles.questionArea}>
                  <div className={styles.questionText}>
                    {questions[prevQuestionIndex].content}
                  </div>
                </div>
                <textarea
                  className={styles.answerArea}
                  placeholder="답변을 작성해 주세요."
                  value={answers[prevQuestionIndex] || ''}
                  readOnly
                />
              </div>
            )}

            {/* 현재 질문 (슬라이딩 인) */}
            <div className={`${styles.questionAnswerContainer} ${isTransitioning ? 'sliding-in' : ''}`}>
              <div className={styles.questionArea}>
                <div className={styles.questionText}>
                  {currentQuestion.content}
                </div>
              </div>
              <textarea
                className={styles.answerArea}
                placeholder="답변을 작성해 주세요."
                value={answer}
                onChange={handleAnswerChange}
              />
            </div>
          </div>
        </div>

        {/* 푸터 */}
        <div className={styles.footer}>
          <button className={styles.skipButton} onClick={handleSkipClick}>
            <span className={styles.skipButtonText}>스킵</span>
          </button>
          <button className={styles.confirmButton} onClick={handleConfirmClick}>
            <span className={styles.confirmButtonText}>
              {currentQuestionIndex < totalQuestions - 1 ? '다음' : '완료'}
            </span>
          </button>
        </div>
      </div>

      {/* 성공 체크 표시 */}
      {showSuccessCheck && (
        <div className={styles.successOverlay}>
          <div className={styles.successCheck}>
            ✓
          </div>
        </div>
      )}

      {/* 스킵 X 표시 */}
      {showSkipMark && (
        <div className={styles.successOverlay}>
          <div className={styles.skipMark}>
            ✗
          </div>
        </div>
      )}

      {/* 종료 확인 모달 */}
      <ConfirmModal
        isOpen={showConfirmModal}
        title="면접 종료"
        message="면접을 종료하시겠습니까?"
        onConfirm={handleConfirmExit}
        onCancel={handleCancelExit}
        confirmText="예"
        cancelText="아니오"
      />
    </div>
  );
};