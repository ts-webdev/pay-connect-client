import React from "react";

import BillCard from "./BillCard";

const RecentBills = () => {
  return (
    <div className="py-28 bg-black">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <h2 className="text-2xl border py-2 px-6 rounded-full bg-[#AAD576]/70 text-[#245501]">
            Recent Bills
          </h2>
        </div>
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
