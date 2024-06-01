const DoctorsCard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
         <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
            <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
              <img src="https://i.ibb.co/nCbz36n/beautiful-young-female-doctor-looking-camera-office-1301-7807.jpg" alt="salad" />
              <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
            </div>
            <div>
                <div className="px-4 py-2 absolute -bottom-3  text-white bg-[#009bda]">
                    <h3>Shantelle Daugherty</h3>
                </div>
            </div>
            
          </div>
          <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
            <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
              <img src="https://i.ibb.co/589cq98/close-up-health-worker-23-2149112506.jpg" alt="salad" />
              <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
            </div>
            <div>
                <div className="px-4 py-2 absolute -bottom-3  text-white bg-[#009bda]">
                    <h3>John Mauldin</h3>
                </div>
            </div>
          </div>
          <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
            <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
              <img src="https://i.ibb.co/K78jsfW/general-practitioner-with-stethoscope-shoulders-holding-digital-tab-looking-camera-1098-19297.jpg" alt="salad" />
              <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
            </div>
            <div>
                <div className="px-4 py-2 absolute -bottom-3  text-white bg-[#009bda]">
                    <h3>Rodrigo Phillips</h3>
                </div>
            </div>
          </div>
          <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
            <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
              <img src="https://i.ibb.co/F8YKDmL/african-american-black-doctor-man-with-stethoscope-isolated-white-background-231208-2222.jpg" alt="salad" />
              <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
            </div>
            <div>
                <div className="px-4 py-2 absolute -bottom-3  text-white bg-[#009bda]">
                    <h3>Joan Martin</h3>
                </div>
            </div>
          </div>
         </div>
    );
};

export default DoctorsCard;