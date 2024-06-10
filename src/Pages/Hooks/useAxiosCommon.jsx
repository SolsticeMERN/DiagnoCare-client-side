import axios from "axios";
const axiosCommon = axios.create({
    baseURL: 'https://b9a12-server-side-solstice-mern.vercel.app'
})

const useAxiosCommon = () => {
    return axiosCommon
};

export default useAxiosCommon;