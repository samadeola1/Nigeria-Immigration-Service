import React from 'react'

const VisaCard = ({content}) => {
  return (
    <div className='border-2 border-[#E9E9E9] bg-white rounded-xl flex flex-col items-center gap-[33px] p-[22px] '>
      <div>
        <img src={content.image} alt="" />
      </div>
      <div className='flex flex-col gap-[11px]'>
            <h2 className='text-[#212121] font-semibold lg:font-bold text-[28px] lg:text-[25px]'>{content.topic}</h2>
            <p className='text-[#474747] font-normal text-[15px] lg:text-[18px] '>{content.desc}</p>
            <p className='text-[#212121] font-medium lg:font-semibold text-[18px]'>{content.time}</p>
        </div>
        <button className='bg-[#00AA55]  hover:bg-green-700 transition-colors duration-200 px-[33px] py-[9px] rounded-md font-semibold text-[16px] cursor-pointer'>{content.click}</button>
    </div>
  )
}

export default VisaCard
