import { Link, useNavigate } from "react-router-dom";
import { districts } from "../../Components/Districts/DistrictsData";
import { upazilas } from "../../Components/Districts/UpazilaData";
import { useForm } from "react-hook-form";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useState } from "react";
import useAuth from "../Hooks/useAuth";
import { imageUpload } from "../../Components/ImageApi";
import toast from "react-hot-toast";
import useAxiosCommon from "../Hooks/useAxiosCommon";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [ShowPassword, SetShowPassword] = useState(false);
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const axiosCommon = useAxiosCommon()

  const onSubmit = async (data) => {
    console.log(data.email, data.password);

    try {
      // Upload image and get image URL
      const image_url = await imageUpload(data.image[0]);

      // user registration
      const res = await createUser(data.email, data.password);
      console.log(res);

      // update profile with username and image in firebase
  await updateUserProfile(data.name, image_url);

   const userInfo = {
    name: data.name,
    email: data.email,
    status: "active"
   }

    axiosCommon.post('/users', userInfo)
    .then(res => {
      console.log(res.data);
      navigate("/");
      toast.success("Registration Successfully");
    })
    .catch((error) => {
      console.error('Error updating profile:', error);
    });
     

    } catch (err) {
      console.log(err);
      toast.error(err.message)
    }
  };

  return (
    <div>
      <div className="font-[sans-serif] text-gray-800 bg-white max-w-4xl flex items-center mx-auto md:h-screen p-4">
        <div className="grid md:grid-cols-3 items-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-xl overflow-hidden">
          <div className="max-md:order-1 flex flex-col justify-center space-y-16 max-md:mt-16 min-h-full bg-gradient-to-r from-gray-900 to-gray-700 lg:px-8 px-4 py-4">
            <div>
              <h4 className="text-white text-lg font-semibold">
                Create Your Account
              </h4>
              <p className="text-[13px] text-white mt-2">
                Welcome to our registration page! Get started by creating your
                account.
              </p>
            </div>
            <div>
              <h4 className="text-white text-lg font-semibold">
                Simple & Secure Registration
              </h4>
              <p className="text-[13px] text-white mt-2">
                Our registration process is designed to be straightforward and
                secure. We prioritize your privacy and data security.
              </p>
            </div>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="md:col-span-2 w-full py-6 px-6 sm:px-16"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold">Create an account</h3>
            </div>
            <div className="space-y-5">
              {/* name */}
              <div>
                <label className="text-sm mb-2 block">Name</label>
                <div className="relative flex items-center">
                  <input
                    {...register("name", { required: "Name is required" })}
                    type="text"
                    className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-red-500"
                    placeholder="Enter name"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-4 h-4 absolute right-4"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      cx="10"
                      cy="7"
                      r="6"
                      data-original="#000000"
                    ></circle>
                    <path
                      d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div>
                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
              </div>
              {/* email */}
              <div>
                <label className="text-sm mb-2 block">Email Id</label>
                <div className="relative flex items-center">
                  <input
                    {...register("email", { required: "Email is required" })}
                    type="email"
                    className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-red-500"
                    placeholder="Enter email"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-4 h-4 absolute right-4"
                    viewBox="0 0 682.667 682.667"
                  >
                    <defs>
                      <clipPath id="a" clipPathUnits="userSpaceOnUse">
                        <path
                          d="M0 512h512V0H0Z"
                          data-original="#000000"
                        ></path>
                      </clipPath>
                    </defs>
                    <g
                      clipPath="url(#a)"
                      transform="matrix(1.33 0 0 -1.33 0 682.667)"
                    >
                      <path
                        fill="none"
                        strokeMiterlimit="10"
                        strokeWidth="40"
                        d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                        data-original="#000000"
                      ></path>
                      <path
                        d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                        data-original="#000000"
                      ></path>
                    </g>
                  </svg>
                </div>
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>
              {/* image */}
              <div>
                <label className="text-sm mb-2 block">Image</label>
                <div className="relative flex items-center">
                  <input
                    type="file"
                    id="image"
                    {...register("image", { required: "Image is required" })}
                    accept="image/*"
                    className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-red-500"
                  />
                </div>
                {errors.image && (
                  <p className="text-red-500">{errors.image.message}</p>
                )}
              </div>
              {/* blood */}
              <div>
                <label className="text-sm mb-2 block">Blood Group</label>
                <div className="relative flex items-center">
                  <select
                    id="blood"
                    {...register("blood", {
                      required: "Blood group is required",
                    })}
                    className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-red-500"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Choose your Blood Group
                    </option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </div>
                {errors.blood && (
                  <p className="text-red-500">{errors.blood.message}</p>
                )}
              </div>
              {/* district */}
              <div>
                <label className="text-sm mb-2 block">District</label>
                <div className="relative flex items-center">
                  <select
                    className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-red-500"
                    {...register("district", {
                      required: "District is required",
                    })}
                  >
                    <option value="" disabled selected>
                      Choose your District
                    </option>
                    {districts.map((district) => (
                      <option value={district.name} key={district.id}>
                        {district.name}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.district && (
                  <p className="text-red-500">{errors.district.message}</p>
                )}
              </div>
              {/* Upazila */}
              <div>
                <label className="text-sm mb-2 block">Upazila</label>
                <div className="relative flex items-center">
                  <select
                    className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-red-500"
                    {...register("upazila", {
                      required: "Upazila is required",
                    })}
                  >
                    <option value="" disabled selected>
                      Choose your Upazila
                    </option>
                    {upazilas.map((upazila) => (
                      <option value={upazila.name} key={upazila.id}>
                        {upazila.name}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.upazila && (
                  <p className="text-red-500">{errors.upazila.message}</p>
                )}
              </div>
              {/* password */}
              <div>
                <label className="text-sm mb-2 block">Password</label>
                <div className="relative flex items-center">
                  <input
                    {...register("password", {
                      required: true,
                      minLength: 8,
                      maxLength: 20,
                      pattern: {
                        value:
                          /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/,
                      },
                    })}
                    type={ShowPassword ? "text" : "password"}
                    className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-red-500"
                    placeholder="Enter password"
                  />
                  <span
                    onClick={() => SetShowPassword(!ShowPassword)}
                    className="w-4 h-4 absolute right-4 cursor-pointer"
                  >
                    {ShowPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                  </span>
                </div>
                {errors.password?.type === "required" && (
                  <span className="text-red-500"> Password is required</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-500">
                    {" "}
                    Password must be at least 8 characters
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-red-500">
                    {" "}
                    Password must be less than 20 characters
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-500">
                    Your password must have at least a special symbol, upper and
                    lower case letters and a number
                  </span>
                )}
              </div>
              {/* checkbox */}
              <div className="relative flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    type="checkbox"
                    {...register("terms", {
                      required: "You must agree to the terms",
                    })}
                    className="bg-white border border-gray-300 text-blue-500 focus:ring-blue-500 rounded cursor-pointer"
                  />
                </div>
                <div className="text-sm ml-3">
                  <label htmlFor="terms" className="font-medium text-gray-900">
                    By signing up, you agree to our
                    <Link className="mx-1 hover:underline" to="/">
                      terms and conditions.
                    </Link>
                  </label>
                </div>
              </div>
              {errors.terms && (
                <p className="text-red-500">{errors.terms.message}</p>
              )}
              {/* button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="hover:bg-indigo-700 focus:bg-indigo-700 text-center bg-indigo-600 text-white w-full py-2.5 rounded-md transition duration-100"
                >
                  Register Now
                </button>
                <p className="text-sm text-gray-500 mt-3">
                  Already have an account?
                  <Link
                    className="text-indigo-600 font-medium ml-1 hover:underline"
                    to="/login"
                  >
                    Sign In
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
