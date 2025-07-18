import React from "react";
import passportimg from "../../images/image 255 (1).png";
import passportimgMboile from "../../assets/passportmobile.svg"; // New mobile image path
import checkIcon from "../../assets/check-icon.svg"; // New icon path (renamed from circle for clarity)

const RegularizeVisa = () => {
  const items = [
    "Expired Visa On Arrival",
    "Expired CERPAC",
    "Expired Single Entry Visa",
    "Overstayed e-Visa",
    "Changing Visa Purpose",
  ];

  return (
    // Outer section for overall padding and consistent spacing
    <section className="py-16 bg-gray-50">
      {/* Container to match Navbar's width and centering */}
      <div className="w-11/12 container mx-auto text-black">
        {/* Section Header */}
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-xl px-14 md:px-20 sm:text-4xl lg:text-[44px] font-bold text-gray-900 mb-4">
            Who Needs To Regularize Their Visa
          </h2>
          <p className="text-base px-10 lg:px-30 sm:text-lg text-gray-700 font-normal  mx-auto">
            Visa regularization applies to foreign nationals in Nigeria who are
            out of status or need to legally adjust or extend their immigration
            stay. Below are common categories of individuals who qualify.
          </p>
        </div>

        {/* Main Content Area: Image and List */}
        <div className="">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10 lg:gap-[107px]">
            {" "}
            {/* Adjusted gap */}
            {/* Image Section - Responsive Display */}
            <div className="w-full md:w-1/2 flex-shrink-0">
              {/* Image for MD screens and above */}
              <img
                src={passportimg}
                alt="Nigerian Passport"
                className="w-full h-auto object-cover  hidden md:block" // Hidden on small, shown on md and up
              />
              {/* Image for Mobile screens and below */}
              <img
                src={passportimgMboile}
                alt="Nigerian Passport (Mobile)"
                className=" w-full h-auto object-cover md:hidden" // Shown on small, hidden on md and up
              />
            </div>
            {/* List Section */}
            <div className="w-full md:w-1/2 space-y-6">
              {items.map((item, index) => (
                <div key={index} className="flex items-start gap-4 text-lg">
                  <span className="p-2 rounded-full flex-shrink-0 flex items-center justify-center w-10 h-10">
                    <img src={checkIcon} alt="check-icon" className="w-8 h-8" />{" "}
                    {/* Using the new check icon */}
                  </span>
                  <span className="text-gray-800 mt-3 font-medium leading-tight">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegularizeVisa;
