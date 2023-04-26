// Import necessary dependencies and components
import React from "react";
import { User } from "../../types";
import FormComponent from "../Form/Form";
import { MdClose } from "react-icons/md";
import { ModalBackdrop, ModalCloseButton, ModalContent } from "./modal.style";

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
