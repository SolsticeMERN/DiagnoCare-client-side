import { useState } from "react";
import icon from "../assets/Icon.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../Pages/Hooks/useAuth";
import useStatus from "../Pages/Hooks/useStatus";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);
  const { user, logOut } = useAuth();
  const navigate = useNavigate()
  const [status] = useStatus()

  const handleSignOut = () => {
    logOut()
    navigate('/login')

  }

  return (
    <div>
      <nav className="bg-white border-gray-200 z-10 shadow-2xl bg-opacity-30 text-black pt-3">
        <div className="flex max-w-screen-xl flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/">
            <span className="self-center text-[#009bda] text-3xl font-bold whitespace-nowrap flex justify-center items-center gap-2">
              <img src={icon} className="h-10" alt="Icon" />
              <p>DiagnoCare</p>
            </span>
          </Link>

          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => {
                    setIsUserOpen(!isUserOpen);
                  }}
                  type="button"
                  className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  id="user-menu-button"
                  aria-expanded={isUserOpen}
                  data-dropdown-toggle="user-dropdown"
                  data-dropdown-placement="bottom"
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="w-10 h-10 rounded-full"
                    src={user?.photoURL}
                    alt="user photo"
                  />
                </button>
                {/* <!-- Dropdown menu --> */}
                <div
                  className={`absolute right-0 z-50 my-4 text-base list-none ${
                    isUserOpen ? "block" : "hidden"
                  } bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"`}
                >
                  <div className="px-4 py-3">
                    <span className="block text-sm text-gray-900 dark:text-white">
                      {user?.displayName}
                    </span>
                    <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                      {user?.email}
                    </span>
                  </div>
                  <ul className="py-2" aria-labelledby="user-menu-button">
                    <li>
                      <NavLink
                        to='/dashboard'
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Dashboard
                      </NavLink>
                    </li>
                    <li>
                      <a
                      onClick={handleSignOut}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <Link to="/login">
                <button
                  type="button"
                  className="bg-[#009bda] hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2 text-center text-white dark:hover:bg-blue-700"
                >
                  Login
                </button>
              </Link>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between ${
              isOpen ? "block" : "hidden"
            } w-full md:flex md:w-auto md:order-1`}
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 gap-2 md:bg-white dark:border-gray-700">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 md:p-0 bg-blue-700 font-semibold border-b-2 border-blue-500 md:bg-transparent text-gray-200 rounded-lg md:rounded-none md:text-blue-500"
                      : "text-gray-900 hover:text-blue-500 hover:border-b-2 hover:border-blue-500"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/allTests"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 md:p-0 bg-blue-700 font-semibold border-b-2 border-blue-500 md:bg-transparent text-gray-200 rounded-lg md:rounded-none md:text-blue-500 "
                      : "text-gray-900 hover:text-blue-500 hover:border-b-2 hover:border-blue-500"
                  }
                >
                  All Tests
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 md:p-0 bg-blue-700 font-semibold border-b-2 border-blue-500 md:bg-transparent text-gray-200 rounded-lg md:rounded-none md:text-blue-500 "
                      : "text-gray-900 hover:text-blue-500 hover:border-b-2 hover:border-blue-500"
                  }
                >
                  About Us
                </NavLink>
              </li>
              {user && status === 'active' ? (
                <li>
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                      isActive
                        ? "block py-2 px-3 md:p-0 bg-blue-700 font-semibold border-b-2 border-blue-500 md:bg-transparent text-gray-200 rounded-lg md:rounded-none md:text-blue-500 "
                        : "text-gray-900 hover:text-blue-500 hover:border-b-2 hover:border-blue-500"
                    }
                  >
                    Dashboard
                  </NavLink>
                </li>
              ) : null}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
