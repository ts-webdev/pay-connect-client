import React from "react";
import DotBackground from "../components/DotBackground";
import BillCardSecond from "../components/BillCardSecond";
import { useLoaderData } from "react-router";

const Bills = () => {
    const billsData = useLoaderData()
  return (
    <div className="bg-linear-to-b from-[#081c15] to-black">
      <div className="container mx-auto py-28 pt-40 -mt-24">
        <title>PayConnect | Bills</title>
          <h1 className="text-6xl font-black text-center">All Bill Cards</h1>
        <div className="grid grid-cols-3 gap-10 mt-15">
            {
                billsData.map(billData => <BillCardSecond key={billData._id} billData={billData}></BillCardSecond>)
            }            
        </div>
      </div>
    </div>
  );
};

export default Bills;
