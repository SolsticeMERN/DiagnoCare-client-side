import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import AllBannerTable from "../../../../Components/Table/AllBannerTable";
import { Helmet } from "react-helmet-async";

const AllBanners = () => {

    const axiosSecure = useAxiosSecure()
   
  const {data: banners =[], isLoading, refetch } = useQuery({
    queryKey: ['banner'],
    queryFn: async () => {
        const {data} = await axiosSecure.get('/banner')
        return data
    }
  })

    return (
        <div>
          <Helmet>
        <title>AllBanners - DaignoCare</title>
      </Helmet>
           <AllBannerTable banners={banners} isLoading={isLoading} refetch={refetch}/>
        </div>
    );
};

export default AllBanners;