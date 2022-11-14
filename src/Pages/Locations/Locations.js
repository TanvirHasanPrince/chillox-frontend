import React from 'react';
import aftabnagar from '../../assets/Images/Location/Aftabnagar.png';
import banani from '../../assets/Images/Location/banani.png';
import bashundhara from '../../assets/Images/Location/Bashundhara.png';
import dhanmondi from '../../assets/Images/Location/dhanmondi.png';
import khilgaon from '../../assets/Images/Location/khilgaon.png';
import mirpur from '../../assets/Images/Location/mirpur.png';
import mohakhali from "../../assets/Images/Location/mohakhali.png";
import mohammadpur from '../../assets/Images/Location/mohammadpur.png';
import mymensingh from '../../assets/Images/Location/mymensingh.png';
import nasirabad from '../../assets/Images/Location/nasirabad.png';
import uttara from '../../assets/Images/Location/uttara.png';
import LocationCard from './LocationCard';

const Locations = () => {

 const locations = [
   {
     _id: 1,
     image: aftabnagar,
     title: "Aftabnagar",
   },
   {
     _id: 2,
     image: banani,
     title: "Banani",
   },
   {
     _id: 3,
     image: bashundhara,
     title: "Bashundhara",
   },
   {
     _id: 4,
     image: dhanmondi,
     title: "Dhanmondi",
   },
   {
     _id: 5,
     image: khilgaon,
     title: "Khilgaon",
   },
   {
     _id: 6,
     image: mirpur,
     title: "Mirpur",
   },
   {
     _id: 7,
     image: mohakhali,
     title: "Mohakhali",
   },
   {
     _id: 8,
     image: mohammadpur,
     title: "Mohammadpur",
   },
   {
     _id: 9,
     image: mymensingh,
     title: "Mymensign",
   },
   {
     _id: 10,
     image: nasirabad,
     title: "Nasirabad",
   },
   {
     _id: 10,
     image: uttara,
     title: "Uttara",
   },
 ];

 return (
   <div>
     <h1 className="text-center text-4xl text-secondary font-bold hover:scale-110 hover:text-red-600">
       📍Delivering in Dhaka, Chittagong & Mymensingh!
     </h1>
     <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:grid-cols-1 py-10">
       {locations.map((location) => (
         <LocationCard key={location._id} location={location}></LocationCard>
       ))}
     </div>
   </div>
 );
};

export default Locations;