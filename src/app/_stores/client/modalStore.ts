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
      closeModal: () => set(() => initialState),
      setModal: (state) => set(() => ({ modalName: state })),
      setSelectedImage: (state) => set(() => ({ selectedImage: state })),
    }),
    { name: "modal-storage" },
  ),
);

interface ModalState {
  isOpen: boolean;
  modalName: string;
  selectedImage: string;
  openModal: () => void;
  closeModal: () => void;
  setModal: (state: string) => void;
  setSelectedImage: (state: string) => void;
}

export default useModalStore;
