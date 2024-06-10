import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../Pages/Hooks/useAuth";
import useRole from "../Pages/Hooks/useRole";
import AdminMenu from "../Pages/Dashboard/Admin/AdminMenu";
import { IoLogOut } from "react-icons/io5";
import { MdBookmarkAdd } from "react-icons/md";
import { RiTestTubeFill } from "react-icons/ri";
import LoadingSpinner from "../Shared/LoadingSpinner";
import { Helmet } from "react-helmet-async";





const Dashboard = () => {
  const { logOut } = useAuth();
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const [isEcommerceOpen, setIsEcommerceOpen] = useState(false);
  const navigate = useNavigate();
  const [role, isLoading] = useRole();
  console.log(role);

  const handleLogout = () => {
    logOut();
    navigate("/login");
  };

  if(isLoading) return <LoadingSpinner/>

  return (
    <div>
      <Helmet>
        <title>Dashboard - DaignoCare</title>
      </Helmet>
      {/* <!-- drawer init and show --> */}
      <div className="text-center">
        <button
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700  lg:hidden"
          type="button"
        >
          Click to open sidebar
        </button>
      </div>

      <div>
        {/* <!-- drawer component --> */}
        <div
          id="drawer-navigation"
          className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${
            isDrawerOpen ? "translate-x-0" : "-translate-x-full"
          } bg-white w-64 dark:bg-gray-800`}
          tabIndex="-1"
          aria-labelledby="drawer-navigation-label"
        >
          <h5
            id="drawer-navigation-label"
            className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
          >
            {role === "admin" ? "Admin Dashboard" : "User Dashboard"}
          </h5>
          <button
            type="button"
            onClick={() => setIsDrawerOpen(false)}
            aria-controls="drawer-navigation"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              className="w-3 h-3 lg:hidden"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
          <div>
            <div className="py-4 overflow-y-auto">
              <ul className="space-y-2 font-medium">
                {role === "admin" || isLoading ? (
                  <AdminMenu />
                ) : (
                  <>
                    <li>
                      <button
                        type="button"
                        className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        aria-controls="dropdown-example"
                        onClick={() => setIsEcommerceOpen(!isEcommerceOpen)}
                      >
                        <MdBookmarkAdd />
                        <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                          Appointments
                        </span>
                        <svg
                          className={`w-3 h-3 transition-transform ${
                            isEcommerceOpen ? "rotate-180" : ""
                          }`}
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                      </button>

                      <ul
                        id="dropdown-example"
                        className={`py-2 space-y-2 ${
                          isEcommerceOpen ? "" : "hidden"
                        }`}
                      >
                        <li>
                          <NavLink
                            to="/dashboard/myBookings"
                            className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                          >
                            My Booking
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/testResults"
                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                      >
                        <RiTestTubeFill />
                        <span className="ms-3">Test Results</span>
                      </NavLink>
                    </li>
                  </>
                )}
              </ul>
            </div>

            <hr />
            {/* user info */}
            <div className="py-4 overflow-y-auto">
              <ul className="space-y-2 font-medium">
                <li>
                  <NavLink
                    to="/dashboard"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <svg
                      className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5.121 17.804A1.5 1.5 0 017.537 16h8.926a1.5 1.5 0 011.415 1.804l-1.107 6.604a1.5 1.5 0 01-1.473 1.205H7.701a1.5 1.5 0 01-1.474-1.205l-1.106-6.604zM8.538 4.09a2 2 0 112.828 2.83A2 2 0 018.538 4.09z"
                      />
                    </svg>
                    <span className="ms-3">My Profile</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <svg
                      className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 9l9-7 9 7v11a2 2 0 01-2 2h-3a2 2 0 01-2-2v-5H8v5a2 2 0 01-2 2H3a2 2 0 01-2-2V9z"
                      />
                    </svg>
                    <span className="ms-3">Home</span>
                  </NavLink>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    aria-controls="dropdown-example"
                  >
                    <IoLogOut size={24}/>
                    <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                      Logout
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- main content --> */}
      <div
        className={`flex-1 p-4 transition-all duration-300 ${
          isDrawerOpen ? "ml-64" : "ml-0"
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
