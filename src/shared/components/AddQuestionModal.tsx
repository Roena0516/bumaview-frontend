import { useState } from 'react';
import { css, keyframes } from '@emotion/css';
import { Input } from './Input';
import { Dropdown } from './Dropdown';

interface AddQuestionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (data: AddQuestionData) => void;
}

export interface AddQuestionData {
  content: string;
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
  border-radius: 16px;
  width: 800px;
  max-width: 90vw;
  padding: 16px 26px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  box-sizing: border-box;
  overflow: visible;
  position: relative;
  animation: ${slideUp} 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;

const contentsStyle = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: visible;
`;

const fieldGroupStyle = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 8px 0;
  width: 100%;
  box-sizing: border-box;
`;

const fieldLabelStyle = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 20px;
  color: #1a1515;
  font-weight: 400;
  line-height: normal;
`;

const textareaStyle = css`
  width: 100%;
  height: 77px;
  padding: 10px 20px;
  font-size: 18px;
  color: #1a1515;
  background: white;
  border: 1px solid #c47e7e;
  border-radius: 8px;
  outline: none;
  font-weight: 400;
  font-family: 'Pretendard', sans-serif;
  resize: none;
  box-sizing: border-box;

  &::placeholder {
    color: rgba(0, 0, 0, 0.25);
  }

  &:focus {
    border-color: #c47e7e;
  }
`;

const inputWrapperStyle = css`
  width: 100%;
  height: 45px;
`;

const twoColumnStyle = css`
  display: flex;
  gap: 42px;
  overflow: visible;
`;

const columnStyle = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 8px 0;
  flex: 1;
  box-sizing: border-box;
`;

const dropdownWrapperStyle = css`
  width: 100%;
  height: 45px;
`;

const bottomSectionStyle = css`
  display: flex;
  height: 58px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const excelLinkStyle = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: black;
  text-align: center;
  cursor: pointer;
  white-space: pre;

  &:hover {
    opacity: 0.8;
  }
`;

const buttonsStyle = css`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;
`;

const cancelButtonStyle = css`
  background: rgba(197, 197, 197, 0.8);
  color: #1a1515;
  border: none;
  border-radius: 8px;
  height: 42px;
  width: 110px;
  font-family: 'Pretendard', sans-serif;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.9;
  }
`;

const addButtonStyle = css`
  background: rgba(255, 203, 207, 0.8);
  color: #1a1515;
  border: none;
  border-radius: 8px;
  height: 42px;
  width: 110px;
  font-family: 'Pretendard', sans-serif;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

// 드롭다운 옵션들
const categoryOptions = ['전부', '백엔드', '프론트엔드', 'AI', '데브옵스', '기타'];
const currentYear = new Date().getFullYear();
const yearOptions = ['전부', ...Array.from({ length: 10 }, (_, i) => (currentYear - i).toString())];

export const AddQuestionModal = ({ isOpen, onClose, onAdd }: AddQuestionModalProps) => {
  const [content, setContent] = useState('');
  const [company, setCompany] = useState('');
  const [category, setCategory] = useState('');
  const [questionAt, setQuestionAt] = useState('');

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleCancel = () => {
    setContent('');
    setCompany('');
    setCategory('');
    setQuestionAt('');
    onClose();
  };

  const handleAdd = () => {
    if (!content.trim()) {
      return;
    }

    onAdd({
      content: content.trim(),
      company: company || '',
      category: category === '전부' ? '' : category,
      question_at: questionAt === '전부' ? '' : questionAt
    });

    // 폼 초기화
    setContent('');
    setCompany('');
    setCategory('');
    setQuestionAt('');
  };

  const handleExcelUploadClick = () => {
    // TODO: 엑셀 파일 업로드 기능 구현
    console.log('엑셀 파일 업로드 클릭');
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
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

  const isFormValid = content.trim().length > 0;

  return (
    <div className={overlayStyle} onClick={handleOverlayClick}>
      <div className={modalStyle}>
        <div className={contentsStyle}>
          {/* 면접 질문 필드 */}
          <div className={fieldGroupStyle}>
            <div className={fieldLabelStyle}>면접 질문</div>
            <textarea
              className={textareaStyle}
              placeholder="면접 질문을 입력해주세요"
              value={content}
              onChange={handleContentChange}
            />
          </div>

          {/* 회사 이름 필드 */}
          <div className={fieldGroupStyle}>
            <div className={fieldLabelStyle}>회사 이름</div>
            <div className={inputWrapperStyle}>
              <Input
                variant="default"
                placeholder="회사 이름을 입력해주세요."
                value={company}
                onChange={handleCompanyChange}
              />
            </div>
          </div>

          {/* 분야와 학년도 필드 */}
          <div className={twoColumnStyle}>
            <div className={columnStyle}>
              <div className={fieldLabelStyle}>분야</div>
              <div className={dropdownWrapperStyle}>
                <Dropdown
                  value={category}
                  placeholder="전부"
                  options={categoryOptions}
                  onChange={handleCategoryChange}
                />
              </div>
            </div>
            <div className={columnStyle}>
              <div className={fieldLabelStyle}>학년도</div>
              <div className={dropdownWrapperStyle}>
                <Dropdown
                  value={questionAt}
                  placeholder="전부"
                  options={yearOptions}
                  onChange={handleQuestionAtChange}
                />
              </div>
            </div>
          </div>
        </div>

        {/* 하단 섹션: 엑셀 업로드 링크와 버튼들 */}
        <div className={bottomSectionStyle}>
          <div className={excelLinkStyle} onClick={handleExcelUploadClick}>
            엑셀 파일 업로드하기 &gt;
          </div>
          <div className={buttonsStyle}>
            <button className={cancelButtonStyle} onClick={handleCancel}>
              취소
            </button>
            <button
              className={addButtonStyle}
              onClick={handleAdd}
              disabled={!isFormValid}
            >
              완료
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
