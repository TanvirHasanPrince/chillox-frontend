import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';
import Home from '../Pages/Homepage/Home/Home';
import Navbar from '../Pages/Homepage/Home/Navbar/Navbar';

const Main = () => {
 return (
  <div>
 <Navbar></Navbar>
<Outlet></Outlet>
<Footer></Footer>

  </div>
 );
};

export default Main;