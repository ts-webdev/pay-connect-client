import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div className="relative bg-gradient text-white">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
