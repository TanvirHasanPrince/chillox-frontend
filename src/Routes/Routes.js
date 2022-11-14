import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Home from "../Pages/Homepage/Home/Home";
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
        element: <AboutUs></AboutUs>
      },

      {
        path: "/menu",
        element: <Menu></Menu>
      },
    ],
  },
]);
