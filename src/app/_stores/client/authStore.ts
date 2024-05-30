import { create } from "zustand";

const useAuthStore = create<AuthState>((set) => ({
  access_token: "",
  refresh_token: "",
  setAuthTokens: (tokens) => set(() => ({ access_token: tokens.access_token, refresh_token: tokens.refresh_token })),
}));

export default useAuthStore;
