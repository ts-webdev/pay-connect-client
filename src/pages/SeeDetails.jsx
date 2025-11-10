import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router";
import {
  FaBolt,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaFileAlt,
  FaDollarSign,
} from "react-icons/fa";
import { FiDownload, FiShare2 } from "react-icons/fi";
import Lottie from "lottie-react";
import electricity from "../assets/electricity-lottie.json";
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

const SeeDetails = () => {
  return (
    <div className="bg-linear-to-b from-[#081c15] to-black ">
      <title>PayConnect | Monthly electricity Bill</title>
      <div className="-mt-24 pt-35 pb-28 container mx-auto">
        <div className="flex items-center gap-3">
          <Link className="hover:text-gray-300" to={"/"}>
            Home
          </Link>
          <IoIosArrowForward />
          <Link className="hover:text-gray-300" to={"/bills"}>
            Bills
          </Link>
          <IoIosArrowForward />
          <Link className="font-bold" to={"/see-details"}>
            Bill Details
          </Link>
        </div>

        <div className="card bg-black/20 shadow-md border mx-auto mt-10 p-10">
          <div className="flex">
            {/* Left side Image */}
            <div className="w-70 rounded-2xl bg-white">
              <Lottie animationData={electricity}></Lottie>
            </div>

            {/* Right Side Details */}
            <div className="card-body">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div>
                    <h2 className="card-title text-5xl font-bold">
                      Monthly Electricity Bill
                    </h2>
                    <p className="text-lg mt-3 text-success">
                      Electricity Bill
                    </p>
                  </div>
                </div>

                <div className="badge badge-success badge-outline px-4 py-2 text-sm font-semibold">
                  Paid
                </div>
              </div>
              <h3 className="font-semibold text-gray-500 ">
                Bill Information:
              </h3>
              <div className="flex items-center gap-2">
                <FaDollarSign className="text-gray-500" />
                <p>
                  <span className="font-bold text-lg">$125.50</span>
                </p>
              </div>

              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-gray-500" />
                <p>
                  Due Date: <span className="font-medium">1/15/2024</span>
                </p>
              </div>

              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-gray-500" />
                <p>
                  Service Location:{" "}
                  <span className="font-medium">New York, NY</span>
                </p>
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div>
            <div className="space-y-3 text-sm mt-5">
              <h3 className="font-semibold text-gray-500 ">Description:</h3>
              <p className="text-gray-300">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
                placeat animi pariatur non quas commodi, suscipit aliquam
                itaque, et sapiente exercitationem dolorem eum a, voluptate
                repellat culpa at atque cum. Assumenda eius nam debitis, rerum
                enim excepturi, porro repellendus facilis iusto cumque quaerat
                vitae sit eum modi unde velit ullam!
              </p>
            </div>
            {/* Pay Bill Button */}
            <div className="flex justify-end mt-5">
              <StyledWrapper>
                <button className="button">
                  <p>Pay Bill</p>
                </button>
              </StyledWrapper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeeDetails;
