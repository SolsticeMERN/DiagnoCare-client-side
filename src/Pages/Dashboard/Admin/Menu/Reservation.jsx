import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import AllReservationTable from "../../../../Components/Table/AllReservationTable";

const Reservation = () => {
 const axiosSecure = useAxiosSecure()

 const {data: reservations = [], isLoading, refetch} = useQuery({
    queryKey: ['reservation'],
    queryFn: async () => {
        const {data} = await axiosSecure.get('/reservation')
        return data
    }
 })

 console.log(reservations);




    return (
        <div>
            <AllReservationTable reservations={reservations} isLoading={isLoading} refetch={refetch}/>
        </div>
    );
};

export default Reservation;