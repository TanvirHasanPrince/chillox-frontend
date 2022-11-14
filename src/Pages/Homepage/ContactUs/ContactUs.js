import React from 'react';
import Lottie from "lottie-react";
import email from "../../../assets/Lottie/Contact Us/email-sent.json";
import call from  '../../../assets/Lottie/Contact Us/call.json'
import location from '../../../assets/Lottie/Contact Us/location-animation.json';
import ContactUsCard from './ContactUsCard';






const ContactUs = () => {


  const contactMethods = [
    {
      _id: 1,
      title: "Send A Message",
      description:
        "If you have any comments about our service,write to us: abcd@gmail.com",
      animation: email,
    },
    {
      _id: 2,
      title: "Make a call",
      description:
        "We are happy to answer your queries. Just call us at: 123456089",
      animation: call,
    },
    {
      _id: 3,
      title: "Visit Us",
      description:
        "Don't forget to drop by and try our burgers in Dhaka, Chittagong, and Mymensingh",
      animation: location,
    },
  ];

 return (
   <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:grid-cols-1 py-10">
     {contactMethods.map((contactItem) => (
       <ContactUsCard
         key={contactItem._id}
         contactItem={contactItem}
       ></ContactUsCard>
     ))}
   </div>
 );
};

export default ContactUs;