import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "https://b9a12-server-side-solstice-mern.vercel.app",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

const useAxiosSecure = () => {
    const {logOut} = useAuth()
    const navigate = useNavigate()
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      if (token) {
        config.headers.authorization = `Bearer ${token}`;
      }
      return config;
    },
    async (error) =>  {
      // Do something with request error
      return Promise.reject(error);
    }
  );
  // Add a response interceptor
axiosSecure.interceptors.response.use(function (response) {
    return response;
  }, async (error) => {
    const status = error.response?.status
    if(status === 401 || status === 403){
     await logOut()
     navigate('/login')
    }
    return Promise.reject(error);
  });

  return axiosSecure;
};

export default useAxiosSecure;
