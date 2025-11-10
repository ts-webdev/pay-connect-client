import React from "react";
import { FaMapLocation } from "react-icons/fa6";
import { GiElectric } from "react-icons/gi";
import { IoLocationSharp } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";

const BillCard = () => {
  return (
    <div className="relative border-2 border-[#114e1d81] rounded-[1.5em] bg-linear-to-br from-[#6a994e] via-[#a7c957] to-[#386641] text-black font-nunito p-[1.5em] flex justify-center items-left flex-col gap-[1em] backdrop-blur-md hover:shadow-2xl hover:shadow-[#386641]/50 transition-all duration-500 group/card hover:-translate-y-1">
      <div className="absolute inset-0 bg-linear-to-br from-[#6a994e] via-[#a7c957] to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-[1.5em]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,50,190,0.1),transparent_60%)] group-hover/card:animate-pulse" />
      <div className="absolute top-4 right-4 flex gap-2">
        <div className="w-2 h-2 rounded-full bg-[#31572c]" />
        <div className="w-2 h-2 rounded-full bg-[#4f772d]" />
        <div className="w-2 h-2 rounded-full bg-[#90a955]" />
      </div>
      <div className="relative z-10 transition-transform duration-300 group-hover/card:-translate-y-0.5 space-y-3">
        <div>
          <GiElectric
            className="bg-[#132a13] p-2 rounded-lg"
            size={50}
            color="#f2e8cf"
          />
        </div>
        <div className="flex justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#081c15]">
              Monthly Electricity Bill
            </h1>
            <p>Electricity</p>
          </div>
          <div>
            <div className="badge badge-primary">Paid</div>
          </div>
        </div>
        <p className="text-[0.9em] text-[#081c15]/90 leading-relaxed font-light flex items-center gap-2">
          <IoLocationSharp size={20} />
          Dhaka, Bangladesh.
        </p>
        <p className="text-[0.9em] text-[#081c15]/90 leading-relaxed font-light flex items-center gap-2">
          <MdDateRange size={20} />
          19/25/2025
        </p>
        <p className="text-xl text-[#081c15]/90 leading-relaxed font-semibold flex items-center gap-2">
          <TbCurrencyTaka size={20} />
          150
        </p>
      </div>
      <button className="relative h-fit w-fit px-[1.4em] py-[0.7em] mt-2 border border-[#518134] rounded-full flex justify-center items-center gap-[0.7em] overflow-hidden group/btn hover:border-[#081c15]/50 hover:shadow-lg  active:scale-95 transition-all duration-300 backdrop-blur-md bg-[#6a994e]/40">
        <div className="absolute inset-0 bg-linear-to-r from-[#6a994e]/30 via-[#a7c957]/30 to-[#386641]/20 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
        <p className="relative z-10 font-medium tracking-wide">See Details</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="relative z-10 w-5 h-5 group-hover/btn:translate-x-[10%] transition-transform duration-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </button>
    </div>
  );
};

export default BillCard;
