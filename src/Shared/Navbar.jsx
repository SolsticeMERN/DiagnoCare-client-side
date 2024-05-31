import { useState } from "react";
import icon from '../assets/Icon.png'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="bg-white border-gray-200 z-10 shadow-2xl bg-opacity-30 text-black pt-3">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          
            <span className="self-center text-blue-600 text-3xl font-bold whitespace-nowrap flex justify-center items-center gap-2">
              <img src={icon} className="h-10" alt="" />
              <p>DiagnoCare</p>
            </span>
         
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className=" bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 text-white dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
            </button>
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
            className={`items-center justify-between ${isOpen ? "block" : "hidden"} w-full md:flex md:w-auto md:order-1`}
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 gap-2 md:bg-white  dark:border-gray-700">
              <li>
                <NavLink
                to='/'
                className={({ isActive}) =>
                 isActive ? "block py-2 px-3 md:p-0 bg-blue-700 border-b-2 border-blue-500 md:bg-transparent text-gray-200 rounded-lg md:rounded-none md:dark:text-blue-500" : "text-gray-900"
                }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                 to='/doctors'
                 className={({ isActive}) =>
                  isActive ? "block py-2 px-3 md:p-0 bg-blue-700 border-b-2 border-blue-500 md:bg-transparent text-gray-200 rounded-lg md:rounded-none md:text-blue-500 hover:text-blue-500"  : "text-gray-900"
                 }
                >
                  Doctors
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/appointment'
                  className={({ isActive}) =>
                    isActive ? "block py-2 px-3 md:p-0 bg-blue-700 border-b-2 border-blue-500 md:bg-transparent text-gray-200 rounded-lg md:rounded-none md:dark:text-blue-500" : "text-gray-900"
                   }
                >
                  Appointment
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/about'
                  className={({ isActive}) =>
                    isActive ? "block py-2 px-3 md:p-0 bg-blue-700 border-b-2 border-blue-500 md:bg-transparent text-gray-200 rounded-lg md:rounded-none md:dark:text-blue-500" : "text-gray-900"
                   }
                >
                  About Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
