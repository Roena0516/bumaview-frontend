import { useState, useMemo } from 'react';
import { css, keyframes } from '@emotion/css';
import { Dropdown } from './Dropdown';
import { pxToRem } from '../utils/pxToRem';

interface Question {
  id: number;
  content: string;
  company: string;
  category: string;
  questionAt: string;
}

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (filters: FilterData) => void;
  questions?: Question[];
}

export interface FilterData {
  company: string;
  category: string;
  question_at: string;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const overlayStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: ${fadeIn} 0.2s ease-out;
`;

const modalStyle = css`
  background: white;
  border-radius: ${pxToRem(16)};
  width: ${pxToRem(800)};
  max-width: 90vw;
  padding: ${pxToRem(16)} ${pxToRem(10)} ${pxToRem(10)};
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(30)};
  box-sizing: border-box;
  overflow: visible;
  position: relative;
  animation: ${slideUp} 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;

const contentsStyle = css`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(10)};
  overflow: visible;
`;

const fieldGroupStyle = css`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(10)};
  padding: ${pxToRem(8)} ${pxToRem(16)};
  width: ${pxToRem(780)};
  box-sizing: border-box;
`;

const fieldLabelStyle = css`
  font-family: 'Pretendard', sans-serif;
  font-size: ${pxToRem(20)};
  color: #1a1515;
  font-weight: 400;
  line-height: normal;
`;

const twoColumnStyle = css`
  display: flex;
  gap: ${pxToRem(10)};
  overflow: visible;
`;

const columnStyle = css`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(10)};
  padding: ${pxToRem(8)} ${pxToRem(16)};
  width: ${pxToRem(385)};
  box-sizing: border-box;
`;

const inputStyle = css`
  width: 100%;
  height: ${pxToRem(45)};
`;

const dropdownStyle = css`
  width: ${pxToRem(353)};
  height: ${pxToRem(45)};
`;

const buttonsStyle = css`
  display: flex;
  gap: ${pxToRem(12)};
  align-items: center;
  justify-content: flex-end;
  padding: ${pxToRem(8)} ${pxToRem(16)};
  width: 100%;
  box-sizing: border-box;
`;

const cancelButtonStyle = css`
  background: rgba(197, 197, 197, 0.8);
  color: #1a1515;
  border: none;
  border-radius: ${pxToRem(8)};
  height: ${pxToRem(42)};
  width: ${pxToRem(110)};
  font-family: 'Pretendard', sans-serif;
  font-size: ${pxToRem(18)};
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.9;
  }
`;

const applyButtonStyle = css`
  background: rgba(255, 203, 207, 0.8);
  color: #1a1515;
  border: none;
  border-radius: ${pxToRem(8)};
  height: ${pxToRem(42)};
  width: ${pxToRem(110)};
  font-family: 'Pretendard', sans-serif;
  font-size: ${pxToRem(18)};
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.9;
  }
`;

export const FilterModal = ({ isOpen, onClose, onApply, questions = [] }: FilterModalProps) => {
  const [company, setCompany] = useState('');
  const [category, setCategory] = useState('');
  const [question_at, setQuestionAt] = useState('');

  // 질문 목록에서 고유한 값들 추출
  const companyOptions = useMemo(() => {
    const unique = Array.from(new Set(questions.map(q => q.company).filter(c => c && c.trim() !== '')));
    return ['전부', ...unique.sort()];
  }, [questions]);

  const categoryOptions = useMemo(() => {
    const unique = Array.from(new Set(questions.map(q => q.category).filter(c => c && c.trim() !== '')));
    return ['전부', ...unique.sort()];
  }, [questions]);

  const questionAtOptions = useMemo(() => {
    const unique = Array.from(new Set(questions.map(q => q.questionAt).filter(y => y && y.trim() !== '')));
    return ['전부', ...unique.sort((a, b) => b.localeCompare(a))]; // 최신순
  }, [questions]);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleCancel = () => {
    setCompany('');
    setCategory('');
    setQuestionAt('');
    onClose();
  };

  const handleApply = () => {
    onApply({
      company: company === '전부' ? '' : company,
      category: category === '전부' ? '' : category,
      question_at: question_at === '전부' ? '' : question_at
    });
    onClose();
  };

  const handleCompanyChange = (value: string) => {
    setCompany(value);
  };

  const handleCategoryChange = (value: string) => {
    setCategory(value);
  };

  const handleQuestionAtChange = (value: string) => {
    setQuestionAt(value);
  };

  return (
    <div className={overlayStyle} onClick={handleOverlayClick}>
      <div className={modalStyle}>
        <div className={contentsStyle}>
          {/* 회사 이름 필드 */}
          <div className={fieldGroupStyle}>
            <div className={fieldLabelStyle}>회사 이름</div>
            <div className={inputStyle}>
              <Dropdown
                value={company}
                placeholder="전부"
                options={companyOptions}
                onChange={handleCompanyChange}
              />
            </div>
          </div>

          {/* 분야와 출제년도 필드 */}
          <div className={twoColumnStyle}>
            <div className={columnStyle}>
              <div className={fieldLabelStyle}>분야</div>
              <div className={dropdownStyle}>
                <Dropdown
                  value={category}
                  placeholder="전부"
                  options={categoryOptions}
                  onChange={handleCategoryChange}
                />
              </div>
            </div>
            <div className={columnStyle}>
              <div className={fieldLabelStyle}>출제년도</div>
              <div className={dropdownStyle}>
                <Dropdown
                  value={question_at}
                  placeholder="전부"
                  options={questionAtOptions}
                  onChange={handleQuestionAtChange}
                />
              </div>
            </div>
          </div>
        </div>

        {/* 버튼들 */}
        <div className={buttonsStyle}>
          <button className={cancelButtonStyle} onClick={handleCancel}>
            취소
          </button>
          <button className={applyButtonStyle} onClick={handleApply}>
            완료
          </button>
        </div>
      </div>
    </div>
  );
};