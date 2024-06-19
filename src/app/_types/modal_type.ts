interface ModalState {
  isActive: boolean;
  modalName: string;
  setIsActive: (state: boolean) => void;
  setModal: (state: string) => void;
}
