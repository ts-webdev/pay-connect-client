import React from "react";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import RecentBills from "../components/RecentBills";
import WhyChoose from "../components/WhyChoose";

const Home = () => {
  return (
    <div className="bg-black">
    
        <header className="h-screen">
          <Banner></Banner>
        </header>
        <main>
          <Categories></Categories>
          <RecentBills></RecentBills>
          <WhyChoose></WhyChoose>
        </main>
    
    </div>
  );
};

export default Home;
