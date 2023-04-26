// Import necessary dependencies and components
import { FaPlus, FaTrash, FaEdit, FaArrowLeft } from "react-icons/fa";
import { Button, Icon } from "./button.style";
import { ButtonProps } from "../../types";

// Component definition
const ButtonComponent = ({
  variant,
  type,
  children = type || variant,
  onClick,
  buttonRef,
}: ButtonProps) => {
  const getIcon = () => {
    switch (variant) {
      case "add":
        return <FaPlus />;
      case "delete":
        return <FaTrash />;
      case "edit":
        return <FaEdit />;
      case "back":
        return <FaArrowLeft />;
      default:
        return null;
    }
  };

  return (
    <Button variant={variant} onClick={onClick} type={type} ref={buttonRef}>
      {getIcon() && <Icon>{getIcon()}</Icon>}
      {children}
    </Button>
  );
};

export default ButtonComponent;
