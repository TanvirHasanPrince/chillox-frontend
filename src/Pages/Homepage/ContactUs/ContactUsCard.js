

import Lottie from "lottie-react";
import React from "react";

const ContactUsCard = ({ contactItem }) => {
  const { title, description, animation } = contactItem;

console.log(title, description, animation);

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl min-h-full hover:border-2 hover:border-red-600">
        <figure className="px-10 pt-10">
          <Lottie className="w-1/2" animationData={animation} loop={true} />;
        </figure>
        <div className="card-body  items-center text-center">
          <h2 className="font-bold text-secondary">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUsCard;
