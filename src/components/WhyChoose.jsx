import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import { MdOutlineNotifications, MdSecurity } from "react-icons/md";
import { VscFilePdf } from "react-icons/vsc";
import styled from "styled-components";
const StyledWrapper = styled.div`
  .card {
    height: 200px;
    perspective: 1000px;
  }

  .card-inner {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.999s;
  }

  .card:hover .card-inner {
    transform: rotateY(180deg);
  }

  .card-front,
  .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }

  .card-front {
    background-color: #538d22;
    color: #fff;
    display: flex;
    align-items: center;
    border: 10px solid #538d22;
    border-radius: 10px;
    justify-content: center;
    font-size: 24px;
    transform: rotateY(0deg);
  }

  .card-back {
    background-color: #245501;
    color: #fff;
    display: flex;
    align-items: center;
    border: 10px solid #245501;
    border-radius: 10px;
    justify-content: center;
    font-size: 24px;
    transform: rotateY(180deg);
  }
`;

const WhyChoose = () => {
  return (
    <div className="relative bg-linear-to-b from-[#081c15] to-black">
      <div className="pointer-events-none absolute -bottom-30 right-0 w-[70vw] sm:w-[z-500vw] md:w-[40vw] h-[70vw] sm:h-[z-500vw] md:h-[40vw] max-w-[300px] max-h-[300px] rounded-full bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse"></div>
      <div className="container mx-auto py-28">
        <div className="flex justify-center">
          <h2 className="text-2xl  py-2 px-6 rounded-full bg-[#245501] text-white">
            Why Choose PayConnect?
          </h2>
        </div>
        <p className="text-center mt-5 w-1/2 mx-auto text-lg">
          Experience the convenience of modern bill management with features
          designed for your peace of mind
        </p>
        <div className="grid grid-cols-4 gap-7">
          <StyledWrapper className="mt-10">
            <div className="card">
              <div className="card-inner">
                <div className="card-front flex flex-col gap-5">
                  <MdSecurity size={50} />

                  <p>Secure Payments</p>
                </div>
                <div className="card-back p-5">
                  <p className="text-sm">
                    Your payment information is protected with bank-level
                    security and encryption.
                  </p>
                </div>
              </div>
            </div>
          </StyledWrapper>
          <StyledWrapper className="mt-10">
            <div className="card">
              <div className="card-inner">
                <div className="card-front flex flex-col gap-5">
                  <MdOutlineNotifications size={50} />

                  <p>Smart Reminders</p>
                </div>
                <div className="card-back p-5">
                  <p className="text-sm">
                    Never miss a due date with intelligent notifications and
                    payment reminders.
                  </p>
                </div>
              </div>
            </div>
          </StyledWrapper>
          <StyledWrapper className="mt-10">
            <div className="card">
              <div className="card-inner">
                <div className="card-front flex flex-col gap-5">
                  <VscFilePdf size={50} />

                  <p>Detailed Reports</p>
                </div>
                <div className="card-back p-5">
                  <p className="text-sm">
                    Generate comprehensive PDF reports of your payment history
                    and spending patterns.
                  </p>
                </div>
              </div>
            </div>
          </StyledWrapper>
          <StyledWrapper className="mt-10">
            <div className="card">
              <div className="card-inner">
                <div className="card-front flex flex-col gap-5">
                  <FaMobileAlt size={50} />


                  <p>Mobile Friendly</p>
                </div>
                <div className="card-back p-5">
                  <p className="text-sm">
                    Access your bills and make payments from any device,
                    anywhere, anytime.
                  </p>
                </div>
              </div>
            </div>
          </StyledWrapper>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
