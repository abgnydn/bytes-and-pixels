// Import necessary dependencies and components
import { useField } from "formik";
import styled from "styled-components";

// Styled components
const Input = styled.input`
  padding: 0.65rem 0.5rem;
  font-size: 1rem;
  border: 2px solid var(--gray-200);
  background-color: var(--gray-100);
  color: var(--gray-800);
  border-radius: 10px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  margin-bottom: 1rem;
  &:invalid {
    border: 2px solid #ff7d87;
    box-shadow: none;
  }

  @media (prefers-color-scheme: dark) {
    background-color: var(--gray-800);
    border-color: var(--gray-700);
    color: white;
  }
`;

const Label = styled.label`
  font-weight: bold;
  display: flex;
  margin-bottom: 0.66rem;
`;
const ErrorMessage = styled.div`
  font-size: 0.75rem;
  color: var(--red-600);
  width: 400px;
  margin-top: 0.25rem;
  &:before {
    content: "❌ ";
    font-size: 10px;
  }
  @media (prefers-color-scheme: dark) {
    color: var(--red-300);
  }
`;
//Type definition
interface TextInputProps {
  label: string;
  name: string;
  type: string;
}

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
