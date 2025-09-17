import { useState, useEffect } from 'react';
import { BackIcon } from '../../shared/components/BackIcon';
import { useNavigation } from '../../shared/context/NavigationContext';
import * as styles from './style';

interface InterviewQuestion {
  id: number;
  question: string;
  company: string;
  field: string;
  year: string;
}

const mockQuestions: InterviewQuestion[] = [
  {
    id: 1,
    question: "간단한 자기소개 부탁드립니다.",
    company: "마이다스IT",
    field: "백엔드",
    year: "2023"
  },
  {
    id: 2,
    question: "프로젝트 경험에 대해 말씀해 주세요.",
    company: "마이다스IT",
    field: "백엔드",
    year: "2023"
  },
  {
    id: 3,
    question: "팀워크 경험은 어떠하신가요?",
    company: "마이다스IT",
    field: "백엔드",
    year: "2023"
  }
];

export const InterviewPage = () => {
  const { navigateToPage } = useNavigation();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [answers, setAnswers] = useState<string[]>([]);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [showSuccessCheck, setShowSuccessCheck] = useState(false);

  const totalQuestions = mockQuestions.length;
  const currentQuestion = mockQuestions[currentQuestionIndex];

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
    const shouldExit = window.confirm('면접을 종료하시겠습니까?');
    if (shouldExit) {
      navigateToPage('main');
    }
  };

  const handleAnswerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAnswer(e.target.value);
  };

  const handleConfirmClick = () => {
    if (!answer.trim()) {
      alert('답변을 입력해 주세요.');
      return;
    }

    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = answer;
    setAnswers(newAnswers);

    // 체크 표시 보여주기
    setShowSuccessCheck(true);

    // 1초 후 다음 동작 실행
    setTimeout(() => {
      setShowSuccessCheck(false);

      if (currentQuestionIndex < totalQuestions - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setAnswer(newAnswers[currentQuestionIndex + 1] || '');
      } else {
        const finalTime = formatTime(timeElapsed);
        navigateToPage('interview-complete');
      }
    }, 1000);
  };

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
          {/* 질문 영역 */}
          <div className={styles.questionArea}>
            <div className={styles.questionText}>
              {currentQuestion.question}
            </div>
            <div className={styles.questionDetail}>
              <span>{currentQuestion.company}</span>
              <span>{currentQuestion.field}</span>
              <span>{currentQuestion.year}</span>
            </div>
          </div>

          {/* 답변 영역 */}
          <textarea
            className={styles.answerArea}
            placeholder="답변을 작성해 주세요."
            value={answer}
            onChange={handleAnswerChange}
          />
        </div>

        {/* 푸터 */}
        <div className={styles.footer}>
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
    </div>
  );
};