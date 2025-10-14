import { useState } from 'react';
import { Input, Button } from '../../shared/components';
import { BackIcon } from '../../shared/components/BackIcon';
import { useNavigation } from '../../shared/context/NavigationContext';
import { useAuth } from '../../shared/context/AuthContext';
import { useToast } from '../../shared/context/ToastContext';
import { login as loginAPI } from '../../api/login';
import * as styles from './style';

export const LoginPage = () => {
  const { navigateToPage } = useNavigation();
  const { login } = useAuth();
  const { showToast } = useToast();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleUsernameChange = (value: string) => {
    setUsername(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const handleBackClick = () => {
    navigateToPage('main');
  };

  const handleLoginClick = async () => {
    // 입력값 검증
    if (!username.trim()) {
      showToast('아이디를 입력해주세요.', 'error');
      return;
    }

    if (!password.trim()) {
      showToast('비밀번호를 입력해주세요.', 'error');
      return;
    }

    setIsLoading(true);

    try {
      const response = await loginAPI({
        id: username,
        password
      });

      // 토큰 저장
      localStorage.setItem('accessToken', response.accessToken);
      localStorage.setItem('refreshToken', response.refreshToken);

      // TODO: 사용자 정보를 별도 API로 가져와야 할 수도 있음
      // 현재는 로그인 응답에 사용자 정보가 없으므로 임시로 설정
      const user = {
        id: username,
        nickname: username, // 실제로는 API에서 받아와야 함
        answerCount: 0,
        averageScore: 0,
        evaluationCount: 0,
      };

      login(user);
      showToast('로그인되었습니다!', 'success');
      navigateToPage('main');
    } catch (error) {
      // 에러 처리
      let errorMessage = '로그인 중 오류가 발생했습니다.';
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
                  type="password"
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
              disabled={isLoading}
            >
              {isLoading ? '로그인 중...' : '로그인'}
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