import { useState, useEffect } from 'react';
import { useNavigation } from '../../shared/context/NavigationContext';
import { useAuth } from '../../shared/context/AuthContext';
import { useToast } from '../../shared/context/ToastContext';
import { getMyInfo } from '../../api/getMyInfo';
import { getMyAnswers } from '../../api/getMyAnswers';
import { deleteAnswer } from '../../api/deleteAnswer';
import type { MyInfo } from '../../api/getMyInfo';
import type { MyAnswer } from '../../api/getMyAnswers';
import * as styles from './style';
import type { MyPageProps, UserAnswer } from './types';

const mockUserAnswers: UserAnswer[] = [
  {
    id: 1,
    content: "저는 대단한 개발자입니다. 저를 뽑지 않으면 큰 후회를 하게 될 것입니다.",
    time: "1:23",
    score: 0.21,
  },
  {
    id: 2,
    content: "넹",
    time: "0:03",
    score: 1.23,
  },
  {
    id: 3,
    content: "저는 프론트를 중심적으로 공부하고 개발하는 개발자입니다. 저를 뽑아주신다면 정말 열심히 하겠",
    time: "1:54",
    score: 2.43,
  },
  {
    id: 4,
    content: "저는 백엔드를 중심으로 개발하지만, 다양한 분야를 커버할 수 있습니다. 알지 못하는 분야라도 열",
    time: "5:45",
    score: 3.85,
  },
  {
    id: 5,
    content: "저는 백엔드를 좋아하는 개발자입니다. 하지만 백엔드 외에도 프론트엔드, 디자인과 같이 다른 분야도",
    time: "2:43",
    score: 4.54,
  },
];

