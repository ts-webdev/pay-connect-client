import React from "react";
import DotBackground from "./DotBackground";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import payBill from "../assets/paybill.png";
import styled from "styled-components";

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
  return (
    <section className="w-full h-screen relative bg-black mb-5 overflow-hidden -mt-24">
      <DotBackground></DotBackground>
      <div className="absolute inset-0">
        <div>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper container mx-auto"
          >
            <SwiperSlide>
              <div className="text-left flex justify-between items-center  h-screen px-30">
                <div className=" w-1/2">
                  <h1 className="text-6xl font-black mb-5">
                    Manage All Your Utility Bills in One Place
                  </h1>
                  <p>
                    Simplify your monthly payments with our comprehensive bill
                    management system
                  </p>
                  <StyledWrapper className="mt-5">
                    <button className="button">
                      <p>Pay Bill</p>
                    </button>
                  </StyledWrapper>
                </div>
                <div className=" animate-bounce slow-bounce mt-40">
                  <img src={payBill} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-left flex justify-between items-center  h-screen px-30">
                <div className=" w-1/2">
                  <h1 className="text-6xl font-black mb-5">
                    Manage All Your Utility Bills in One Place
                  </h1>
                  <p>
                    Simplify your monthly payments with our comprehensive bill
                    management system
                  </p>
                  <StyledWrapper className="mt-5">
                    <button className="button">
                      <p>Pay Bill</p>
                    </button>
                  </StyledWrapper>
                </div>
                <div className=" animate-bounce slow-bounce mt-40">
                  <img src={payBill} alt="" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="pointer-events-none absolute -top-32 -left-flex  items-center32 w-[70vw] sm:w-[z-500vw] md:w-[40vw] h-[70vw] sm:h-[z-500vw] md:h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse"></div>
        <div className="pointer-events-none absolute bottom-0 right-0 w-[70vw] sm:w-[z-500vw] md:w-[40vw] h-[70vw] sm:h-[z-500vw] md:h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse"></div>
      </div>
    </section>
  );
};

export default Banner;
