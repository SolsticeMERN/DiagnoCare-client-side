import image from "../../../assets/featured-parallax.jpg";

const Doctors = () => {
  return (
    <div className="my-20">
      <div className="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-80 before:z-10 before:rounded-2xl">
        <img
          src={image}
          alt="Banner Image"
          className="absolute inset-0 w-full h-full object-cover rounded-2xl"
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
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
         <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
            <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
              <img src="https://i.ibb.co/nCbz36n/beautiful-young-female-doctor-looking-camera-office-1301-7807.jpg" alt="salad" />
              <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h5 className="block font-sans text-xl antialiased font-bold leading-snug tracking-normal text-blue-gray-900">
                  hi
                </h5>
              </div>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
                hello
              </p>
            </div>
          </div>
          <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
            <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
              <img src="https://i.ibb.co/589cq98/close-up-health-worker-23-2149112506.jpg" alt="salad" />
              <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h5 className="block font-sans text-xl antialiased font-bold leading-snug tracking-normal text-blue-gray-900">
                  hi
                </h5>
              </div>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
                hello
              </p>
            </div>
          </div>
          <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
            <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
              <img src="https://i.ibb.co/K78jsfW/general-practitioner-with-stethoscope-shoulders-holding-digital-tab-looking-camera-1098-19297.jpg" alt="salad" />
              <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h5 className="block font-sans text-xl antialiased font-bold leading-snug tracking-normal text-blue-gray-900">
                  hi
                </h5>
              </div>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
                hello
              </p>
            </div>
          </div>
          <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
            <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
              <img src="https://i.ibb.co/F8YKDmL/african-american-black-doctor-man-with-stethoscope-isolated-white-background-231208-2222.jpg" alt="salad" />
              <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h5 className="block font-sans text-xl antialiased font-bold leading-snug tracking-normal text-blue-gray-900">
                  hi
                </h5>
              </div>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
                hello
              </p>
            </div>
          </div>
         </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Doctors;
