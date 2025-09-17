import { useState } from 'react';
import { Input, Dropdown } from '../../shared/components';
import { BackIcon } from '../../shared/components/BackIcon';
import { useNavigation } from '../../shared/context/NavigationContext';
import * as styles from './style';

export const InterviewSetupPage = () => {
  const { navigateToPage } = useNavigation();
  const [questionCount, setQuestionCount] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [field, setField] = useState('');
  const [year, setYear] = useState('');

  const fieldOptions = [
    { label: '전체', value: 'all' },
    { label: '개발', value: 'development' },
    { label: '디자인', value: 'design' },
    { label: '기획', value: 'planning' },
    { label: '마케팅', value: 'marketing' }
  ];

  const yearOptions = [
    { label: '전체', value: 'all' },
    { label: '2024', value: '2024' },
    { label: '2023', value: '2023' },
    { label: '2022', value: '2022' },
    { label: '2021', value: '2021' }
  ];

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
    if (!questionCount || !companyName || !field || !year) {
      alert('모든 필드를 입력해 주세요.');
      return;
    }

    console.log('면접 시작', { questionCount, companyName, field, year });
    navigateToPage('interview');
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
                <Input
                  variant="default"
                  placeholder="회사 이름을 입력해주세요"
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