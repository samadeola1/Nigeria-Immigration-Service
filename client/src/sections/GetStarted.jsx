import React from 'react'

import getstarted from "../../asset/Group 8.png";
import upload from "../../asset/Group 9.png";
import makepayment from "../../asset/Group 11.png";
import paycircle from "../../asset/Group 10.png";

const steps = [
  {
    icon: < img src={getstarted} className="text-white " />,
    title: "Start your application",
    description: "Create an account or log in to begin your process",
  },
  {
    icon: <img src={upload} className="text-white " />,
    title: "Upload required document",
    description: "Scan and upload necessary files like ID passport photos.",
  },
  {
    icon: <img src={makepayment} className="text-white" />,
    title: "Make secure payment",
    description: "Pay using approved channels and receive confirmation.",
  },
  {
    icon: <img src={paycircle} className="text-white " />,
    title: "Track progress",
    description: "Use your tracking ID to monitor updates and get notified.",
  },
];



const GetStarted = () => {
  return (

    <>
    <main className='bg-white'>
      
           <section className="py-16 px-6 text-center container mx-auto overflow-hidden font-poppins">
      <h2 className="text-[44px] font-poppins font-bold mb-4 text-[#212121]">Get Started</h2>
      <p className="max-w-3xl mx-auto text-[#474747] mb-12">
        Whether you're applying for a passport, visa, or travel certificate, getting started is simple. Just follow these clear steps to complete your process quickly, securely, and with confidence.
      </p>

      {/* <div className="relative flex flex-col md:flex-row items-center justify-center z-0 ">

  
  <div className="hidden md:block absolute top-8 left-50 right-0 justify-center ">
    <div className='flex w-full max-w-[800px] justify-between items-center '>
    <div className=" w-[100px]  h-0.5 bg-green-600 " />
    <div className="w-[100px] h-0.5 bg-green-600 " />
    <div className="w-[100px] h-0.5 bg-green-600" />
    
    </div>
  </div>
  </div> */}

      <div className="flex flex-col md:flex-row justify-center items-center md:gap-8 gap-12  mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center max-w-[220px] ">
            <div className="rounded-full w-16 h-16  flex items-center justify-center mb-8">
              {step.icon}
              
            </div>
            <h3 className="text-[15px] font-semibold text-[#212121] my-3">{step.title}</h3>
            <p className="text-[#474747] text-sm mt-2">{step.description}</p>
          </div>
        ))}
      </div>

      <button className="mt-12 px-6 py-2 border border-green-500 text-green-500 rounded hover:bg-[#00AA55] hover:text-white transition">
        Apply now
      </button>
    </section>
      
    </main>
    </>
  );
};


export default GetStarted