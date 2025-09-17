import { useNavigation } from "../../shared/context/NavigationContext";
import { Button } from "../../shared/components";
import * as styles from "./style";

interface Answer {
  id: number;
  content: string;
  userName: string;
  time: string;
  score: number;
}

interface QuestionAnswersPageProps {
  questionTitle?: string;
  company?: string;
  field?: string;
  year?: string;
}

const mockAnswers: Answer[] = [
  {
    id: 1,
    content:
      "저는 대단한 개발자입니다. 저를 뽑지 않으면 큰 후회를 하게 될 것입니다.",
    userName: "박동현",
    time: "1:23",
    score: 0.21,
  },
  {
    id: 2,
    content: "넹",
    userName: "박소은",
    time: "0:03",
    score: 1.23,
  },
  {
    id: 3,
    content:
      "저는 프론트를 중심적으로 공부하고 개발하는 개발자입니다. 저를 뽑아주신다면 정말 열심히 하겠습니다.",
    userName: "류승찬",
    time: "1:54",
    score: 2.43,
  },
  {
    id: 4,
    content:
      "저는 백엔드를 중심으로 개발하지만, 다양한 분야를 커버할 수 있습니다. 알지 못하는 분야라도 열심히 공부하여 빠르게 적응할 자신이 있습니다.",
    userName: "박동현",
    time: "5:45",
    score: 3.85,
  },
  {
    id: 5,
    content:
      "저는 백엔드를 좋아하는 개발자입니다. 하지만 백엔드 외에도 프론트엔드, 디자인과 같이 다른 분야도 관심이 많습니다. 다양한 분야를 경험해보고 싶습니다.",
    userName: "김유찬",
    time: "2:43",
    score: 4.54,
  },
];

export const QuestionAnswersPage = ({
  questionTitle = "간단한 자기소개 부탁드립니다.",
  company = "마이다스IT",
  field = "백엔드",
  year = "2023",
}: QuestionAnswersPageProps) => {
  const { navigateToPage } = useNavigation();

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
          <div className={styles.authLink} onClick={handleLoginClick}>
            로그인
          </div>
          <div className={styles.authLink} onClick={handleSignupClick}>
            회원가입
          </div>
        </div>
      </div>

      {/* 질문 섹션 */}
      <div className={styles.questionSection}>
        <div className={styles.questionInfo}>
          <div className={styles.questionTitle}>{questionTitle}</div>
          <div className={styles.questionDetail}>
            {company} / {field} / {year}
          </div>
        </div>
      </div>

      {/* 메인 콘텐츠 */}
      <div className={styles.mainContent}>
        <div className={styles.pageTitleSection}>
          <div className={styles.pageTitle}>답변 리스트</div>
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
            {mockAnswers.map((answer) => (
              <div
                key={answer.id}
                className={styles.answerItem}
                style={{ backgroundColor: styles.getScoreColor(answer.score) }}
              >
                <div className={styles.answerContent}>{answer.content}</div>
                <div className={styles.answerDetails}>
                  <div className={styles.answerName}>{answer.userName}</div>
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
