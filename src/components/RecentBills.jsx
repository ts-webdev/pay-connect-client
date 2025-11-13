import React, { use, useEffect, useState } from "react";
import BillCard from "./BillCard";
import { AuthContext } from "../authContext/AuthContext";

const RecentBills = () => {
  const [recentData, setRecentData] = useState([])
  const {theme} = use(AuthContext)
  useEffect(()=>{
    fetch("http://localhost:3000/bills/latest")
    .then(res=> res.json())
    .then(data => setRecentData(data))
  },[])
  return (
    <div className={theme === "light" ? "bg-white py-28 px-4" : "py-28 bg-black px-4"}>
      <div className="container mx-auto">
        <div className="flex justify-center">
          <h2 className="text-2xl  py-2 px-6 rounded-full bg-[#245501] text-white">
            Recent Bills
          </h2>
        </div>
        <p className={`text-center mt-5 text-lg ${theme === "light"? "text-gray-600" : 'text-white'}`}>
          Stay up to date with your latest utility bills and payment status
        </p>
        {/* All Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-20 gap-5 mt-16 ">
         {
          recentData.map(data=>  <BillCard key={data._id} data={data}></BillCard>)
         }
        </div>
      </div>
    </div>
  );
};

export default RecentBills;
