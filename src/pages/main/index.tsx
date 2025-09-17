import { useState } from 'react';
import { Input, Button, FilterModal } from '../../shared/components';
import { useNavigation } from '../../shared/context/NavigationContext';
import type { InterviewQuestion } from './types';
import type { FilterData } from '../../shared/components';
import * as styles from './style';

const mockQuestions: InterviewQuestion[] = [
  {
    id: '1',
    content: '간단한 자기소개 부탁드립니다.',
    company: '마이다스IT',
    field: '백엔드',
    year: 2023
  },
  {
    id: '2',
    content: '프로젝트를 하면서 가장 중요하게 생각하는 것이 무엇인가요?',
    company: '마이다스IT',
    field: '백엔드',
    year: 2023
  },
  {
    id: '3',
    content: '우리 회사에 왜 지원하게 되었나요?',
    company: '모비어스',
    field: '백엔드',
    year: 2024
  },
  {
    id: '4',
    content: '요즘 무슨 책 읽고 계신가요?',
    company: 'U2SR',
    field: 'AI',
    year: 2025
  },
  {
    id: '5',
    content: '우리 회사에 왜 지원하게 되었나요?',
    company: '모비어스',
    field: '백엔드',
    year: 2024
  },
  {
    id: '6',
    content: '우리 회사에 왜 지원하게 되었나요?',
    company: '모비어스',
    field: '백엔드',
    year: 2024
  },
  {
    id: '7',
    content: '우리 회사에 왜 지원하게 되었나요?',
    company: '모비어스',
    field: '백엔드',
    year: 2024
  },
  {
    id: '8',
    content: '우리 회사에 왜 지원하게 되었나요?',
    company: '모비어스',
    field: '백엔드',
    year: 2024
  },
  {
    id: '9',
    content: '우리 회사에 왜 지원하게 되었나요?',
    company: '모비어스',
    field: '백엔드',
    year: 2024
  }
];

export const MainPage = () => {
  const { navigateToPage } = useNavigation();
  const [searchValue, setSearchValue] = useState('');
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [filters, setFilters] = useState<FilterData>({
    company: '',
    field: '',
    year: ''
  });

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
    console.log('Applied filters:', newFilters);
    // TODO: 실제 필터링 로직 구현
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
    navigateToPage('question-answers');
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainContent}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.logo}>
              <div className={styles.logoText}>
                <span className="logo-bu">부마</span>
                <span className="logo-ma">뷰</span>
              </div>
            </div>
            <div className={styles.navigation}>
              <div onClick={handleLoginClick} style={{ cursor: 'pointer' }}>
                로그인
              </div>
              <div onClick={handleSignupClick} style={{ cursor: 'pointer' }}>
                회원가입
              </div>
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
        <div className={styles.contentSection}>
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
              {mockQuestions.map((question) => (
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
                      {question.field}
                    </div>
                    <div className={`${styles.detailColumn} year`}>
                      {question.year}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 필터링 모달 */}
      <FilterModal
        isOpen={isFilterModalOpen}
        onClose={handleFilterModalClose}
        onApply={handleFilterApply}
      />
    </div>
  );
};