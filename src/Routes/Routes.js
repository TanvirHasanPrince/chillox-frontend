import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Home from "../Pages/Homepage/Home/Home";
import Locations from "../Pages/Locations/Locations";
import Menu from "../Pages/Menu/Menu";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/aboutus",
        element: <AboutUs></AboutUs>,
      },

      {
        path: "/menu",
        element: <Menu></Menu>,
      },

      {
        path: "/locations",
        element: <Locations></Locations>,
      },
    ],
  },
]);
