import React from 'react'
import getyoursisa from "../../assets/passport-page.jpg";


const GetYourVisa = () => {
  return (
    <div className='w-full bg-white'>
      <section className="w-11/12 container mx-auto py-20 overflow-hidden px-0">
        <div className='relative'>
          <img
            src={getyoursisa}
            alt="background"
            className="w-full h-[350px] md:h-[430px] rounded-[20px] lg:rounded-[40px] object-cover"
          />
           <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/40 px-4 rounded-[40px]">
          <h2 className="text-[24px] px-10 md:text-[44px] font-semibold">
            Get Your Visa Before You Land
          </h2>
          <p className="mt-8 max-w-4xl px-10 text-base md:text-[24px] drop-shadow-md">
            Discover how Nigeria’s Visa on Arrival program makes entry easier
            for business travelers and visitors.
          </p>
          <button className="mt-6 bg-[#00AA55] hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold shadow-md transition-all duration-200">
            View Eligibility Guide
          </button>
        </div>
        </div>

       
      </section>
    </div>
  );
};

export default GetYourVisa