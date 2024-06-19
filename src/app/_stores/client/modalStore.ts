import { create } from "zustand";
import { persist } from "zustand/middleware";

const useModalStore = create(
  persist<ModalState>(
    (set) => ({
      isActive: false,
      modalName: "",
      selectedImage: "",
      setIsActive: (state) => set(() => ({ isActive: state })),
      setModal: (state) => set(() => ({ modalName: state })),
      setSelectedImage: (state) => set(() => ({ selectedImage: state })),
    }),
    { name: "modal-storage" },
  ),
);

export default useModalStore;
