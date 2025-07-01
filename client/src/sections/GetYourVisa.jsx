import React from 'react'
import getyoursisa from "../assets/passport-page.jpg";


const GetYourVisa = () => {
  return (

    <>

     <section className="relative w-full max-w-5xl mx-auto my-20 overflow-hidden px-0">
      <img
        src={getyoursisa}
        alt="background"
        className="w-full h-[350px] md:h-[430px] rounded-[20px] lg:rounded-[40px] object-cover shadow-lg"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/40 px-4 rounded-[40px]">
        <h2 className="text-2xl md:text-4xl font-bold drop-shadow-lg">Get Your Visa Before You Land</h2>
        <p className="mt-2 max-w-xl text-base md:text-lg drop-shadow-md">
          Discover how Nigeria’s Visa on Arrival program makes entry easier for business travelers and visitors.
        </p>
        <button className="mt-6 bg-[#00AA55] hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold shadow-md transition-all duration-200">
          View Eligibility Guide
        </button>
      </div>
    </section>
    
    </>
   

  )
};

export default GetYourVisa