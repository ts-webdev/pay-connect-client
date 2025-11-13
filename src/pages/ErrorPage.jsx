import React, { use } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import errorLottie from "../assets/PageNotFound404.json";
import errorLottie2 from "../assets/Girl relaxingwhileerror404.json";
import Lottie from "lottie-react";
import { AuthContext } from "../authContext/AuthContext";

const ErrorPage = () => {
  const { theme } = use(AuthContext);
  return (
    <div className={theme ==="light" ? "bg-white": "bg-linear-to-b from-[#081c15] to-black" }>
      <Navbar></Navbar>
      <div className="container mx-auto flex justify-center items-center">
        {theme === "light" ? (
          <Lottie className="max-w-2/3 py-20" animationData={errorLottie}></Lottie>
        ) : (
          <Lottie className="max-w-2/5 py-20" animationData={errorLottie2}></Lottie>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
