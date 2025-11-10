import React from "react";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import RecentBills from "../components/RecentBills";

const Home = () => {
  return (
    <div>
      <header className="h-screen">
        <Banner></Banner>
      </header>
      <main>
        <Categories></Categories>
        <RecentBills></RecentBills>
      </main>
    </div>
  );
};

export default Home;
