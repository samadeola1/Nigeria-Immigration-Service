import React from 'react'
import {  FiArrowRight  } from "react-icons/fi";




const VisitorMobile = () => {
  return (


  <>
  <main className='bg-green-800 lg:hidden'>

  <section className=" overflow-hidden text-white px-6 md:px-16 py-10 container mx-auto flex-col  items-center justify-center gap-5 ">
     
      <div className="text-center ">
        <h2 className="text-xl md:text-2xl font-semibold">
          Visitors with <br className="md:hidden" />
          <h2>irregular status</h2>
        </h2>
      </div>

      {/* Center Text */}
      <div className="flex-1 text-center text-sm md:text-base">
       <p>
        Regularize your immigration status in Nigeria 
        before the grace period ends on 1st August 2025.
        Take advantage of this chance to regularize your 
        stay and avoid future immigration complications.
       </p>
       <div className='flex justify-center items-center'>
        <button className="bg-green-500 hover:bg-[#00AA55] text-white font-semibold px-3 py-2  mx-15 my-7 md:mx-57 rounded-lg flex items-center gap-2 ">
        Click here now <FiArrowRight />
      </button>
      </div>
       
      </div>
      

      
      
      
    </section>
    </main>
  
  </>
   
    

  )
};

export default VisitorMobile