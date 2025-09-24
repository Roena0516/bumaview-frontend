import { useNavigation } from '../../shared/context/NavigationContext';
import { useAuth } from '../../shared/context/AuthContext';
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
  const { navigateToPage } = useNavigation();
  const { user, logout } = useAuth();

  const handleLogoClick = () => {
    navigateToPage('main');
  };

  const handleLogoutClick = () => {
    logout();
    navigateToPage('main');
  };

  const handleAnswerClick = (answer: UserAnswer) => {
    navigateToPage('answer-detail');
  };

  if (!user) {
    return null;
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
            {user.nickname}
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
              <div className={styles.infoValue}>{user.id}</div>
            </div>
            <div className={styles.infoRow}>
              <div className={styles.infoLabel}>닉네임</div>
              <div className={styles.infoValue}>{user.nickname}</div>
            </div>
          </div>
        </div>

        {/* 통계 정보 섹션 */}
        <div className={styles.infoSection}>
          <div className={styles.infoCard}>
            <div className={styles.infoRow}>
              <div className={styles.infoLabel}>답변 수</div>
              <div className={styles.infoValue}>{user.answerCount}회</div>
            </div>
            <div className={styles.infoRow}>
              <div className={styles.infoLabel}>평균 점수</div>
              <div className={styles.infoValue}>{user.averageScore}점</div>
            </div>
            <div className={styles.infoRow}>
              <div className={styles.infoLabel}>평가한 답변 수</div>
              <div className={styles.infoValue}>{user.evaluationCount}회</div>
            </div>
          </div>
        </div>

        {/* 내 답변 섹션 */}
        <div className={styles.sectionTitle}>내 답변</div>

        <div className={styles.answersSection}>
          <div className={styles.answersContainer}>
            <div className={styles.answersHeader}>
              <div className={styles.contentHeader}>내용</div>
              <div className={styles.detailsHeader}>
                <div className={styles.timeHeader}>시간</div>
                <div className={styles.scoreHeader}>점수</div>
              </div>
            </div>

            {userAnswers.map((answer) => (
              <div
                key={answer.id}
                className={styles.answerItem}
                style={{ backgroundColor: styles.getScoreColor(answer.score) }}
                onClick={() => handleAnswerClick(answer)}
              >
                <div className={styles.answerContent}>{answer.content}</div>
                <div className={styles.answerDetails}>
                  <div className={styles.answerTime}>{answer.time}</div>
                  <div className={styles.answerScore}>{answer.score}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};