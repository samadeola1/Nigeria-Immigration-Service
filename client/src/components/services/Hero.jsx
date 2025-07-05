import React from 'react'
// import hero from '../../images/image 248.svg'

const Hero = () => {
  return (
    <div className='w-full  service'>
      <div className=' container mx-auto  '>
     <div className='hidden lg:block'>
        <div className='  '>
       <div className='flex flex-col gap-[24px] xl:w-[70%] '>
         <h1 className='font-bold lg:text-[60px]'>Access <span className='text-[#00AA55]'>All Nigeria</span> Immigration Services, Fast, Secure, and Online</h1>
         <p className='text-[24px] font-normal'>From passport applications to visa processing and permit renewals manage it all in one place with ease and reliability. </p>
       </div>
          <div className='mt-4'>
        <button className='bg-[#00AA55] px-[24px] py-[14px] rounded-md text-[18px] font-semibold '>Get started</button>
       </div>
       </div>
     </div>
      <div className='flex flex-col gap-3 lg:hidden text-center'>
       <h1 className='text-[28px] font-bold md:px-16 '>Access All Nigeria Immigration Services, Fast, Secure, and Online</h1>
        <div>
            <button className='bg-[#00AA55] hover:bg-[#009944] transition-colors duration-200 px-[24px] py-[14px] rounded-md text-[18px] font-semibold text-white'>
              Get started
            </button>
          </div>
       </div>
      </div>
    </div>
  )
}

  

export default Hero

 {/* <div className='relative'>
       <img className='w-full' src={hero} alt="" />
     </div> */}
    