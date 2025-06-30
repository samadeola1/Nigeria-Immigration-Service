import React from 'react'
import {  FiArrowRight  } from "react-icons/fi";




const VisitorsStatus = () => {
  return (


  <>
  <main className='bg-green-800 h-[274px] overflow-hidden lg:block hidden  '>

  <section className=" overflow-hidden text-white px-6 md:px-16 py-5 md:py-20 md:w-12/15 container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 ">
     
      <div className="text-center md:text-left">
        <h2 className="text-xl md:text-2xl font-semibold">
          Visitors with <br className="md:hidden" />
          <h2>irregular status</h2>
        </h2>
      </div>

      {/* Divider */}
      <div className="hidden md:block w-px h-20 bg-white opacity-40" />

      {/* Center Text */}
      <div className="flex-1 text-center md:text-left text-sm md:text-base">
       <p>
        Regularize your immigration status in Nigeria 
           
          before the grace
          period ends on 1st August 2025
        Take advantage of this chance to
          regularize your
          stay and avoid future immigration complications
       </p>
       
      </div>
      

      
      <button className="bg-green-500 hover:bg-[#00AA55] text-white font-semibold  py-2 p-3 rounded-lg flex items-center gap- whitespace-nowrap">
        Click here now <FiArrowRight />
      </button>
      
    </section>
    </main>
  
  </>
   
    

  )
};

export default VisitorsStatus