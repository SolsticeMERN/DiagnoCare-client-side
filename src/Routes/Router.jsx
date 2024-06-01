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
    }
  ]);

  export default router;

