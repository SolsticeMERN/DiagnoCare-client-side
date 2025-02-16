import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [ShowPassword, SetShowPassword] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation()

  const from = location.state?.from?.pathname || "/"


  const onSubmit = async (data) => {
    console.log(data);

    try {
      // user registration
      const res = await signIn(data.email, data.password);
      console.log(res);
      navigate(from)
      toast.success('Login Successfully')
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Login - DaignoCare</title>
      </Helmet>
      <div className="font-[sans-serif] text-[#333]">
        <div className="min-h-screen flex flex-col items-center justify-center">
          <div className="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full p-4 m-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
            <div className="md:max-w-md w-full sm:px-6 py-4">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-12">
                  <h3 className="text-3xl font-extrabold">Sign in</h3>
                  <p className="text-sm mt-4 ">
                    Don&apos;t have an account{" "}
                    <Link to="/register">
                      <span
                        href="javascript:void(0);"
                        className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
                      >
                        Register here
                      </span>
                    </Link>
                  </p>
                </div>
                <div>
                  <label className="text-xs block mb-2">Email</label>
                  <div className="relative flex items-center">
                    <input
                      name="email"
                      {...register("email", { required: "Email is required" })}
                      type="text"
                      required
                      className="w-full text-sm border-b border-gray-300 focus:border-[#333] px-2 py-3 outline-none"
                      placeholder="Enter email"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      className="w-[18px] h-[18px] absolute right-2"
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
                    <p className="text-red-500">{errors.name.message}</p>
                  )}
                </div>
                <div className="mt-8">
                  <label className="text-xs block mb-2">Password</label>
                  <div className="relative flex items-center">
                    <input
                      name="password"
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
                      className="w-full text-sm border-b border-gray-300 focus:border-[#333] px-2 py-3 outline-none"
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
                      Your password must have at least a special symbol, upper
                      and lower case letters and a number
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between gap-2 mt-5">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-3 block text-sm">
                      Remember me
                    </label>
                  </div>
                  <div>
                    <a
                      href="jajvascript:void(0);"
                      className="text-blue-600 font-semibold text-sm hover:underline"
                    >
                      Forgot Password?
                    </a>
                  </div>
                </div>
                <div className="mt-12">
                  <button
                    type="submit"
                    className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
            <div className="md:h-full max-md:mt-10 bg-[#000842] rounded-xl lg:p-12 p-8">
              <img
                src="https://readymadeui.com/signin-image.webp"
                className="w-full h-full object-contain"
                alt="login-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
