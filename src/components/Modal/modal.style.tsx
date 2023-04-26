import styled from "styled-components";

// Styled components
const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: var(--white);
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0px 0px 0.625rem rgba(0, 0, 0, 0.3);
  max-width: 30rem;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  @media (prefers-color-scheme: dark) {
    background-color: var(--gray-800);
  }
`;

const ModalCloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.25rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 1rem;
`;

export { ModalBackdrop, ModalCloseButton, ModalContent };
