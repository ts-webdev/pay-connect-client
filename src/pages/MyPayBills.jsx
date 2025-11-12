import React, { useState, useEffect } from "react";
import {
  FaDownload,
  FaEdit,
  FaTrash,
  FaReceipt,
  FaSearch,
} from "react-icons/fa";
import Swal from "sweetalert2";

const MyPayBills = () => {
  const [myBills, setMyBills] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch user's paid bills
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/my-bills")
      .then((res) => res.json())
      .then((data) => {
        setMyBills(data);
        setLoading(false);
      });
  }, []);

  // Calculate total amount
  const totalBills = myBills.length;

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
                const remainingData = myBills.filter(data => data.billsId !== id)
                setMyBills(remainingData)

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
                  ৳ 0
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
                      Category
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
                      key={bill._id}
                      className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
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
                          ৳{bill.amount}
                        </p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-md text-gray-500 dark:text-gray-400">
                          {bill.date}
                        </p>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex space-x-2">
                          <button className="flex items-center gap-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm">
                            <FaEdit />
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteData(bill.billsId)}
                            className="flex items-center gap-1 px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors text-sm"
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
    </div>
  );
};

export default MyPayBills;
