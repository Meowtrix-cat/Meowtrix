// 예시코드입니다. 실제 구현할 때는 새롭게 구현해주세요

export interface User {
  id: string;
  email: string;
  name: string;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}
