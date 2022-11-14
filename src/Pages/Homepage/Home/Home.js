import React from 'react';
import ContactUs from '../ContactUs/ContactUs';
import About from './About/About';
import Banner from './Banner/Banner';
import LocationHome from './HomeLocation/LocationHome';
import HomeMenu from './HomeMenu';
import Usps from './Usp/Usps';




const Home = () => {



 return (
  <div>
   <Banner></Banner>
    <Usps></Usps>
    <About></About>
    <HomeMenu></HomeMenu>
    <LocationHome></LocationHome>
    <ContactUs></ContactUs>
  </div>
 );
};

export default Home;