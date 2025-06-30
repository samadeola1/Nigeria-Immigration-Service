import React from 'react';
import cerpacImgMobile from '../assets/cerpac-img-mobile.svg';
import cerpacImgDesktop from '../assets/cerpac-img-desktop.svg';
import arrowRight from '../assets/arrow-right.svg';

const Cerpac = () => {
  return (
    <section className="bg-[#E6F7EE] font-poppins py-12">
      {/* Mobile/Tablet Layout */}
      <div className="lg:hidden container mx-auto px-4 flex flex-col items-center text-center">
        <h1 className="text-[24px] text-[#212121] leading-[48px] mb-2 font-semibold">
          Cerpac
        </h1>
        <h2 className="text-[16.24px] text-[#474747] mb-4 font-semibold px-10">
          Combined Expatriate Residence Permit and Aliens Card
        </h2>
        <p className="text-[16px] px-4 text-[#212121] max-w-xl mb-8">
          Combined Expatriate Residence Permit and Aliens Card (CERPAC) is an
          essential immigration document issued by the Nigerian Immigration
          Service (NIS) to foreign nationals residing and working in Nigeria.
        </p>
        <button className="group mb-8 flex items-center text-[#1BA94C] font-semibold text-[18px] focus:outline-none">
          Read more
          <img
            src={arrowRight}
            alt="arrow right"
            className="ml-2 text-[#006834] transition-transform duration-300 group-hover:translate-x-2"
            width={20}
            height={20}
          />
        </button>
        <div className="flex justify-center w-full">
          <img
            src={cerpacImgMobile}
            alt="CERPAC"
            className=" w-full md:w-[50%]  rounded-[24px] shadow-md"
          />
        </div>
      </div>
      {/* Desktop Layout (Grid starts from md) */}
      <div className="hidden lg:grid container mx-auto py-8  gap-[85px] lg:grid-cols-2 items-center">
        {/* Image Section */}
        <div className="flex justify-center items-center">
          <img
            src={cerpacImgDesktop}
            alt="CERPAC"
            className="w-[524px] h-full rounded-[24px] shadow-md"
          />
        </div>
        {/* Write-up Section */}
        <div className="flex flex-col justify-center items-start text-left">
          <h2 className="text-[44px] font-600 text-[#212121] font-semibold mb-4 font-poppins leading-[100%]">
            Cerpac
          </h2>
          <h3 className="text-[20px] text-[#474747] mb-4 font-semibold">
            Combined Expatriate Residence Permit and Aliens Card
          </h3>
          <p className="text-[18px] font-poppins text-[#474747] max-w-xl mb-6">
            Combined Expatriate Residence Permit and Aliens Card (CERPAC) is an
            essential immigration document issued by the Nigerian Immigration
            Service (NIS) to foreign nationals residing and working in Nigeria.
            It serves as both a residence permit and an identification card,
            granting expatriates the legal right to live, work, or conduct
            business in Nigeria for a specified duration, typically up to one
            year (renewable).
          </p>
          <button className="group flex items-center text-[#1BA94C] font-semibold text-[18px] focus:outline-none">
            Read more
            <img
              src={arrowRight}
              alt="arrow right"
              className="ml-2 transition-transform duration-300 group-hover:translate-x-2"
              width={20}
              height={20}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cerpac;