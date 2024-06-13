import React from "react";
import notification from "../assets/notification.png";
import iPhone from "../assets/iPhone3.png";
import patch from "../assets/patch.png";
import onHold from "../assets/onHold.png";
import iPhone4 from "../assets/iPhone4.png";
import staricon from "../assets/fillstar.png";

const Advantage = () => {
  return (
    <>
      <div className="flex flex-wrap md:pl-36 relative md:mt-14 px-4">
        <div className="w-full md:w-2/5 relative z-20 mt-10 md:mt-0">
          <h4 className="text-primary font-poppins tracking-wider text-center md:text-left">
            ADVANTAGES
          </h4>
          <h1 className="text-[2rem] md:text-[2.8rem] font-bold font-chivo mt-[-5px] text-center md:text-left">
            Why Choose Uifry?
          </h1>
          <div className="mt-6">
            <div className="flex gap-2 items-center justify-center md:justify-start">
              <img src={notification} alt="icon" className="w-7" />
              <h3 className="text-lg font-extrabold font-poppins">
                Clever Notifications
              </h3>
            </div>
            <p className="font-roboto text-gray-500 tracking-wider mt-2 w-full md:w-[85%] text-center md:text-left">
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 relative mt-10 md:mt-0">
          <img
            src={iPhone}
            alt="iPhoneImg"
            className="mt-[-2rem] md:mt-[-9rem] relative z-10 w-full md:w-auto"
          />
          <img
            src={patch}
            alt="bgPatch"
            className="absolute top-[2.5rem] left-1/2 transform -translate-x-1/2 md:left-0 md:translate-x-0 w-[80%] md:w-auto"
          />
          <img
            src={onHold}
            alt="onHold"
            className="absolute top-[8.5rem] z-20 right-1/2 transform translate-x-1/2 md:right-28 md:translate-x-0"
          />
        </div>
      </div>

      <div className="flex flex-wrap-reverse md:pl-18 relative mt-[-5rem] md:mt-14 px-4">
        <div className="w-full md:w-1/2 relative mt-10 md:mt-0">
          <img
            src={patch}
            alt="bgPatch"
            className="absolute top-[6rem] left-1/2 transform -translate-x-1/2 md:left-28 md:translate-x-0 w-[80%] md:w-auto"
          />
          <img
            src={iPhone4}
            alt="iPhoneImg"
            className="mt-[-5rem] md:mt-[-9rem] relative z-10 w-full md:w-auto"
          />
        </div>
        <div className="w-full md:w-2/5 relative z-20 mt-10 md:mt-0">
          <div className="m-5 mt-12">
            <div className="flex gap-2 items-center justify-center md:justify-start">
              <img src={staricon} alt="icon" className="w-7" />
              <h3 className="text-lg font-bold font-poppins">
                Fully Customizable
              </h3>
            </div>
            <p className="font-roboto text-gray-500 tracking-wider mt-5 w-full md:w-[85%] text-center md:text-left capitalize">
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Advantage;
