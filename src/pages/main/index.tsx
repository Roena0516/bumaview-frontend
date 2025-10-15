import { useState, useEffect } from 'react';
import { Input, Button, FilterModal } from '../../shared/components';
import { useNavigation } from '../../shared/context/NavigationContext';
import { useAuth } from '../../shared/context/AuthContext';
import { useToast } from '../../shared/context/ToastContext';
import { getQuestions, type Question } from '../../api/questions';
import type { FilterData } from '../../shared/components';
import * as styles from './style';


export const MainPage = () => {
  const { navigateToPage, isTransitioning, isPartialTransition, setSelectedQuestionId } = useNavigation();
  const { isLoggedIn, user } = useAuth();
  const { showToast } = useToast();
  const [searchValue, setSearchValue] = useState('');
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState<FilterData>({
    company: '',
    category: '',
    question_at: ''
  });

  // 질문 목록 가져오기
  const fetchQuestions = async () => {
    setIsLoading(true);
    try {
      const filterParams = {
        ...(filters.company && { company: filters.company }),
        ...(filters.category && { category: filters.category }),
        ...(filters.question_at && { question_at: filters.question_at }),
        ...(searchValue.trim() && { query: searchValue.trim() })
      };

      const response = await getQuestions(filterParams);
      console.log('API 응답:', response); // 디버깅용
      setQuestions(response);
    } catch (error) {
      console.error('API 에러:', error); // 디버깅용
      let errorMessage = '질문을 불러오는 중 오류가 발생했습니다.';
      if (error && typeof error === 'object' && 'response' in error) {
        const response = (error as { response?: { data?: { message?: string } } }).response;
        if (response?.data?.message) {
          errorMessage = response.data.message;
        }
      }
      showToast(errorMessage, 'error');
      setQuestions([]); // 에러 시 빈 배열로 설정
    } finally {
      setIsLoading(false);
    }
  };

  // 컴포넌트 마운트 시 또는 필터/검색어 변경 시 질문 목록 가져오기
  useEffect(() => {
    fetchQuestions();
  }, [filters, searchValue]);

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const handleFilterClick = () => {
    setIsFilterModalOpen(true);
  };

  const handleFilterModalClose = () => {
    setIsFilterModalOpen(false);
  };

  const handleFilterApply = (newFilters: FilterData) => {
    setFilters(newFilters);
  };

  const handleInterviewClick = () => {
    navigateToPage('interview-setup');
  };

  const handleLoginClick = () => {
    navigateToPage('login');
  };

  const handleSignupClick = () => {
    navigateToPage('signup');
  };

  const handleQuestionClick = (questionId: string | number) => {
    console.log('질문 클릭:', questionId);
    setSelectedQuestionId(typeof questionId === 'string' ? parseInt(questionId) : questionId);
    navigateToPage('question-answers');
  };

  const handleLogoClick = () => {
    navigateToPage('main');
  };

  const handleNicknameClick = () => {
    navigateToPage('mypage');
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainContent}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.logo} onClick={handleLogoClick}>
              <div className={styles.logoText}>
                <span className="logo-bu">부마</span>
                <span className="logo-ma">뷰</span>
              </div>
            </div>
            <div className={styles.navigation}>
              {isLoggedIn && user ? (
                <div onClick={handleNicknameClick} style={{ cursor: 'pointer' }}>
                  {user.nickname}
                </div>
              ) : (
                <>
                  <div onClick={handleLoginClick} style={{ cursor: 'pointer' }}>
                    로그인
                  </div>
                  <div onClick={handleSignupClick} style={{ cursor: 'pointer' }}>
                    회원가입
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroTitle}>
            <div className={styles.heroMainTitle}>
              면접모음집
            </div>
            <div className={styles.heroSubTitle}>
              모의면접을해봐요
            </div>
          </div>
          <div className={styles.heroButton}>
            <Button
              variant="primary"
              size="large"
              onClick={handleInterviewClick}
            >
              면접 보기
            </Button>
          </div>
        </div>

        {/* Content Section */}
        <div
          className={styles.contentSection}
          style={{
            opacity: (isTransitioning && isPartialTransition) ? 0 : 1,
            transition: 'opacity 0.1s ease-in-out'
          }}
        >
          <div className={styles.contentTitle}>
            <div className={styles.contentTitleText}>
              면접 질문 리스트
            </div>
          </div>

          <div className={styles.searchArea}>
            {/* Search Top */}
            <div className={styles.searchTop}>
              <div className={styles.searchInputContainer}>
                <div className={styles.searchInput}>
                  <Input
                    variant="search"
                    placeholder="질문 검색..."
                    value={searchValue}
                    onChange={handleSearchChange}
                  />
                </div>
              </div>
              <div className={styles.filterButton}>
                <Button
                  variant="filter"
                  onClick={handleFilterClick}
                >
                  필터링
                </Button>
              </div>
            </div>

            {/* Questions Container */}
            <div className={styles.questionsContainer}>
              {/* Questions Header */}
              <div className={styles.questionsHeader}>
                <div className={styles.questionsHeaderContent}>
                  내용
                </div>
                <div className={styles.questionsHeaderDetail}>
                  <div className={`${styles.detailColumn} company`}>
                    회사
                  </div>
                  <div className={`${styles.detailColumn} field`}>
                    분야
                  </div>
                  <div className={`${styles.detailColumn} year`}>
                    연도
                  </div>
                </div>
              </div>

              {/* Questions List */}
              {isLoading ? (
                <div className={styles.loadingContainer}>
                  질문을 불러오는 중...
                </div>
              ) : !questions || questions.length === 0 ? (
                <div className={styles.emptyContainer}>
                  질문이 없습니다.
                </div>
              ) : (
                questions.map((question) => (
                  <div
                    key={question.id}
                    className={styles.questionItem}
                    onClick={() => handleQuestionClick(question.id)}
                  >
                    <div className={styles.questionContent}>
                      <div className={styles.questionText}>
                        {question.content}
                      </div>
                    </div>
                    <div className={styles.questionDetail}>
                      <div className={`${styles.detailColumn} company`}>
                        {question.company}
                      </div>
                      <div className={`${styles.detailColumn} field`}>
                        {question.category}
                      </div>
                      <div className={`${styles.detailColumn} year`}>
                        {question.questionAt}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 필터링 모달 */}
      <FilterModal
        isOpen={isFilterModalOpen}
        onClose={handleFilterModalClose}
        onApply={handleFilterApply}
        questions={questions}
      />
    </div>
  );
};