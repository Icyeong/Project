import { create } from "zustand";
import { persist } from "zustand/middleware";

const useModalStore = create(
  persist<ModalState>(
    (set) => ({
      isActive: false,
      setIsActive: (state) => set(() => ({ isActive: state })),
    }),
    { name: "modal-storage" },
  ),
);

export default useModalStore;
