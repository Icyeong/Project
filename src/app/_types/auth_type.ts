type AuthState = {
  access_token: string;
  refresh_token: string;
  setAuthTokens: (tokens: { access_token: string; refresh_token: string }) => void;
};
