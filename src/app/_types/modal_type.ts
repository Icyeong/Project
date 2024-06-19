interface ModalState {
  isActive: boolean;
  modalName: string;
  selectedImage: string;
  setIsActive: (state: boolean) => void;
  setModal: (state: string) => void;
  setSelectedImage: (state: string) => void;
}
