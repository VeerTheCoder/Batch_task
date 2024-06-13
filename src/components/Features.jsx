import React from "react";
import iPhone from "../assets/iPhone2.png";
import patch from "../assets/sidePatch.png";
import bgcolor from "../assets/bgColor.png";
import staricon from "../assets/staricon.png";
import cube from "../assets/cube.png";
import cube1 from "../assets/cube1.png";

const Features = () => {
  return (
    <>
      <div className="relative flex flex-wrap-reverse md:pl-18 md:mt-14 px-4">
        <div className="w-full md:w-1/2 relative mt-16 md:mt-0">
          <img
            src={bgcolor}
            alt="bgPatch"
            className="absolute top-[-9rem] left-1/2 transform -translate-x-1/2 md:left-0 md:translate-x-0 md:top-[-9rem] w-[80%] md:w-auto"
          />
          <img
            src={iPhone}
            alt="iPhoneImg"
            className="mt-[-5rem] md:mt-[-9rem] relative z-10 w-full md:w-auto"
          />
        </div>
        <div className="w-full md:w-2/5 relative z-20 md:mt-0">
          <h4 className="text-primary font-poppins tracking-wider text-center md:text-left">
            FEATURES
          </h4>
          <h1 className="text-[2rem] md:text-[2.8rem] font-bold font-chivo mt-[-5px] text-center md:text-left">
            Uifry Premium
          </h1>
          <div className="mt-5">
            <div className="flex gap-2">
              <img src={staricon} alt="icon" className="w-[22px]" />
              <h3 className="text-sm font-bold font-poppins">
                Budgeting Intervals
              </h3>
            </div>
            <p className="font-roboto text-gray-500 tracking-wider mt-2 capitalize">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>
          <div className="mt-5">
            <div className="flex gap-2">
              <img src={cube} alt="icon" className="w-[22px]" />
              <h3 className="text-sm font-extrabold font-poppins">
                Budgeting Intervals
              </h3>
            </div>
            <p className="font-roboto text-gray-500 tracking-wide mt-2 capitalize">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>
          <div className="mt-5">
            <div className="flex gap-2">
              <img src={cube1} alt="icon" className="w-[22px]" />
              <h3 className="text-sm font-semibold font-poppins">
                Budgeting Intervals
              </h3>
            </div>
            <p className="font-roboto text-gray-500 tracking-wide mt-2 capitalize">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>
        </div>
        <img
          src={patch}
          alt="sideBG"
          className="absolute right-0 top-[-5rem] w-[12rem] md:w-[18rem]"
        />
      </div>
    </>
  );
};

export default Features;
