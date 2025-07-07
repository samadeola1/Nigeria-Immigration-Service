import React from 'react';
import HereToHelpimg from "../../assets/hereToHelp.svg"

const HereToHelp = () => {
  return (
    <div className="w-full bg-white">
      <section className="w-11/12 container mx-auto py-20 overflow-hidden px-0">
        <div className="relative">
          <img
            src={HereToHelpimg}
            alt="background"
            className="w-full h-[429px] md:h-[429px] rounded-[24px] lg:rounded-[40px] object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/40 px-4 rounded-[40px]">
            <h2 className="text-[24px] md:text-[44px] font-bold drop-shadow-lg">
              We’re Here to Help You
            </h2>
            <p className="mt-2 max-w-xl text-base  md:text-[24px] ">
              Reach out to us for assistance with your applications, services,
              or any inquiries
            </p>
            <button className="text-[20px] mt-6 bg-[#00AA55] hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold  transition-all duration-200">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};


export default HereToHelp;
