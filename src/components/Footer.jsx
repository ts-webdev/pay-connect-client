import React from "react";
import { Link } from "react-router";
import logo from "../assets/logo.png";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <section className="bg-[#081c15] z-50">
      
      <footer className="grid grid-cols-5 justify-between container mx-auto sm:footer-horizontal text-base-content py-20 p-10">
        <aside className=" col-span-2">
          <Link
            to={"/"}
            className="text-3xl flex items-end font-bold cursor-pointer -ml-3"
          >
            <img className="h-10" src={logo} alt="" />
            <span className="-ml-1.5">ayConnect</span>
          </Link>
          <p className="max-w-80 mt-3 font-light">
            Simplify your utility bill management with our comprehensive
            platform. Track, pay, and manage all your electricity, gas, water,
            and internet bills in one place.
          </p>
        </aside>
        <aside className="flex justify-between  col-span-3">
          <nav className="flex flex-col space-y-2">
            <h6 className="footer-title text-lg">Services</h6>
            <a className="link link-hover font-light">Branding</a>
            <a className="link link-hover font-light">Design</a>
            <a className="link link-hover font-light">Marketing</a>
            <a className="link link-hover font-light">Advertisement</a>
          </nav>
          <nav className="flex flex-col space-y-2">
            <h6 className="footer-title text-lg">Legal</h6>
            <a className="link link-hover font-light">Terms of use</a>
            <a className="link link-hover font-light">Privacy policy</a>
            <a className="link link-hover font-light">Cookie policy</a>
          </nav>
          <nav className="flex flex-col space-y-2">
            <h6 className="footer-title text-lg">Follow Us</h6>
            <p className="text-white/60 flex gap-4">
              <FaFacebook
                className="border p-2 rounded-lg hover:text-white"
                size={40}
              ></FaFacebook>
              <BsTwitterX className="border p-2 rounded-lg hover:text-white" size={40} />

              <FaYoutube
                className="border p-2 rounded-lg hover:text-white"
                size={40}
              ></FaYoutube>
            </p>
          </nav>
        </aside>
      </footer>
      <footer className="bg-[#081c15] pb-10">
        <div className="bg-[#1b4332] footer sm:footer-horizontal justify-center  text-neutral-content items-center p-4">
          <aside>
            <p>
              Copyright © {new Date().getFullYear()} PayConnect- All right
              reserved
            </p>
          </aside>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
