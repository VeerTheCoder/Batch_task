import React from "react";
import Frame from "../assets/Frame.png";
import patch from "../assets/patch.png";

const Faq = () => {
  return (
    <>
      <div className="px-4 mt-16 md:mt-0 md:pl-36">
        <h4 className="text-primary font-poppins tracking-wider text-xl text-center md:text-left">
          FAQ
        </h4>
        <h1 className="capitalize font-bold font-chivo text-3xl md:text-5xl text-center md:text-left">
          Frequently asked
          <br /> questions
        </h1>
        <div className="mt-6">
          <div className="flex flex-wrap justify-center md:justify-start">
            <div className="w-full md:w-[65%] lg:w-[45%] bg-primary p-8 rounded-lg text-white lg:mr-10 mb-5">
              <h2 className="uppercase font-poppins font-bold text-xl tracking-wider">
                The best financial accounting app ever!
              </h2>
              <p className="capitalize text-sm text-gray-100 tracking-widest">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
            <div className="w-full md:w-[65%] lg:w-[45%] bg-transparent p-8 rounded-lg text-black mb-5">
              <h2 className="uppercase font-poppins font-bold text-xl tracking-wider">
                The best financial accounting app ever!
              </h2>
              <p className="capitalize text-sm text-gray-500 tracking-widest">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start">
            <div className="w-full md:w-[65%] lg:w-[45%] bg-transparent p-8 rounded-lg text-black lg:mr-10 mb-5">
              <h2 className="uppercase font-poppins font-bold text-xl tracking-wider">
                The best financial accounting app ever!
              </h2>
              <p className="capitalize text-sm text-gray-500 tracking-widest">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
            <div className="w-full md:w-[65%] lg:w-[45%] bg-primary p-8 rounded-lg text-white mb-5">
              <h2 className="uppercase font-poppins font-bold text-xl tracking-wider">
                The best financial accounting app ever!
              </h2>
              <p className="capitalize text-sm text-gray-100 tracking-widest">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start">
            <div className="w-full md:w-[65%] lg:w-[45%] bg-primary p-8 rounded-lg text-white lg:mr-10 mb-5">
              <h2 className="uppercase font-poppins font-bold text-xl tracking-wider">
                The best financial accounting app ever!
              </h2>
              <p className="capitalize text-sm text-gray-100 tracking-widest">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
            <div className="w-full md:w-[65%] lg:w-[45%] bg-transparent p-8 rounded-lg text-black mb-5">
              <h2 className="uppercase font-poppins font-bold text-xl tracking-wider">
                The best financial accounting app ever!
              </h2>
              <p className="capitalize text-sm text-gray-500 tracking-widest">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src={patch}
            alt="bgPatch"
            className="absolute md:-top-48 md:-left-48 -z-10 w-32 h-32 md:w-[400px] md:h-[400px]"
          />
          <img
            src={Frame}
            alt="Testimonial frame"
            className=" mt-5 md:mt-32 w-full"
          />
        </div>
      </div>
    </>
  );
};

export default Faq;
