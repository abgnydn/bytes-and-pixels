import styled from "styled-components";
import { Link } from "react-router-dom";

// Styled components
const Table = styled.table`
  width: 100%;
  border-spacing: 0;
  margin-bottom: 1.563rem;
`;

const TableHeader = styled.th`
  padding: 1rem;
  text-align: left;
  margin: 0;
  font-weight: bold;
  text-align: left;
  border-bottom: 0.125rem solid var(--gray-300);
  color: var(--gray-500);
  @media (prefers-color-scheme: dark) {
    border-color: var(--gray-700);
    color: var(--gray-700);
  }
`;

const TableData = styled.td`
  padding: 1rem;
  border-bottom: 0.125rem solid var(--gray-300);
  margin: 0;
  @media (prefers-color-scheme: dark) {
    border-color: var(--gray-700);
  }
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: var(--gray-300);
    @media (prefers-color-scheme: dark) {
      border-color: var(--gray-700);

      background-color: var(--gray-600);
    }
  }
`;
const ActionWrapper = styled.div`
  margin-top: 1.66rem;
  display: flex;
  gap: 0.625rem;
`;

const StyledLink = styled(Link)`
  color: var(--blue);
  text-decoration: none;
  &:hover {
    color: var(--blue-500);
    text-decoration: underline;
  }
`;
export { Table, TableData, TableHeader, TableRow, ActionWrapper, StyledLink };
