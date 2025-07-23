
import React from 'react'
import img from '../../images/image 253.svg'

const OverstayAmnesty = () => {
  return (
    <div className='w-full bg-white py-16'>
      <div className='w-11/12 container mx-auto px-4'>
        {/* Desktop Layout */}
        <div className='hidden lg:block relative'>
          <img 
            src={img} 
            alt="Nigeria Immigration Service officials" 
           
          />
          <div className='absolute  shadow-lg  top-10 lg:-right-2 xl:right-5 2xl:right-50 bg-[#E6F7EE] p-[23px] flex flex-col gap-[20px] rounded-xl lg:w-[60%] xl:w-[55%] 2xl:w-[45%] text-black'>
            <h1 className='font-bold text-[28px] lg:pr-12'>
              Overstay Amnesty: Regularize Your Status Now
            </h1>
            <p className='font-normal text-gray-700 leading-relaxed'>
              If your Nigerian visa or residence permit has expired, you may 
              qualify for a penalty-free regularization before the August 1st, 
              2025 deadline. We encourage all non-citizens to ensure their 
              immigration documents are valid and up to date to avoid 
              penalties and ensure continued legal residence in Nigeria.
            </p>
          </div>
        </div>

        {/* Mobile and Tablet Layout */}
        <div className='lg:hidden'>
          <div className='bg-white  overflow-hidden'>
            <div className='p-6 text-center'>
              <h1 className='text-[24px] md:text-[32px] font-semibold mb-4 text-gray-800'>
                Overstay Amnesty: Regularize Your Status Now
              </h1>
              <p className='text-[16px] text-[#474747]  leading-relaxed mb-6'>
                If your Nigerian visa or residence permit has expired, you may 
                qualify for a penalty-free regularization before the August 1st, 
                2025 deadline. We encourage all non-citizens to ensure their 
                immigration documents are valid and up to date to avoid 
                penalties and ensure continued legal residence in Nigeria.
              </p>
            </div>
            <div className='w-full'>
              <img 
                src={img} 
                alt="Nigeria Immigration Service officials" 
                className='w-full h-auto object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OverstayAmnesty

