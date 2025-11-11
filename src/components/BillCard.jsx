import React from "react";
import { FaMapLocation } from "react-icons/fa6";
import { GiElectric } from "react-icons/gi";
import { IoLocationSharp } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
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
    .card__form {
    display: flex;
    flex-direction: column;
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

  .card__button {
    background: #538D22;
    border-radius: 5px;
    color: #fff;
    padding: 10px;
    font-size: 18px;
    left: 50%;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: transform 0.3s;
    width: 50%;
    height: 100%;
  }

  .card__button::before {
    content: "Sure?";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 105%;
    background-color: #1A4301;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(100%);
    transition: transform 0.3s;
  }

  .card__button:hover::before {
    transform: translateY(0);
  }

  .card__button:active {
    transform: scale(0.95);
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

const BillCard = () => {
  const navigate = useNavigate();
  const handleSeeDetails = (e)=>{
    e.preventDefault();
    navigate("/see-details");
  }
  return (
    <StyledWrapper>
      <div className="card">
        <div className="">
          <GiElectric
            className="bg-primary p-2 rounded-lg my-2"
            size={50}
            color="#f2e8cf"
          />
          <span className="card__title">Monthly Electricity Bill</span>
        </div>
        <div className="flex justify-between items-center mt-2">
          <p className="text-black border p-2 rounded-sm">Electricity</p>
          <div className="badge badge-primary">Paid</div>
        </div>
        <div className="space-y-3 mt-3">
          <p className="text-[0.9em] text-[#081c15]/90 leading-relaxed font-light flex items-center gap-2">
            <IoLocationSharp size={20} />
            Dhaka, Bangladesh.
          </p>
          <p className="text-[0.9em] text-[#081c15]/90 leading-relaxed font-light flex items-center gap-2">
            <MdDateRange size={20} />
            19/25/2025
          </p>
          <p className="text-lg -mt-1 text-[#081c15]/90 leading-relaxed font-semibold flex items-center gap-2">
            <TbCurrencyTaka size={20} />
            150
          </p>
        </div>
        <div>
          <form onSubmit={handleSeeDetails} className="card__form">
            <button className="card__button">See Details</button>
          </form>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default BillCard;
