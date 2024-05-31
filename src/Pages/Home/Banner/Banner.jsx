// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// banner img
import slider1 from "../../../assets/HomeSlider-1.jpg";
import slider2 from "../../../assets/HomeSlider2.jpg";
import slider3 from "../../../assets/HomeSlider3.jpg";

const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10 ">
            <img
              src={slider1}
              alt="Banner Image"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="min-h-[550px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
              <h2 className="sm:text-4xl text-2xl font-bold mb-6">
                Comprehensive <span className="text-[#009bda]">Healthcare</span>
              </h2>
              <p className="sm:text-lg text-base text-center text-gray-200">
                Access top-notch healthcare services. Book an appointment with
                our specialists today!
              </p>
              <div className="mt-6 text-white">
                <p>Coupon Code: SUMMER2024</p>
                <p>Discount Rate: 15%</p>
              </div>

              <button
                type="button"
                className="mt-12 bg-transparent text-white text-base py-3 px-6 border border-white rounded-lg hover:bg-white hover:text-black transition duration-300"
              >
                Book Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
            <img
              src={slider2}
              alt="Banner Image"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="min-h-[550px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
              <h2 className="sm:text-4xl text-2xl font-bold mb-6">
                Trusted <span className="text-[#009bda]">Medical</span> Experts
              </h2>
              <p className="sm:text-lg text-base text-center text-gray-200">
                Our team of experienced doctors is here to provide you with the
                best care possible.
              </p>
              <div className="mt-6 text-white">
                <p>Coupon Code: HEALTH2024</p>
                <p>Discount Rate: 10%</p>
              </div>
              <button
                type="button"
                className="mt-12 bg-transparent text-white text-base py-3 px-6 border border-white rounded-lg hover:bg-white hover:text-black transition duration-300"
              >
                Meet Our Doctors
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
            <img
              src={slider3}
              alt="Banner Image"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="min-h-[550px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
              <h2 className="sm:text-4xl text-2xl font-bold mb-6">
                State-of-the-Art{" "}
                <span className="text-[#009bda]">Facilities</span>
              </h2>
              <p className="sm:text-lg text-base text-center text-gray-200">
                Experience world-class medical facilities designed for your
                comfort and care.
              </p>
              <div className="mt-6 text-white">
                <p>Coupon Code: FACILITY10</p>
                <p>Discount Rate: 20%</p>
              </div>

              <button
                type="button"
                className="mt-12 bg-transparent text-white text-base py-3 px-6 border border-white rounded-lg hover:bg-white hover:text-black transition duration-300"
              >
                Learn More
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
