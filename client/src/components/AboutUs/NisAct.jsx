import React from 'react'
import card from '../../assets/icons/cards.svg'
import personal from '../../assets/icons/personalcard.svg'
import sign from '../../assets/icons/signpost.svg'
import home from '../../assets/icons/home.svg'

const NisAct = () => {
  return (
    <div className='w-full bg-white text-black py-[80px]'>
     <div className='w-11/12 container mx-auto flex flex-col gap-6'>
     <div className='flex flex-col items-center gap-3 text-center'>
      <h1 className='lg:text-[44px] md:text-[38px] text-[28px] font-bold px-8'>The Act Establishing NIS</h1>
      <p className='text-[14px] md:text-[20px] font-normal lg:w-[72%]'>Established in 1963, the Nigeria Immigration Service oversees migration, travel documentation, and immigration law enforcement nationwide</p>
     </div>
     <div className='flex flex-col gap-[28px]'>
     <div className='grid grid-cols-1 lg:grid-cols-2 gap-[28px] lg:px-10'>
      <div className='flex border-2 border-[#E9E9E9] rounded-2xl gap-4 items-center p-6 '>
        <div>
          <img src={personal} alt="" />
        </div>
       <div className='flex flex-col text-[20px] gap-2  '>
       <p className='font-semibold text-[20px]'>Control Of Entry And Exist</p>
       <p className='font-normal text-[16px] xl:w-[87%]'>The control of persons entering or leaving Nigeria.</p>
       </div>
      </div>
      <div className='flex border-2 border-[#E9E9E9] rounded-2xl gap-4 items-center p-6 '>
        <div>
          <img  src={card} alt="" />
        </div>
        <div className='flex flex-col text-[20px] gap-2  '>
        <p className='font-semibold text-[20px]'>Issuance Of Travel Documents</p>
        <p className='font-normal text-[16px] xl:w-[87%]'>The issuance of travel document to bona fide Nigeria
        in and outside Nigeria</p>
        </div>
      </div>
     </div>
     <div className='grid grid-cols-1 lg:grid-cols-2 gap-[28px] lg:px-10'>
      <div className='flex border-2 border-[#E9E9E9] rounded-2xl gap-4 items-center p-6 '>
        <div>
          <img src={home} alt="" />
        </div>
       <div className='flex flex-col text-[20px] gap-2  '>
       <p className='font-semibold text-[20px]'>Residence Permit</p>
       <p className='font-normal text-[16px]'>The issuance of resident permits to foreigner in Nigeria</p>
       </div>
      </div>
      <div className='flex border-2 border-[#E9E9E9] rounded-2xl gap-4 items-center p-6 '>
        <div>
          <img src={sign} alt="" />
        </div>
        <div className='flex flex-col text-[20px] gap-2  '>
        <p className='font-semibold text-[20px]'>Boarder Surveillance and Patrol</p>
        <p className='font-normal text-[16px] '>Monitoring and securing nigerian’s boarder </p>
        </div>
      </div>
     </div>
     </div>
     </div>
    </div>
  )
}

export default NisAct