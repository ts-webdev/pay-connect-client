import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import logo2 from "../../assets/logo2.png";
import { Link, NavLink } from "react-router";
import "./navbar.css";
import { AuthContext } from "../../authContext/AuthContext";
import toast from "react-hot-toast";
import { FaRegistered, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { IoCreateOutline } from "react-icons/io5";

const Navbar = () => {
  const { user, logOut, theme, setTheme } = useContext(AuthContext);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll background change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Theme handler
  const handleTheme = (isChecked) => {
    setTheme(isChecked ? "dark" : "light");
  };

  // Logout handler
  const handleSignOut = () => {
    logOut()
      .then(() => toast.success("Successfully Logged Out"))
      .catch((error) => console.error(error));
  };

  // Dynamic nav links
  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            `rounded-full px-4 py-2 transition-colors duration-200 ${
              isActive
                ? theme === "light"
                  ? "bg-blue-100 text-blue-700"
                  : "bg-blue-500/20 text-blue-300"
                : theme === "light"
                ? "hover:bg-gray-100 text-gray-700"
                : "hover:bg-gray-800 text-gray-200"
            }`
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `rounded-full px-4 py-2 transition-colors duration-200 ${
              isActive
                ? theme === "light"
                  ? "bg-blue-100 text-blue-700"
                  : "bg-blue-500/20 text-blue-300"
                : theme === "light"
                ? "hover:bg-gray-100 text-gray-700"
                : "hover:bg-gray-800 text-gray-200"
            }`
          }
          to="/bills"
        >
          Bills
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `rounded-full px-4 py-2 transition-colors duration-200 ${
              isActive
                ? theme === "light"
                  ? "bg-blue-100 text-blue-700"
                  : "bg-blue-500/20 text-blue-300"
                : theme === "light"
                ? "hover:bg-gray-100 text-gray-700"
                : "hover:bg-gray-800 text-gray-200"
            }`
          }
          to="/about"
        >
          About Us
        </NavLink>
      </li>
      {!user && (
        <>
          <li>
            <NavLink
              className={({ isActive }) =>
                `sm:hidden rounded-full px-4 py-2 transition-colors duration-200 ${
                  isActive
                    ? theme === "light"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-blue-500/20 text-blue-300"
                    : theme === "light"
                    ? "hover:bg-gray-100 text-gray-700"
                    : "hover:bg-gray-800 text-gray-200"
                }`
              }
              to="/Login"
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `sm:hidden rounded-full px-4 py-2 transition-colors duration-200 ${
                  isActive
                    ? theme === "light"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-blue-500/20 text-blue-300"
                    : theme === "light"
                    ? "hover:bg-gray-100 text-gray-700"
                    : "hover:bg-gray-800 text-gray-200"
                }`
              }
              to="/Register"
            >
              Register
            </NavLink>
          </li>
        </>
      )}
      {user && (
        <>
          <li>
            <NavLink
              className={({ isActive }) =>
                `rounded-full px-4 py-2 transition-colors duration-200 ${
                  isActive
                    ? theme === "light"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-blue-500/20 text-blue-300"
                    : theme === "light"
                    ? "hover:bg-gray-100 text-gray-700"
                    : "hover:bg-gray-800 text-gray-200"
                }`
              }
              to="/my-pay-bills"
            >
              My Pay Bills
            </NavLink>
          </li>
          <li>
            <Link
              onClick={handleSignOut}
              className={`rounded-full px-4 py-2 transition-colors duration-200 
                     ${
                       theme === "light"
                         ? "hover:bg-gray-100 text-gray-700"
                         : "hover:bg-gray-800 text-gray-200"
                     }
                }`}
            >
              Logout
            </Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="sticky top-0 z-100 pt-5 px-4 sm:px-0">
      <div
        className={`navbar container mx-auto px-4 rounded-full transition-all duration-300 ease-in-out ${
          isScrolled
            ? theme === "light"
              ? "bg-white/60 backdrop-blur-md border border-gray-200 shadow-md"
              : "bg-green-950/30 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        {/* Navbar Start */}
        <div className="navbar-start w-[20%]">
          {/* Mobile Menu */}
          <div className="dropdown sm:-ml-0 -ml-4">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow border transition-all duration-200 ${
                theme === "light"
                  ? "bg-white border-gray-200 text-gray-700"
                  : "bg-gray-900 border-gray-700 text-white"
              }`}
            >
              {links}
            </ul>
          </div>

          {/* Logo */}
          <Link
            to="/"
            className="text-3xl flex items-end font-bold cursor-pointer -ml-3"
          >
            <img
              className="h-10"
              src={theme === "light" ? logo2 : logo}
              alt="logo"
            />
            <span
              className={`-ml-1.5 ${
                theme === "light" ? "text-gray-800" : "text-white"
              }`}
            >
              ayConnect
            </span>
          </Link>
        </div>

        {/* Navbar End */}
        <div className="navbar-end w-[80%] ">
          <ul className="menu menu-horizontal px-1 hidden lg:flex gap-3">
            {links}
          </ul>

          {user ? (
            <button
              onClick={handleSignOut}
              className={`hidden sm:block ml-3 rounded-full px-5 py-2 font-medium transition-colors duration-200 ${
                theme === "light"
                  ? "border border-gray-300 text-gray-700 hover:bg-gray-100"
                  : "border border-gray-600 text-white hover:bg-gray-800"
              }`}
            >
              Logout
            </button>
          ) : (
            <div className="hidden sm:flex items-center">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `flex gap-2 items-center rounded-full px-4 py-2 transition-colors duration-200 ${
                    isActive
                      ? theme === "light"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-blue-500/20 text-blue-300"
                      : theme === "light"
                      ? "hover:bg-gray-100 text-gray-700"
                      : "hover:bg-gray-800 text-gray-200"
                  }`
                }
              >
                <FaSignInAlt></FaSignInAlt> Login
              </NavLink>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  `flex gap-2 items-center rounded-full px-4 py-2 transition-colors btn-outline btn ml-2 duration-200 ${
                    isActive
                      ? theme === "light"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-blue-500/20 text-blue-300"
                      : theme === "light"
                      ? "hover:bg-gray-100 text-gray-700"
                      : "hover:bg-gray-800 text-gray-200"
                  }`
                }
              >
                <IoCreateOutline />
                Register
              </NavLink>
            </div>
          )}

          {/* User Avatar */}
          {user && (
            <div title={user.displayName} className="avatar avatar-online ml-3">
              <div
                className={`w-11 rounded-full ring-2 ${
                  theme === "light"
                    ? "ring-blue-500"
                    : "ring-primary ring-offset-1 ring-offset-black"
                }`}
              >
                <img src={user.photoURL} alt="user" />
              </div>
            </div>
          )}

          {/* Theme Toggle */}
          <label className="hidden sm:grid swap swap-rotate ml-3 cursor-pointer">
            <input
              onChange={(e) => handleTheme(e.target.checked)}
              type="checkbox"
              className="theme-controller"
              defaultChecked={theme === "dark"}
            />
            {/* Sun icon */}
            <svg
              className="swap-off h-10 w-8 fill-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
            {/* Moon icon */}
            <svg
              className="swap-on h-10 w-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
