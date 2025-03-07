// 예시코드입니다. 실제 구현할 때는 새롭게 구현해주세요

import { useState } from 'react';
import type { User } from './types';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (email: string) => {
    setIsLoading(true);
    setError(null);

    try {
      // 실제 로그인 로직은 여기에 구현
      const mockUser: User = {
        id: '1',
        email,
        name: '사용자',
      };

      setUser(mockUser);
    } catch (err) {
      setError('로그인에 실패했습니다.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return {
    user,
    isLoading,
    error,
    login,
    logout,
  };
};
