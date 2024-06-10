import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { MdDeleteForever } from "react-icons/md";
import toast from "react-hot-toast";
import useAuth from "../../../Hooks/useAuth";
import LoadingSpinner from "../../../../Shared/LoadingSpinner";
import { Helmet } from "react-helmet-async";

const Bookings = () => {
  const axiosSecure = useAxiosSecure();
  const {user, loading} = useAuth()

  const { data: bookings = [], refetch, isLoading } = useQuery({
    queryKey: ["booking"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/booking/${user?.email}`);
      return data;
    },
  });

  const {mutateAsync} = useMutation({
    mutationFn: async (_id) => {
      const {data} = await axiosSecure.delete(`/booking-test/${_id}`)
      return data
    },
    onSuccess: async (data) => {
      console.log(data);
      toast.success('Booking cancel successfully')


      refetch()
    },
    onError: (err) => {
      console.log(err.message);
    }
  })


  const handleDelete = async (_id) => {
    console.log('delete', _id);
    try{
     await mutateAsync(_id)
    }catch (err) {
      console.log(err);
    }

  }

if(isLoading || loading) return <LoadingSpinner/>


  return (
    <div>
      <Helmet>
        <title>My Bookings - DaignoCare</title>
      </Helmet>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Test name
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Time
              </th>
              <th scope="col" className="px-6 py-3">
               Report Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {bookings.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-4">
                  Booking not found
                </td>
              </tr>
            ) : bookings.map((booking, index) => {
              return (
                <tr
                  key={index}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {booking.title}
                  </th>
                  <td className="px-6 py-4">${booking.amountPaid}</td>
                  <td className="px-6 py-4">
                    {booking.date
                      ? new Date(booking.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })
                      : "N/A"}
                  </td>
                  <td className="px-6 py-4">{booking.time} PM</td>
                  <td className="px-6 py-4">
                    {" "}
                    <div
                      className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 ${
                        booking.reportStatus === "pending" &&
                        "bg-yellow-100/30 text-yellow-500"
                      } ${
                        booking.reportStatus === "delivered" &&
                        "bg-emerald-100/30 text-emerald-500"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          booking.reportStatus === "pending" && "bg-yellow-500"
                        } ${
                          booking.reportStatus === "delivered" && "bg-green-500"
                        }`}
                      ></span>
                      <h2 className="text-sm font-normal ">
                        {booking.reportStatus}
                      </h2>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleDelete(booking._id)}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      <MdDeleteForever size={30} className="text-red-500" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
