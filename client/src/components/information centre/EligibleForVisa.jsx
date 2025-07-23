import React from "react";
import IneligibilityImage from "../../assets/Eligibility.png";
import Icon from "../../assets/check-icon.svg"; 

const EligibleForVisa = () => {
  const points = [
    {
      icon: <img src={Icon} alt="icon" className="w-8 h-8" />, 
      text: "Foreign Nationals With History of Violation",
    },
    {
      icon: <img src={Icon} alt="icon" className="w-8 h-8" />,
      text: "Persons involved in Criminal Activities",
    },
    {
      icon: <img src={Icon} alt="icon" className="w-8 h-8" />,
      text: "Undocumented Entrants",
    },
    {
      icon: <img src={Icon} alt="icon" className="w-8 h-8" />,
      text: "Overstayers Beyond the Regularization Window",
    },
  ];

  return (
   
    <section className="py-16 bg-gray-50">
  
      <div className="w-11/12 container mx-auto text-black">
        {/* Section Header */}
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-xl px-14 sm:text-4xl lg:text-[44px] font-bold text-gray-900 mb-4">
            Who Is Not Eligible For Visa Regularization
          </h2>
          <p className="text-base sm:text-lg px-10 lg:px-28  text-gray-700 font-normal  mx-auto">
            While visa regularization offers a legal pathway to adjust your
            status, not all foreign nationals are eligible.
          </p>
        </div>

       
        <div className="rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-24">
            <div className="w-full md:w-1/2 space-y-6 order-1 md:order-1">
              {points.map((point, index) => (
                <div key={index} className="flex items-start gap-4 text-lg">
                  <span className="p-2 rounded-full flex-shrink-0 flex items-center justify-center w-10 h-10">
                    {point.icon}
                  </span>
                  <span className="text-gray-800 font-medium leading-tight">
                    {point.text}
                  </span>
                </div>
              ))}
            </div>

            
            <div className="w-full md:w-1/2 flex-shrink-0 order-2 md:order-2">
              <img
                src={IneligibilityImage}
                alt="Visa Ineligibility"
                className="rounded-xl w-full h-auto object-cover shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EligibleForVisa;
