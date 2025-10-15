import { useState, useEffect } from 'react';
import { useToast } from '../../shared/context/ToastContext';
import { Input, Button, AddQuestionModal, FileUploadModal } from '../../shared/components';
import type { AddQuestionData } from '../../shared/components';
import { getQuestions } from '../../api/questions';
import { createQuestion } from '../../api/createQuestion';
import { uploadQuestions } from '../../api/uploadQuestions';
import type { Question } from '../../api/questions';
import * as styles from './style';

export const AdminPage = () => {
  const { showToast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isFileUploadModalOpen, setIsFileUploadModalOpen] = useState(false);

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

  const handleExcelUploadClick = () => {
    setIsFileUploadModalOpen(true);
  };

  const handleFileUploadModalClose = () => {
    setIsFileUploadModalOpen(false);
  };

  const handleFileUpload = async (file: File) => {
    try {
      await uploadQuestions(file);
      showToast('파일이 업로드되었습니다!', 'success');
      setIsFileUploadModalOpen(false);

      // 질문 목록 새로고침
      fetchQuestions(searchQuery);
    } catch (error) {
      let errorMessage = '파일 업로드 중 오류가 발생했습니다.';
      if (error && typeof error === 'object' && 'response' in error) {
        const response = (error as { response?: { data?: { message?: string } } }).response;
        if (response?.data?.message) {
          errorMessage = response.data.message;
        }
      }
      showToast(errorMessage, 'error');
      throw error;
    }
  };

  const handleManualAddClick = () => {
    setIsFileUploadModalOpen(false);
    setIsAddModalOpen(true);
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

  const handleLogoClick = () => {
    // Admin stays on admin page
    console.log('Logo clicked');
  };

  return (
    <div className={styles.adminContainer}>
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
              <div>ADMIN</div>
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
              onClick={handleAddQuestionClick}
            >
              질문 추가
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
                    value={searchQuery}
                    onChange={handleSearchChange}
                    disabled={isLoading}
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
              ) : questions.length === 0 ? (
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

      {/* 질문 추가 모달 */}
      <AddQuestionModal
        isOpen={isAddModalOpen}
        onClose={handleAddModalClose}
        onAdd={handleAddQuestion}
        onExcelUpload={handleExcelUploadClick}
        questions={questions}
      />

      {/* 파일 업로드 모달 */}
      <FileUploadModal
        isOpen={isFileUploadModalOpen}
        onClose={handleFileUploadModalClose}
        onUpload={handleFileUpload}
        onManualAdd={handleManualAddClick}
      />
    </div>
  );
};
