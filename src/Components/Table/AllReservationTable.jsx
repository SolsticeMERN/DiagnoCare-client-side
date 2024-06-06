import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../Pages/Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const AllReservationTable = ({ reservations, isLoading, refetch }) => {
  const axiosSecure = useAxiosSecure();

  const { mutateAsync } = useMutation({
    mutationFn: async (_id) => {
      const { data } = await axiosSecure.delete(`/booking-reservation/${_id}`);
      return data;
    },
    onSuccess: async (data) => {
      console.log(data);
      toast.success("Reservation cancel successfully");

      refetch();
    },
    onError: (err) => {
      console.log(err.message);
    },
  });

  const handleDelete = async (_id) => {
    console.log("delete", _id);
    try {
      await mutateAsync(_id);
    } catch (err) {
      console.log(err);
    }
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="pb-4 bg-white dark:bg-gray-900 pt-5 pl-3">
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
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
              type="text"
              id="table-search"
              className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for items"
            />
          </div>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4"></th>
              <th scope="col" className="px-6 py-3">
                Test Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Time
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Action
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Report
              </th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation) => (
              <tr
                key={reservation._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="checkbox-table-search-1"
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    className="w-40 h-20 rounded-lg"
                    src={reservation?.image}
                    alt={`${reservation?.name} image`}
                  />
                  <div className="ps-3">
                    <div className="text-base font-semibold">
                      {reservation?.title}
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4">{reservation?.email}</td>
                <td className="px-6 py-4">
                  {new Date(reservation.date).toLocaleString()}
                </td>
                <td className="px-6 py-4">{reservation?.time}</td>

                <td className="px-6 py-4">
                  <button
                    onClick={() => handleDelete(reservation._id)}
                    type="button"
                    className="font-medium bg-slate-300 p-3 rounded-lg text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Cancel
                  </button>
                </td>
                <td className="px-6 py-4">
                  <button
                    type="button"
                    className="font-medium bg-slate-300 p-3 rounded-lg text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Submit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* {selectedreservation && (
        <SeeDetailsModal
          closeModal={closeModal}
          isOpen={isOpen}
          seeDetailsInfo={selectedreservation}
        />
      )} */}
    </div>
  );
};

export default AllReservationTable;
