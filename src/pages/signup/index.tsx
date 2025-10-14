import { useState } from 'react';
import { Input, Button } from '../../shared/components';
import { BackIcon } from '../../shared/components/BackIcon';
import { useNavigation } from '../../shared/context/NavigationContext';
import { useToast } from '../../shared/context/ToastContext';
import { signup } from '../../api/signup';
import * as styles from './style';

export const SignupPage = () => {
  const { navigateToPage } = useNavigation();
  const { showToast } = useToast();
  const [username, setUsername] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleUsernameChange = (value: string) => {
    setUsername(value);
  };

  const handleNicknameChange = (value: string) => {
    setNickname(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const handleConfirmPasswordChange = (value: string) => {
    setConfirmPassword(value);
  };

  const handleBackClick = () => {
    navigateToPage('main');
  };

  const handleSignupClick = async () => {
    // 입력값 검증
    if (!username.trim()) {
      showToast('아이디를 입력해주세요.', 'error');
      return;
    }

    if (!nickname.trim()) {
      showToast('닉네임을 입력해주세요.', 'error');
      return;
    }

    if (!password.trim()) {
      showToast('비밀번호를 입력해주세요.', 'error');
      return;
    }

    if (password !== confirmPassword) {
      showToast('비밀번호가 일치하지 않습니다.', 'error');
      return;
    }

    setIsLoading(true);

    try {
      const response = await signup({
        id: username,
        nickname,
        password
      });

      // 회원가입 성공
      showToast('회원가입이 완료되었습니다!', 'success');

      // 토큰 저장 (선택적)
      localStorage.setItem('accessToken', response.accessToken);
      localStorage.setItem('refreshToken', response.refreshToken);

      // 로그인 페이지로 이동
      navigateToPage('login');
    } catch (error) {
      // 에러 처리
      let errorMessage = '회원가입 중 오류가 발생했습니다.';
      if (error && typeof error === 'object' && 'response' in error) {
        const response = (error as { response?: { data?: { message?: string } } }).response;
        if (response?.data?.message) {
          errorMessage = response.data.message;
        }
      }
      showToast(errorMessage, 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoginClick = () => {
    navigateToPage('login');
  };

  return (
    <div className={styles.signupContainer}>
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

        {/* 회원가입 폼 */}
        <div className={styles.formContainer}>
          <div className={styles.titleSection}>
            <div className={styles.title}>회원가입</div>
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

            {/* 닉네임 필드 */}
            <div className={styles.fieldGroup}>
              <div className={styles.fieldLabel}>닉네임</div>
              <div className={styles.fieldInput}>
                <Input
                  variant="default"
                  placeholder="닉네임을 입력해주세요"
                  value={nickname}
                  onChange={handleNicknameChange}
                />
              </div>
            </div>

            {/* 비밀번호 필드 */}
            <div className={styles.fieldGroup}>
              <div className={styles.fieldLabel}>비밀번호</div>
              <div className={styles.passwordFields}>
                <div className={styles.passwordInput}>
                  <Input
                    variant="default"
                    placeholder="비밀번호를 입력해주세요"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
                <div className={styles.passwordInput}>
                  <Input
                    variant="default"
                    placeholder="비밀번호를 다시 입력해주세요"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 회원가입 버튼 */}
          <div className={styles.signupButton}>
            <Button
              variant="filter"
              size="medium"
              onClick={handleSignupClick}
              disabled={isLoading}
            >
              {isLoading ? '회원가입 중...' : '회원가입'}
            </Button>
          </div>
        </div>

        {/* 로그인 링크 */}
        <div className={styles.loginSection}>
          <div className={styles.loginLink} onClick={handleLoginClick}>
            로그인 &gt;
          </div>
        </div>
      </div>
    </div>
  );
};