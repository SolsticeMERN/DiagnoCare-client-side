import { MdDeleteForever } from "react-icons/md";

const AllUsersTable = ({bookings}) => {




  


    return (
        <div>
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
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => {
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
                        booking.reportStatus === "In Progress" &&
                        "bg-blue-100/30 text-blue-500"
                      } ${
                        booking.reportStatus === "Complete" &&
                        "bg-emerald-100/30 text-emerald-500"
                      } ${
                        booking.reportStatus === "Rejected" &&
                        "bg-red-100/30 text-red-500"
                      } `}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          booking.reportStatus === "pending" && "bg-yellow-500"
                        } ${
                          booking.reportStatus === "In Progress" &&
                          "bg-blue-500"
                        } ${
                          booking.reportStatus === "Complete" && "bg-green-500"
                        } ${
                          booking.reportStatus === "Rejected" && "bg-red-500"
                        }  `}
                      ></span>
                      <h2 className="text-sm font-normal ">
                        {booking.reportStatus}
                      </h2>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <button
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

export default AllUsersTable;