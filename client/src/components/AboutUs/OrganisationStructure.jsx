import React from "react";
import building from "../../assets/Nis-Building.svg";
import passport from "../../assets/Nigerian-Passport 1 1.svg";

const OrganisationStructure = () => {
  return (
    <section className="bg-green-50">
      <div className="w-11/12 container mx-auto py-16 space-y-16">
        {/* Block 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <img
            src={building}
            alt="NIS Building"
            className="w-full h-[413px] lg:w-1/2 rounded-[24px] object-cover"
          />
          <div className="lg:w-1/2">
            <h3 className="text-xl md:text-2xl lg:text-[44px] font-bold mb-4 text-gray-900">
              Organizational Structure
            </h3>
            <p className="text-gray-700 text-sm md:text-[18px] leading-relaxed lg:pr-0 xl:pr-23">
              In order to align the Nigeria Immigration Service with modern
              operational imperatives and the provisions of the Immigration
              Regulations 2017, while also meeting the growing challenges of
              cross-border migration violations, enhanced entry control, migrant
              monitoring and transnational crime, the Service has undergone a
              comprehensive reorganization. Its new structure now comprises ten
              (10) Directorates and seven (7) specialized Units.
            </p>
          </div>
        </div>

        {/* Block 2 */}
        <div className="flex flex-col lg:flex-row-reverse items-center pt-12 gap-10">
          <img
            src={passport}
            alt="Passport"
            className="w-full h-[413px] lg:w-1/2 rounded-[24px] object-cover"
          />
          <div className="lg:w-1/2">
            <h3 className="text-xl md:text-2xl lg:text-[44px] font-bold mb-4 text-gray-900">
              Legal Framework
            </h3>
            <p className="text-gray-700 text-sm md:text-[18px] leading-relaxed lg:pr-0 xl:pr-40">
              On May 25, 2015, the National Assembly passed a new Immigration
              Act. This legislation repealed the 1963 Act and introduced an
              additional Directorate—Migration Directorate—further reinforcing
              the NIS’s legal and structural foundations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganisationStructure;
