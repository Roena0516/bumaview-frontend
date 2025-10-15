import { useState } from 'react';
import { css, keyframes } from '@emotion/css';
import { DropdownIcon } from './DropdownIcon';
import { pxToRem } from '../utils/pxToRem';

interface DropdownOption {
  label: string;
  value: string;
}

interface DropdownProps {
  value?: string;
  placeholder?: string;
  options?: (string | DropdownOption)[];
  onChange?: (value: string) => void;
}

const dropdownContainerStyle = css`
  background: white;
  position: relative;
  border-radius: ${pxToRem(8)};
  width: 100%;
  height: 100%;
  border: ${pxToRem(1)} solid #c47e7e;
  z-index: auto;
`;

const dropdownButtonStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${pxToRem(10)} ${pxToRem(20)};
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  font-family: 'Pretendard', sans-serif;
  font-size: ${pxToRem(18)};
  color: #1a1515;
  cursor: pointer;
  outline: none;
`;

const placeholderStyle = css`
  color: rgba(0, 0, 0, 0.25);
`;

const iconContainerStyle = css`
  width: ${pxToRem(18)};
  height: ${pxToRem(18)};
  color: #666;
  transition: transform 0.2s ease-out;

  &.open {
    transform: rotate(180deg);
  }
`;

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(${pxToRem(-10)});
    max-height: 0;
  }
  to {
    opacity: 1;
    transform: translateY(0);
    max-height: ${pxToRem(200)};
  }
`;

const dropdownListStyle = css`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: ${pxToRem(1)} solid #c47e7e;
  border-top: none;
  border-radius: 0 0 ${pxToRem(8)} ${pxToRem(8)};
  z-index: 10000;
  max-height: ${pxToRem(200)};
  overflow-y: auto;
  box-shadow: ${pxToRem(0)} ${pxToRem(4)} ${pxToRem(8)} rgba(0, 0, 0, 0.1);
  animation: ${slideDown} 0.2s ease-out;
  transform-origin: top;
`;

const dropdownItemStyle = css`
  padding: ${pxToRem(10)} ${pxToRem(20)};
  font-family: 'Pretendard', sans-serif;
  font-size: ${pxToRem(18)};
  color: #1a1515;
  cursor: pointer;
  border-bottom: ${pxToRem(1)} solid #f0f0f0;

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

  const handleSelect = (option: string | DropdownOption) => {
    const optionValue = typeof option === 'string' ? option : option.value;
    onChange?.(optionValue);
    setIsOpen(false);
  };

  const getDisplayValue = () => {
    if (!value) return placeholder;

    const selectedOption = options.find(option => {
      if (typeof option === 'string') {
        return option === value;
      }
      return option.value === value;
    });

    if (selectedOption) {
      return typeof selectedOption === 'string' ? selectedOption : selectedOption.label;
    }

    return value;
  };

  const displayValue = getDisplayValue();
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
        <div className={`${iconContainerStyle} ${isOpen ? 'open' : ''}`}>
          <DropdownIcon />
        </div>
      </button>

      {isOpen && (
        <div className={dropdownListStyle}>
          {options.map((option) => {
            const optionLabel = typeof option === 'string' ? option : option.label;
            const optionKey = typeof option === 'string' ? option : option.value;

            return (
              <div
                key={optionKey}
                className={dropdownItemStyle}
                onClick={() => handleSelect(option)}
              >
                {optionLabel}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};