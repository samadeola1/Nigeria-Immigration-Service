import React from 'react'
import Hero from '../landing page/Hero'
import VisitorsStatus from '../landing page/VisitorsStatus'
import GetStarted from '../landing page/GetStarted'
import OurServices from '../landing page/OurServices'
import Cerpac from '../landing page/Cerpac'
import StartYourJourney from '../landing page/StartYourJourney'
import LandingAndExit from '../landing page/LandingAndExit'
import ImportantUpdates from '../landing page/ImportantUpdates'
import GetYourVisa from '../components/reuseable/GetYourVisa'
import VisitorMobile from '../landing page/VisitorMobile'

const LandingPage = () => {
  return (
  <>
  <Hero/>
  <VisitorsStatus/>
  <GetStarted/>
  <VisitorMobile/>
  <OurServices/>
  <Cerpac/>
  <StartYourJourney/>
  <LandingAndExit/>
  <ImportantUpdates/>
  <GetYourVisa/>
  </>
  )
}

export default LandingPage;