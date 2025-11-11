import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
import ScrollToTop from "../components/ScrollToTop";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <div className="relative text-white">
      <ScrollToTop></ScrollToTop>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <Toaster/>
    </div>
  );
};

export default Root;