export const MyPage = ({
  userAnswers = mockUserAnswers,
}: MyPageProps) => {
  const { navigateToPage, setSelectedQuestionId } = useNavigation();
  const { user, logout } = useAuth();
  const { showToast } = useToast();
  const [myInfo, setMyInfo] = useState<MyInfo | null>(null);
  const [myAnswers, setMyAnswers] = useState<MyAnswer[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [flippedAnswerId, setFlippedAnswerId] = useState<number | null>(null);

  // 내 정보 및 답변 조회
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const [info, answers] = await Promise.all([
          getMyInfo(),
          getMyAnswers()
        ]);
        console.log('내 정보 조회 API 응답:', info);
        console.log('내 답변 조회 API 응답:', answers);
        setMyInfo(info);
        setMyAnswers(answers);
      } catch (error) {
        console.error('데이터 조회 실패:', error);
        let errorMessage = '정보를 불러오는 중 오류가 발생했습니다.';
        if (error && typeof error === 'object' && 'response' in error) {
          const response = (error as { response?: { data?: { message?: string } } }).response;
          if (response?.data?.message) {
            errorMessage = response.data.message;
          }
        }
        showToast(errorMessage, 'error');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleLogoClick = () => {
    navigateToPage('main');
  };

  const handleLogoutClick = () => {
    logout();
    navigateToPage('main');
  };

  const handleAnswerClick = (answerId: number) => {
    setFlippedAnswerId(flippedAnswerId === answerId ? null : answerId);
  };

  const handleAnswerNavigation = (questionId: number) => {
    setSelectedQuestionId(questionId);
    navigateToPage('question-answers');
  };

  const handleContainerClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setFlippedAnswerId(null);
    }
  };

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleDeleteAnswer = async (e: React.MouseEvent, answerId: number) => {
    e.stopPropagation(); // 부모의 클릭 이벤트 방지

    if (!window.confirm('정말 이 답변을 삭제하시겠습니까?')) {
      return;
    }

    try {
      await deleteAnswer(answerId);
      showToast('답변이 삭제되었습니다.', 'success');

      // 답변 목록 다시 가져오기
      const updatedAnswers = await getMyAnswers();
      setMyAnswers(updatedAnswers);

      // 내 정보도 업데이트 (답변 수 변경)
      const updatedInfo = await getMyInfo();
      setMyInfo(updatedInfo);

      // 뒤집힌 카드 초기화
      setFlippedAnswerId(null);
    } catch (error) {
      let errorMessage = '답변 삭제 중 오류가 발생했습니다.';
      if (error && typeof error === 'object' && 'response' in error) {
        const response = (error as { response?: { data?: { message?: string } } }).response;
        if (response?.data?.message) {
          errorMessage = response.data.message;
        }
      }
      showToast(errorMessage, 'error');
    }
  };

  if (isLoading || !myInfo) {
    return (
      <div className={styles.myPageContainer}>
        <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'Pretendard, sans-serif', fontSize: '18px', color: '#868686' }}>
          {isLoading ? '로딩 중...' : '정보를 불러올 수 없습니다.'}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.myPageContainer}>
      {/* 헤더 */}
      <div className={styles.header}>
        <div className={styles.logo} onClick={handleLogoClick}>
          <div className={styles.logoText}>
            <span className="logo-bu">부마</span>
            <span className="logo-ma">뷰</span>
          </div>
        </div>
        <div className={styles.authSection}>
          <div className={styles.nickname}>
            {myInfo.id}
          </div>
        </div>
      </div>

      {/* 히어로 섹션 */}
      <div className={styles.heroSection}>
        <div className={styles.heroTitle}>
          <div className={styles.heroMainTitle}>마이페이지</div>
        </div>
        <button
          className={styles.logoutButton}
          onClick={handleLogoutClick}
        >
          로그아웃
        </button>
      </div>

      {/* 메인 콘텐츠 */}
      <div className={styles.content}>
        {/* 사용자 정보 섹션 */}
        <div className={styles.infoSection}>
          <div className={styles.infoCard}>
            <div className={styles.infoRow}>
              <div className={styles.infoLabel}>아이디</div>
              <div className={styles.infoValue}>{myInfo.id}</div>
            </div>
            <div className={styles.infoRow}>
              <div className={styles.infoLabel}>닉네임</div>
              <div className={styles.infoValue}>{myInfo.nickname}</div>
            </div>
          </div>
        </div>

        {/* 통계 정보 섹션 */}
        <div className={styles.infoSection}>
          <div className={styles.infoCard}>
            <div className={styles.infoRow}>
              <div className={styles.infoLabel}>답변 수</div>
              <div className={styles.infoValue}>{myInfo.answerCount}회</div>
            </div>
            <div className={styles.infoRow}>
              <div className={styles.infoLabel}>평균 점수</div>
              <div className={styles.infoValue}>{(myInfo.averageScore / 2).toFixed(1)}점</div>
            </div>
            <div className={styles.infoRow}>
              <div className={styles.infoLabel}>평가한 답변 수</div>
              <div className={styles.infoValue}>{myInfo.evaluatedCount}회</div>
            </div>
          </div>
        </div>

        {/* 내 답변 섹션 */}
        <div className={styles.sectionTitle}>내 답변</div>

        <div className={styles.answersSection}>
          <div className={styles.answersContainer} onClick={handleContainerClick}>
            <div className={styles.answersHeader}>
              <div className={styles.contentHeader}>내용</div>
              <div className={styles.detailsHeader}>
                <div className={styles.timeHeader}>시간</div>
                <div className={styles.scoreHeader}>점수</div>
              </div>
            </div>

            {myAnswers.length === 0 ? (
              <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'Pretendard, sans-serif', fontSize: '18px', color: '#868686' }}>
                작성한 답변이 없습니다.
              </div>
            ) : (
              myAnswers.map((answer) => {
                // 1~10 정수를 0.5~5.0 범위로 변환
                const displayScore = answer.averageScore / 2;
                const isFlipped = flippedAnswerId === answer.id;

                return (
                  <div
                    key={answer.id}
                    className={styles.answerItem}
                    onClick={() => handleAnswerClick(answer.id)}
                  >
                    <div className={isFlipped ? styles.cardInnerFlipped : styles.cardInner}>
                      {/* 앞면 */}
                      <div
                        className={styles.cardFront}
                        style={{ backgroundColor: styles.getScoreColor(displayScore) }}
                      >
                        <div className={styles.answerContent}>{answer.content}</div>
                        <div className={styles.answerDetails}>
                          <div className={styles.answerTime}>{formatTime(answer.time)}</div>
                          <div className={styles.answerScore}>{displayScore.toFixed(1)}</div>
                        </div>
                      </div>

                      {/* 뒷면 */}
                      <div className={styles.cardBack}>
                        <button
                          className={styles.detailButton}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleAnswerNavigation(answer.questionId);
                          }}
                        >
                          자세히 보기
                        </button>
                        <button
                          className={styles.deleteAnswerButton}
                          onClick={(e) => handleDeleteAnswer(e, answer.id)}
                        >
                          삭제
                        </button>
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