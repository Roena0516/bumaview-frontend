import { css } from '@emotion/css';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "filter";
  size?: "medium" | "large";
}

const getButtonStyle = (variant: string, size: string) => {
  const baseStyle = css`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    border: none;
    font-family: 'Pretendard', sans-serif;
    font-weight: 500;
    line-height: normal;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      opacity: 0.9;
    }
  `;

  const variantStyle = css`
    ${variant === "primary" && `
      background: white;
      color: #1a1515;
      box-shadow: 2px 4px 8px 0px rgba(0, 0, 0, 0.25);
    `}
    ${variant === "filter" && `
      background: rgba(255, 203, 207, 0.8);
      color: #1a1515;
    `}
  `;

  const sizeStyle = css`
    ${size === "large" && `
      height: 70px;
      font-size: 26px;
      padding: 10px;
      width: 162px;
    `}
    ${size === "medium" && `
      height: 45px;
      font-size: 20px;
      padding: 10px;
      width: 100%;
    `}
  `;

  return css`
    ${baseStyle}
    ${variantStyle}
    ${sizeStyle}
  `;
};

export const Button = ({
  children,
  onClick,
  variant = "primary",
  size = "medium"
}: ButtonProps) => {
  const handleClick = () => {
    onClick?.();
  };

  return (
    <button
      onClick={handleClick}
      className={getButtonStyle(variant, size)}
    >
      {children}
    </button>
  );
};