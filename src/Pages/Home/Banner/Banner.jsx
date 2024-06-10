// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Banner img
import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../Hooks/useAxiosCommon";
import { Link } from "react-router-dom";
import LoadingSpinner from "../../../Shared/LoadingSpinner";

const Banner = () => {
  const axiosCommon = useAxiosCommon();

  const { data: bannersData = [], isLoading, isError } = useQuery({
    queryKey: ['banner'],
    queryFn: async () => {
      const { data } = await axiosCommon.get('/banner');
      return data;
    },
  });

  const banners = Array.isArray(bannersData) ? bannersData : [];

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <LoadingSpinner />;
  }

  const activeBanners = banners.filter(banner => banner.isActive === "true");

  if (activeBanners.length === 0) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {activeBanners.map((banner) => (
          <SwiperSlide key={banner._id}>
            <div className="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
              <img
                src={banner.image}
                alt="Banner Image"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="min-h-[550px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
                <h2 className="sm:text-4xl text-2xl font-bold mb-6">
                  {banner.title}
                </h2>
                <p className="sm:text-lg text-base text-center text-gray-200">
                  {banner.description}
                </p>
                <div className="mt-6 text-white">
                  <p>Coupon Code: {banner.couponCode}</p>
                  <p>Discount Rate: {banner.discountRate}%</p>
                </div>
                <Link to={banner.buttonText === 'Book Appointment' ? '/allTests' : banner.buttonText === 'Meet Our Doctors' ? '/doctors' : '#'}>
                  <button 
                    type="button"
                    className="mt-12 bg-transparent text-white text-base py-3 px-6 border border-white rounded-lg hover:bg-white hover:text-black transition duration-300"
                  >
                    {banner.buttonText}
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
