import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import AllUsersTable from "../../../../Components/Table/AllUsersTable";
import { Helmet } from "react-helmet-async";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/users");
      return data;
    },
  });

  return (
    <div>
      <Helmet>
        <title>All Users - DaignoCare</title>
      </Helmet>
      <AllUsersTable users={users} isLoading={isLoading} refetch={refetch} />
    </div>
  );
};

export default AllUsers;
