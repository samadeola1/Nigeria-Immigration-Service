import React from 'react'
import Hero from '../components/information centre/Hero'
import OverstayAmnesty from '../components/information centre/OverstayAmnesty'
import Countdown from '../components/information centre/Countdown'
import RegularizeVisa from '../components/information centre/RegularizeVisa'
import EligibleForVisa from '../components/information centre/EligibleForVisa'
import FAQ from '../components/information centre/FAQ'

const InformationCenter = () => {
  return (
   <>
   <div className='bg-white '>
    <Hero/>
    <OverstayAmnesty/>
    <Countdown/>
    <RegularizeVisa/>
    <EligibleForVisa/>
    <FAQ/>

   </div>
   </>
  )
}

export default InformationCenter