import React from "react";
import bbqWings from "../../../assets/Images/Menu/bbq-wings.jpg";
import beefBurger from "../../../assets/Images/Menu/Beef-burger.jpg";
import beefCheese from "../../../assets/Images/Menu/Beef-cheese.jpg";
import chickenFingers from "../../../assets/Images/Menu/chicken-fingers.jpg";
import nagaDrums from "../../../assets/Images/Menu/Naga Drums.jpg";
import redVelvet from "../../../assets/Images/Menu/Desserts/Velvet-red.jpg";

import { Link } from "react-router-dom";

const HomeMenu = () => {
  return (
    <div>
      <h1 className="text-center text-4xl text-secondary font-bold hover:scale-110 hover:text-red-600">
        Foods We Offer
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:grid-cols-2  py-10">
        <div className="card bg-base-100 shadow-xl w-96 hover:border-2 hover:border-red-600 ">
          <figure className="px-10 pt-10">
            <img src={bbqWings} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-secondary">BBQ Wings</h2>
            <p className="text-center ">
              BBQ Chicken Wings are an awesome game day appetizer, baked chicken
              wings smothered in barbecue sauce.
            </p>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl hover:border-2 hover:border-red-600">
          <figure className="px-10 pt-10">
            <img src={beefBurger} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-secondary">Beef Burger</h2>
            <p>Prepared with beef patty & special sauce.</p>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl hover:border-2 hover:border-red-600">
          <figure className="px-10 pt-10">
            <img src={beefCheese} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-secondary">Beef Cheese Burger</h2>
            <p>Prepared with beef patty, cheese & special sauce.</p>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl hover:border-2 hover:border-red-600">
          <figure className="px-10 pt-10">
            <img src={chickenFingers} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-secondary">Chicken Fingers</h2>
            <p>Mixed with proper sauces & deep fried in hot oil</p>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl hover:border-2 hover:border-red-600">
          <figure className="px-10 pt-10">
            <img src={nagaDrums} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-secondary">Naga Drums</h2>
            <p>Crispy fried chicken drums with the right amount of spice.</p>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl hover:border-2 hover:border-red-600">
          <figure className="px-10 pt-10">
            <img src={redVelvet} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-secondary">Velvety Red</h2>
            <p>
              {" "}
              Device taste of red velvet cake paired with smoothy velvety cream
              cheese filling for the ultimate dessert pairing
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Link to="/menu" className="btn btn-primary text-center w-fit ">
          See Full Menu
        </Link>
      </div>
    </div>
  );
};

export default HomeMenu;
