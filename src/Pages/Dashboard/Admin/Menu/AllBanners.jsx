import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import AllBannerTable from "../../../../Components/Table/AllBannerTable";

const AllBanners = () => {

    const axiosSecure = useAxiosSecure()
   
  const {data: banners =[], isLoading, refetch } = useQuery({
    queryKey: ['banner'],
    queryFn: async () => {
        const {data} = await axiosSecure.get('/banner')
        return data
    }
  })

 console.log(banners);
    return (
        <div>
           <AllBannerTable users={banners} isLoading={isLoading} refetch={refetch}/>
        </div>
    );
};

export default AllBanners;