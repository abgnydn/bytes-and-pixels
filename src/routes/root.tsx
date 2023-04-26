// Import necessary dependencies and components
import { useQuery } from "@tanstack/react-query";
import Table from "../components/Table/Table";
import { getUsers } from "../api/users";
import ErrorPage from "../error-page";
import Spinner from "../components/Spinner/Spinner";

// Component definition
export default function Root() {
  const {
    data: users,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  if (users) {
    return <Table data={users} />;
  } else if (isLoading) {
    return <Spinner />;
  } else if (isError) {
    return <ErrorPage error={error} />;
  } else {
    return null;
  }
}
