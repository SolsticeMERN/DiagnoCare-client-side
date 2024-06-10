import { useQuery } from "@tanstack/react-query";

import useAxiosCommon from "../Hooks/useAxiosCommon";
import TestCard from "../Home/FeaturedTests/TestCard";
import LoadingSpinner from "../../Shared/LoadingSpinner";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const AllTests = () => {
    const axiosCommon = useAxiosCommon();
    const [page, setPage] = useState(1)
    const limit = 3

  const { data, isLoading } = useQuery({
    queryKey: ["tests", page],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/tests?page=${page}&limit=${limit}`);
      return data;
    },
  });

  if (isLoading) {
    return <LoadingSpinner/>;
  }

  const {data: tests, pagination} = data;

  const handlePageChange = (newPage) => {
    setPage(newPage)
  }

  return (
    <div>
      <Helmet>
        <title>AllTests - DaignoCare</title>
      </Helmet>
      <div className="my-20 ">
        <h2 className="text-5xl font-bold text-center">All Tests</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-xl mx-auto p-4">
        {tests.map((test) => (
          <TestCard key={test._id} test={test} />
        ))}
      </div>
      <div className="flex justify-center my-8">
        <button
          disabled={page === 1}
          onClick={() => handlePageChange(page - 1)}
          className="mx-2 px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
        >
          Previous
        </button>
        <span className="mx-2 px-4 py-2">
          Page {page} of {pagination.totalPages}
        </span>
        <button
         disabled={page === pagination.totalPages}
         onClick={() => handlePageChange(page + 1)}
          className="mx-2 px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllTests;
