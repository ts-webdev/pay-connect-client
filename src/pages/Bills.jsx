import React, { useContext, useEffect, useState } from "react";
import BillCardSecond from "../components/BillCardSecond";
import Lottie from "lottie-react";
import loader from "../assets/load.json";
import { AuthContext } from "../authContext/AuthContext";

const Bills = () => {
  const [billsData, setBillsData] = useState([]);
  const [sort, setSort] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { theme } = useContext(AuthContext);

  // Fetch Data
  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3000/bills?sort=${sort}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch bills");
        return res.json();
      })
      .then((data) => {
        setBillsData(data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        console.error("Fetch error:", err);
      })
      .finally(() => setLoading(false));
  }, [sort]);

  const handleSort = (e) => {
    const value = e.target.innerText;
    setSort(value);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === "light"
          ? "bg-gray-50 text-gray-800"
          : "bg-linear-to-b from-[#081c15] to-black text-white"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-28 pt-40 -mt-24">
        <title>PayConnect | Bills</title>

        {/* Header Section */}
        <div className="text-center mb-12">
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
              theme === "light" ? "text-gray-900" : "text-white"
            }`}
          >
            Utility Bills
          </h1>
          <p
            className={`text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed ${
              theme === "light" ? "text-gray-600" : "text-gray-300"
            }`}
          >
            Manage and pay your monthly utility bills seamlessly.
            <span
              className={`block font-semibold mt-2 ${
                theme === "light" ? "text-blue-600" : "text-blue-400"
              }`}
            >
              Electricity • Gas • Water • Internet
            </span>
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span
              className={`px-4 py-2 rounded-full text-sm font-medium border ${
                theme === "light"
                  ? "bg-green-100 text-green-700 border-green-300"
                  : "bg-green-500/20 text-green-300 border-green-500/30"
              }`}
            >
              💡 Current Month Bills Only
            </span>
            <span
              className={`px-4 py-2 rounded-full text-sm font-medium border ${
                theme === "light"
                  ? "bg-blue-100 text-blue-700 border-blue-300"
                  : "bg-blue-500/20 text-blue-300 border-blue-500/30"
              }`}
            >
              ⚡ Instant Payment
            </span>
          </div>
        </div>

        {/* Dropdown Filter */}
        <div className="flex justify-end mb-8">
          <div className="dropdown dropdown-top dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className={`btn border transition-all ${
                theme === "light"
                  ? "bg-white border-gray-300 text-gray-700 hover:bg-gray-100"
                  : "btn-outline border-gray-600 text-white hover:bg-gray-800"
              }`}
            >
              Show : {sort}
            </div>
            <ul
              tabIndex={0}
              className={`dropdown-content menu border rounded-box z-50 w-52 p-2 shadow-lg ${
                theme === "light"
                  ? "bg-white border-gray-200"
                  : "bg-gray-900 border-gray-700"
              }`}
            >
              {["All", "Electricity", "Gas", "Water", "Internet"].map((cat) => (
                <li key={cat} onClick={handleSort}>
                  <a
                    className={`${
                      theme === "light"
                        ? "text-gray-700 hover:bg-gray-100"
                        : "text-white hover:bg-gray-800"
                    }`}
                  >
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex justify-center items-center">
            <Lottie animationData={loader} className="w-52 sm:w-64 md:w-72" />
          </div>
        )}

        {/* Error */}
        {error && (
          <div
            className={`border rounded-lg p-6 text-center mb-8 ${
              theme === "light"
                ? "bg-red-50 border-red-200"
                : "bg-red-500/20 border-red-500/50"
            }`}
          >
            <p
              className={`text-lg ${
                theme === "light" ? "text-red-600" : "text-red-300"
              }`}
            >
              Error: {error}
            </p>
            <button
              onClick={() => window.location.reload()}
              className={`mt-3 px-4 py-2 rounded-lg transition-colors ${
                theme === "light"
                  ? "bg-red-600 text-white hover:bg-red-700"
                  : "bg-red-600 text-white hover:bg-red-700"
              }`}
            >
              Retry
            </button>
          </div>
        )}

        {/* Cards */}
        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {billsData.length > 0 ? (
              billsData.map((billData) => (
                <BillCardSecond 
                  key={billData._id} 
                  billData={billData}
                  className={theme === "light" ? "glass-card" : ""}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <div
                  className={`text-lg ${
                    theme === "light" ? "text-gray-600" : "text-gray-400"
                  }`}
                >
                  No bills found for "{sort}" category
                </div>
                <button
                  onClick={() => setSort("All")}
                  className={`mt-4 px-6 py-2 rounded-lg transition-colors ${
                    theme === "light"
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  Show All Bills
                </button>
              </div>
            )}
          </div>
        )}

        {/* Result Count */}
        {!loading && !error && billsData.length > 0 && (
          <div
            className={`text-center mt-8 ${
              theme === "light" ? "text-gray-600" : "text-gray-400"
            }`}
          >
            Showing {billsData.length} bill
            {billsData.length !== 1 ? "s" : ""} in {sort} category
          </div>
        )}
      </div>

      {/* Glass effect CSS for light theme */}
      <style jsx>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 16px;
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.07);
          transition: all 0.3s ease;
        }
        
        .glass-card:hover {
          background: rgba(255, 255, 255, 0.35);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
};

export default Bills;