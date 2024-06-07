import { useQuery } from "@tanstack/react-query";

import TestCard from "./TestCard";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import LoadingSpinner from "../../../Shared/LoadingSpinner";

const FeatureTests = () => {
const axiosSecure = useAxiosSecure()

  const { data: tests = [], isLoading } = useQuery({
    queryKey: ["featured-tests"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/featured-tests");
      return data;
    },
  });

  if (isLoading) {
    return <LoadingSpinner/>
  }

  return (
    <div className="my-20 max-w-screen-xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tests.map((test) => (
          <TestCard key={test._id} test={test} />
        ))}
      </div>
    </div>
  );
};

export default FeatureTests;
