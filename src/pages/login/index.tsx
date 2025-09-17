import { useState } from 'react';
import { Input, Button } from '../../shared/components';
import { BackIcon } from '../../shared/components/BackIcon';
import { useNavigation } from '../../shared/context/NavigationContext';
import * as styles from './style';

export const LoginPage = () => {
  const { navigateToPage } = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (value: string) => {
    setUsername(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const handleBackClick = () => {
    navigateToPage('main');
  };

  const handleLoginClick = () => {
    console.log('로그인 clicked', { username, password });
    // TODO: 로그인 API 호출
    // 성공 시 메인 페이지로 이동
    // navigateToPage('main');
  };

  const handleSignupClick = () => {
    navigateToPage('signup');
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.mainContent}>
        {/* 헤더 */}
        <div className={styles.header}>
          <div className={styles.backButton} onClick={handleBackClick}>
            <BackIcon />
          </div>
          <div className={styles.logo}>
            <div className={styles.logoText}>
              <span className="logo-bu">부마</span>
              <span className="logo-ma">뷰</span>
            </div>
          </div>
          <div className={styles.spacer} />
        </div>

        {/* 로그인 폼 */}
        <div className={styles.formContainer}>
          <div className={styles.titleSection}>
            <div className={styles.title}>로그인</div>
          </div>

          <div className={styles.formFields}>
            {/* 아이디 필드 */}
            <div className={styles.fieldGroup}>
              <div className={styles.fieldLabel}>아이디</div>
              <div className={styles.fieldInput}>
                <Input
                  variant="default"
                  placeholder="아이디를 입력해주세요"
                  value={username}
                  onChange={handleUsernameChange}
                />
              </div>
            </div>

            {/* 비밀번호 필드 */}
            <div className={styles.fieldGroup}>
              <div className={styles.fieldLabel}>비밀번호</div>
              <div className={styles.fieldInput}>
                <Input
                  variant="default"
                  placeholder="비밀번호를 입력해주세요"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
            </div>
          </div>

          {/* 로그인 버튼 */}
          <div className={styles.loginButton}>
            <Button
              variant="filter"
              size="medium"
              onClick={handleLoginClick}
            >
              로그인
            </Button>
          </div>
        </div>

        {/* 회원가입 링크 */}
        <div className={styles.signupSection}>
          <div className={styles.signupLink} onClick={handleSignupClick}>
            회원가입 &gt;
          </div>
        </div>
      </div>
    </div>
  );
};