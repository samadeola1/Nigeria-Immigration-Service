import React from 'react'
import getyoursisa from "../../asset/passport-page.jpg";


const GetYourVisa = () => {
  return (


    <>
    <main className='bg-white'>
     
     <section className="relative h-[430px] rounded-[40px] overflow-hidden mx-auto container hidden md:block">
  <img
    src={getyoursisa}
    alt="background"
    className="absolute inset-0 container h-full object-cover w-[80%] mx-35  rounded-2xl"
  />
  <div className="relative z-10 text-white flex flex-col items-center justify-center h-full text-center">
    <h2 className="text-3xl font-bold">Get Your Visa Before You Land</h2>
    <p className="mt-2 max-w-xl">
      Discover how Nigeria’s Visa on Arrival program makes entry easier for business travelers and visitors.
    </p>
    <button className="mt-4 bg-[#00AA55] text-white px-6 py-3 rounded-md">
      View Eligibility Guide
    </button>
  </div>
</section>

 <section className="relative h-[430px] rounded-[25px] overflow-hidden container mx-auto md:hidden">
  <img
    src={getyoursisa}
    alt="background"
    className="absolute inset-0 container h-full object-cover p-5 rounded-2xl"
  />
  <div className="relative z-10 text-white flex flex-col items-center justify-center h-full text-center p-5">
    <h2 className="text-2xl font-bold ">Get Your Visa Before You Land</h2>
    <p className="mt-2 max-w">
      Discover how Nigeria’s Visa on Arrival program makes entry easier for business travelers and visitors.
    </p>
    <button className="mt-4 bg-[#00AA55] text-white px-6 py-3 rounded-md">
      View Eligibility Guide
    </button>
  </div>
</section>
    </main>
    </>
   
  )
}

export default GetYourVisa