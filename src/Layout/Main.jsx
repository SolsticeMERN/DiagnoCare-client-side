import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const Main = () => {
  return (
    <div className="work-sans">
      <Navbar />
      <div className="min-h-[68vh]">
        {/* max-w-screen-xl mx-auto p-4 */}
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default Main;
