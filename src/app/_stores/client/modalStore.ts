import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialState = {
  isActive: false,
  modalName: "",
  selectedImage: "",
};

const useModalStore = create(
  persist<ModalState>(
    (set) => ({
      ...initialState,
      setIsActive: (state) => set(() => ({ isActive: state })),
      setModal: (state) => set(() => ({ modalName: state })),
      setSelectedImage: (state) => set(() => ({ selectedImage: state })),
      resetModalState: () => set(() => initialState),
    }),
    { name: "modal-storage" },
  ),
);

export default useModalStore;
