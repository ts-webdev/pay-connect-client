import React, { use, useState } from "react";
import { BiLogInCircle } from "react-icons/bi";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { AuthContext } from "../authContext/AuthContext";
import { Link, useLocation, useNavigate } from "react-router";
import { IoCreateOutline, IoPerson } from "react-icons/io5";
import { IoMdPhotos } from "react-icons/io";
import toast from "react-hot-toast";

const Register = () => {
  const { loginWithGoogle, createNewUser, updateUser } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Handle Password with error
  const handlePassword = (e) => {
    const password = e.target.value;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    setPassword(password);
    if (password === "") {
      setPasswordError("");
    } else if (password.length < 6) {
      setPasswordError("password must be at least 6 characters");
    } else {
      if (!hasUppercase) {
        setPasswordError("Password must include at least one uppercase letter");
      } else if (!hasLowercase) {
        setPasswordError("Password must include at least one lowercase letter");
      } else {
        setPasswordError("");
      }
    }
  };

  // Create New User
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    if (passwordError === "") {
      createNewUser(email, password)
        .then((data) => {
          console.log(data);
          navigate(location.state || "/");
          toast.success(
            "Congratulation, your account has been successfully created. "
          );
          const userData = {
            displayName: name,
            photoURL: photo,
          };
          updateUser(userData)
            .then(() => {})
            .catch((error) => {
              toast.error(error);
            });
        })
        .catch((error) => {
          const errorMessage = error.message;
          toast.error(errorMessage);
        });
    }
  };

  // Login With Google
  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((data) => {
        console.log(data.user);
        navigate(location.state || "/");
        toast.success(`Welcome Back ${data.displayName}`);
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };
  return (
    <div className="hero bg-linear-to-b from-[#081c15] to-black min-h-screen -mt-22">
      <title>PayConnect | Register</title>
      <div className="flex items-center justify-center p-4">
        <div className="bg-white/10 rounded-xl w-full  p-8 text-center border border-gray-50/20">
          {/* Icon */}
          <div className="flex justify-center mb-4">
            <div className="bg-gray-100 p-4 rounded-full">
              <IoCreateOutline className="text-2xl text-gray-700" size={30} />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-semibold mb-1">Create an account</h2>
          <p className="text-gray-500 text-sm mb-6">
            Please enter your details to register.
          </p>

          {/* Form */}
          <form onSubmit={handleRegister} className="space-y-3  w-xs">
            <label className=" border-b border-gray-500 py-3 flex items-center gap-2">
              <IoPerson className="text-gray-400" />

              <input
                name="name"
                type="text"
                placeholder="Full Name"
                className="grow bg-transparent  outline-none"
                required
              />
            </label>
            <label className=" border-b border-gray-500 py-3 flex items-center gap-2">
              <FaEnvelope className="text-gray-400" />
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="grow bg-transparent  outline-none"
                required
              />
            </label>
            <label className=" border-b border-gray-500 py-3 flex items-center gap-2">
              <IoMdPhotos className="text-gray-400" />

              <input
                name="photo"
                type="text"
                placeholder="Photo URL"
                className="grow bg-transparent  outline-none"
                required
              />
            </label>

            <label className="border-b border-gray-500 py-3 flex items-center gap-2">
              <FaLock className="text-gray-400" />
              <input
                name="password"
                type="password"
                defaultValue={password}
                onChange={handlePassword}
                placeholder="Password"
                className="grow bg-transparent outline-none"
                required
              />
            </label>
            <p className="text-left text-error text-sm">
              {passwordError === "" ? "" : passwordError}
            </p>
            <button
              type="submit"
              className="btn w-full btn-primary text-white  rounded-full font-semibold mt-2"
            >
              Register
            </button>
          </form>

          {/* Divider */}
          <div className="divider text-gray-400 my-6">Or sign in with</div>

          {/* Social Buttons */}
          <div className="flex justify-center gap-4">
            <button
              onClick={handleGoogleLogin}
              className="btn bg-white text-black border-[#e5e5e5] w-full rounded-full"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
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
          <p className="text-sm font-light text-gray-400 mt-4">
            Already have an account?{" "}
            <Link to={"/login"} className="font-semibold hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
