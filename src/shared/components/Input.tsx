import { css } from '@emotion/css';
import { SearchIcon } from './SearchIcon';

interface InputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  variant?: "default" | "search";
  type?: "text" | "password" | "email";
}

const searchContainerStyle = css`
  background: white;
  position: relative;
  border-radius: 8px;
  width: 100%;
  height: 100%;
  border: 1px solid #c47e7e;
`;

const searchContentStyle = css`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  height: 100%;
`;

const searchInputContainerStyle = css`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const searchInputStyle = css`
  flex: 1;
  font-size: 18px;
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
  width: 20px;
  height: 20px;
  color: #666;
`;

const defaultContainerStyle = css`
  background: white;
  position: relative;
  border-radius: 8px;
  width: 100%;
  height: 100%;
`;

const defaultInputStyle = css`
  width: 100%;
  height: 100%;
  padding: 10px 20px;
  font-size: 18px;
  color: #1a1515;
  background: transparent;
  border: 1px solid #ccc;
  border-radius: 8px;
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
  type = "text"
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
      />
    </div>
  );
};