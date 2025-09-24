import { useEffect, useState } from 'react';
import { useNavigation } from '../../shared/context/NavigationContext';
import * as styles from './style';

export const InterviewLoadingPage = () => {
  const { navigateToPage } = useNavigation();
  const [timeElapsed, setTimeElapsed] = useState(0);

  const handleExitClick = () => {
    navigateToPage('main');
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    // 타이머 시작
    const timer = setInterval(() => {
      setTimeElapsed((prev) => prev + 1);
    }, 1000);

    // 2-3초 후 면접 페이지로 이동
    const redirectTimer = setTimeout(() => {
      navigateToPage('interview');
    }, 3000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimer);
    };
  }, [navigateToPage]);

  return (
    <div className={styles.loadingContainer}>
      <div className={styles.topBar}>
        <div className={styles.exitButton} onClick={handleExitClick}>
          &lt; 면접 종료
        </div>
        <div className={styles.timer}>
          {formatTime(timeElapsed)}
        </div>
        <div className={styles.spacer} />
      </div>

      <div className={styles.content}>
        <div className={styles.loadingCard}>
          <div className={styles.loadingText}>
            면접 생성중...
          </div>
        </div>
      </div>
    </div>
  );
};