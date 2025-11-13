import React, { use } from "react";
import {
  FaEnvelope,
  FaLock,
  FaGoogle,
  FaFacebookF,
  FaApple,
} from "react-icons/fa";
import { IoLogInOutline } from "react-icons/io5";
import { AuthContext } from "../authContext/AuthContext";
import { BiLogInCircle } from "react-icons/bi";
import { Link, useLocation, useNavigate } from "react-router";
import toast from "react-hot-toast";
import 'animate.css';

const Login = () => {
  const { loginWithGoogle, loginUser, theme } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  // login With email & password
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then(() => {
        navigate(location.state || "/");
        toast.success(`Welcome Back`);
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  // login with google
  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then(() => {
        navigate(location.state || "/");
        toast.success(`Welcome Back`);
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  return (
    <div className={`min-h-screen -mt-22 flex items-center justify-center py-8 ${theme === "light" ? "bg-linear-to-br from-blue-50 to-indigo-100" : "bg-linear-to-b from-[#081c15] to-black"}`}>
      <title>PayConnect | Login</title>
      <div className="container mx-auto px-4">
        <div className={`animate__animated animate__bounceInUp rounded-2xl w-full max-w-md mx-auto mt-20 p-6 sm:p-8 text-center border ${theme === "light" ? "bg-white border-gray-200 shadow-lg" : "bg-white/10 border-gray-500/20"}`}>
          {/* Icon */}
          <div className="flex justify-center mb-4">
            <div className={`p-4 rounded-full ${theme === "light" ? "bg-blue-100" : "bg-gray-700"}`}>
              <BiLogInCircle className={`text-2xl ${theme === "light" ? "text-blue-600" : "text-white"}`} size={30} />
            </div>
          </div>

          {/* Title */}
          <h2 className={`text-2xl sm:text-3xl font-bold mb-1 ${theme === "light" ? "text-gray-800" : "text-white"}`}>
            Welcome Back!
          </h2>
          <p className={`text-sm sm:text-base mb-6 ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>
            Please enter your details to Login.
          </p>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-4 w-full">
            <label className={`border-b py-3 flex items-center gap-3 ${theme === "light" ? "border-gray-300" : "border-gray-500"}`}>
              <FaEnvelope className={theme === "light" ? "text-gray-400" : "text-gray-300"} />
              <input
                name="email"
                type="email"
                placeholder="Email"
                className={`grow bg-none outline-none ${theme === "light" ? "text-gray-800 placeholder-gray-400" : "text-white placeholder-gray-400"}`}
                required
              />
            </label>

            <label className={`border-b py-3 flex items-center gap-3 ${theme === "light" ? "border-gray-300" : "border-gray-500"}`}>
              <FaLock className={theme === "light" ? "text-gray-400" : "text-gray-300"} />
              <input
                name="password"
                type="password"
                placeholder="Password"
                className={`grow bg-transparent outline-none ${theme === "light" ? "text-gray-800 placeholder-gray-400" : "text-white placeholder-gray-400"}`}
                required
              />
            </label>

            <div className="flex justify-end text-sm">
              <a href="#" className={`hover:underline ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="btn w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold py-3 transition-colors"
            >
              Login
            </button>
          </form>

          {/* Divider */}
          <div className={`divider my-6 ${theme === "light" ? "text-gray-400" : "text-gray-500"}`}>
            Or sign in with
          </div>

          {/* Social Buttons */}
          <div className="flex justify-center">
            <button
              onClick={handleGoogleLogin}
              className={`btn w-full rounded-full border font-medium transition-colors ${theme === "light" ? "bg-white text-gray-800 border-gray-300 hover:bg-gray-50" : "bg-gray-800 text-white border-gray-600 hover:bg-gray-700"}`}
            >
              <svg
                aria-label="Google logo"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
          </div>

          <p className={`text-sm font-light mt-6 ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>
            Don't have an account?{" "}
            <Link 
              to={"/register"} 
              className={`font-semibold hover:underline ${theme === "light" ? "text-blue-600" : "text-blue-400"}`}
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;