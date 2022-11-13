import React from 'react';
import { Link } from 'react-router-dom';
import logopng from '../../../../assets/Images/chillox-logo.png'

const Navbar = () => {
 const menuItems = 
 <React.Fragment>
  <li> <Link to = '/aboutus'>About Us</Link> </li>
  <li> <Link to = '/menu'>Menu</Link> </li>
  <li> <Link to = '/catering'>Catering</Link> </li>
  <li> <Link to = '/contact'>Contact</Link> </li>
 </React.Fragment>
 return (
   <div>
     <div className="navbar bg-base-100">
       <div className="navbar-start">
         <div className="dropdown">
           <label tabIndex={0} className="btn btn-ghost lg:hidden">
             <svg
               xmlns="http://www.w3.org/2000/svg"
               className="h-5 w-5"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor"
             >
               <path
                 strokeLinecap="round"
                 strokeLinejoin="round"
                 strokeWidth="2"
                 d="M4 6h16M4 12h8m-8 6h16"
               />
             </svg>
           </label>
           <ul
             tabIndex={0}
             className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
           >
            
              {menuItems}
           </ul>
         </div>
        <img src= {logopng} alt="" />
       </div>
       <div className="navbar-center hidden lg:flex">
         <ul className="menu menu-horizontal p-0">
          {menuItems}
         </ul>
       </div>
       <div className="navbar-end">
         <a className="btn">Get started</a>
       </div>
     </div>
   </div>
 );
};

export default Navbar;