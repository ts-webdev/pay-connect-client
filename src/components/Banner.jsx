import React from "react";
import DotBackground from "./DotBackground";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import payBill from "../assets/paybill.png";

const Banner = () => {
  return (
    <section className="w-full h-screen relative bg-black mb-5 overflow-hidden -mt-22">
      <DotBackground></DotBackground>
      <div className="absolute inset-0">
        <div>
          <div className="absolute bottom-20 z-50 right-10 -translate-x-1/2 animate-bounce slow-bounce hidden md:block">
            <img src={payBill} alt="" />
          </div>
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
              <div className="text-left flex  items-center w-3/5 h-screen px-20">
                <div>
                  <h1 className="text-8xl font-black mb-5">
                    Manage All Your Utility Bills in One Place
                  </h1>
                  <p>
                    Simplify your monthly payments with our comprehensive bill
                    management system
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-left flex  items-center w-3/5 h-screen px-20">
                <div>
                  <h1 className="text-8xl font-black mb-5">
                    Never Miss a Payment Again
                  </h1>
                  <p>
                    Set up automatic reminders and track all your utility
                    expenses effortlessly
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-left flex  items-center w-3/5 h-screen px-20">
                <div>
                  <h1 className="text-8xl font-black mb-5">
                    Secure and Reliable Bill Tracking
                  </h1>
                  <p>
                    Your financial data is protected with enterprise-grade
                    security
                  </p>
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
