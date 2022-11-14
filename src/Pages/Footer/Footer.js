import React from "react";
import logo from "../../assets/Images/chillox-logo.png";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-neutral-content">
        <div>
          <img src={logo} alt="" className="w-24" />
          <p>
            🍔Serving the juiciest burgers in town! <br />
            📍Delivering in Dhaka, Chittagong & Mymensingh!
          </p>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <div className="grid grid-flow-col gap-4 lg:grid-cols-3">
            <FaFacebookF className="  text-white text-center hover:scale-110  mx-1 text-3xl  bg-red-600 rounded-full py-1 fill-current"></FaFacebookF>
            <FaInstagram className="  text-white text-center hover:scale-110 mx-1 text-3xl  bg-red-600 rounded-full py-1"></FaInstagram>
            <FaYoutube className=" text-white text-center hover:scale-110 mx-1 text-3xl  bg-red-600 rounded-full py-1"></FaYoutube>
          </div>
        </div>
      </footer>

      <p className="text-center text-secondary py-5">
        Designed and Developed by Tanvir Hasan Prince. This is done for
        educational purpose and is not affiliated with acutal Chillox brand.
      </p>
    </div>
  );
};

export default Footer;
