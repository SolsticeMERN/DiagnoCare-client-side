import { useState } from "react";
import SeeDetailsModal from "../Modal/SeeDetailsModal";
import UpdateRoleModal from "../Modal/UpdateRoleModal";
import UpdateStatusModal from "../Modal/UpdateStatusModal";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import useAxiosSecure from "../../Pages/Hooks/useAxiosSecure";




const AllUsersTable = ({ users, isLoading, refetch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [updateUser, setUpdateUser] = useState(null);
  const [updateStatus, setUpdateStatus] = useState(null);
  const axiosSecure = useAxiosSecure();
  

  

  const openModal = (user) => {
    setSelectedUser(user);
    setIsOpen(true);
  };

  const updateUserModal = (user) => {
    setUpdateUser(user);
    setIsOpen(true);
  };

  const updateStatusModal  = (user) => {
    setUpdateStatus(user);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedUser(null);
    setUpdateUser(null);
    setUpdateStatus(null);
  };

  const generatePDF = async (user) => {
    const doc = new jsPDF();
  
    // Fetch the bookings for the user
    const { data: bookings } = await axiosSecure.get(`/booking/${user.email}`);
  
    // User details
    doc.text(`User Details`, 14, 20);
    doc.text(`Name: ${user.name}`, 14, 30);
    doc.text(`Email: ${user.email}`, 14, 40);
    doc.text(`Role: ${user.role}`, 14, 50);
    doc.text(`Status: ${user.status === 'active' ? 'Online' : 'Blocked'}`, 14, 60);
  
    // Test details
    if (bookings && bookings.length > 0) {
      doc.text(`Tests Booked`, 14, 80);
      const testRows = bookings.map((booking, index) => [
        index + 1,
        booking.title,
        new Date(booking.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        booking.time,
        booking.reportStatus,
      ]);
  
      doc.autoTable({
        head: [['#', 'Test Name', 'Date', 'Time', 'Status']],
        body: testRows,
        startY: 90,
      });
    } else {
      doc.text(`No tests booked`, 14, 80);
    }
  
    // Save the PDF
    doc.save(`${user.name}_details.pdf`);
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4"></th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                View Details
              </th>
              <th scope="col" className="px-6 py-3">Download Details</th>
              <th scope="col" className="px-6 py-3 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user._id}
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
                    className="w-10 h-10 rounded-full"
                    src={user?.image}
                    alt={`${user?.name} image`}
                  />
                  <div className="ps-3">
                    <div className="text-base font-semibold">{user?.name}</div>
                    <div className="font-normal text-gray-500">
                      {user?.email}
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4">{user?.role}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div
                      className={`h-2.5 w-2.5 rounded-full ${
                        (user?.status === "active" && "bg-green-500") ||
                        (user?.status === "blocked" && "bg-red-500")
                      } me-2`}
                    ></div>
                    {user?.status === "active" ? "Online" : "Blocked"}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => openModal(user)}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    See More info
                  </button>
                </td>
                <td className="px-6 py-4">
                  <button onClick={() => generatePDF(user)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    Download Details
                  </button>
                </td>
                <td className="px-6 py-4 text-center">
                  <button
                    type="button"
                    onClick={() => updateUserModal(user)}
                    className="font-medium mr-4  bg-slate-300 p-2 rounded-lg  text-blue-600  hover:underline"
                  >
                    Update Role
                  </button>
                  <button
                    type="button"
                    onClick={() => updateStatusModal(user)}
                    className="font-medium  bg-slate-300 p-2 rounded-lg  text-blue-600  hover:underline"
                  >
                    Update Status
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedUser && (
        <SeeDetailsModal
          closeModal={closeModal}
          isOpen={isOpen}
          seeDetailsInfo={selectedUser}
        />
      )}
      {updateUser && (
        <UpdateRoleModal
          updateUser={updateUser}
          closeModal={closeModal}
          isOpen={isOpen}
          refetch={refetch}
        />
      )}
      {updateStatus && (
        <UpdateStatusModal
        updateStatus={updateStatus}
          closeModal={closeModal}
          isOpen={isOpen}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default AllUsersTable;
