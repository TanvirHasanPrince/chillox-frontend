import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const MenuItem = ({ food }) => {
  const { title, description, image, price } = food;

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl hover:border-2 hover:border-red-600 h-6/6">
        <PhotoProvider className="px-10 pt-10">
          <PhotoView src={image}>
            <img src={image} alt="Shoes" className="rounded-xl" />
          </PhotoView>
        </PhotoProvider>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-secondary"> {title}</h2>
          <p>{description}</p>
          <div className="card-actions">
            <p className=" mt-3 btn btn-primary">
              BDT. {price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
