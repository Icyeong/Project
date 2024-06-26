interface ModalState {
  isOpen: boolean;
  modalName: string;
  selectedImage: string;
  openModal: () => void;
  closeModal: () => void;
  setModal: (state: string) => void;
  setSelectedImage: (state: string) => void;
  resetModalState: () => void;
}
