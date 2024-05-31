import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../Hooks/useAxiosCommon";
import TestCard from "./TestCard";

const FeatureTests = () => {
  const axiosCommon = useAxiosCommon();

  const { data: tests = {}, isLoading } = useQuery({
    queryKey: ["tests"],
    queryFn: async () => {
      const { data } = await axiosCommon.get("/tests");
      return data;
    },
  });

  console.log(tests);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tests.map((test) => (
          <TestCard key={test._id} test={test} />
        ))}
      </div>
    </div>
  );
};

export default FeatureTests;
