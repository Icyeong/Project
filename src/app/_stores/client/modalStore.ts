import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialState = {
  isOpen: false,
  modalName: "",
  selectedImage: "",
};

const useModalStore = create(
  persist<ModalState>(
    (set) => ({
      ...initialState,
      openModal: () => set(() => ({ isOpen: true })),
      closeModal: () => set(() => ({ isOpen: false })),
      setModal: (state) => set(() => ({ modalName: state })),
      setSelectedImage: (state) => set(() => ({ selectedImage: state })),
      resetModalState: () => set(() => initialState),
    }),
    { name: "modal-storage" },
  ),
);

export default useModalStore;
