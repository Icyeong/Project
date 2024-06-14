import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist<AuthState>(
    (set) => ({
      isAuth: false,
      setAuthState: (state) => set(() => ({ isAuth: state })),
    }),
    { name: "auth-storage" },
  ),
);

export default useAuthStore;
