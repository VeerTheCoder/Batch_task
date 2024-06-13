import React, { useState } from "react";
import Logo from '../assets/logo.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [ham,setHam]=useState(true)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setHam(!ham)
  };
  return (
    <>
  
     <div className="flex justify-between mt-10 font-roboto px-6 md:pl-36 md:pr-20 relative z-20">
      <div className="flex items-center gap-4 md:gap-16">
        <div className="flex gap-1">
          <img className="w-6 h-6 mt-1" src={Logo} alt="logo" />
          <h2 className="font-bold text-2xl relative">
            uifry<span className="absolute top-[-4px] text-[5px]">TM</span>
          </h2>
        </div>
        <div className="hidden md:flex gap-5 mt-1">
          <h3 className="cursor-pointer font-bold text-primary">Home</h3>
          <h3 className="cursor-pointer">About us</h3>
          <h3 className="cursor-pointer">Pricing</h3>
          <h3 className="cursor-pointer">Features</h3>
        </div>
      </div>
      <div className="flex items-center">
        <button className="bg-black text-white px-4 py-2 rounded-md hidden md:block">Download</button>
        <button onClick={toggleMobileMenu} className="md:hidden flex items-center">
          {ham?<GiHamburgerMenu className="text-2xl"/>:
          <IoCloseSharp className="text-2xl"/>}
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 flex flex-col gap-2 p-4 md:hidden text-right bg-gray-500 z-100 text-white">
          <h3 className="cursor-pointer font-bold text-primary">Home</h3>
          <h3 className="cursor-pointer">About us</h3>
          <h3 className="cursor-pointer">Pricing</h3>
          <h3 className="cursor-pointer">Features</h3>
          <button className="bg-primary text-white px-4 py-2 rounded-md">Download</button>
        </div>
      )}
    </div>

    </>
  );
};

export default Navbar;
