import React, { use } from "react";
import { FaFire, FaWifi } from "react-icons/fa";
import { GiElectric } from "react-icons/gi";
import { IoWaterOutline } from "react-icons/io5";
import { RiFireLine } from "react-icons/ri";
import { Link } from "react-router";
import styled from "styled-components";
import { AuthContext } from "../authContext/AuthContext";
const StyledWrapper = styled.div`
  .parent {
    height: 320px;
    perspective: 1000px;
  }

  .card {
    height: 100%;
    border-radius: 50px;
    background: linear-gradient(
      135deg,
      rgb(0, 255, 214) 0%,
      rgb(8, 226, 96) 100%
    );
    transition: all 0.5s ease-in-out;
    transform-style: preserve-3d;
    box-shadow: rgba(5, 71, 17, 0) 40px 50px 25px -40px,
      rgba(5, 71, 17, 0.2) 0px 25px 25px -5px;
  }

  .glass {
    transform-style: preserve-3d;
    position: absolute;
    inset: 8px;
    border-radius: 55px;
    border-top-right-radius: 100%;
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.349) 0%,
      rgba(255, 255, 255, 0.815) 100%
    );
    /* -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px); */
    transform: translate3d(0px, 0px, 25px);
    border-left: 1px solid white;
    border-bottom: 1px solid white;
    transition: all 0.5s ease-in-out;
  }

  .content {
    padding: 100px 60px 0px 30px;
    transform: translate3d(0, 0, 26px);
  }

  .content .title {
    display: block;
    color: #00894d;
    font-weight: 900;
    font-size: 20px;
  }

  .content .text {
    display: block;
    color: rgba(0, 137, 78, 0.7647058824);
    font-size: 15px;
    margin-top: 20px;
  }
  .parent:hover .card {
    transform: rotate3d(1, 1, 0, 30deg);
    box-shadow: rgba(5, 71, 17, 0.3) 30px 50px 25px -40px,
      rgba(5, 71, 17, 0.1) 0px 25px 30px 0px;
  }

  .parent:hover .card .bottom .social-buttons-container .social-button {
    transform: translate3d(0, 0, 50px);
    box-shadow: rgba(5, 71, 17, 0.2) -5px 20px 10px 0px;
  }

  .parent:hover .card .logo .circle2 {
    transform: translate3d(0, 0, 60px);
  }

  .parent:hover .card .logo .circle3 {
    transform: translate3d(0, 0, 80px);
  }

  .parent:hover .card .logo .circle4 {
    transform: translate3d(0, 0, 100px);
  }

  .parent:hover .card .logo .circle5 {
    transform: translate3d(0, 0, 120px);
  }
`;

const Categories = () => {
  const {theme} = use(AuthContext)
  return (
    <div className={theme === "light"? "bg-linear-to-br from-blue-50 to-indigo-100 relative" : "bg-linear-to-bl from-[#081c15] to-black relative"}>
      <div className="pointer-events-none absolute -bottom-90 -left-30 w-[70vw] sm:w-[z-500vw] md:w-[40vw] h-[70vw] sm:h-[z-500vw] md:h-[40vw] max-w-[300px] max-h-[300px] rounded-full bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse"></div>
      <div className="py-28 container mx-auto">
        <div className="flex justify-center">
          <h2 className="text-2xl  py-2 px-6 rounded-full bg-[#245501] text-white">
            Categories
          </h2>
        </div>
        <p className={`text-center mt-5 text-lg ${theme === "light"? "text-gray-600" : 'text-white'}`}>
          Manage all your essential utility services in one convenient location
        </p>
        {/* All Cards */}
        <div className="mt-12 grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:justify-around gap-5 px-4 sm:px-0 lg:gap-20">
          <Link to={'/bills'} className="cursor-pointer">
            <StyledWrapper>
            <div className="parent">
              <div className="card">
                <div className="glass" />
                <div className="content">
                  <GiElectric size={50} color="#00894d" className="-mt-6 mb-3" />
                  <span className="title">Electricity</span>
                  <span className="text">
                    Manage your electricity bills and payments with ease.
                  </span>
                </div>
              </div>
            </div>
          </StyledWrapper>
          </Link>
          <Link to={'/bills'} className="cursor-pointer">
            <StyledWrapper>
            <div className="parent">
              <div className="card">
                <div className="glass" />
                <div className="content">
                  <RiFireLine size={50} color="#00894d" className="-mt-6 mb-3" />
                  <span className="title">Gas</span>
                  <span className="text">
                   Track your gas utility expenses.
                  </span>
                </div>
              </div>
            </div>
          </StyledWrapper>
          </Link>
          <Link to={'/bills'} className="cursor-pointer">
            <StyledWrapper>
            <div className="parent">
              <div className="card">
                <div className="glass" />
                <div className="content">
                  <IoWaterOutline size={50} color="#00894d" className="-mt-6 mb-3" />
                  <span className="title">Water</span>
                  <span className="text">
                    Monitor water usage and billing.
                  </span>
                </div>
              </div>
            </div>
          </StyledWrapper>
          </Link>
          <Link to={'/bills'} className="cursor-pointer">
            <StyledWrapper>
            <div className="parent">
              <div className="card">
                <div className="glass" />
                <div className="content">
                  <FaWifi size={50} color="#00894d" className="-mt-6 mb-3" />
                  <span className="title">Internet</span>
                  <span className="text">
                   Manage internet service payments.
                  </span>
                </div>
              </div>
            </div>
          </StyledWrapper>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
