import React from "react";
import { FaBangladeshiTakaSign, FaPerson } from "react-icons/fa6";
import { GoPerson } from "react-icons/go";
import { RiCustomerService2Line, RiSecurePaymentLine } from "react-icons/ri";

const Review = () => {
  return (
    <div className="">
      <div className="container mx-auto py-28">
        <div className="flex justify-center">
          <h2 className="text-2xl  py-2 px-6 rounded-full bg-[#245501] text-white">
           Trusted by Thousands
          </h2>
        </div>
        <p className="text-center mt-5 w-1/2 mx-auto text-lg">
         Join the growing community of users who have simplified their bill management.
        </p>
        <div className="mt-15 flex justify-around">
            <div className="flex flex-col items-center gap-5">
                <GoPerson size={70} className="bg-white text-black rounded-full p-4"/>

                <h3 className="text-4xl font-bold">50,000+</h3>
                <p className=" -mt-3">Active Users</p>
            </div>
            <div className="flex flex-col items-center gap-5">
                <FaBangladeshiTakaSign size={70} className="bg-white text-black rounded-full p-4"/>

                <h3 className="text-4xl font-bold">$2.6M+</h3>
                <p className=" -mt-3">Bills Processed</p>
            </div>
            <div className="flex flex-col items-center gap-5">
                <RiSecurePaymentLine size={70} className="bg-white text-black rounded-full p-4"/>

                <h3 className="text-4xl font-bold">99.9%</h3>
                <p className=" -mt-3">Uptime Guarantee</p>
            </div>
            <div className="flex flex-col items-center gap-5">
                <RiCustomerService2Line size={70} className="bg-white text-black rounded-full p-4"/>

                <h3 className="text-4xl font-bold">24/7</h3>
                <p className=" -mt-3">Customer Support</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
