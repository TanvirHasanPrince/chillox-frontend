import React from "react";
import { Link } from "react-router-dom";
import aboutus from "../../../../assets/Images/about-us.jpg";

const About = () => {
  return (
    <div>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={aboutus} className="w-1/2 rounded-lg shadow-2xl" alt="" />
          <div>
            <h1 className="text-3xl font-bold text-red-600">About Us</h1>
            <p className="py-6">
              We prepare juicy burgers and side dishes from the best ingredients
              and mix traditional recipes with new approaches.
              <br></br>
              While cooking our burgers, we use only certified beef, which means
              that it is nourishing and soft by nature, has minimum calories and
              fat but has a high protein level. This meat is the result of a
              special feature of the piedmontest breed, which lies in the
              development of lean, heavy musculature into the production of
              beef, which does not depend on fat marbling (as a rule in other
              breeds of cattle) to achieve softness. Certified Piedomentes
              cattles are grown without using any strokes, growth hormones, or
              antibiotics, which ensures the highest quality and nutritious
              beef.
            </p>
            <Link to="/aboutus" className="btn btn-primary">
              Know More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
