import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialState = {
  isAuth: false,
  userName: "",
  userImg: "",
};

const useAuthStore = create(
  persist<AuthState>(
    (set) => ({
      ...initialState,
      setAuthState: (state) => set(() => ({ isAuth: state })),
      setUserName: (state) => set(() => ({ userName: state })),
      setUserImg: (state) => set(() => ({ userImg: state })),
      resetAuthState: () => set(() => initialState),
    }),
    { name: "auth-storage" },
  ),
);

interface AuthState {
  isAuth: boolean;
  userName: string;
  userImg: string;
  setAuthState: (state: boolean) => void;
  setUserName: (state: string) => void;
  setUserImg: (state: string) => void;
  resetAuthState: () => void;
}

export interface JwtPayload_EMAIL {
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

export interface JwtPayload_GOOGLE extends JwtPayload_EMAIL {
  name: string;
  picture: string;
}

export default useAuthStore;
