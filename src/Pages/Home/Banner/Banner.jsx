// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// banner img
import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../Hooks/useAxiosCommon";


const Banner = () => {
const axiosCommon = useAxiosCommon()

 const {data: banners = {}} = useQuery({
  queryKey: ['banner'],
  queryFn: async () => {
    const {data} = await axiosCommon.get('/banner')
    return data;
  }
 })

console.log(banners);


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

        {
          banners.map((banner, index) => {
            return <SwiperSlide key={index}>
            <div className="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10 ">
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
                  {banner.text}
                </p>
                <div className="mt-6 text-white">
                  <p>Coupon Code: {banner.couponCode}</p>
                  <p>Discount Rate: {banner.discountRate}%</p>
                </div>
  
                <button
                  type="button"
                  className="mt-12 bg-transparent text-white text-base py-3 px-6 border border-white rounded-lg hover:bg-white hover:text-black transition duration-300"
                >
                  {banner.buttonText}
                </button>
              </div>
            </div>
          </SwiperSlide>
          })
        }
      </Swiper>
    </div>
  );
};

export default Banner;
