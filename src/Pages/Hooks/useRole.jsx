import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useRole = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: role,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["user", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/user/${user?.email}`);
      return data.role;
    },
  });

  return [role, isLoading, refetch];
};

export default useRole;
