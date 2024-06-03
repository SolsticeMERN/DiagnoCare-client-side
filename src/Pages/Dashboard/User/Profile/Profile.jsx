import useAuth from "../../../Hooks/useAuth";
import image from "../../../../assets/featured-parallax.jpg";
import { useState } from "react";
import UpdateProfileModal from "../../../../Components/Modal/UpdateProfileModal";
import ChangePassword from "../../../../Components/Modal/ChangePassword";
import useRole from "../../../Hooks/useRole";

const Profile = () => {
  const { user, loading } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenChange, setIsModalOpenChange] = useState(false);
  const [role] = useRole()


  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenModalChange = () => {
    setIsModalOpenChange(true);
  };

  const handleCloseModalChange = () => {
    setIsModalOpenChange(false);
  };

  if (loading) return <div>Loading.....</div>;

  return (
    <div className="flex justify-center items-center ">
      <div className="bg-white shadow-lg rounded-2xl w-full lg:w-3/5">
        <img
          alt="profile"
          src={image}
          className="w-full mb-4 rounded-t-lg h-64"
        />
        <div className="flex flex-col items-center justify-center p-4 -mt-16">
          <a href="#" className="relative block">
            <img
              alt="profile"
              src={user?.photoURL}
              className="mx-auto object-cover rounded-full h-28 w-28  border-2 border-white "
            />
          </a>

          <p className="p-2  px-4 text-xs text-white bg-pink-500 rounded-full">
            {role === "admin" ? "Admin" : "User"}
          </p>
          <div className="mt-2 text-xl flex flex-col items-center font-medium text-gray-800 ">
            User Id:
            <div>{user?.uid}</div>
          </div>
          <div className="w-full p-2 mt-4 rounded-lg ">
            <div className="flex flex-wrap items-center space-y-4 justify-between text-sm text-gray-600 ">
              <p className="flex flex-col">
                Name
                <span className="font-bold text-black ">
                  {user?.displayName}
                </span>
              </p>
              <p className="flex flex-col">
                Email
                <span className="font-bold text-black ">{user?.email}</span>
              </p>

              <div>
                <button
                  onClick={handleOpenModal}
                  className="bg-[#F43F5E] px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053] block mb-1"
                >
                  Update Profile
                </button>
                <UpdateProfileModal
                  isModalOpen={isModalOpen}
                  handleCloseModal={handleCloseModal}
                />
                <button onClick={handleOpenModalChange}  className="bg-[#F43F5E] px-7 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053]">
                  Change Password
                </button>
                <ChangePassword
                  isModalOpenChange={isModalOpenChange}
                  handleCloseModalChange={handleCloseModalChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
