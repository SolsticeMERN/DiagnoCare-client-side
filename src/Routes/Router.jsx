import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Doctors from "../Pages/Doctors/Doctors";
import Appointment from "../Pages/Appointment/Appointment";
import About from "../Pages/About/About";
  
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
            path: '/appointment',
            element: <Appointment/>
        },
        {
            path: '/about',
            element: <About/>
        },

      ]
    },
  ]);

  export default router;

