interface AuthState {
  isAuth: boolean;
  setAuthState: (state: boolean) => void;
  resetAuthState: () => void;
}
