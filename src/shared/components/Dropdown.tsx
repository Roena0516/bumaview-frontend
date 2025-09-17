import { useState } from 'react';
import { css } from '@emotion/css';
import { DropdownIcon } from './DropdownIcon';

interface DropdownProps {
  value?: string;
  placeholder?: string;
  options?: string[];
  onChange?: (value: string) => void;
}

const dropdownContainerStyle = css`
  background: white;
  position: relative;
  border-radius: 8px;
  width: 100%;
  height: 100%;
  border: 1px solid #c47e7e;
  z-index: auto;
`;

const dropdownButtonStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  font-family: 'Pretendard', sans-serif;
  font-size: 18px;
  color: #1a1515;
  cursor: pointer;
  outline: none;
`;

const placeholderStyle = css`
  color: rgba(0, 0, 0, 0.25);
`;

const iconContainerStyle = css`
  width: 18px;
  height: 18px;
  color: #666;
`;

const dropdownListStyle = css`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #c47e7e;
  border-top: none;
  border-radius: 0 0 8px 8px;
  z-index: 10000;
  max-height: 200px;
  overflow-y: auto;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const dropdownItemStyle = css`
  padding: 10px 20px;
  font-family: 'Pretendard', sans-serif;
  font-size: 18px;
  color: #1a1515;
  cursor: pointer;
  border-bottom: 1px solid #f0f0f0;

  &:hover {
    background-color: #f8f8f8;
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const Dropdown = ({
  value,
  placeholder = "전부",
  options = ["전부", "백엔드", "프론트엔드", "AI", "DevOps"],
  onChange
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: string) => {
    onChange?.(option);
    setIsOpen(false);
  };

  const displayValue = value || placeholder;
  const isPlaceholder = !value;

  return (
    <div className={dropdownContainerStyle}>
      <button
        type="button"
        className={dropdownButtonStyle}
        onClick={handleToggle}
      >
        <span className={isPlaceholder ? placeholderStyle : ''}>
          {displayValue}
        </span>
        <div className={iconContainerStyle}>
          <DropdownIcon />
        </div>
      </button>

      {isOpen && (
        <div className={dropdownListStyle}>
          {options.map((option, index) => (
            <div
              key={index}
              className={dropdownItemStyle}
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};