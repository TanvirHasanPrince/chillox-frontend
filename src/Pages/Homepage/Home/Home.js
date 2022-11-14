import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import HomeMenu from './HomeMenu';
import Usps from './Usp/Usps';




const Home = () => {



 return (
  <div>
   <Banner></Banner>
    <Usps></Usps>
    <About></About>
    <HomeMenu></HomeMenu>
  </div>
 );
};

export default Home;