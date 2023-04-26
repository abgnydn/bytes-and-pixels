//User
export interface User {
  id?: string | null;
  firstName: string;
  lastName: string;
}

//Button
export type ButtonVariant = "add" | "delete" | "edit" | "back" | "yes" | "no";

export interface ButtonProps {
  variant?: ButtonVariant;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  buttonRef?:
    | ((instance: HTMLButtonElement | null) => void)
    | React.RefObject<HTMLButtonElement>
    | null
    | undefined;
}

//Confirmation

export interface ConfirmationModalProps {
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

//Table
export interface TableProps {
  data: User[];
}
export interface Actions {
  value: User | null;
  action: string;
  message: string;
}
export type ButtonRef =
  | ((instance: HTMLButtonElement | null) => void)
  | React.RefObject<HTMLButtonElement>
  | null
  | undefined;

//Input
export interface TextInputProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}
