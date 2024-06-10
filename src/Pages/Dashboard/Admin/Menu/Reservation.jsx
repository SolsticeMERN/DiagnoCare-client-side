import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import AllReservationTable from "../../../../Components/Table/AllReservationTable";
import { Helmet } from "react-helmet-async";

const Reservation = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3; // Page size set to 3
  const axiosSecure = useAxiosSecure();

  const {
    data: reservationData = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["reservation", searchQuery, currentPage],
    queryFn: async ({ queryKey }) => {
      // eslint-disable-next-line no-unused-vars
      const [_key, searchQuery, currentPage] = queryKey;
      const { data } = await axiosSecure.get("/reservation", {
        params: {
          email: searchQuery,
          page: currentPage,
          limit: pageSize,
        },
      });
      return data;
    },
  });

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); 
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const { reservations = [], total = 0 } = reservationData;
  const totalPages = Math.ceil(total / pageSize);
  console.log(totalPages);

  return (
    <div>
      <Helmet>
        <title>Reservation - DaignoCare</title>
      </Helmet>
      <div className="relative mt-1">
        <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          value={searchQuery}
          onChange={handleSearchChange}
          type="text"
          id="table-search"
          className="block py-2 ps-10 mb-3 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search for items"
        />
      </div>

      <AllReservationTable
        reservations={reservations}
        isLoading={isLoading}
        refetch={refetch}
      />

      <nav aria-label="Page navigation example">
        <ul className="flex items-center -space-x-px h-8 text-sm">
          <li>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Previous</span>
              <svg
                className="w-2.5 h-2.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
            </button>
          </li>
          {Array.from({ length: totalPages }, (_, i) => (
            <li key={i}>
              <button
                onClick={() => handlePageChange(i + 1)}
                className={`flex items-center justify-center px-3 h-8 leading-tight ${
                  i + 1 === currentPage
                    ? "text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                    : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                }`}
              >
                {i + 1}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Next</span>
              <svg
                className="w-2.5 h-2.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Reservation;
