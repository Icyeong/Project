import { create } from "zustand";

const useAuthStore = create<AuthState>((set) => ({
  isAuth: false,
  setAuthState: (state) => set(() => ({ isAuth: state })),
}));

export default useAuthStore;
