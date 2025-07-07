import React from 'react'

const MissionCard = ({content}) => {
  return (
    <div className='border-2 border-[#E9E9E9] rounded-xl'>
      <div>
        <img className='w-full' src={content.image} alt="" />
      </div>
      <div className='text-black px-3 flex flex-col gap-3 py-3  '>
        <h2 className='text-[28px] font-semibold'>{content.name}</h2>
        <p className='font-normal md:text-[17px] text-[14px]  '>{content.content}</p>
      </div>
    </div>
  )
}

export default MissionCard
