import React, { useState, useEffect, use, useRef } from "react";
import {
  FaDownload,
  FaEdit,
  FaTrash,
  FaReceipt,
  FaSearch,
} from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../authContext/AuthContext";

const MyPayBills = () => {
  const [myBills, setMyBills] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = use(AuthContext);
  const modalRef = useRef(null);
  const [updateProductInfo, setUpdateProductInfo] = useState({});

  // for change date formate
  const formatDateForInput = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date)) return "";
    return date.toISOString().split("T")[0];
  };

  // Fetch user's paid bills
  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3000/my-bills?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyBills(data);
        setLoading(false);
      });
  }, [user]);

  // Calculate total amount
  const totalBills = myBills.length;
  const allAmount = myBills.map((data) => Number(data.amount));
  const totalAmount = allAmount.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  // Loading spinner
  if (loading) {
    return (
      <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  //   Delete Data
  const handleDeleteData = (id) => {
    // Sweet Alert
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/my-bills/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remainingData = myBills.filter(
                (data) => data.billsId !== id
              );
              setMyBills(remainingData);

              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  // Show Modal
  const handleEditButton = (data) => {
    modalRef.current.showModal();
    setUpdateProductInfo(data);
  };

  // Update Data
  const handleUpdateData = (e) => {
    e.preventDefault();
    const updatedData = {
      billsId: updateProductInfo.billsId,
      username: updateProductInfo.username,
      email: updateProductInfo.email,
      category: updateProductInfo.category,
      amount: e.target.amount.value,
      address: e.target.address.value,
      phone: e.target.phone.value,
      date: e.target.date.value,
    };

    fetch(`http://localhost:3000/my-bills/${updateProductInfo.billsId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        modalRef.current.close();
        if (data.modifiedCount) {
          const remainingMyBills = myBills.filter(
            (bill) => bill.billsId !== updateProductInfo.billsId
          );
          setMyBills([...remainingMyBills, updatedData]);
          setUpdateProductInfo({});
          Swal.fire({
            title: "Update Successfully",
            icon: "success",
            draggable: true,
          });
        }
      });
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-[#081c15] to-black -mt-23 py-28">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            My Paid Bills
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            View and manage all your paid utility bills in one place
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/20 rounded-2xl p-6 shadow-lg border border-green-100 dark:border-green-900">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Total Bills Paid
                </p>
                <p className="text-3xl font-bold text-gray-800 dark:text-white">
                  {totalBills}
                </p>
              </div>
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                <FaReceipt className="text-2xl text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </div>

          <div className="bg-white/20 rounded-2xl p-6 shadow-lg border border-green-100 dark:border-green-900">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Total Amount Paid
                </p>
                <p className="text-3xl font-bold text-gray-800 dark:text-white">
                  ৳ {totalAmount}
                </p>
              </div>
              <div className="bg-green-100 dark:bg-green-900 p-3 px-5 rounded-full">
                <span className="text-2xl text-green-600 dark:text-green-400">
                  ৳
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white/20 rounded-2xl p-6 shadow-lg border border-green-100 dark:border-green-900">
            <div className="flex justify-between items-center gap-4">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                Download Report:
              </p>
              {/* Download Report Button */}
              <button className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200 font-medium">
                <FaDownload />
                Download
              </button>
            </div>
          </div>
        </div>

        {/* Bills Table */}
        <div className="bg-white/10 rounded-2xl shadow-lg overflow-hidden">
          {
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50/20">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      User Details
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      <span className="ml-2">Category</span>
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Pay Date
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                  {myBills.map((bill) => (
                    <tr
                      key={bill.billsId}
                      className="hover:bg-green-500/7 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">
                            {bill.username}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {bill.email}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {bill.phone}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {bill.address}
                          </p>
                        </div>
                      </td>
                      <td className="px-6 py-4 ">
                        <span className="bg-primary p-2 px-6 text-md rounded-full">
                          {bill.category}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-lg font-semibold text-gray-900 dark:text-white">
                          ৳ {bill.amount}
                        </p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-md text-gray-500 dark:text-gray-400">
                          {bill.date}
                        </p>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleEditButton(bill)}
                            className="flex items-center gap-1 px-3 py-2 btn btn-info btn-soft rounded-lg transition-colors text-sm"
                          >
                            <FaEdit />
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteData(bill.billsId)}
                            className="flex items-center gap-1 px-3 py-2 btn btn-error btn-soft text-sm"
                          >
                            <FaTrash />
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          }
        </div>
      </div>

      {/* Modal */}

      <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-linear-to-tl from-[#081c15] to-[#102c00]/50">
          <h2 className="text-4xl text-center py-3 font-bold">
            Update Bill Details
          </h2>
          <form onSubmit={handleUpdateData} className="space-y-3 w-full">
            <label className="text-gray-400 border-b border-gray-500 py-3 flex items-center gap-2">
              Amount (Taka)<span className="text-error -ml-1">*</span>:
              <input
                name="amount"
                type="text"
                value={updateProductInfo.amount || ""}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^\d*$/.test(value)) {
                    setUpdateProductInfo({
                      ...updateProductInfo,
                      amount: value,
                    });
                  }
                }}
                placeholder="Enter Amount"
                className="grow bg-none outline-none text-white"
                required
              />
            </label>

            <label className="text-gray-400 border-b border-gray-500 py-3 flex items-center gap-2">
              Address<span className="text-error -ml-1">*</span>:
              <input
                name="address"
                type="text"
                value={updateProductInfo.address || ""}
                onChange={(e) =>
                  setUpdateProductInfo({
                    ...updateProductInfo,
                    address: e.target.value,
                  })
                }
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
                value={updateProductInfo.phone || ""}
                onChange={(e) =>
                  setUpdateProductInfo({
                    ...updateProductInfo,
                    phone: e.target.value,
                  })
                }
                placeholder="Enter Your Phone Number"
                className="grow bg-none outline-none text-white"
                required
              />
            </label>

            <label className="text-gray-400 border-b border-gray-500 py-3 flex items-center gap-2">
              Date:<span className="text-error -ml-1">*</span>
              <input
                name="date"
                type="date"
                value={formatDateForInput(updateProductInfo.date) || ""}
                onChange={(e) =>
                  setUpdateProductInfo({
                    ...updateProductInfo,
                    date: e.target.value,
                  })
                }
                className="grow bg-none outline-none text-white"
                required
              />
            </label>

            <button
              type="submit"
              className="btn w-full btn-primary text-white rounded-sm font-semibold mt-2"
            >
              Update Information
            </button>
          </form>
          <div className="modal-action">
            <button
              onClick={() => {
                modalRef.current.close();
                setUpdateProductInfo({});
              }}
              className="btn bg-primary"
            >
              Cancel
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default MyPayBills;
