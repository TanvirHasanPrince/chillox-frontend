import React from "react";
import like from "../../../../assets/Lottie/USP/like-animation-thumbs-up.json";
import burgerTopdown from "../../../../assets/Lottie/USP/burger-of-the-day.json";
import chefmakingburger from "../../../../assets/Lottie/USP/chef-making-a-burger.json";
import Usp from "./Usp";


const Usps = () => {
  const usps = [
    {
      _id: 1,
      title: "Good Value",
      description:
        "We offer reasonable and competitive prices for all our burgers",
      animation: like,
    },
    {
      _id: 2,
      title: "Quality Food",
      description: "Our burgers are not junk food. We use the best ingredients",
      animation: burgerTopdown,
    },
    {
      _id: 3,
      title: "Fast Service",
      description: "We promise for no ques for burgers during lunch time",
      animation: chefmakingburger,
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:grid-cols-1 py-10">
      {usps.map((usp) => (
        <Usp key = {usp._id} usp={usp}></Usp>
      ))}
    </div>
  );
};

export default Usps;
