import React from "react";
import { FaFire, FaWifi } from "react-icons/fa";
import { GiElectric } from "react-icons/gi";
import { IoIosWater } from "react-icons/io";
import { IoWaterOutline } from "react-icons/io5";
import { RiFireLine } from "react-icons/ri";
import styled from "styled-components";
const StyledWrapper = styled.div`
  .card {
    padding: 20px;
    background: #dad7cd;
    border: 6px solid #a3b18a;
    box-shadow: 12px 12px 0 #132a13;
    transition: transform 0.3s, box-shadow 0.3s;
  }

  .card:hover {
    transform: translate(-5px, -5px);
    box-shadow: 17px 17px 0 #132a13;
  }

  .card__title {
    font-size: 32px;
    font-weight: 900;
    color: #000;
    text-transform: uppercase;
    margin-bottom: 15px;
    display: block;
    position: relative;
    overflow: hidden;
  }

  .card__title::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 90%;
    height: 3px;
    background-color: #000;
    transform: translateX(-100%);
    transition: transform 0.3s;
  }

  .card:hover .card__title::after {
    transform: translateX(0);
  }

  .card__content {
    font-size: 16px
    line-height: 1.4;
    color: #000;
    margin-bottom: 20px;
  }

  @keyframes glitch {
    0% {
      transform: translate(2px, 2px);
    }
    25% {
      transform: translate(-2px, -2px);
    }
    50% {
      transform: translate(-2px, 2px);
    }
    75% {
      transform: translate(2px, -2px);
    }
    100% {
      transform: translate(2px, 2px);
    }
  }

  .glitch {
    animation: glitch 0.3s infinite;
  }
`;

const Categories = () => {
  return (
    <div className="bg-linear-to-b from-[#081c15] to-black relative">
     <div className="pointer-events-none absolute -bottom-90 -left-30 w-[70vw] sm:w-[z-500vw] md:w-[40vw] h-[70vw] sm:h-[z-500vw] md:h-[40vw] max-w-[300px] max-h-[300px] rounded-full bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse"></div>
      <div className="py-28 container mx-auto">
        <div className="flex justify-center">
          <h2 className="text-2xl  py-2 px-6 rounded-full bg-[#245501] text-white">
            Categories
          </h2>
        </div>
        <p className="text-center mt-5 text-xl">
          Manage all your essential utility services in one convenient location
        </p>
        {/* All Cards */}
        <div className="mt-12 grid grid-cols-4 justify-around gap-20">
          <div>
            <StyledWrapper>
              <div className="card">
                <span className="card__title">Electricity</span>
                <div className="flex justify-center">
                  <GiElectric size={70} color="black" />
                </div>
                <p className="card__content mt-6">
                  Manage your Electricity bills and consumption with ease.
                </p>
              </div>
            </StyledWrapper>
          </div>
          <div>
            <StyledWrapper>
              <div className="card">
                <span className="card__title">Gas</span>
                <div className="flex justify-center">
                  <RiFireLine size={70} color="black" />
                </div>
                <p className="card__content mt-6">
                  Track your gas utility expenses and usage.
                </p>
              </div>
            </StyledWrapper>
          </div>
          <div>
            <StyledWrapper>
              <div className="card">
                <span className="card__title">Water</span>
                <div className="flex justify-center">
                  <IoWaterOutline size={70} color="black" />
                </div>
                <p className="card__content mt-6">
                  Monitor water usage and billing services.
                </p>
              </div>
            </StyledWrapper>
          </div>
          <div>
            <StyledWrapper>
              <div className="card">
                <span className="card__title">Electricity</span>
                <div className="flex justify-center">
                  <FaWifi size={70} color="black" />
                </div>
                <p className="card__content mt-6">
                  Manage internet service payments.
                </p>
              </div>
            </StyledWrapper>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Categories;
