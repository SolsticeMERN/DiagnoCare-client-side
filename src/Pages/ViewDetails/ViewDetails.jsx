import { useParams } from "react-router-dom";
import useAxiosCommon from "../Hooks/useAxiosCommon";
import { useQuery } from "@tanstack/react-query";
import BookingModal from "../../Components/Modal/BookingModal";
import { useState } from "react";

const ViewDetails = () => {
  const { id } = useParams();
  const axiosCommon = useAxiosCommon();

  const { data: testDetail = {} } = useQuery({
    queryKey: ["testDetail", id],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/testDetails/${id}`);
      return data;
    },
  });

  const today = new Date().toLocaleDateString();

  const [isOpen, setIsOpen] = useState(false)
  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <div>
      <h1 className="text-5xl font-bold text-center p-20">Test Details Page</h1>
      <div key={testDetail._id} className="test-card flex flex-col md:flex-row justify-center items-center gap-10 mb-10">
        <div className="flex justify-center mb-5 px-4">
          <img src={testDetail.image} className="rounded-xl " alt={testDetail.title} />
        </div>
        <div className="text-center space-y-5">
          <div>
            <h3 className="text-3xl font-semibold mb-3">{testDetail.title}</h3>
            <p className="text-lg font-medium">{testDetail.shortDescription}</p>
          </div>
          <div className="text-2xl">
            <p><span className="font-bold">Date:</span> {today}</p>
            <p><span className="font-bold">Available Slots:</span> {testDetail.slots}</p>
            <p><span className="font-bold">Price:</span> ${testDetail.price}</p>
          </div>
          <button
          onClick={() => setIsOpen(!isOpen)}
              type="button"
              className=" bg-[#009bda] hover:bg-blue-800  font-medium rounded-lg text-sm px-4 py-2 text-center text-white dark:hover:bg-blue-700"
            >
              Book Now
            </button>
            <BookingModal closeModal={closeModal} isOpen={isOpen} bookingInfo={testDetail} today={today}/>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
