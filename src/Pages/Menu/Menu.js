import React from 'react';
import bbqwings from '../../assets/Images/Menu/bbq-wings.jpg'
import beefBurger from '../../assets/Images/Menu/Beef-burger.jpg'
import beefCheese from '../../assets/Images/Menu/Beef-cheese.jpg'
import beefWithSausage from '../../assets/Images/Menu/beef-with-sausage.jpg'
import chickenfingers from '../../assets/Images/Menu/chicken-fingers.jpg'
import chickenWithBacon from '../../assets/Images/Menu/chicken-with-backon.jpg'
import creamyCheese from '../../assets/Images/Menu/creamy-cheese.jpg'
import doubleDeckerBurger from '../../assets/Images/Menu/Double-decker-beef.jpg'
import fishBurger from '../../assets/Images/Menu/Fish Burger.jpg'
import fistTots from "../../assets/Images/Menu/Fish tots.jpg";
import gigantoBeef from '../../assets/Images/Menu/Giganto-beef.jpg'
import honeyWings from '../../assets/Images/Menu/honey-wings.jpg'
import nagaDrums from '../../assets/Images/Menu/Naga Drums.jpg'
import sirachawings from '../../assets/Images/Menu/siracha-wings.jpg'
import sweetNnagaWings from '../../assets/Images/Menu/sweet-n-naga-wings.jpg'
import blueberry from '../../assets/Images/Menu/Desserts/Blueberry chesse dip.jpg'
import chocoFudge from '../../assets/Images/Menu/Desserts/choco-fudge.jpg'
import oreoCheese from '../../assets/Images/Menu/Desserts/orea and cheese.jpg'
import velvetRed from '../../assets/Images/Menu/Desserts/Velvet-red.jpg'
import MenuItem from './MenuItem';

const Menu = () => {

 const foods = [
   {
     _id: 1,
     title: "BBQ Wings",
     description:
       " BBQ Chicken Wings are an awesome game day appetizer, baked chicken wings smothered in barbecue sauce.",
     image: bbqwings,
     price: "200",
   },
   {
     _id: 2,
     title: "Beef Burger",
     description: " Prepared with beef patty & special sauce.",
     image: beefBurger,
     price: "180",
   },
   {
     _id: 3,
     title: "Beef Cheese Burger",
     description: " Prepared with beef patty, cheese & special sauce.",
     image: beefCheese,
     price: "200",
   },
   {
     _id: 4,
     title: "Beef With Sausage",
     description: " Prepared with beef patty, 2 pcs chicken sausage & cheese.",
     image: beefWithSausage,
     price: "225",
   },
   {
     _id: 5,
     title: "Chicken Fingers",
     description: " Mixed with proper sauces & deep fried in hot oil",
     image: chickenfingers,
     price: "117",
   },
   {
     _id: 6,
     title: "Chicken With Bacon",
     description: "Prepared with chicken patty & beef bacon.",
     image: chickenWithBacon,
     price: "207",
   },
   {
     _id: 7,
     title: "Creamy Cheese",
     description:
       "  Chicken Wings are an awesome game day appetizer, baked chicken wings smothered in barbecue sauce.",
     image: creamyCheese,
     price: "200",
   },
   {
     _id: 8,
     title: "Double Decker Burger",
     description: " Prepared with 2 pcs chicken patty & 2 pcs cheese.",
     image: doubleDeckerBurger,
     price: "270",
   },
   {
     _id: 9,
     title: "Fish Burger",
     description: " Prepared with dory fish patty & tartar sauce",
     image: fishBurger,
     price: "252",
   },
   {
     _id: 10,
     title: "Fist Tots",
     description: " Prepared with dory fish patty & tartar sauce",
     image: fistTots,
     price: "140",
   },
   {
     _id: 11,
     title: "Giganto Beef",
     description:
       " Prepared with giant beef patty, 2 pcs cheese, 2 pcs beef bacon & bbq sauce",
     image: gigantoBeef,
     price: "387",
   },
   {
     _id: 12,
     title: "Honey Wings",
     description:
       " Chicken Wings are an awesome game day appetizer, baked chicken wings smothered in barbecue sauce.",
     image: honeyWings,
     price: "200",
   },
   {
     _id: 13,
     title: "Naga Drums",
     description: " Crispy fried chicken drums with the right amount of spice.",
     image: nagaDrums,
     price: "86",
   },
   {
     _id: 14,
     title: "Siracha Wings",
     description:
       " Siracha Chicken Wings are an awesome game day appetizer, baked chicken wings smothered in barbecue sauce.",
     image: sirachawings,
     price: "200",
   },
   {
     _id: 15,
     title: "Sweet-N-Naga Wings",
     description:
       " Sweet-N-Naga Wings  Chicken Wings are an awesome game day appetizer, baked chicken wings smothered in barbecue sauce.",
     image: sweetNnagaWings,
     price: "200",
   },
   {
     _id: 16,
     title: "Blueberry Cheese Dip",
     description:
       " The rich tase of blueberry infused with the touch of cream cheese, you'll fall depper in love",
     image: blueberry,
     price: "170",
   },
   {
     _id: 17,
     title: "Choco Fudge",
     description:
       " A heavenly creation of rich chocolate fudge & smoothe chocolate cream in a cup",
     image: chocoFudge,
     price: "190",
   },
   {
     _id: 18,
     title: "Oreo & Cheese",
     description:
       " Crunchy oreo crust & creamy cheesecake filling together to maek the ultimate cookies and cream dessert",
     image: oreoCheese,
     price: "190",
   },
   {
     _id: 19,
     title: "Velvety Red",
     description:
       " Device taste of red velvet cake paired with smoothy velvety cream cheese filling for the ultimate dessert pairing",
     image: velvetRed,
     price: "180",
   },
 ];


 return (
   <div className="">
     <h3 className="text-center text-4xl text-secondary font-bold hover:scale-110 hover:text-red-600">
     
       Explore the heavenly foods
     </h3>
     <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:grid-cols-1 py-10">
       {foods.map((food) => (
         <MenuItem key={food._id} food={food}></MenuItem>
       ))}
     </div>
   </div>
 );
};

export default Menu;