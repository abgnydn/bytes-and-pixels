// Import necessary dependencies and components
import { useField } from "formik";
import { Input, Label, ErrorMessage } from "./textInput.style";
import { TextInputProps } from "../../types";

// Component definition
const TextInput = ({ label, ...props }: TextInputProps) => {
  const [field, meta] = useField(props);
  return (
    <>
      <Label htmlFor={props.name}>{label}</Label>
      <Input {...field} {...props} />
      {meta.touched && meta.error ? (
        <ErrorMessage>{meta.error}</ErrorMessage>
      ) : null}
    </>
  );
};

export default TextInput;
