import { create } from "zustand";
import { persist } from "zustand/middleware";

const useModalStore = create(
  persist<ModalState>(
    (set) => ({
      isActive: false,
      modalName: "",
      setIsActive: (state) => set(() => ({ isActive: state })),
      setModal: (state) => set(() => ({ modalName: state })),
    }),
    { name: "modal-storage" },
  ),
);

export default useModalStore;
