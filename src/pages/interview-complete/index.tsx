import { BackIcon } from '../../shared/components/BackIcon';
import { useNavigation } from '../../shared/context/NavigationContext';
import * as styles from './style';

interface InterviewCompletePageProps {
  totalQuestions?: number;
  finalTime?: string;
}

export const InterviewCompletePage = ({
  totalQuestions = 20,
  finalTime = "30:23"
}: InterviewCompletePageProps) => {
  const { navigateToPage } = useNavigation();

  const handleBackClick = () => {
    navigateToPage('main');
  };

  const handleCompleteClick = () => {
    navigateToPage('main');
  };

  return (
    <div className={styles.interviewCompleteContainer}>
      {/* 헤더 */}
      <div className={styles.header}>
        <div className={styles.backSection} onClick={handleBackClick}>
          <BackIcon />
          <span className={styles.backText}>면접 종료</span>
        </div>
        <div className={styles.timer}>{finalTime}</div>
        <div className={styles.spacer}></div>
      </div>

      {/* 메인 콘텐츠 */}
      <div className={styles.mainContent}>
        <div className={styles.completionCard}>
          {/* 질문 완료 수 */}
          <div className={styles.questionCount}>
            {totalQuestions} / {totalQuestions} 질문
          </div>

          {/* 완료 타이틀 */}
          <div className={styles.completionTitle}>
            면접 끝!
          </div>

          {/* 완료 버튼 */}
          <div className={styles.footer}>
            <button className={styles.completeButton} onClick={handleCompleteClick}>
              <span className={styles.completeButtonText}>완료</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};