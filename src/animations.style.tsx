import { keyframes } from "styled-components";

// Keyframes for animation
const rainbowAnimation = keyframes`
  0% {
    border-color: #ff0000;
  }
  16.67% {
    border-color: #ff7f00;
  }
  33.33% {
    border-color: #ffff00;
  }
  50% {
    border-color: #00ff00;
  }
  66.67% {
    border-color: #0000ff;
  }
  83.33% {
    border-color: #4b0082;
  }
  100% {
    border-color: #8f00ff;
  }
`;

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export { rainbowAnimation, spinAnimation };
