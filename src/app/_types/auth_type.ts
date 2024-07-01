interface AuthState {
  isAuth: boolean;
  userName: string;
  setAuthState: (state: boolean) => void;
  setUserName: (state: string) => void;
  resetAuthState: () => void;
}

interface JwtPayload_EMAIL {
  aud: string;
  auth_time: number;
  email: string;
  email_verified: boolean;
  exp: number;
  firebase: {
    identities: Record<string, unknown>;
    sign_in_provider: string;
  };
  iat: number;
  iss: string;
  sub: string;
  user_id: string;
}

interface JwtPayload_GOOGLE extends JwtPayload_EMAIL {
  name: string;
  picture: string;
}
