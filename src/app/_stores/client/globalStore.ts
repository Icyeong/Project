import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialState = {
  isLightMode: true,
};
const useGlobalStore = create(
  persist<GlobalStoreProps>(
    (set) => ({
      ...initialState,
      toggleMode: () => set((prev) => ({ isLightMode: !prev.isLightMode })),
    }),
    { name: "global-store" },
  ),
);

interface GlobalStoreProps {
  isLightMode: boolean;
  toggleMode: () => void;
}

export default useGlobalStore;
