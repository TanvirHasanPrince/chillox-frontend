import React from "react";
// import banner1 from "../../../../../assets/Images/Banner-1.jpg";
// import banner2 from "../../../../../assets/Images/Banner-2.jpg";
import banner3 from "../../../../../assets/Images/Banner-3.jpg";
import "./Carousel.css";

const Carousel = () => {
  return (
    <div className="w-full h-2/4 overflow-hidden ">
      <img
        className="w-full h-full object-cover"
        src={banner3}
        alt="chillox banner img"
      />
    </div>
  );
};

export default Carousel;

// //
//     <div className="carousel  rounded-xl">
//       {/* <div id="slide1" className="carousel-item relative w-full">
//           <img src={banner3} alt="" className="carousel-img"  />
//           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//             <a href="#slide4" className="btn btn-circle">
//               ❮
//             </a>
//             <a href="#slide2" className="btn btn-circle">
//               ❯
//             </a>
//           </div>
//         </div> */}
//       {/* <div id="slide2" className="carousel-item relative w-full">
//           <img src={banner1} alt="" />
//           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//             <a href="#slide1" className="btn btn-circle">
//               ❮
//             </a>
//             <a href="#slide3" className="btn btn-circle">
//               ❯
//             </a>
//           </div>
//         </div> */}
//       <div id="slide3" className="carousel-item relative w-3/4  ">
//         <img src={banner2} alt="" />
//         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//           <a href="#slide2" className="btn btn-circle">
//             ❮
//           </a>
//           <a href="#slide1" className="btn btn-circle">
//             ❯
//           </a>
//         </div>
//       </div>
//       {/* <div id="slide4" className="carousel-item relative w-full">
//          <img src="https://placeimg.com/800/200/arch" className="w-full" />
//          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//            <a href="#slide3" className="btn btn-circle">
//              ❮
//            </a>
//            <a href="#slide1" className="btn btn-circle">
//              ❯
//            </a>
//          </div>
//        </div> */}
//     </div>;
// //
