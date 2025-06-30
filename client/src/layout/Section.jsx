import React from 'react'
import Hero from '../sections/Hero'
import VisitorsStatus from '../sections/VisitorsStatus'
import GetStarted from '../sections/GetStarted'
import OurServices from '../sections/OurServices'
import Cerpac from '../sections/Cerpac'
import StartYourJourney from '../sections/StartYourJourney'
import LandingAndExit from '../sections/LandingAndExit'
import ImportantUpdates from '../sections/ImportantUpdates'
import GetYourVisa from '../sections/GetYourVisa'

const Section = () => {
  return (
    <>
      <Hero />
      <VisitorsStatus />
        <GetStarted />
      <OurServices />
      <Cerpac />
      <StartYourJourney />
      <LandingAndExit />
      <ImportantUpdates />
      <GetYourVisa />
    </>
  );
}

export default Section