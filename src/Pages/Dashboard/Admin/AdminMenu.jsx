import { NavLink } from "react-router-dom";
import { FaUsers } from "react-icons/fa6";
import { LuTestTube } from "react-icons/lu";
import { GiTestTubes } from "react-icons/gi";
import { FaBookMedical } from "react-icons/fa";
import { FaFileImage } from "react-icons/fa6";
import { FaImages } from "react-icons/fa";







const AdminMenu = () => {
    return (
        <div>
            <li>
              <NavLink
                to='/dashboard/allUsers'
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
               <FaUsers />
                <span className="ms-3">All users</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/dashboard/addTest'
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <LuTestTube />
                <span className="ms-3">Add a test</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/dashboard/all-Tests'
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
               <GiTestTubes />
                <span className="ms-3">All tests</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/dashboard/reservation'
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FaBookMedical />
                <span className="ms-3">Reservation</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/dashboard/addBanner'
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FaFileImage />
                <span className="ms-3">Add banner</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/dashboard/allBanners'
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FaImages />
                <span className="ms-3">All banners</span>
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
                        <path d="M3 3h2v12H3V3zm4 6h2v6H7V9zm4-4h2v10h-2V5zm4 6h2v4h-2v-4z"/>
                    </svg>
                    <span className="ms-3">Statistics</span>
                </NavLink>
            </li>
        </div>
    );
};

export default AdminMenu;
