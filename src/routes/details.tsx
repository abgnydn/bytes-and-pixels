// Import necessary dependencies and components
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../api/users";
import ErrorPage from "../error-page";
import styled, { keyframes } from "styled-components";
import Button from "../components/Button/Button";
import Spinner from "../components/Spinner/Spinner";

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

// Styled components
const CardContainer = styled.div`
  border: 0.3125rem solid #ff0000;
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

// Component definition
export default function Details() {
  const params = useParams();
  const userId = params.userId;
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  const queryFn = async () => {
    const user = userId && (await getUser(userId));
    if (!user) {
      throw new Response("", {
        status: 404,
        statusText: "Not Found",
      });
    }
    return user;
  };

  const {
    data: user,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["users", "userDetail"],
    queryFn: queryFn,
  });

  if (user) {
    return (
      <>
        <Button variant={"back"} onClick={handleBackButtonClick} />
        <CardContainer>
          <UserInfo>
            <Label>First Name:</Label>
            <Value>{user.firstName}</Value>
          </UserInfo>
          <UserInfo>
            <Label>Last Name:</Label>
            <Value>{user.lastName}</Value>
          </UserInfo>
        </CardContainer>
      </>
    );
  } else if (isLoading) {
    return <Spinner />;
  } else if (isError) {
    return <ErrorPage error={error} />;
  } else {
    return null;
  }
}
