import React from 'react'
import Hero from '../components/services/Hero'
import VisaCategories from '../components/services/VisaCategories'
import HowToApply from '../components/services/HowToApply'
import FreshPassport from '../components/services/FreshPassport'
import PassportType from '../components/services/PassportType'
import EcowasTravelCertx from '../components/services/EcowasTravelCertx'
import HereToHelp from '../components/services/HereToHelp'
import GetYourVisa from '../components/reuseable/GetYourVisa'

const Services = () => {
  return (
    <>
      <div className=''>
        <Hero />
        <VisaCategories />
        <HowToApply />
        <FreshPassport />
        <PassportType />
        <EcowasTravelCertx />
        <GetYourVisa/>
      </div>
    </>
  );
}

export default Services