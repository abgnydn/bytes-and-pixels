import styled, { css } from "styled-components";
import { ButtonProps } from "../../types";

// Styled components
const Button = styled.button<ButtonProps>`
  padding: 0.5rem 1.25rem;
  font-size: 1rem;
  border-radius: 10px;
  background-color: var(--gray-700);
  border: 0.125rem solid var(--gray-400);
  color: var(--white);
  text-decoration: none;
  font-weight: bold;
  margin-bottom: 1rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: inline-flex;
  align-items: center;
  gap: 0.325rem;
  line-height: initial;
  text-transform: uppercase;
  transition: background-color 200ms ease-in-out, border 200ms ease-in-out,
    transform 200ms ease-in-out;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;

  /* Common styles for all variants */
  &:hover {
    opacity: 0.8;
    cursor: pointer;
    background-color: var(--gray-500);
  }
  &:focus-visible {
    border-color: var(--focus-ring-color);
    outline: none;
  }
  @media (prefers-color-scheme: dark) {
     {
      border: 0.125rem solid var(--gray-800);
      color: var(--gray-800);
    }
  }
  @media (hover: hover) and (prefers-color-scheme: dark) {
    &:hover {
      cursor: pointer;
      background-color: var(--gray-300);
      color: var(--gray-800);
    }
  }

  /* Variant styles */
  ${({ variant }) => {
    switch (variant) {
      case "add":
        return css`
          background-color: var(--green-600);
          &:hover {
            background-color: var(--green-500);
          }
        `;
      case "delete" || "no":
        return css`
          background-color: var(--red-600);
          &:hover {
            background-color: var(--red-500);
          }
        `;
      case "edit":
        return css`
          background-color: var(--blue-600);
          &:hover {
            background-color: var(--blue-500);
          }
        `;
      case "back":
        return css`
          background-color: var(--blue-600);
          &:hover {
            background-color: var(--blue-500);
          }
        `;
      case "yes":
        return css`
          background-color: var(--green-600);
          &:hover {
            background-color: var(--green-500);
          }
        `;
      case "no":
        return css`
          background-color: var(--red-600);
          &:hover {
            background-color: var(--red-500);
          }
        `;
      default:
        return "";
    }
  }}

  /* Background color when type is "submit" */
  ${({ type }) =>
    type === "submit" &&
    css`
      background-color: var(--green-600);
      &:hover {
        background-color: var(--green-500);
      }
    `}

  /* Responsive styles */
  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.4rem 1rem;
    border-radius: 8px;
    gap: 0.125rem;
  }

  @media screen and (max-width: 576px) {
    font-size: 0.8rem;
    padding: 0.3rem 0.8rem;
    border-radius: 6px;
    gap: 01.25rem;
  }
`;

const Icon = styled.span`
  display: flex;
  align-items: center;
`;

export { Icon, Button };
