// Import necessary dependencies and components
import { useState, useRef } from "react";
import styled from "styled-components";
import { User } from "../types";
import Button from "./Button";
import Modal from "./Modal";
import ConfirmationModal from "./ConfirmationModal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser, updateUser, createUser } from "../api/users";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Styled components
const Table = styled.table`
  width: 100%;
  border-spacing: 0;
  margin-bottom: 1.563rem;
`;

const TableHeader = styled.th`
  padding: 1rem;
  text-align: left;
  margin: 0;
  font-weight: bold;
  text-align: left;
  border-bottom: 2px solid var(--gray-300);
  color: var(--gray-500);
  @media (prefers-color-scheme: dark) {
    border-color: var(--gray-700);
    color: var(--gray-700);
  }
`;

const TableData = styled.td`
  padding: 1rem;
  border-bottom: 2px solid var(--gray-300);
  margin: 0;
  @media (prefers-color-scheme: dark) {
    border-color: var(--gray-700);
  }
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: var(--gray-300);
    @media (prefers-color-scheme: dark) {
      border-color: var(--gray-700);

      background-color: var(--gray-600);
    }
  }
`;
const ActionWrapper = styled.div`
  margin-top: 1.66rem;
  display: flex;
  gap: 10px;
`;

const StyledLink = styled(Link)`
  color: var(--blue);
  text-decoration: none;
  &:hover {
    color: var(--blue-500);
    text-decoration: underline;
  }
`;

//Type definitions
interface Props {
  data: User[];
}
interface Actions {
  value: User | null;
  action: string;
  message: string;
}
type ButtonRef =
  | ((instance: HTMLButtonElement | null) => void)
  | React.RefObject<HTMLButtonElement>
  | null
  | undefined;

const initialActionValues = { value: null, action: "", message: "" };

// Component definition
const ComponentTable = ({ data }: Props) => {
  const queryClient = useQueryClient();
  const onError = (error: unknown) => {
    toast.warn("Something went wrong!");
    console.log(error);
  };
  const onSuccess = (message: string) => {
    queryClient.invalidateQueries({ queryKey: ["users"] });
    resetActions();
    toast.success(message);
  };

  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [actions, setActions] = useState<Actions>(initialActionValues);
  const resetActions = () => setActions(initialActionValues);
  const buttonRef: ButtonRef = useRef(null);

  //Disable the current button to prevent sending more than one request
  const disableButton = () => {
    if (buttonRef.current) {
      buttonRef.current.disabled = true;
    }
  };

  //React Query  mutations
  const deleteUserMutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => onSuccess("User deleted successfully!"),
    onError: (error) => onError(error),
  });

  const updateUserMutation = useMutation({
    mutationFn: updateUser,
    onSuccess: () => onSuccess("User updated successfully!"),
    onError: (error) => onError(error),
  });

  const createUserMutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => onSuccess("User created successfully!"),
    onError: (error) => onError(error),
  });

  // Event handlers
  const handleConfirmationModalClose = () => {
    setIsConfirmationModalOpen(false);
    setSelectedUser(null);
    resetActions();
  };
  const handleEditClick = (user: User) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleAddClick = () => {
    setIsModalOpen(true);
  };

  // Open confirmation modal for delete action
  const handleDeleteClick = (user: User) => {
    setIsConfirmationModalOpen(true);
    setSelectedUser(user);
    setActions({ ...actions, action: "delete", message: "delete" });
  };

  // This function handles the closing of the edit modal
  const handleModalClose = () => {
    setSelectedUser(null);
    setIsModalOpen(false);
    resetActions();
  };

  // This function handles the deletion of a user
  const handleDelete = () => {
    disableButton();
    // Check if selectedUser exists and has an ID
    if (selectedUser && selectedUser.id) {
      const id = selectedUser.id;
      deleteUserMutation.mutate(id);
    }
    // Close confirmation modal and reset state values
    handleConfirmationModalClose();
  };

  // This function handles the updating of a user
  const handleEdit = async (updatedUser: User) => {
    disableButton();
    setIsModalOpen(false);

    if (selectedUser && selectedUser.id) {
      const id = selectedUser.id;
      updateUserMutation.mutate({ id, ...updatedUser });
    }
    handleConfirmationModalClose();
  };

  // This function handles the creation of a new user
  const handleCreate = async (newUser: User) => {
    disableButton();
    setIsModalOpen(false);
    if (newUser) createUserMutation.mutate(newUser);
    handleConfirmationModalClose();
  };

  return (
    <>
      <Button variant="add" onClick={() => handleAddClick()} />
      <Table>
        <thead>
          <TableRow>
            <TableHeader>ID</TableHeader>
            <TableHeader>First Name</TableHeader>
            <TableHeader>Last Name</TableHeader>
            <TableHeader>Action</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableData>
                <StyledLink to={`/details/${item.id}`}>{item.id} </StyledLink>
              </TableData>
              <TableData>{item.firstName}</TableData>
              <TableData>{item.lastName}</TableData>
              <TableData>
                <ActionWrapper>
                  <Button
                    variant="edit"
                    onClick={() => handleEditClick(item)}
                  />
                  <Button
                    variant="delete"
                    onClick={() => handleDeleteClick(item)}
                  />
                </ActionWrapper>
              </TableData>
            </TableRow>
          ))}
        </tbody>
      </Table>

      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        user={selectedUser ?? undefined}
        setIsConfirmationModalOpen={setIsConfirmationModalOpen}
        setActions={setActions}
      />

      <ConfirmationModal
        isOpen={isConfirmationModalOpen}
        onCancel={() => handleConfirmationModalClose()}
        message={actions.message}
        buttonRef={buttonRef}
        onConfirm={() => {
          switch (actions.action) {
            case "edit":
              handleEdit(actions.value as User);
              break;
            case "create":
              handleCreate(actions.value as User);
              break;
            case "delete":
              handleDelete();
              break;
            default:
              break;
          }
        }}
      />
    </>
  );
};

export default ComponentTable;
