import React, { use } from "react";
import DotBackground from "./DotBackground";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import payBill from "../assets/paybill.png";
import easy from "../assets/easy.png";
import secure from "../assets/secure.png";
import styled from "styled-components";
import { useNavigate } from "react-router";
import DotBackground2 from "./DotBackground2";
import { AuthContext } from "../authContext/AuthContext";

const StyledWrapper = styled.div`
  .button {
    all: unset;
    display: flex;
    align-items: center;
    position: relative;
    padding: 0.6em 2em;
    border: mediumspringgreen solid 0.15em;
    border-radius: 0.25em;
    color: mediumspringgreen;
    font-weight: 600;
    cursor: pointer;
    overflow: hidden;
    transition: border 300ms, color 300ms;
    user-select: none;
  }

  .button p {
    z-index: 1;
  }

  .button:hover {
    color: #212121;
  }

  .button:active {
    border-color: teal;
  }

  .button::after,
  .button::before {
    content: "";
    position: absolute;
    width: 9em;
    aspect-ratio: 1;
    background: mediumspringgreen;
    opacity: 50%;
    border-radius: 50%;
    transition: transform 500ms, background 300ms;
  }

  .button::before {
    left: 0;
    transform: translateX(-8em);
  }

  .button::after {
    right: 0;
    transform: translateX(8em);
  }

  .button:hover:before {
    transform: translateX(-1em);
  }

  .button:hover:after {
    transform: translateX(1em);
  }

  .button:active:before,
  .button:active:after {
    background: teal;
  }
`;

const Banner = () => {
  const { theme } = use(AuthContext);
  const navigate = useNavigate();

  const handleAllBills = () => {
    navigate("/bills");
  };

  const handleAboutButton = () => {
    navigate("/about");
  };

  return (
    <section className={`w-full h-screen relative ${theme === "light"? "bg-white text-black" : "bg-black text-white"} mb-5 overflow-hidden -mt-24`}>
      {theme === "light" ? (
        ""
      ) : (
        <DotBackground></DotBackground>
      )}

      <div className="absolute inset-0">
        <div>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            // autoplay={{
            //   delay: 2500,
            //   disableOnInteraction: false,
            // }}
           
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper w-full h-full"
          >
            <SwiperSlide>
              <div className="flex flex-col-reverse lg:flex-row justify-between items-center pt-40 lg:pt-50 h-full w-4/5 lg:w-full container mx-auto px-4 lg:px-30  py-20 lg:py-0">
                <div className="w-full  lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
                  <h1 className="text-4xl sm:text-4xl lg:text-6xl font-black mb-5">
                    Manage All Your Utility Bills in One Place
                  </h1>
                  <p className="text-sm sm:text-base lg:text-lg">
                    Simplify your monthly payments with our comprehensive bill
                    management system
                  </p>
                  <StyledWrapper className="mt-5 flex justify-center lg:justify-start">
                    <button onClick={handleAllBills} className="button">
                      <p>All Bills</p>
                    </button>
                  </StyledWrapper>
                </div>
                <div className="w-full  lg:w-1/2 flex justify-center animate-bounce slow-bounce mt-10 lg:mt-40 lg:-mr-30">
                  <img className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[400px]" src={payBill} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col-reverse lg:flex-row justify-between items-center pt-40 lg:pt-50 h-full w-4/5 lg:w-full container mx-auto px-4 lg:px-30  py-20 lg:py-0">
                <div className="w-full  lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
                  <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black mb-5">
                    Bill Management Made Easy
                  </h1>
                  <p className="text-sm sm:text-base lg:text-lg">One Place for Electricity, Gas, Water, and Internet.</p>
                  <StyledWrapper onClick={handleAboutButton} className="mt-5 flex justify-center lg:justify-start">
                    <button className="button">
                      <p>About Us</p>
                    </button>
                  </StyledWrapper>
                </div>
                <div className="w-full  lg:w-1/2 flex justify-center animate-bounce slow-bounce mt-10 lg:mt-40 lg:-mr-30">
                  <img className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px]" src={easy} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col-reverse lg:flex-row justify-between items-center pt-40 lg:pt-50 h-full w-4/5 lg:w-full container mx-auto px-4 lg:px-30  py-20 lg:py-0">
                <div className="w-full  lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
                  <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black mb-5">
                    Secure and Reliable Bill Tracking
                  </h1>
                  <p className="text-sm sm:text-base lg:text-lg">
                    Your financial data is protected with enterprise-grade
                    security
                  </p>
                  <StyledWrapper onClick={handleAboutButton} className="mt-5 flex justify-center lg:justify-start">
                    <button className="button">
                      <p>Learn More</p>
                    </button>
                  </StyledWrapper>
                </div>
                <div className="w-full  lg:w-1/2 flex justify-center animate-bounce slow-bounce mt-10 lg:mt-40 lg:-mr-30">
                  <img className="w-full max-w-[250px] sm:max-w-[350px] lg:max-w-[400px]" src={secure} alt="" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="pointer-events-none absolute -top-32 -left-32 w-[70vw] sm:w-[40vw] md:w-[30vw] h-[70vw] sm:h-[40vw] md:h-[30vw] max-w-[500px] max-h-[500px] rounded-full bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse"></div>
        <div className="pointer-events-none absolute bottom-0 right-0 w-[70vw] sm:w-[40vw] md:w-[30vw] h-[70vw] sm:h-[40vw] md:h-[30vw] max-w-[500px] max-h-[500px] rounded-full bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse"></div>
      </div>
    </section>
  );
};

export default Banner;