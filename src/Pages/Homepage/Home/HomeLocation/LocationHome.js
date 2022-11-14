import React from "react";
import dhk from "../../../../assets/Images/Location/Dhaka.jpg";
import ctg from "../../../../assets/Images/Location/Chittagong.jpg";
import mymensigh from "../../../../assets/Images/Location/Mymensigh.jpg";
import { Link } from "react-router-dom";

const LocationHome = () => {
  return (
    <div className="mt-10 py-10">
      <h1 className="text-center text-4xl text-secondary font-bold hover:scale-110 hover:text-red-600">
        📍Delivering in Dhaka, Chittagong & Mymensingh!
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:grid-cols-2 py-10">
        <div className="card bg-base-100 shadow-xl w-96 hover:border-2 hover:border-red-600 ">
          <figure className="px-10 pt-10">
            <img src={dhk} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-secondary">Dhaka</h2>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl w-96 hover:border-2 hover:border-red-600 ">
          <figure className="px-10 pt-10">
            <img src={ctg} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-secondary">Chittagon</h2>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl w-96 hover:border-2 hover:border-red-600 ">
          <figure className="px-10 pt-10">
            <img src={mymensigh} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-secondary">Mymensingh</h2>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Link to="/locations" className="btn btn-primary text-center w-fit ">
          See All Locations
        </Link>
      </div>
    </div>
  );
};

export default LocationHome;
