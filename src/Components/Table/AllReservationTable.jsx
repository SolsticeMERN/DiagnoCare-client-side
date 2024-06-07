import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../Pages/Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useState } from "react";
import SubmitTestResult from "../Modal/SubmitTestResult";

const AllReservationTable = ({ reservations, isLoading, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const [isOpen, setIsOpen] = useState(false);
  const [currentReservation, setCurrentReservation] = useState(null);

  const { mutateAsync } = useMutation({
    mutationFn: async (_id) => {
      const { data } = await axiosSecure.delete(`/booking-reservation/${_id}`);
      return data;
    },
    onSuccess: async (data) => {
      console.log(data);
      toast.success("Reservation canceled successfully");
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

  const openModal = (reservation) => {
    setCurrentReservation(reservation);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentReservation(null);
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-3">
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
                    onClick={() => openModal(reservation)}
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
        {currentReservation && (
          <SubmitTestResult
            isOpen={isOpen}
            closeModal={closeModal}
            reservation={currentReservation}
          />
        )}
      </div>
    </div>
  );
};

export default AllReservationTable;
