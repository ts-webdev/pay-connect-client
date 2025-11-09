import React from "react";
import Banner from "../components/Banner";
import Categories from "../components/Categories";

const Home = () => {
  return (
    <div>
      <header className="h-screen">
        <Banner></Banner>
      </header>
      <main>
        <Categories></Categories> 
      </main>
    </div>
  );
};

export default Home;
