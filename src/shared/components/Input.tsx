import { css } from '@emotion/css';
import { SearchIcon } from './SearchIcon';
import { pxToRem } from '../utils/pxToRem';

interface InputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  variant?: "default" | "search";
  type?: "text" | "password" | "email";
  disabled?: boolean;
}

const searchContainerStyle = css`
  background: white;
  position: relative;
  border-radius: ${pxToRem(8)};
  width: 100%;
  height: 100%;
  border: ${pxToRem(1)} solid #c47e7e;
`;

const searchContentStyle = css`
  display: flex;
  align-items: center;
  gap: ${pxToRem(10)};
  padding: ${pxToRem(10)} ${pxToRem(20)};
  height: 100%;
`;

const searchInputContainerStyle = css`
  flex: 1;
  display: flex;
  align-items: center;
  gap: ${pxToRem(10)};
`;

const searchInputStyle = css`
  flex: 1;
  font-size: ${pxToRem(18)};
  color: #1a1515;
  background: transparent;
  border: none;
  outline: none;
  font-weight: 400;
  font-family: 'Pretendard', sans-serif;

  &::placeholder {
    color: rgba(0, 0, 0, 0.25);
  }
`;

const iconContainerStyle = css`
  width: ${pxToRem(20)};
  height: ${pxToRem(20)};
  color: #666;
`;

const defaultContainerStyle = css`
  background: white;
  position: relative;
  border-radius: ${pxToRem(8)};
  width: 100%;
  height: 100%;
`;

const defaultInputStyle = css`
  width: 100%;
  height: 100%;
  padding: ${pxToRem(10)} ${pxToRem(20)};
  font-size: ${pxToRem(18)};
  color: #1a1515;
  background: transparent;
  border: ${pxToRem(1)} solid #ccc;
  border-radius: ${pxToRem(8)};
  outline: none;
  font-weight: 400;
  font-family: 'Pretendard', sans-serif;

  &::placeholder {
    color: rgba(0, 0, 0, 0.25);
  }
`;

export const Input = ({
  placeholder = "질문 검색...",
  value,
  onChange,
  variant = "search",
  type = "text",
  disabled = false
}: InputProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  if (variant === "search") {
    return (
      <div className={searchContainerStyle}>
        <div className={searchContentStyle}>
          <div className={searchInputContainerStyle}>
            <input
              type={type}
              value={value}
              onChange={handleInputChange}
              placeholder={placeholder}
              className={searchInputStyle}
              disabled={disabled}
            />
            <div className={iconContainerStyle}>
              <SearchIcon />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={defaultContainerStyle}>
      <input
        type={type}
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        className={defaultInputStyle}
        disabled={disabled}
      />
    </div>
  );
};