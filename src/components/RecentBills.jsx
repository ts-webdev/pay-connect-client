import React from "react";
import BillCard from "./BillCard";

const RecentBills = () => {
  return (
    <div className="py-28 bg-black">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <h2 className="text-2xl  py-2 px-6 rounded-full bg-[#245501] text-white">
            Recent Bills
          </h2>
        </div>
        <p className="text-center mt-5 text-lg">
          Stay up to date with your latest utility bills and payment status
        </p>
        {/* All Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mt-16 ">
          <BillCard></BillCard>
          <BillCard></BillCard>
          <BillCard></BillCard>
          <BillCard></BillCard>
          <BillCard></BillCard>
          <BillCard></BillCard>
        </div>
      </div>
    </div>
  );
};

export default RecentBills;
