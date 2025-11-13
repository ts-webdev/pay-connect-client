import React from "react";
import styled from "styled-components";
import { IoLocationSharp } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";
import { useNavigate } from "react-router";
const StyledWrapper = styled.div`
  .card {
    --card-bg: #ffffff;
    --card-accent: #7c3aed;
    --card-text: #1e293b;
    --card-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
    display: flex;
    border-radius: 20px;
    position: relative;
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: var(--card-shadow);
    border: 1px solid rgba(255, 255, 255, 0.2);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, sans-serif;
  }

  .card__glow {
    position: absolute;
    inset: -10px;
    background: radial-gradient(
      circle at 50% 0%,
      rgba(45, 106, 79, 0.3) 0%,
      rgba(124, 58, 237, 0) 70%
    );
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  .card__content {
    padding: 1.25em;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.75em;
    position: relative;
    z-index: 2;
  }

  .card__badge {
    position: absolute;
    top: 12px;
    right: 12px;
    background: #10b981;
    color: white;
    padding: 0.25em 0.5em;
    border-radius: 999px;
    font-size: 0.7em;
    font-weight: 600;
    transform: scale(0.8);
    opacity: 0;
    transition: all 0.4s ease 0.1s;
  }

  .card__image {
    width: 100%;
    height: 220px;
    border-radius: 12px;
    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    position: relative;
    overflow: hidden;
  }

  .card__image::after {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
        circle at 30% 30%,
        rgba(255, 255, 255, 0.1) 0%,
        transparent 30%
      ),
      repeating-linear-gradient(
        45deg,
        rgba(139, 92, 246, 0.1) 0px,
        rgba(139, 92, 246, 0.1) 2px,
        transparent 2px,
        transparent 4px
      );
    opacity: 0.5;
  }

  .card__text {
    display: flex;
    flex-direction: column;
    gap: 0.25em;
  }

  .card__title {
    font-size: 1.5em;
    margin: 0;
    font-weight: 700;
    transition: all 0.3s ease;
  }

  .card__description {
    font-size: 1em;
    margin: 0;
    margin-top: 7px;
    opacity: 0.7;
    transition: all 0.3s ease;
  }

  .card__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
  }

  .card__price {
    font-weight: 700;
    font-size: 1em;
    transition: all 0.3s ease;
  }

  

  /* Hover Effects */
  .card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
    border-color: rgba(124, 58, 237, 0.2);
  }

  .card:hover .card__shine {
    opacity: 1;
    animation: shine 3s infinite;
  }

  .card:hover .card__glow {
    opacity: 1;
  }

  .card:hover .card__badge {
    transform: scale(1);
    opacity: 1;
    z-index: 1;
  }

  .card:hover .card__image {
    transform: translateY(-5px) scale(1.03);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }

  .card:hover .card__title {
    color: #9ef01a;
    transform: translateX(2px);
  }

  .card:hover .card__description {
    opacity: 1;
    transform: translateX(2px);
  }

  .card:hover .card__price {
    color: #70e000;
    transform: translateX(2px);
  }

  .card:hover .card__button {
    transform: scale(1);
    box-shadow: 0 0 0 4px rgba(124, 58, 237, 0.2);
  }

  .card:hover .card__button svg {
    animation: pulse 1.5s infinite;
  }

  /* Active State */
  .card:active {
    transform: translateY(-5px) scale(0.98);
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
    color: #fff;
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
  

  /* Animations */
  @keyframes shine {
    0% {
      background-position: -100% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const BillCardSecond = ({ billData }) => {
  const navigate = useNavigate();
  const handleSeeDetails = (e) => {
    e.preventDefault();
    navigate(`/see-details/${billData._id}`);
  };
  return (
    <StyledWrapper>
      <div className="card bg-linear-to-tl from-[#081c15]/50 to-[#1A4301]/50 h-[525px]">
        <div className="card__glow" />
        <div className="card__content">
          <div className="card__image card">
            <figure>
              <img src={billData.image} alt="" />
            </figure>
          </div>
          <div className="card__text flex-1">
            <p className="card__title">{billData.title}</p>
            <p className="card__description">
              <span className="bg-primary p-1 px-3 rounded-full">
                {billData.category}
              </span>
            </p>
            <div className="space-y-3 mt-3">
              <p className="text-[0.9em] text-white leading-relaxed font-light flex items-center gap-2">
                <IoLocationSharp size={20} />
                {billData.location}
              </p>
              <p className="text-[0.9em] text-white leading-relaxed font-light flex items-center gap-2">
                <MdDateRange size={20} />
                {billData.date}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="card__price">
              <span className="text-2xl">৳</span>
              {billData.amount}
            </div>
            <div className="">
              <form onSubmit={handleSeeDetails} className="card__form">
                <button className="button">
                  <p>Pay Bill</p>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default BillCardSecond;
