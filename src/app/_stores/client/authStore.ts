import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialState = {
  isAuth: false,
  userName: "",
};

const useAuthStore = create(
  persist<AuthState>(
    (set) => ({
      ...initialState,
      setAuthState: (state) => set(() => ({ isAuth: state })),
      setUserName: (state) => set(() => ({ userName: state })),
      resetAuthState: () => set(() => initialState),
    }),
    { name: "auth-storage" },
  ),
);

export default useAuthStore;
