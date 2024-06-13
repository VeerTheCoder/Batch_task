import React from "react";
import Logo from "../assets/logo.png";
import email from "../assets/mail.png";
import phone from "../assets/phone.png";

const Footer = () => {
  return (
    <>
      <div className="px-4 md:px-12 lg:px-36 mt-10 lg:mt-28 gap-10 md:gap-20 flex flex-wrap lg:flex-row justify-between">
        <div>
          <div className="flex gap-1">
            <img src={Logo} alt="logo" className="w-5 h-5" />
            <h1 className="font-bold text-xl font-roboto">uifry</h1>
          </div>
          <div className="flex mt-2 gap-2">
            <img src={email} alt="email" className="w-3 h-3" />
            <p className="text-[11px] font-poppins">Help@Frybix.Com</p>
          </div>
          <div className="flex mt-2 gap-2">
            <img src={phone} alt="phone" className="w-3 h-3" />
            <p className="text-[11px] font-poppins">+1234 456 678 89</p>
          </div>
        </div>
        <div>
          <h1 className="text-xl font-medium font-chivo mb-2">Links</h1>
          <h5 className="text-sm font-roboto mb-2">Home</h5>
          <h5 className="text-sm font-roboto mb-2">About us</h5>
          <h5 className="text-sm font-roboto mb-2">Bookings</h5>
          <h5 className="text-sm font-roboto mb-2">Blog</h5>
        </div>
        <div>
          <h1 className="text-xl font-medium font-chivo mb-2">Legal</h1>
          <h5 className="text-sm font-roboto mb-2">Terms or use</h5>
          <h5 className="text-sm font-roboto mb-2 capitalize">
            Privacy policy
          </h5>
          <h5 className="text-sm font-roboto mb-2 capitalize">Cookie policy</h5>
        </div>
        <div>
          <h1 className="text-xl font-medium font-chivo mb-2">Product</h1>
          <h5 className="text-sm font-roboto mb-2">Take tour</h5>
          <h5 className="text-sm font-roboto mb-2 capitalize">Live chat</h5>
          <h5 className="text-sm font-roboto mb-2 capitalize">Reviews</h5>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="mb-4 lg:mb-0 lg:-mr-16">
            <h1 className="text-xl font-medium font-chivo mb-2">Newsletter</h1>
            <h5 className="text-sm font-roboto mb-2 capitalize">
              Stay up to date
            </h5>
            <input
              type="email"
              placeholder="Your email"
              className="font-chivo text-md rounded-xl mt-2 outline-none border-none p-2"
            />
          </div>
          <div className="flex items-center">
            <button className="bg-black px-5 py-2 rounded-md text-white font-chivo text-[12px]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <hr className="h-px w-[90%] md:w-[75%] lg:w-[55%] mx-auto my-8 bg-gray-400 border-0 rounded-2xl" />
      <h2 className="text-center m-10 capitalize font-chivo text-sm">
        Copyright 2022 uifry.com all rights reserved
      </h2>
    </>
  );
};

export default Footer;
