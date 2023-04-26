// Import necessary dependencies and components
import React from "react";
import styled from "styled-components";
import { User } from "../types";
import FormComponent from "./Form";
import { MdClose } from "react-icons/md";

//Type definition
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  user?: User;
  setIsConfirmationModalOpen: (_: boolean) => void;
  setActions: React.Dispatch<
    React.SetStateAction<{
      value: User | null;
      action: string;
      message: string;
    }>
  >;
}

// Styled components
export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: var(--white);
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  max-width: 400px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  @media (prefers-color-scheme: dark) {
    background-color: var(--gray-800);
  }
`;

const ModalCloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 4px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 16px;
`;

// Component definition
const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  user,
  setIsConfirmationModalOpen,
  setActions,
}) => {
  const openModal = (val: User, action: string) => {
    setIsConfirmationModalOpen(true);
    setActions({ value: val, action: action, message: action });
  };

  if (!isOpen) return null;
  return (
    <>
      <ModalBackdrop>
        <ModalContent>
          <ModalCloseButton onClick={onClose}>
            {" "}
            <MdClose />
          </ModalCloseButton>
          {user ? (
            <FormComponent
              title={"Edit User Details"}
              action={"Edit"}
              user={user}
              onSubmit={(val: User) => openModal(val, "edit")}
            />
          ) : (
            <FormComponent
              title={"Add New User"}
              action={"Add"}
              onSubmit={(val: User) => openModal(val, "create")}
            />
          )}
        </ModalContent>
      </ModalBackdrop>
    </>
  );
};

export default Modal;
