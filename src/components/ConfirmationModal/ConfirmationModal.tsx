// Import necessary dependencies and components
import React from "react";
import Button from "../Button/Button";
import { ModalBackdrop, ModalContent } from "../Modal/modal.style";
import { ModalActions, ModalText } from "./confirmationModal.style";
import { ConfirmationModalProps } from "../../types";

// Component definition
const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onConfirm,
  onCancel,
  message,
  buttonRef,
}) => {
  if (!isOpen) return null;
  return (
    <ModalBackdrop>
      <ModalContent>
        <ModalText>Are you sure you want to {message} user?</ModalText>
        <ModalActions>
          <Button onClick={onConfirm} variant="yes" buttonRef={buttonRef}>
            Yes
          </Button>
          <Button onClick={onCancel} variant="no">
            No
          </Button>
        </ModalActions>
      </ModalContent>
    </ModalBackdrop>
  );
};

export default ConfirmationModal;
