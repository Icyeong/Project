import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialState = {
  isAuth: false,
};

const useAuthStore = create(
  persist<AuthState>(
    (set) => ({
      ...initialState,
      setAuthState: (state) => set(() => ({ isAuth: state })),
      resetAuthState: () => set(() => initialState),
    }),
    { name: "auth-storage" },
  ),
);

export default useAuthStore;
