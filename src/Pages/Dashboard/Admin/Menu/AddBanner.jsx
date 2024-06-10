import { useForm } from "react-hook-form";
import { imageUpload } from "../../../../Components/ImageApi";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const AddBanner = () => {

    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
    
      const onSubmit = async (data) => {
    
        try{
          const image_url = await imageUpload(data.image[0])
    
          const bannerInfo = {
            title: data.title,
            description: data.description,
            couponCode: data.couponCode,
            discountRate: data.discountRate,
            buttonText: data.buttonText,
            isActive: data.isActive,
            image: image_url
          }
        
          console.log(bannerInfo);
    
        const res =  await axiosSecure.post('/banner', bannerInfo)
    
        if(res.data.insertedId){
            toast.success('Banner Added SuccessFully')
            navigate('/dashboard/allBanners')
        }
         
        } catch(err){
            console.log(err);
        }
      };

    return (
        <div>
          <Helmet>
        <title>Add Banner - DaignoCare</title>
      </Helmet>
           <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-xl mx-auto mt-5 bg-gray-700 p-4 rounded-lg"
      >
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            {...register("title", { required: "Banner title is required" })}
            name="title"
            id="title"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="title"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Banner Title
          </label>
          {errors.title && (
            <p className="text-red-500">{errors.title.message}</p>
          )}
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="user_avatar"
          >
            Upload Image
          </label>
          <input
            name="image"
            id="image"
            {...register("image", { required: "Banner image is required" })}
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            aria-describedby="user_avatar_help"
            type="file"
          />
          {errors.image && (
            <p className="text-red-500">{errors.image.message}</p>
          )}
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="description"
            {...register("description", {
              required: "description is required",
            })}
            id="description"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="description"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Short Description
          </label>
          {errors.description && (
            <p className="text-red-500">{errors.description.message}</p>
          )}
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="couponCode"
              {...register("couponCode")}
              id="couponCode"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="couponCode"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              couponCode
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="discountRate"
              {...register("discountRate")}
              id="discountRate"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="discountRate"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              discountRate
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="buttonText"
            {...register("buttonText", {
              required: "buttonText is required",
            })}
            id="description"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="buttonText"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            buttonText
          </label>
          {errors.time && (
            <p className="text-red-500">{errors.buttonText.message}</p>
          )}
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="isActive"
            {...register("isActive", {
              required: "isActive is required",
            })}
            id="isActive"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="isActive"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            isActive
          </label>
          {errors.time && (
            <p className="text-red-500">{errors.isActive.message}</p>
          )}
        </div>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
        </div>
    );
};

export default AddBanner;