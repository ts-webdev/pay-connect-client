import React, { useEffect, useState } from "react";
import BillCardSecond from "../components/BillCardSecond";

const Bills = () => {
  const [billsData, setBillsData] = useState([]);
  const [sort, setSort] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch Data
  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3000/bills?sort=${sort}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch bills");
        }
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
      .finally(() => {
        setLoading(false);
      });
  }, [sort]);

  // handle sort
  const handleSort = (e) => {
    const value = e.target.innerText;
    setSort(value);
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-[#081c15] to-black">
      <div className="container mx-auto px-4 py-28 pt-40 -mt-24">
        <title>PayConnect | Bills</title>

        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Utility Bills
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Manage and pay your monthly utility bills seamlessly.
            <span className="block text-blue-400 font-semibold mt-2">
              Electricity • Gas • Water • Internet
            </span>
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-medium border border-green-500/30">
              💡 Current Month Bills Only
            </span>
            <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium border border-blue-500/30">
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
              className="btn btn-outline border-gray-600 text-white"
            >
              Show : {sort}
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-gray-900 border border-gray-700 rounded-box z-50 w-52 p-2 shadow-lg"
            >
              <li onClick={handleSort}>
                <a className="text-white hover:bg-gray-800">All</a>
              </li>
              <li onClick={handleSort}>
                <a className="text-white hover:bg-gray-800">Electricity</a>
              </li>
              <li onClick={handleSort}>
                <a className="text-white hover:bg-gray-800">Gas</a>
              </li>
              <li onClick={handleSort}>
                <a className="text-white hover:bg-gray-800">Water</a>
              </li>
              <li onClick={handleSort}>
                <a className="text-white hover:bg-gray-800">Internet</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Loading*/}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
          </div>
        )}

        {/*if Error face*/}
        {error && (
          <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-6 text-center mb-8">
            <p className="text-red-300 text-lg">Error: {error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-3 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Retry
            </button>
          </div>
        )}

        {/* All Cards  */}
        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {billsData.length > 0 ? (
              billsData.map((billData) => (
                <BillCardSecond key={billData._id} billData={billData} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <div className="text-gray-400 text-lg">
                  No bills found for "{sort}" category
                </div>
                <button
                  onClick={() => setSort("All")}
                  className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Show All Bills
                </button>
              </div>
            )}
          </div>
        )}

        {/* Results Count */}
        {!loading && !error && billsData.length > 0 && (
          <div className="text-center mt-8 text-gray-400">
            Showing {billsData.length} bill{billsData.length !== 1 ? "s" : ""}{" "}
            in {sort} category
          </div>
        )}
      </div>
    </div>
  );
};

export default Bills;
