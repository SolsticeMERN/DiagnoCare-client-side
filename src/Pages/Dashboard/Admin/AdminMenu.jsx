import { NavLink } from "react-router-dom";

const AdminMenu = () => {
    return (
        <div>
            <li>
              <NavLink
                to='/dashboard/allUsers'
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M8.003 16a1 1 0 0 1-.894-.553L5.618 12H3a1 1 0 0 1 0-2h3a1 1 0 0 1 .894.553L8.382 13H11.618l.888-2H8a1 1 0 0 1 0-2h4.003a1 1 0 0 1 .894 1.447L12.382 11h2.236l.888-2H14a1 1 0 0 1 0-2h2.003a1 1 0 0 1 .894 1.447L16.382 9h1.236a1 1 0 1 1 0 2h-2.618a1 1 0 0 1-.894-.553L12.382 13H9.618l-.888 2H13a1 1 0 0 1 0 2H9a1 1 0 0 1-.894-1.447L9.618 15H6.382l-.888 2H3a1 1 0 0 1 0-2h2.618l1.49-3.105A1 1 0 0 1 8.003 16Zm4-10a1 1 0 0 1-1-1V1a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1Z" />
                </svg>
                <span className="ms-3">All users</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/dashboard/addTest'
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M8.003 16a1 1 0 0 1-.894-.553L5.618 12H3a1 1 0 0 1 0-2h3a1 1 0 0 1 .894.553L8.382 13H11.618l.888-2H8a1 1 0 0 1 0-2h4.003a1 1 0 0 1 .894 1.447L12.382 11h2.236l.888-2H14a1 1 0 0 1 0-2h2.003a1 1 0 0 1 .894 1.447L16.382 9h1.236a1 1 0 1 1 0 2h-2.618a1 1 0 0 1-.894-.553L12.382 13H9.618l-.888 2H13a1 1 0 0 1 0 2H9a1 1 0 0 1-.894-1.447L9.618 15H6.382l-.888 2H3a1 1 0 0 1 0-2h2.618l1.49-3.105A1 1 0 0 1 8.003 16Zm4-10a1 1 0 0 1-1-1V1a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1Z" />
                </svg>
                <span className="ms-3">Add a test</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/dashboard/allTests'
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M8.003 16a1 1 0 0 1-.894-.553L5.618 12H3a1 1 0 0 1 0-2h3a1 1 0 0 1 .894.553L8.382 13H11.618l.888-2H8a1 1 0 0 1 0-2h4.003a1 1 0 0 1 .894 1.447L12.382 11h2.236l.888-2H14a1 1 0 0 1 0-2h2.003a1 1 0 0 1 .894 1.447L16.382 9h1.236a1 1 0 1 1 0 2h-2.618a1 1 0 0 1-.894-.553L12.382 13H9.618l-.888 2H13a1 1 0 0 1 0 2H9a1 1 0 0 1-.894-1.447L9.618 15H6.382l-.888 2H3a1 1 0 0 1 0-2h2.618l1.49-3.105A1 1 0 0 1 8.003 16Zm4-10a1 1 0 0 1-1-1V1a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1Z" />
                </svg>
                <span className="ms-3">All tests</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/dashboard/reservation'
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M8.003 16a1 1 0 0 1-.894-.553L5.618 12H3a1 1 0 0 1 0-2h3a1 1 0 0 1 .894.553L8.382 13H11.618l.888-2H8a1 1 0 0 1 0-2h4.003a1 1 0 0 1 .894 1.447L12.382 11h2.236l.888-2H14a1 1 0 0 1 0-2h2.003a1 1 0 0 1 .894 1.447L16.382 9h1.236a1 1 0 1 1 0 2h-2.618a1 1 0 0 1-.894-.553L12.382 13H9.618l-.888 2H13a1 1 0 0 1 0 2H9a1 1 0 0 1-.894-1.447L9.618 15H6.382l-.888 2H3a1 1 0 0 1 0-2h2.618l1.49-3.105A1 1 0 0 1 8.003 16Zm4-10a1 1 0 0 1-1-1V1a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1Z" />
                </svg>
                <span className="ms-3">Reservation</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/dashboard/addBanner'
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M8.003 16a1 1 0 0 1-.894-.553L5.618 12H3a1 1 0 0 1 0-2h3a1 1 0 0 1 .894.553L8.382 13H11.618l.888-2H8a1 1 0 0 1 0-2h4.003a1 1 0 0 1 .894 1.447L12.382 11h2.236l.888-2H14a1 1 0 0 1 0-2h2.003a1 1 0 0 1 .894 1.447L16.382 9h1.236a1 1 0 1 1 0 2h-2.618a1 1 0 0 1-.894-.553L12.382 13H9.618l-.888 2H13a1 1 0 0 1 0 2H9a1 1 0 0 1-.894-1.447L9.618 15H6.382l-.888 2H3a1 1 0 0 1 0-2h2.618l1.49-3.105A1 1 0 0 1 8.003 16Zm4-10a1 1 0 0 1-1-1V1a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1Z" />
                </svg>
                <span className="ms-3">Add banner</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/dashboard/allBanners'
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M8.003 16a1 1 0 0 1-.894-.553L5.618 12H3a1 1 0 0 1 0-2h3a1 1 0 0 1 .894.553L8.382 13H11.618l.888-2H8a1 1 0 0 1 0-2h4.003a1 1 0 0 1 .894 1.447L12.382 11h2.236l.888-2H14a1 1 0 0 1 0-2h2.003a1 1 0 0 1 .894 1.447L16.382 9h1.236a1 1 0 1 1 0 2h-2.618a1 1 0 0 1-.894-.553L12.382 13H9.618l-.888 2H13a1 1 0 0 1 0 2H9a1 1 0 0 1-.894-1.447L9.618 15H6.382l-.888 2H3a1 1 0 0 1 0-2h2.618l1.49-3.105A1 1 0 0 1 8.003 16Zm4-10a1 1 0 0 1-1-1V1a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1Z" />
                </svg>
                <span className="ms-3">All Banners</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/dashboard/statistics'
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M8.003 16a1 1 0 0 1-.894-.553L5.618 12H3a1 1 0 0 1 0-2h3a1 1 0 0 1 .894.553L8.382 13H11.618l.888-2H8a1 1 0 0 1 0-2h4.003a1 1 0 0 1 .894 1.447L12.382 11h2.236l.888-2H14a1 1 0 0 1 0-2h2.003a1 1 0 0 1 .894 1.447L16.382 9h1.236a1 1 0 1 1 0 2h-2.618a1 1 0 0 1-.894-.553L12.382 13H9.618l-.888 2H13a1 1 0 0 1 0 2H9a1 1 0 0 1-.894-1.447L9.618 15H6.382l-.888 2H3a1 1 0 0 1 0-2h2.618l1.49-3.105A1 1 0 0 1 8.003 16Zm4-10a1 1 0 0 1-1-1V1a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1Z" />
                </svg>
                <span className="ms-3">Statistics</span>
              </NavLink>
            </li>
        </div>
    );
};

export default AdminMenu;