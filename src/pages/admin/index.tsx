import { useState, useEffect } from 'react';
import { useNavigation } from '../../shared/context/NavigationContext';
import { useToast } from '../../shared/context/ToastContext';
import { Input, Button, AddQuestionModal } from '../../shared/components';
import type { AddQuestionData } from '../../shared/components';
import { getQuestions } from '../../api/questions';
import { createQuestion } from '../../api/createQuestion';
import type { Question } from '../../api/questions';
import * as styles from './style';

export const AdminPage = () => {
  const { navigateToPage } = useNavigation();
  const { showToast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // 질문 목록 불러오기
  const fetchQuestions = async (query?: string) => {
    setIsLoading(true);
    try {
      const response = await getQuestions(query ? { query } : undefined);
      setQuestions(response);
    } catch (error) {
      showToast('질문 목록을 불러오는 중 오류가 발생했습니다.', 'error');
      console.error('Failed to fetch questions:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // 컴포넌트 마운트 시 또는 검색어 변경 시 질문 목록 불러오기
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchQuestions(searchQuery);
    }, 300); // 300ms 디바운스

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  const handleAddQuestionClick = () => {
    setIsAddModalOpen(true);
  };

  const handleAddModalClose = () => {
    setIsAddModalOpen(false);
  };

  const handleAddQuestion = async (data: AddQuestionData) => {
    try {
      await createQuestion({
        content: data.content,
        category: data.category,
        company: data.company || undefined,
        questionAt: data.question_at || undefined
      });

      showToast('질문이 추가되었습니다!', 'success');
      setIsAddModalOpen(false);

      // 질문 목록 새로고침
      fetchQuestions(searchQuery);
    } catch (error) {
      let errorMessage = '질문 추가 중 오류가 발생했습니다.';
      if (error && typeof error === 'object' && 'response' in error) {
        const response = (error as { response?: { data?: { message?: string } } }).response;
        if (response?.data?.message) {
          errorMessage = response.data.message;
        }
      }
      showToast(errorMessage, 'error');
    }
  };

  const handleFilterClick = () => {
    // TODO: Open filter modal
    console.log('Filter clicked');
  };

  const handleQuestionClick = (questionId: number) => {
    // TODO: Navigate to edit question page or open modal
    console.log('Question clicked:', questionId);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
  };

  return (
    <div className={styles.adminContainer}>
      <div className={styles.mainContent}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerInner}>
            <div className={styles.logo}>
              <div className={styles.logoText}>
                <span className="logo-bu">부마</span>
                <span className="logo-ma">뷰</span>
              </div>
            </div>
            <div className={styles.adminLabel}>
              <p className={styles.adminText}>ADMIN</p>
            </div>
          </div>
        </div>

        {/* Section (Pink banner) */}
        <div className={styles.section}>
          <div className={styles.titleContainer}>
            <p className={styles.titleMain}>면접모음집</p>
            <p className={styles.titleSub}>모의면접을해봐요</p>
          </div>
          <div className={styles.addButtonContainer}>
            <div className={styles.addButton} onClick={handleAddQuestionClick}>
              <p className={styles.addButtonText}>질문 추가</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className={styles.content}>
          <div className={styles.contentInner}>
            {/* Top section with search and filter */}
            <div className={styles.topSection}>
              <div className={styles.searchContainer}>
                <Input
                  variant="search"
                  placeholder="질문 검색..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  disabled={isLoading}
                />
              </div>
              <Button variant="filter" onClick={handleFilterClick}>
                필터링
              </Button>
            </div>

            {/* Questions list */}
            <div className={styles.questionsContainer}>
              {/* Header row */}
              <div className={styles.questionsTop}>
                <p className={styles.questionsTopContent}>내용</p>
                <div className={styles.questionsTopDetail}>
                  <div className={`${styles.questionsTopDetailItem} ${styles.questionsTopCompany}`}>
                    <p>회사</p>
                  </div>
                  <div className={`${styles.questionsTopDetailItem} ${styles.questionsTopField}`}>
                    <p>분야</p>
                  </div>
                  <div className={`${styles.questionsTopDetailItem} ${styles.questionsTopYear}`}>
                    <p>연도</p>
                  </div>
                </div>
              </div>

              {/* Question items */}
              {isLoading ? (
                <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'Pretendard, sans-serif', fontSize: '18px', color: '#868686' }}>
                  로딩 중...
                </div>
              ) : questions.length === 0 ? (
                <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'Pretendard, sans-serif', fontSize: '18px', color: '#868686' }}>
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
                      <p className={styles.questionText}>{question.content}</p>
                    </div>
                    <div className={styles.questionDetail}>
                      <p className={styles.questionCompany}>{question.company}</p>
                      <p className={styles.questionField}>{question.category}</p>
                      <p className={styles.questionYear}>{question.questionAt}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 질문 추가 모달 */}
      <AddQuestionModal
        isOpen={isAddModalOpen}
        onClose={handleAddModalClose}
        onAdd={handleAddQuestion}
      />
    </div>
  );
};
