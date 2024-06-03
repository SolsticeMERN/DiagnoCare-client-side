import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import AllTests from "../Pages/AllTests/AllTests";
import Doctors from "../Pages/Home/Doctor/Doctors";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "../Provider/PrivateRoute";
import Profile from "../Pages/Dashboard/User/Profile/Profile";
import TestResults from "../Pages/Dashboard/User/TestResults/TestResults";
import Bookings from "../Pages/Dashboard/User/Appointments/Bookings";
import AllUsers from "../Pages/Dashboard/Admin/Menu/AllUsers";
import AddTest from "../Pages/Dashboard/Admin/Menu/AddTest";
import AddBanner from "../Pages/Dashboard/Admin/Menu/AddBanner";
import AllBanners from "../Pages/Dashboard/Admin/Menu/AllBanners";
import Statistics from "../Pages/Dashboard/Admin/Menu/Statistics";
import AdminRoute from "./AdminRoute";
import Reservation from "../Pages/Dashboard/Admin/Menu/Reservation";

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <p>Error</p>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/doctors',
            element: <Doctors/>
        },
        {
            path: '/allTests',
            element: <AllTests/>
        },
        {
            path: '/about',
            element: <About/>
        },
        {
          path: '/viewDetails/:id',
          element: <ViewDetails/>
      },

      ]
    },
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: '/register',
      element: <Register/>
    },
    {
      path: '/dashboard',
      element: <PrivateRoute><Dashboard/></PrivateRoute>,
      children: [
        {
          path: '/dashboard',
          element: <Profile/>
        },
        // users routes
        {
          path: 'myBookings',
          element: <Bookings/>
        },
        {
          path: 'testResults',
          element: <TestResults/> 
        },
        // admin routes
        {
          path: 'allUsers',
          element: <PrivateRoute><AdminRoute> <AllUsers/></AdminRoute></PrivateRoute>
        },
        {
          path: 'addTest',
          element: <PrivateRoute><AdminRoute> <AddTest/></AdminRoute></PrivateRoute>
        },
        {
          path: 'allTests',
          element: <PrivateRoute><AdminRoute> <AllTests/></AdminRoute></PrivateRoute>
        },
        {
          path: 'addBanner',
          element: <PrivateRoute><AdminRoute> <AddBanner/></AdminRoute></PrivateRoute>
        },
        {
          path: 'allBanners',
          element: <PrivateRoute><AdminRoute> <AllBanners/></AdminRoute></PrivateRoute>
        },
        {
          path: 'statistics',
          element: <PrivateRoute><AdminRoute> <Statistics/></AdminRoute></PrivateRoute>
        },
        {
          path: 'reservation',
          element: <PrivateRoute><AdminRoute> <Reservation/></AdminRoute></PrivateRoute>
        },

      ]
    }
  ]);

  export default router;

