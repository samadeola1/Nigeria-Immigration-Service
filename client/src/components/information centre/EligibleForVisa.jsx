import React from "react";
import { FaBan, FaExclamationTriangle, FaPassport, FaClock } from "react-icons/fa";
import IneligibilityImage from "../../assets/Eligibility.png";
import Icon from "../../assets/Icon.png"

const EligibleForVisa = () => {
  const points = [
    {
      icon: <img src={Icon} className="w-[22px] h-[20px]" />,
      text: "Foreign Nationals With History of Violation",
    },
    {
      icon: <img src={Icon} className="w-[22px] h-[20px]" />,
      text: "Persons involved in Criminal Activities",
    },
    {
      icon: <img src={Icon} className="w-[22px] h-[20px]" />,
      text: "Undocumented Entrants",
    },
    {
      icon: <img src={Icon} className="w-[22px] h-[20px]" />,
      text: "Overstayers Beyond the Regularization Window",
    },
  ];

  return (
    <section className="bg-[#f9f9f9] py-16 px-4 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Column */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Who Is Not Eligible For Visa Regularization
          </h2>
          <p className="text-gray-600 mb-8">
            While visa regularization offers a legal pathway to adjust your status, not all foreign nationals are eligible.
          </p>

          <ul className="space-y-4">
            {points.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <div>{point.icon}</div>
                <span className="text-gray-800">{point.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column - Image */}
        <div className="flex justify-center">
          <img
            src={IneligibilityImage}
            alt="Visa Ineligibility"
            className="rounded-lg w-full max-w-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default EligibleForVisa;
