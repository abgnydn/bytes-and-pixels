import styled from "styled-components";
import { rainbowAnimation } from "../animations.style";

// Styled components
const CardContainer = styled.div`
  border: 0.3125rem solid var(--red-600);
  animation: ${rainbowAnimation} 8s ease-in-out infinite;
  transition: border 4s ease-in-out;
  border-radius: 10px;
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
`;

const UserInfo = styled.div`
  margin-top: 0.625rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Label = styled.span`
  font-weight: bold;
`;

const Value = styled.span`
  margin-left: 0.3125;
`;

export { CardContainer, UserInfo, Label, Value };
