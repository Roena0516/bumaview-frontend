import { useState } from 'react';
import { css } from '@emotion/css';

interface FileUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpload: (file: File) => Promise<void>;
  onManualAdd?: () => void;
}

export const FileUploadModal = ({ isOpen, onClose, onUpload, onManualAdd }: FileUploadModalProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUploadClick = async () => {
    if (!selectedFile) return;

    setIsUploading(true);
    try {
      await onUpload(selectedFile);
      setSelectedFile(null);
      onClose();
    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleCancelClick = () => {
    setSelectedFile(null);
    onClose();
  };

  const handleManualAddClick = () => {
    if (onManualAdd) {
      onManualAdd();
    }
  };

  return (
    <div className={overlay} onClick={handleCancelClick}>
      <div className={modal} onClick={(e) => e.stopPropagation()}>
        <div className={modalTitle}>엑셀 업로드</div>

        <div className={inputContainer}>
          <input
            type="text"
            className={fileInput}
            value={selectedFile?.name || ''}
            placeholder="파일을 선택해주세요"
            readOnly
          />
        </div>

        <label className={uploadButton}>
          <input
            type="file"
            accept=".csv,.xlsx,.xls"
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
          업로드하기
        </label>

        <div className={linkText} onClick={handleManualAddClick}>면접 질문 작성하기 &gt;</div>

        <div className={buttonContainer}>
          <button className={cancelButton} onClick={handleCancelClick}>
            취소
          </button>
          <button
            className={confirmButton}
            onClick={handleUploadClick}
            disabled={!selectedFile || isUploading}
          >
            {isUploading ? '업로드 중...' : '완료'}
          </button>
        </div>
      </div>
    </div>
  );
};

const overlay = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const modal = css`
  background: white;
  width: 600px;
  border-radius: 16px;
  padding: 40px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const modalTitle = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #1a1515;
  line-height: normal;
`;

const inputContainer = css`
  width: 100%;
`;

const fileInput = css`
  width: 100%;
  height: 50px;
  border: 1px solid #c47e7e;
  border-radius: 8px;
  padding: 10px 20px;
  box-sizing: border-box;
  font-family: 'Pretendard', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #1a1515;
  background: white;

  &::placeholder {
    color: rgba(0, 0, 0, 0.25);
  }

  &:focus {
    outline: none;
    border-color: #c47e7e;
  }
`;

const uploadButton = css`
  background: rgba(255, 203, 207, 0.8);
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 8px;
  padding: 10px;
  box-sizing: border-box;
  font-family: 'Pretendard', sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: #1a1515;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.9;
  }
`;

const linkText = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #868686;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    opacity: 0.7;
  }
`;

const buttonContainer = css`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const cancelButton = css`
  background: rgba(134, 134, 134, 0.2);
  width: 120px;
  height: 50px;
  border: none;
  border-radius: 8px;
  padding: 10px;
  box-sizing: border-box;
  font-family: 'Pretendard', sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: #1a1515;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const confirmButton = css`
  background: rgba(255, 203, 207, 0.8);
  width: 120px;
  height: 50px;
  border: none;
  border-radius: 8px;
  padding: 10px;
  box-sizing: border-box;
  font-family: 'Pretendard', sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: #1a1515;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
