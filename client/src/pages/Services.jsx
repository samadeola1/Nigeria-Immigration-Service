import React from 'react'
import Hero from '../components/services/Hero'
import VisaCategories from '../components/services/VisaCategories'
import HowToApply from '../components/services/HowToApply'
import FreshPassport from '../components/services/FreshPassport'
import PassportType from '../components/services/PassportType'
import EcowasTravelCertx from '../components/services/EcowasTravelCertx'
import HereToHelp from '../components/services/HereToHelp'

const Services = () => {
  return (
    <>
      <div className='pt-30'>
        <Hero />
        <VisaCategories />
        <HowToApply />
        <FreshPassport />
        <PassportType />
        <EcowasTravelCertx />
        <HereToHelp />
      </div>
    </>
  );
}

export default Services