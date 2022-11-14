import React from "react";
import { Link } from "react-router-dom";
import logopng from "../../../../assets/Images/chillox-logo.png";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import burger from "../../../../78160-burger-bounce.json";
import Lottie from "lottie-react";

const Navbar = () => {
  const menuItems = (
    <React.Fragment>
      <li>
        <Link
          to="/"
          className="hover:text-secondary font-bold hover:border-2 hover:border-red-600 rounded"
        >
          Home
        </Link>
      </li>

      <li>
        {" "}
        <Link
          to="/menu"
          className="hover:text-secondary font-bold hover:border-2 hover:border-red-600  rounded"
        >
          Menu
        </Link>{" "}
      </li>

      <li>
        <Link
          to="/aboutus"
          className="hover:text-secondary font-bold hover:border-2 hover:border-red-600 rounded"
        >
          About Us
        </Link>
      </li>

      <li>
        {" "}
        <Link
          to="/locations"
          className="hover:text-secondary font-bold hover:border-2 hover:border-red-600 rounded"
        >
          Locations
        </Link>
      </li>
    </React.Fragment>
  );
  return (
    <div>

      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2  bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>

          <img src={logopng} alt="" className="w-24" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        <div className="navbar-end text-xl text-white text-center ">
          <FaFacebookF className="hover:scale-110  mx-1 text-3xl  bg-red-600 rounded-full py-1 "></FaFacebookF>
          <FaInstagram className=" hover:scale-110 mx-1 text-3xl  bg-red-600 rounded-full py-1"></FaInstagram>
          <FaYoutube className=" hover:scale-110 mx-1 text-3xl  bg-red-600 rounded-full py-1"></FaYoutube>
          <Lottie className="w-24" animationData={burger} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
