import { useState } from 'react';
import { css } from '@emotion/css';
import { Input } from './Input';
import { Dropdown } from './Dropdown';
import { Button } from './Button';

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (filters: FilterData) => void;
}

export interface FilterData {
  company: string;
  field: string;
  year: string;
}

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
`;

const modalStyle = css`
  background: white;
  border-radius: 16px;
  width: 800px;
  max-width: 90vw;
  padding: 16px 10px 10px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  box-sizing: border-box;
  overflow: visible;
  position: relative;
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
  padding: 8px 16px;
  width: 780px;
  box-sizing: border-box;
`;

const fieldLabelStyle = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 20px;
  color: #1a1515;
  font-weight: 400;
  line-height: normal;
`;

const twoColumnStyle = css`
  display: flex;
  gap: 10px;
  overflow: visible;
`;

const columnStyle = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 8px 16px;
  width: 385px;
  box-sizing: border-box;
`;

const inputStyle = css`
  width: 100%;
  height: 45px;
`;

const dropdownStyle = css`
  width: 353px;
  height: 45px;
`;

const buttonsStyle = css`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: flex-end;
  padding: 8px 16px;
  width: 100%;
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

const applyButtonStyle = css`
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
`;

export const FilterModal = ({ isOpen, onClose, onApply }: FilterModalProps) => {
  const [company, setCompany] = useState('');
  const [field, setField] = useState('');
  const [year, setYear] = useState('');

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleCancel = () => {
    setCompany('');
    setField('');
    setYear('');
    onClose();
  };

  const handleApply = () => {
    onApply({ company, field, year });
    onClose();
  };

  const handleCompanyChange = (value: string) => {
    setCompany(value);
  };

  const handleFieldChange = (value: string) => {
    setField(value);
  };

  const handleYearChange = (value: string) => {
    setYear(value);
  };

  return (
    <div className={overlayStyle} onClick={handleOverlayClick}>
      <div className={modalStyle}>
        <div className={contentsStyle}>
          {/* 회사 이름 필드 */}
          <div className={fieldGroupStyle}>
            <div className={fieldLabelStyle}>회사 이름</div>
            <div className={inputStyle}>
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
              <div className={dropdownStyle}>
                <Dropdown
                  value={field}
                  placeholder="전부"
                  options={["전부", "백엔드", "프론트엔드", "AI", "DevOps"]}
                  onChange={handleFieldChange}
                />
              </div>
            </div>
            <div className={columnStyle}>
              <div className={fieldLabelStyle}>학년도</div>
              <div className={dropdownStyle}>
                <Dropdown
                  value={year}
                  placeholder="전부"
                  options={["전부", "2023", "2024", "2025"]}
                  onChange={handleYearChange}
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