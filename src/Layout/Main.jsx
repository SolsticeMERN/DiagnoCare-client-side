import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-screen-xl mx-auto p-4 min-h-[68vh]">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default Main;
