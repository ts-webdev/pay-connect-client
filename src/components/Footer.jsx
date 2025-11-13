import React, { use } from "react";
import { Link } from "react-router";
import logo from "../assets/logo.png";
import logo2 from "../assets/logo2.png";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { AuthContext } from "../authContext/AuthContext";

const Footer = () => {
  const { theme } = use(AuthContext);
  return (
    <section
      className={theme === "light" ? "bg-base-300" : "bg-[#081c15] z-50"}
    >
      <footer className="grid grid-cols-1 lg:grid-cols-5 justify-between container mx-auto text-base-content py-10 lg:py-20 px-5 lg:p-10 gap-8 lg:gap-0">
        <aside className="lg:col-span-2">
          <Link
            to={"/"}
            className="text-2xl lg:text-3xl flex items-end font-bold cursor-pointer -ml-3"
          >
            <img className="h-8 lg:h-10" src={theme ==="light" ? logo2 : logo} alt="" />
            <span className="-ml-1.5">ayConnect</span>
          </Link>
          <p className="max-w-80 mt-3 font-light text-sm lg:text-base">
            Simplify your utility bill management with our comprehensive
            platform. Track, pay, and manage all your electricity, gas, water,
            and internet bills in one place.
          </p>
        </aside>
        <aside className="flex flex-col lg:flex-row justify-between lg:col-span-3 gap-8 lg:gap-0">
          <nav className="flex flex-col space-y-2">
            <h6 className="footer-title text-lg">Useful Links</h6>
            <Link to={"/"} className="link link-hover font-light">
              Home
            </Link>
            <Link to={"/bills"} className="link link-hover font-light">
              Bills
            </Link>
            <Link to={"/my-pay-bills"} className="link link-hover font-light">
              My Pay Bills
            </Link>
            <Link to={"/profile"} className="link link-hover font-light">
              My Profile
            </Link>
            <Link to={"/about"} className="link link-hover font-light">
              About Us
            </Link>
          </nav>
          <nav className="flex flex-col space-y-2">
            <h6 className="footer-title text-lg">Legal</h6>
            <a className="link link-hover font-light">Terms of use</a>
            <a className="link link-hover font-light">Privacy policy</a>
            <a className="link link-hover font-light">Cookie policy</a>
          </nav>
          <nav className="flex flex-col space-y-2">
            <h6 className="footer-title text-lg">Follow Us</h6>
            <div className={`flex gap-3 ${theme === "light" ? "text-gray-600" : "text-white/60"}`}>
              <FaFacebook
                className={`border p-2 rounded-lg cursor-pointer ${
                  theme === "light" ? "hover:text-black" : "hover:text-white"
                }`}
                size={36}
              />
              <BsTwitterX
                className={`border p-2 rounded-lg cursor-pointer ${
                  theme === "light" ? "hover:text-black" : "hover:text-white"
                }`}
                size={36}
              />
              <FaYoutube
                className={`border p-2 rounded-lg cursor-pointer ${
                  theme === "light" ? "hover:text-black" : "hover:text-white"
                }`}
                size={36}
              />
            </div>
          </nav>
        </aside>
      </footer>
      <footer className={theme=== "light" ? "bg-gray-100 pb-10" : "bg-[#081c15] pb-10"}>
        <div
          className={`${
            theme === "light" ? "bg-gray-300 text-black" : "bg-[#1b4332]"
          } footer flex flex-col lg:flex-row justify-center items-center p-4 text-center lg:text-left`}
        >
          <aside>
            <p className="text-sm lg:text-base">
              Copyright © {new Date().getFullYear()} PayConnect - All right reserved
            </p>
          </aside>
        </div>
      </footer>
    </section>
  );
};

export default Footer;