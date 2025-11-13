import React, { use, useEffect, useRef, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useParams } from "react-router";
import {
  FaBolt,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaFileAlt,
  FaDollarSign,
  FaLock,
  FaEnvelope,
} from "react-icons/fa";
import { FiDownload, FiShare2 } from "react-icons/fi";
import Lottie from "lottie-react";
import styled from "styled-components";
import toast from "react-hot-toast";
import { AuthContext } from "../authContext/AuthContext";

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
  const { id } = useParams();
  const modalRef = useRef(null);
  const [data, setData] = useState([]);
  const [isCurrentMonth, setIsCurrentMonth] = useState(true);
  const { user, theme } = use(AuthContext);

  // modal
  const handlePayBill = () => {
    modalRef.current.showModal();
  };

  // fetch data
  useEffect(() => {
    fetch(`https://pay-connect-server.vercel.app/bills/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);

        const billDate = data.date;
        const billMonth = Number(billDate.split("-")[1]);
        const date = new Date();
        const month = date.getMonth() + 1;
        if (billMonth === month) {
          setIsCurrentMonth(true);
        } else {
          setIsCurrentMonth(false);
        }
      });
  }, [id]);

  // Pay Now button functionality
  const handlePayNow = (e) => {
    e.preventDefault();
    const payDetails = {
      billsId: e.target.billId.value,
      username: e.target.userName.value,
      phone: e.target.phone.value,
      address: e.target.address.value,
      email: e.target.email.value,
      amount: e.target.amount.value,
      date: e.target.date.value,
      category: data.category,
    };

    fetch("https://pay-connect-server.vercel.app/my-bills", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Payment Successful! 🎉");
          modalRef.current.close();
        }
        if(data.message === "Already Exist"){
          toast('Already Paid, Check On My Pay Bills Page', {
  icon: 'ℹ️',
});
        }
      });
  };

  return (
    <div className={`min-h-screen -mt-24 ${theme === "light" ? "bg-linear-to-br from-blue-50 to-indigo-100" : "bg-linear-to-b from-[#081c15] to-black"}`}>
      <title>{`PayConnect | ${data.title}`}</title>
      <div className="pt-32 pb-20 container mx-auto px-4">
        {/* Breadcrumb */}
        <div className={`flex items-center gap-2 text-sm ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>
          <Link className="hover:text-blue-600 transition-colors" to={"/"}>
            Home
          </Link>
          <IoIosArrowForward />
          <Link className="hover:text-blue-600 transition-colors" to={"/bills"}>
            Bills
          </Link>
          <IoIosArrowForward />
          <span className={`font-medium ${theme === "light" ? "text-gray-800" : "text-white"}`}>
            Bill Details
          </span>
        </div>

        {/* Main Card */}
        <div className={`rounded-2xl shadow-lg border mt-8 p-6 ${theme === "light" ? "bg-white border-gray-200" : "bg-gray-800/50 border-gray-700"}`}>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left side Image */}
            <div className="w-full lg:w-1/3">
              <img 
                className="w-full h-64 lg:h-80 object-cover rounded-2xl" 
                src={data.image} 
                alt={data.title} 
              />
            </div>

            {/* Right Side Details */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                <div className="flex-1">
                  <h2 className={`text-3xl sm:text-4xl font-bold mb-3 ${theme === "light" ? "text-gray-800" : "text-white"}`}>
                    {data.title}
                  </h2>
                  <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
                    theme === "light" 
                      ? "bg-green-100 text-green-800" 
                      : "bg-green-900/30 text-green-300"
                  }`}>
                    {data.category}
                  </span>
                </div>

                <div className={`badge px-4 py-3 text-sm font-semibold ${
                  theme === "light" 
                    ? "badge-success badge-outline" 
                    : "bg-green-900/30 text-green-300 border-green-700"
                }`}>
                  Active
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <h3 className={`font-semibold ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>
                  Bill Information:
                </h3>
                
                <div className="flex items-center gap-3">
                  <FaDollarSign className={theme === "light" ? "text-gray-500" : "text-gray-400"} />
                  <p className={theme === "light" ? "text-gray-800" : "text-white"}>
                    <span className="font-bold text-xl">
                      ৳{data.amount}
                    </span>
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <FaCalendarAlt className={theme === "light" ? "text-gray-500" : "text-gray-400"} />
                  <p className={theme === "light" ? "text-gray-700" : "text-gray-300"}>
                    Due Date: <span className="font-medium">{data.date}</span>
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className={theme === "light" ? "text-gray-500" : "text-gray-400"} />
                  <p className={theme === "light" ? "text-gray-700" : "text-gray-300"}>
                    Location: <span className="font-medium">{data.location}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div className="mt-8">
            <h3 className={`font-semibold mb-3 ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>
              Description:
            </h3>
            <p className={`leading-relaxed ${theme === "light" ? "text-gray-700" : "text-gray-300"}`}>
              {data.description}
            </p>
            
            {/* Pay Bill Button */}
            <div className="flex justify-end mt-8">
              <StyledWrapper>
                {isCurrentMonth ? (
                  <button onClick={handlePayBill} className="button">
                    <p>Pay Bill</p>
                  </button>
                ) : (
                  <button 
                    className={`btn px-8 py-3 rounded-lg ${
                      theme === "light" 
                        ? "btn-disabled bg-gray-300 text-gray-500" 
                        : "btn-disabled bg-gray-700 text-gray-400"
                    }`}
                    disabled
                  >
                    Pay Bill
                  </button>
                )}
              </StyledWrapper>
            </div>
            
            {!isCurrentMonth && (
              <p className={`text-center mt-3 ${theme === "light" ? "text-red-600" : "text-red-400"}`}>
                Note: Only current month bills can be paid.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
        <div className={`modal-box ${theme === "light" ? "bg-white" : "bg-linear-to-tl from-[#081c15] to-[#102c00]/50"}`}>
          <h2 className={`text-3xl sm:text-4xl text-center py-3 font-bold ${theme === "light" ? "text-gray-800" : "text-white"}`}>
            Let's Settle This Bill!
          </h2>
          
          <form onSubmit={handlePayNow} className="space-y-4 w-full">
            <label className={`border-b py-3 flex items-center gap-3 ${theme === "light" ? "text-gray-600 border-gray-300" : "text-gray-400 border-gray-500"}`}>
              Email:
              <input
                name="email"
                type="email"
                defaultValue={user?.email}
                className={`grow bg-none outline-none ${theme === "light" ? "text-gray-800" : "text-white"}`}
                readOnly
              />
            </label>
            
            <label className={`border-b py-3 flex items-center gap-3 ${theme === "light" ? "text-gray-600 border-gray-300" : "text-gray-400 border-gray-500"}`}>
              Bill ID:
              <input
                name="billId"
                type="text"
                defaultValue={data._id}
                className={`grow bg-none outline-none ${theme === "light" ? "text-gray-800" : "text-white"}`}
                readOnly
              />
            </label>
            
            <label className={`border-b py-3 flex items-center gap-3 ${theme === "light" ? "text-gray-600 border-gray-300" : "text-gray-400 border-gray-500"}`}>
              Amount (Taka):
              <input
                name="amount"
                type="number"
                defaultValue={data.amount}
                className={`grow bg-none outline-none ${theme === "light" ? "text-gray-800" : "text-white"}`}
                readOnly
              />
            </label>
            
            <label className={`border-b py-3 flex items-center gap-3 ${theme === "light" ? "text-gray-600 border-gray-300" : "text-gray-400 border-gray-500"}`}>
              Username<span className="text-red-500">*</span>:
              <input
                name="userName"
                type="text"
                placeholder="Enter Your Username"
                className={`grow bg-none outline-none ${theme === "light" ? "text-gray-800 placeholder-gray-400" : "text-white placeholder-gray-400"}`}
                required
              />
            </label>
            
            <label className={`border-b py-3 flex items-center gap-3 ${theme === "light" ? "text-gray-600 border-gray-300" : "text-gray-400 border-gray-500"}`}>
              Address<span className="text-red-500">*</span>:
              <input
                name="address"
                type="text"
                placeholder="Enter Your Address"
                className={`grow bg-none outline-none ${theme === "light" ? "text-gray-800 placeholder-gray-400" : "text-white placeholder-gray-400"}`}
                required
              />
            </label>
            
            <label className={`border-b py-3 flex items-center gap-3 ${theme === "light" ? "text-gray-600 border-gray-300" : "text-gray-400 border-gray-500"}`}>
              Phone<span className="text-red-500">*</span>:
              <input
                name="phone"
                type="number"
                placeholder="Enter Your Phone Number"
                className={`grow bg-none outline-none ${theme === "light" ? "text-gray-800 placeholder-gray-400" : "text-white placeholder-gray-400"}`}
                required
              />
            </label>
            
            <label className={`border-b py-3 flex items-center gap-3 ${theme === "light" ? "text-gray-600 border-gray-300" : "text-gray-400 border-gray-500"}`}>
              Date:
              <input
                name="date"
                type="text"
                defaultValue={new Date().toLocaleDateString()}
                className={`grow bg-none outline-none ${theme === "light" ? "text-gray-800" : "text-white"}`}
                readOnly
              />
            </label>

            <button
              type="submit"
              className="btn w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold py-3 mt-4"
            >
              Pay Now
            </button>
          </form>
          
          <div className="modal-action mt-6">
            <form method="dialog">
              <button className={`btn ${theme === "light" ? "bg-gray-500 hover:bg-gray-600" : "bg-gray-700 hover:bg-gray-600"} text-white`}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default SeeDetails;