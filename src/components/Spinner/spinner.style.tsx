// Import necessary dependencies and components
import { FaSpinner } from "react-icons/fa";
import styled, { keyframes } from "styled-components";
import { spinAnimation } from "../../animations.style";

// Styled components
const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Spinner = styled(FaSpinner)`
  animation: ${spinAnimation} 1s linear infinite;
  font-size: 3rem;
`;
export { SpinnerWrapper, Spinner };
