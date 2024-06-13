import React from "react";
import bgImg from "../assets/bgColor.png";
import { HiArrowLongRight } from "react-icons/hi2";
import { IoPlayCircleOutline } from "react-icons/io5";
import heroImg from "../assets/Zimage.png";
import iPhone from "../assets/iPhones.png";

const Hero = () => {
  return (
    <>
      <div className="relative flex flex-wrap px-4 md:pl-36">
        <img
          src={bgImg}
          alt="bgColor"
          className="absolute top-[-50px] left-1/2 transform -translate-x-1/2 md:top-[-70px] md:left-72 w-[80%] md:w-[400px] opacity-70 z-0"
        />
        <div className="w-full md:w-1/2 relative z-10">
          <h1 className="font-bold text-[40px] md:text-[65px] mt-24 capitalize font-roboto">
            Make the best
            <br />
            Financial decisions
          </h1>
          <p className="text-gray-500 capitalize font-poppins text-sm tracking-wide">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            <br />
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
          <div className="flex flex-wrap gap-4 mt-5">
            <button className="font-poppins px-4 bg-black text-white py-2 rounded-md flex gap-2">
              Get Started
              <HiArrowLongRight className="mt-1" />
            </button>
            <button className="font-poppins flex gap-2 px-4 py-2">
              <IoPlayCircleOutline className="mt-1" />
              Watch Video
            </button>
          </div>
          <div className="mt-6">
            <img src={heroImg} alt="heroImage" className="w-full md:w-[70%]" />
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-10 md:mt-0">
          <img src={iPhone} alt="heroImg" className="w-full" />
        </div>
      </div>
    </>
  );
};

export default Hero;
