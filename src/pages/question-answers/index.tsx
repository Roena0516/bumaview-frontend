import { useState, useEffect } from "react";
import { useNavigation } from "../../shared/context/NavigationContext";
import { useAuth } from "../../shared/context/AuthContext";
import { useToast } from "../../shared/context/ToastContext";
import { Button } from "../../shared/components";
import { getQuestionById } from "../../api/getQuestionById";
import type { QuestionDetail, Answer as ApiAnswer } from "../../api/getQuestionById";
import * as styles from "./style";

interface Answer {
  id: number;
  content: string;
  userName: string;
  time: string;
  score: number;
}

export const QuestionAnswersPage = () => {
  const { navigateToPage, selectedQuestionId, setSelectedAnswerId } = useNavigation();
  const { isLoggedIn, user } = useAuth();
  const { showToast } = useToast();

  const [questionData, setQuestionData] = useState<QuestionDetail | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // 질문 데이터 가져오기
  useEffect(() => {
    const fetchQuestion = async () => {
      if (!selectedQuestionId) {
        showToast('질문을 선택해주세요.', 'error');
        navigateToPage('main');
        return;
      }

      setIsLoading(true);
      try {
        const data = await getQuestionById(selectedQuestionId);
        console.log('Question API Response:', data);
        setQuestionData(data);
      } catch (error) {
        let errorMessage = '질문을 불러오는 중 오류가 발생했습니다.';
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

    fetchQuestion();
  }, [selectedQuestionId]);

  const handleLoginClick = () => {
    navigateToPage("login");
  };

  const handleSignupClick = () => {
    navigateToPage("signup");
  };

  const handleBackClick = () => {
    navigateToPage("main");
  };

  const handleLogoClick = () => {
    navigateToPage("main");
  };

  const handleAnswerClick = (answerId: number) => {
    setSelectedAnswerId(answerId);
    navigateToPage("answer-detail");
  };

  const handleNicknameClick = () => {
    navigateToPage("mypage");
  };

  if (isLoading) {
    return (
      <div className={styles.questionAnswersContainer}>
        <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'Pretendard, sans-serif', fontSize: '18px', color: '#868686' }}>
          로딩 중...
        </div>
      </div>
    );
  }

  if (!questionData) {
    return null;
  }

  return (
    <div className={styles.questionAnswersContainer}>
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
            <>
              <div className={styles.authLink} onClick={handleLoginClick}>
                로그인
              </div>
              <div className={styles.authLink} onClick={handleSignupClick}>
                회원가입
              </div>
            </>
          )}
        </div>
      </div>

      {/* 질문 섹션 */}
      <div className={styles.questionSection}>
        <div className={styles.questionInfo}>
          <div className={styles.questionTitle}>{questionData.content}</div>
          <div className={styles.questionDetail}>
            {questionData.company} / {questionData.category} / {questionData.questionAt}
          </div>
        </div>
        <div className={styles.backButtonContainer}>
          <Button
            variant="primary"
            size="large"
            onClick={handleBackClick}
          >
            뒤로가기
          </Button>
        </div>
      </div>

      {/* 메인 콘텐츠 */}
      <div className={styles.mainContent}>
        <div className={styles.pageTitleSection}>
          <div className={styles.pageTitle}>답변 리스트</div>
        </div>

        <div className={styles.answersContainer}>
          <div className={styles.answersSection}>
            {/* 헤더 */}
            <div className={styles.answersHeader}>
              <div className={styles.contentHeader}>내용</div>
              <div className={styles.detailsHeader}>
                <div className={styles.nameHeader}>이름</div>
                <div className={styles.timeHeader}>시간</div>
                <div className={styles.scoreHeader}>점수</div>
              </div>
            </div>

            {/* 답변 리스트 */}
            {questionData.answers.length === 0 ? (
              <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'Pretendard, sans-serif', fontSize: '18px', color: '#868686' }}>
                답변이 없습니다.
              </div>
            ) : (
              questionData.answers.map((answer) => {
                const backgroundColor = answer.averageScore !== null
                  ? styles.getScoreColor(answer.averageScore)
                  : '#ffffff';

                const formatTime = (seconds: number): string => {
                  const minutes = Math.floor(seconds / 60);
                  const remainingSeconds = seconds % 60;
                  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
                };

                return (
                  <div
                    key={answer.id}
                    className={styles.answerItem}
                    style={{ backgroundColor }}
                    onClick={() => handleAnswerClick(answer.id)}
                  >
                    <div className={styles.answerContent}>{answer.content}</div>
                    <div className={styles.answerDetails}>
                      <div className={styles.answerName}>{answer.userId}</div>
                      <div className={styles.answerTime}>{formatTime(answer.time)}</div>
                      <div className={styles.answerScore}>
                        {answer.averageScore !== null ? answer.averageScore.toFixed(2) : '-'}
                      </div>
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
