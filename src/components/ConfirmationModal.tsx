// Import necessary dependencies and components
import React from "react";
import styled from "styled-components";
import { ModalBackdrop, ModalContent } from "./Modal";
import Button from "./Button";

//Type definition
interface ConfirmationModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  message: string;
  buttonRef?:
    | ((instance: HTMLButtonElement | null) => void)
    | React.RefObject<HTMLButtonElement>
    | null
    | undefined;
}

// Styled components
const ModalText = styled.p`
  font-size: 16px;
  margin: 0;
  text-align: center;
  padding: 16px;
`;

const ModalActions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
`;

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
