import { useState, useEffect, useMemo } from 'react';
import { Input, Dropdown } from '../../shared/components';
import { BackIcon } from '../../shared/components/BackIcon';
import { useNavigation } from '../../shared/context/NavigationContext';
import { useToast } from '../../shared/context/ToastContext';
import { getQuestions, type Question } from '../../api/questions';
import * as styles from './style';

export const InterviewSetupPage = () => {
  const { navigateToPage, setInterviewSettings } = useNavigation();
  const { showToast } = useToast();
  const [questionCount, setQuestionCount] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [field, setField] = useState('');
  const [year, setYear] = useState('');
  const [questions, setQuestions] = useState<Question[]>([]);

  // 질문 목록 가져오기
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await getQuestions();
        setQuestions(response);
      } catch (error) {
        console.error('Failed to fetch questions:', error);
      }
    };
    fetchQuestions();
  }, []);

  // 동적으로 옵션 생성
  const companyOptions = useMemo(() => {
    const unique = Array.from(new Set(questions.map(q => q.company).filter(c => c && c.trim() !== '')));
    return ['전부', ...unique.sort()];
  }, [questions]);

  const fieldOptions = useMemo(() => {
    const unique = Array.from(new Set(questions.map(q => q.category).filter(c => c && c.trim() !== '')));
    return ['전부', ...unique.sort()];
  }, [questions]);

  const yearOptions = useMemo(() => {
    const unique = Array.from(new Set(questions.map(q => q.questionAt).filter(y => y && y.trim() !== '')));
    return ['전부', ...unique.sort((a, b) => b.localeCompare(a))]; // 최신순
  }, [questions]);

  const handleBackClick = () => {
    navigateToPage('main');
  };

  const handleQuestionCountChange = (value: string) => {
    setQuestionCount(value);
  };

  const handleCompanyNameChange = (value: string) => {
    setCompanyName(value);
  };

  const handleFieldChange = (value: string) => {
    setField(value);
  };

  const handleYearChange = (value: string) => {
    setYear(value);
  };

  const handleCancelClick = () => {
    navigateToPage('main');
  };

  const handleStartClick = () => {
    if (!questionCount) {
      showToast('질문 개수를 입력해 주세요.', 'error');
      return;
    }

    const count = parseInt(questionCount);
    if (isNaN(count) || count <= 0) {
      showToast('유효한 질문 개수를 입력해 주세요.', 'error');
      return;
    }

    // 면접 설정 저장
    setInterviewSettings({
      amount: count,
      company: companyName && companyName !== '전부' ? companyName : undefined,
      category: field && field !== '전부' ? field : undefined,
      questionAt: year && year !== '전부' ? year : undefined
    });

    console.log('면접 시작', { questionCount: count, companyName, field, year });
    navigateToPage('interview-loading');
  };

  return (
    <div className={styles.interviewSetupContainer}>
      {/* 헤더 */}
      <div className={styles.header}>
        <div className={styles.backSection} onClick={handleBackClick}>
          <BackIcon />
          <span className={styles.backText}>면접 종료</span>
        </div>
        <div className={styles.timer}>0:00</div>
        <div className={styles.spacer}></div>
      </div>

      {/* 메인 콘텐츠 */}
      <div className={styles.mainContent}>
        <div className={styles.modal}>
          {/* 폼 필드들 */}
          <div className={styles.formFields}>
            {/* 질문 개수 */}
            <div className={styles.fieldGroup}>
              <div className={styles.fieldLabel}>질문 개수</div>
              <div className={styles.fieldInput}>
                <Input
                  variant="default"
                  placeholder="질문 개수를 입력해주세요"
                  value={questionCount}
                  onChange={handleQuestionCountChange}
                />
              </div>
            </div>

            {/* 회사 이름 */}
            <div className={styles.fieldGroup}>
              <div className={styles.fieldLabel}>회사 이름</div>
              <div className={styles.fieldInput}>
                <Dropdown
                  placeholder="회사를 선택해주세요"
                  options={companyOptions}
                  value={companyName}
                  onChange={handleCompanyNameChange}
                />
              </div>
            </div>

            {/* 분야 & 학년도 */}
            <div className={styles.fieldRow}>
              <div className={styles.halfFieldGroup}>
                <div className={styles.fieldLabel}>분야</div>
                <div className={styles.fieldInput}>
                  <Dropdown
                    placeholder="분야를 선택해주세요"
                    options={fieldOptions}
                    value={field}
                    onChange={handleFieldChange}
                  />
                </div>
              </div>
              <div className={styles.halfFieldGroup}>
                <div className={styles.fieldLabel}>학년도</div>
                <div className={styles.fieldInput}>
                  <Dropdown
                    placeholder="학년도를 선택해주세요"
                    options={yearOptions}
                    value={year}
                    onChange={handleYearChange}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 버튼 섹션 */}
          <div className={styles.buttonSection}>
            <div className={styles.cancelButton} onClick={handleCancelClick}>
              <span className={styles.cancelButtonText}>취소</span>
            </div>
            <div className={styles.startButton} onClick={handleStartClick}>
              <span className={styles.startButtonText}>시작하기</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};