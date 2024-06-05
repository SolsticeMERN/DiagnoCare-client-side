import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useState } from "react";
import UpdateTestModal from "../../../../Components/Modal/UpdateTestModal";
import ViewReservationRoute from "../../../../Components/Modal/ViewReservationRoute";

const ViewAllTests = () => {
  const axiosSecure = useAxiosSecure();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTest, setSelectedTest] = useState(null);
  const [isOpenReservationModal, setIsOpenReservationModal] = useState(false);
  const [selectedReservation, setSelectedReservation] = useState(null);

  const {
    data: allTests,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["tests"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/tests");
      return data;
    },
  });

  if (isLoading) return <p>Loading...</p>;

  const handleDelete = async (_id) => {
    const { data } = await axiosSecure.delete(`/test/${_id}`);
    if (data.deletedCount > 0) {
      toast.success("Test Deleted Successfully");
      refetch();
    }
  };

  const openUpdateModal = (test) => {
    setSelectedTest(test);
    setIsOpen(true);
  };

  const ViewReservation = async (bookingId) => {
    try {
      const { data } = await axiosSecure.get(`/bookings/test/${bookingId}`);
      setSelectedReservation(data);
      setIsOpenReservationModal(true);

      console.log("Selected Bookings:", data);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  const closeReservationModal = () => {
    setIsOpenReservationModal(false);
    selectedReservation([]);
  };

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4"></th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Slots
              </th>
              <th scope="col" className="px-6 py-3">
                Time
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Action
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Reservation
              </th>
            </tr>
          </thead>
          <tbody>
            {allTests.map((test) => (
              <tr
                key={test._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id={`checkbox-${test._id}`}
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor={`checkbox-${test._id}`} className="sr-only">
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    className="w-40 h-20 rounded-lg"
                    src={test?.image}
                    alt={`${test?.name} image`}
                  />
                </th>
                <td className="px-6 py-4">{test?.title}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className={`h-2.5 w-2.5 rounded-full me-2`}></div>
                    {test?.shortDescription}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    ${test.price}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    {test.slots}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    {test.time}
                  </div>
                </td>
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => handleDelete(test._id)}
                    type="button"
                    className="font-medium mr-4 mb-4 bg-slate-300 p-2 rounded-lg text-blue-600 hover:underline"
                  >
                    Delete Test
                  </button>
                  <button
                    onClick={() => openUpdateModal(test)}
                    type="button"
                    className="font-medium bg-slate-300 p-2 rounded-lg text-blue-600 hover:underline"
                  >
                    Update Test
                  </button>
                </td>
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => ViewReservation(test._id)}
                    type="button"
                    className="font-medium mr-4 mb-4 bg-slate-300 p-2 rounded-lg text-blue-600 hover:underline"
                  >
                    View Reservation Tests
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedTest && (
        <UpdateTestModal
          refetch={refetch}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          test={selectedTest}
        />
      )}
      {selectedReservation && (
        <ViewReservationRoute
          isOpen={isOpenReservationModal}
          onClose={closeReservationModal}
          bookings={selectedReservation}
        />
      )}
    </div>
  );
};

export default ViewAllTests;
