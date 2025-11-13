import React from "react";
import { FaWifi } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { GiElectric } from "react-icons/gi";
import { IoLocationSharp, IoWaterOutline } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import { RiFireLine } from "react-icons/ri";
import { TbCurrencyTaka } from "react-icons/tb";
import { useNavigate } from "react-router";
import { Link } from "react-router";
import styled from "styled-components";



const StyledWrapper = styled.div`
  .card {
    padding: 20px;
    background: #dad7cd;
    border: 6px solid #a3b18a;
    box-shadow: 12px 12px 0 #132a13;
    transition: transform 0.3s, box-shadow 0.3s;
    display: flex;
    
  }

  .card:hover {
    transform: translate(-5px, -5px);
    box-shadow: 17px 17px 0 #132a13;
  }

  .card__title {
    font-size: 1.5rem;
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
    .card__form {
    display: flex;
    justify-content: end;
    gap: 15px;
  }

  .card__form input {
    padding: 10px;
    border: 3px solid #000;
    font-size: 16px;
    font-family: inherit;
    transition: transform 0.3s;
    width: calc(100% - 26px); /* Adjust for padding and border */
  }

  .card__form input:focus {
    outline: none;
    transform: scale(1.05);
    background-color: #000;
    color: #ffffff;
  }

  .button {
    all: unset;
    display: flex;
    align-items: center;
    position: relative;
    padding: 0.6em 2em;
    border: #245501 solid 0.15em;
    border-radius: 0.25em;
    color: #245501;
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
    color: #dad7cd;
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
    background: #245501;
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

const BillCard = ({ data }) => {
  const navigate = useNavigate();
  const handleSeeDetails = (e) => {
    e.preventDefault();
    navigate(`/see-details/${data._id}`);
  };
  return (
    <StyledWrapper>
      <div className=" card h-[410px] overflow-hidden mx-4 sm:mx-0">
        <div className="">
          {data.category === "Electricity" && (
            <GiElectric
              className="bg-primary p-2 rounded-lg my-2"
              size={50}
              color="#f2e8cf"
            ></GiElectric>
          )}
          {data.category === "Internet" && (
            <FaWifi
              className="bg-primary p-2 rounded-lg my-2"
              size={50}
              color="#f2e8cf"
            ></FaWifi>
          )}
          {data.category === "Gas" && (
            <RiFireLine
              className="bg-primary p-2 rounded-lg my-2"
              size={50}
              color="#f2e8cf"
            ></RiFireLine>
          )}
          {data.category === "Water" && (
            <IoWaterOutline
              className="bg-primary p-2 rounded-lg my-2"
              size={50}
              color="#f2e8cf"
            ></IoWaterOutline>
          )}

          <span className="card__title">{data.title}</span>
        </div>
        <div className="flex justify-between items-center ">
          <div className="badge badge-primary">{data.category}</div>
        </div>
        <div className="space-y-3 mt-3 flex-1">
          <p className="text-[0.9em] text-[#081c15]/90 leading-relaxed font-light flex items-center gap-2">
            <IoLocationSharp size={20} />
            {data.location}
          </p>
          <p className="text-[0.9em] text-[#081c15]/90 leading-relaxed font-light flex items-center gap-2">
            <MdDateRange size={20} />
            {data.date}
          </p>
          <p className="text-lg -mt-1 text-[#081c15]/90 leading-relaxed font-semibold flex items-center gap-2">
            <TbCurrencyTaka size={20} />
            {data.amount}
          </p>
        </div>
        <div>
          <form onSubmit={handleSeeDetails} className="card__form">
            <button className="button">
              <p>Pay Bill</p>
            </button>
          </form>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default BillCard;
