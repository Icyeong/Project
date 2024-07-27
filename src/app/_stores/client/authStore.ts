import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialState = {
  isAuth: false,
  userInfo: {
    userId: "",
    userName: "",
    userImg: "",
  },
};

const useAuthStore = create(
  persist<AuthState>(
    (set) => ({
      ...initialState,
      setUserState: (state) => set(() => ({ userInfo: state, inAuth: true })),
      resetAuthState: () => set(() => initialState),
    }),
    { name: "auth-storage" },
  ),
);

interface AuthState {
  isAuth: boolean;
  userInfo: UserInfoType;
  setUserState: (state: UserInfoType) => void;
  resetAuthState: () => void;
}

export interface UserInfoType {
  userId: string;
  userName: string;
  userImg: string;
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
