// Import necessary dependencies and components
import { FaSpinner } from "react-icons/fa";
import styled, { keyframes } from "styled-components";

// Styled components
const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled(FaSpinner)`
  animation: ${spinAnimation} 1s linear infinite;
  font-size: 3rem;
`;

// Component definition
export default function SpinnerComponent() {
  return (
    <SpinnerWrapper>
      <Spinner />
    </SpinnerWrapper>
  );
}
