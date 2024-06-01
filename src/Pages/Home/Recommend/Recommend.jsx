import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../Hooks/useAxiosCommon";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Recommend = () => {
  const axiosCommon = useAxiosCommon();

  const { data: recommends = {} } = useQuery({
    queryKey: ["recommend"],
    queryFn: async () => {
      const { data } = await axiosCommon.get("/recommend");
      return data;
    },
  });

  console.log(recommends);

  return (
    <div className="max-w-screen-xl mx-auto p-4 my-20">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
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
            recommends.map((recommend) => {
                return <SwiperSlide key={recommend._id}>
                <section className="bg-gray-200">
                  <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                    <figure className="max-w-screen-md mx-auto">
                      <svg
                        className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                        viewBox="0 0 24 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                          fill="currentColor"
                        />
                      </svg>
                      <blockquote className="space-y-4">
                        <h2 className="text-3xl font-medium text-gray-900">
                         {recommend.title}
                        </h2>
                        <p className="w-1/2 mx-auto">{recommend.description}</p>
                        <p>&#34;{recommend.type}&#34;</p>
                      </blockquote>
                      
                    </figure>
                  </div>
                </section>
              </SwiperSlide>
            })
        }
        
      </Swiper>
    </div>
  );
};

export default Recommend;
