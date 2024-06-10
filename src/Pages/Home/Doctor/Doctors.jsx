
import image from "../../../assets/featured-parallax.jpg";
import DoctorsCard from "./DoctorsCard";

const Doctors = () => {
  return (
    <>
    <div className="my-20">
      <div className="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-80 before:z-10 ">
        <img
          src={image}
          alt="Banner Image"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="min-h-[750px] relative z-50 h-full max-w-7xl mx-auto flex flex-col items-center text-center text-white p-6">
          <h2 className="sm:text-4xl text-2xl font-bold my-10">
            Experience Doctor Team
          </h2>
          <p className="sm:text-lg text-base text-center text-gray-200">
            we provide fast and reliable medical and healthcare services. Our
            experienced doctor team is dedicated to delivering high-quality care
            with compassion. Trust us for your urgent medical needs, routine
            check-ups, and specialized treatments.
          </p>
          {/* doctor card */}
         <DoctorsCard/>
        </div>
        <div></div>
      </div>
    </div>
    </>
  );
};

export default Doctors;
