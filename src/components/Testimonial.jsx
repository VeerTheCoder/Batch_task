import React from "react";
import testimonial from "../assets/TestiImg.png";
import rings from "../assets/ringsImg.png";
import patch from "../assets/patch.png";
import testiGroup from "../assets/testiGroup.png";

const Testimonial = () => {
  return (
    <>
      <div className="w-full px-4 md:px-36">
        <h4 className="text-center uppercase font-chivo text-xl font-normal">
          Testimonial
        </h4>
        <h1 className="text-center capitalize font-chivo text-3xl md:text-5xl font-extrabold mt-2">
          What our users <br /> say about us?
        </h1>

        <div className="flex flex-wrap-reverse justify-center md:flex-nowrap md:px-0 mt-10">
          <div className="relative w-full md:w-2/3">
            <img
              src={testimonial}
              alt="Testimonial"
              className="relative z-10 mt-12 w-full md:w-auto"
            />
            <img
              src={rings}
              alt="circleRings"
              className="absolute top-0 md:top-[-2rem] left-[40%] transform -translate-x-1/2 md:translate-x-0 md:left-[-5rem] md:w-auto"
            />
            <img
              src={patch}
              alt="bgPatch"
              className="absolute top-32 left-1/2 transform -translate-x-1/2 md:translate-x-0 md:left-0 w-1/2 md:w-auto"
            />
          </div>
          <div className="w-full md:w-2/5 mt-10 md:mt-28 text-center md:text-left">
            <h2 className="capitalize font-chivo text-2xl md:text-[28px] font-bold">
              The best financial accounting app ever!
            </h2>
            <p className="text-gray-500 capitalize mt-3 tracking-wider">
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.”
            </p>
            <img
              src={testiGroup}
              alt="Group img"
              className="mt-5 mx-auto md:mx-0"
            />
            <h1 className="mt-5 capitalize font-bold text-sm font-poppins">
              Nick Jonas
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
