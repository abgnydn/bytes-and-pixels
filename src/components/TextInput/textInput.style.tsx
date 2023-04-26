import styled from "styled-components";

// Styled components
const Input = styled.input`
  padding: 0.65rem 0.5rem;
  font-size: 1rem;
  border: 0.125rem solid var(--gray-200);
  background-color: var(--gray-100);
  color: var(--gray-800);
  border-radius: 10px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  margin-bottom: 1rem;
  &:invalid {
    border: 0.125rem solid #ff7d87;
    box-shadow: none;
  }

  @media (prefers-color-scheme: dark) {
    background-color: var(--gray-800);
    border-color: var(--gray-700);
    color: var(--white);
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
  width: 30rem;
  margin-top: 0.25rem;
  &:before {
    content: "❌ ";
    font-size: 0.625rem;
  }
  @media (prefers-color-scheme: dark) {
    color: var(--red-300);
  }
`;

export { Input, Label, ErrorMessage };
