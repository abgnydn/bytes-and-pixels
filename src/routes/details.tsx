// Import necessary dependencies and components
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../api/users";
import ErrorPage from "../error-page";
import Button from "../components/Button/Button";
import Spinner from "../components/Spinner/Spinner";
import { CardContainer, UserInfo, Label, Value } from "./detail.style";

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
