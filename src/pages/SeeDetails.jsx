import React, { useEffect, useRef, useState } from "react";
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
  // modal
  const handlePayBill = () => {
    modalRef.current.showModal();
  };

  // fetch data
  useEffect(() => {
    fetch(`http://localhost:3000/bills/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);

        const billDate = data.date;
        const billMonth = Number(billDate.split("-")[1]);
        const date = new Date();
        const month = date.getMonth();
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
      category: data.category
    };
    
    fetch("http://localhost:3000/my-bills", {
      method: "POST",
      headers:{
        "content-type" : "application/json"
      },
      body: JSON.stringify(payDetails)
    })
    .then(res=> res.json())
    .then(data=>{
      console.log("Data After Saving Mongodb:",data)
      if(data.insertedId){
        toast.success("Payment Successful! 🎉")
        modalRef.current.close()
      }

    })
  };

  return (
    <div className="bg-linear-to-b from-[#081c15] to-black ">
      <title>PayConnect | Monthly electricity Bill</title>
      <div className="-mt-24 pt-35 pb-28 container mx-auto">
        <div className="flex items-center gap-3">
          <Link className="hover:text-gray-300" to={"/"}>
            Home
          </Link>
          <IoIosArrowForward />
          <Link className="hover:text-gray-300" to={"/bills"}>
            Bills
          </Link>
          <IoIosArrowForward />
          <Link className="font-bold" to={"/see-details"}>
            Bill Details
          </Link>
        </div>

        <div className="card bg-black/20 shadow-md border mx-auto mt-10 p-10">
          <div className="flex">
            {/* Left side Image */}
            <div className="w-100 h-70 rounded-2xl bg-white"></div>

            {/* Right Side Details */}
            <div className="card-body">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div>
                    <h2 className="card-title text-5xl font-bold">
                      {data.title}
                    </h2>
                    <p className="text-lg mt-3 text-success">{data.category}</p>
                  </div>
                </div>

                <div className="badge badge-success badge-outline px-4 py-2 text-sm font-semibold">
                  Paid
                </div>
              </div>
              <h3 className="font-semibold text-gray-500 ">
                Bill Information:
              </h3>
              <div className="flex items-center gap-2">
                <p>
                  <span className="font-bold text-lg">
                    <span className="mr-2">৳</span>
                    {data.amount}
                  </span>
                </p>
              </div>

              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-gray-500" />
                <p>
                  Due Date: <span className="font-medium">{data.date}</span>
                </p>
              </div>

              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-gray-500" />
                <p>
                  Service Location:{" "}
                  <span className="font-medium">{data.location}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div>
            <div className="space-y-3 text-sm mt-5">
              <h3 className="font-semibold text-gray-500 ">Description:</h3>
              <p className="text-gray-300">{data.description}</p>
            </div>
            {/* Pay Bill Button */}
            <div className="flex justify-end mt-5">
              <StyledWrapper>
                {isCurrentMonth ? (
                  <button onClick={handlePayBill} className="button">
                    <p>Pay Bill</p>
                  </button>
                ) : (
                  <button className="btn btn-primary btn-disabled px-9">
                    Pay Bill
                  </button>
                )}
              </StyledWrapper>
            </div>
            {isCurrentMonth || (
              <p className="text-center text-error">
                Note: Only current month bills can be paid.
              </p>
            )}
          </div>
        </div>
      </div>
      {/* Modal */}
      <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-linear-to-tl from-[#081c15] to-[#102c00]/50">
          <form  onSubmit={handlePayNow} className="space-y-3  w-full">
            <label className="text-gray-400 border-b border-gray-500 py-3 flex items-center gap-2">
              Email:
              <input
                name="email"
                type="email"
                defaultValue={data.email}
                className="grow bg-none outline-none text-white"
                readOnly
              />
            </label>
            <label className="text-gray-400 border-b border-gray-500 py-3 flex items-center gap-2">
              Bill ID:
              <input
                name="billId"
                type="text"
                defaultValue={data._id}
                className="grow bg-none outline-none text-white"
                readOnly
              />
            </label>
            <label className="text-gray-400 border-b border-gray-500 py-3 flex items-center gap-2">
              Amount (Taka):
              <input
                name="amount"
                type="number"
                defaultValue={data.amount}
                className="grow bg-none outline-none text-white"
                readOnly
              />
            </label>
            <label className="text-gray-400 border-b border-gray-500 py-3 flex items-center gap-2">
              Username<span className="text-error -ml-1">*</span>:
              <input
                name="userName"
                type="text"
                placeholder="Enter Your Username"
                className="grow bg-none outline-none text-white"
                required
              />
            </label>
            <label className="text-gray-400 border-b border-gray-500 py-3 flex items-center gap-2">
              Address<span className="text-error -ml-1">*</span>:
              <input
                name="address"
                type="text"
                placeholder="Enter Your Address"
                className="grow bg-none outline-none text-white"
                required
              />
            </label>
            <label className="text-gray-400 border-b border-gray-500 py-3 flex items-center gap-2">
              Phone<span className="text-error -ml-1">*</span>:
              <input
                name="phone"
                type="number"
                placeholder="Enter Your Phone Number"
                className="grow bg-none outline-none text-white"
                required
              />
            </label>
            <label className="text-gray-400 border-b border-gray-500 py-3 flex items-center gap-2">
              Date:
              <input
                name="date"
                type="text"
                defaultValue={new Date().toLocaleDateString()}
                className="grow bg-none outline-none text-white"
                readOnly
              />
            </label>

            <button
             
              type="submit"
              className="btn w-full btn-primary text-white  rounded-sm font-semibold mt-2"
            >
              Pay Now
            </button>
          </form>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn bg-primary">Cancel</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default SeeDetails;
