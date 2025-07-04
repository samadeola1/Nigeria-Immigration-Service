import React from "react";
import Hero from "../components/AboutUs/Hero";
import NisAct from "../components/AboutUs/NisAct";
import MissionAndVision from "../components/AboutUs/MissionandVision";
import CoreValues from "../components/AboutUs/CoreValues";
import Directorates from "../components/AboutUs/Directorates";
import OrganisationStructure from "../components/AboutUs/OrganisationStructure";
import EmpoweringProgress from "../components/AboutUs/EmpoweringProgress";
import NisLeaders from "../components/AboutUs/NisLeaders";
import GetYourVisa from "../landing page/GetYourVisa";

const AboutUs = () => {
  return (
    <main className="mx-auto ">
      <Hero />
      <NisAct />
      <MissionAndVision />
      <CoreValues />
      <Directorates />
      <OrganisationStructure />
      <EmpoweringProgress />
      <NisLeaders />
      <GetYourVisa />
    </main>
  );
};

export default AboutUs;
