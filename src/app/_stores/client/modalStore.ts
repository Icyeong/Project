import { isArrNotEmpty } from "@/_utils/utils";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialState = {
  isOpen: false,
  selectedImage: "",
  modals: [],
};

const useModalStore = create(
  persist<ModalStoreState>(
    (set) => ({
      ...initialState,
      closeModal: () =>
        set((prev) => {
          if (isArrNotEmpty(prev.modals)) {
            const modal_list = [...prev.modals];
            modal_list.pop();
            return { modals: modal_list };
          } else {
            return { modals: [] };
          }
        }),
      setModal: (state) => set((prev) => ({ isOpen: true, modals: [...prev.modals, state] })),
      setSelectedImage: (state) => set(() => ({ selectedImage: state })),
      resetModalState: () => set(() => initialState),
    }),
    { name: "modal-storage" },
  ),
);

interface ModalStoreState {
  isOpen: boolean;
  selectedImage: string;
  modals: string[];
  closeModal: () => void;
  setModal: (state: string) => void;
  setSelectedImage: (state: string) => void;
  resetModalState: () => void;
}

export default useModalStore;
