import React from "react";
import imgOne from "../assets/image 6.png";
import imgTwo from "../assets/image 7.png";
import imgThree from "../assets/image 8.png";

const StartYourJourney = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[28px] md:text-4x1 font-bold text-gray-900 pl-10 pr-10 pb-4 md:p-0 ">
            Start Your Joury With Ease
          </h2>
          <p className="text-lg text-gray-600 pl-7 pr-7 md:pr-60 md:pl-60">
            Choose your application path below whether you’re in Nigeria, abroad
            or renewing your passport, we have made it simple and accessible for
            you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 max-w-full gap-8 ">
          {/* Card 1: Apply From Nigeria */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden h-138 ">
            <img
              src={imgOne}
              alt="Nigerian Passport"
              className="w-full h-[213px] md:h-66 object-cover"
            />
            <div className="p-4">
              <h3 className="text-[24px] md:text-[28px] font-semibold text-gray-900 mb-2">
                Apply From Nigeria
              </h3>
              <p className="text-gray-600 text-[20px]  mb-4 pr-4">
                We accept all application online. the applicant will be required
                to visit a passport office for biometric enrolment.
              </p>
              <button className="w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                Apply now
              </button>
            </div>
          </div>

          {/* Card 2: Apply From Outside Nigeria */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden h-138">
            <img
              src={imgTwo}
              alt="Hand holding Nigerian Passport"
              className="w-full h-[213px] md:h-66 object-cover "
            />
            <div className="p-4">
              <h3 className="text-[24px] md:text-[28px] font-semibold text-gray-900 mb-2 pr-9">
                Apply From Outside Nigeria
              </h3>
              <p className="text-gray-600 text-[20px] mb-4">
                Application is submitted online. Applicant must book with a
                Nigerian Mission for biometric enrolment.
              </p>
              <button className="w-full bg-green-600  text-white py-3 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                Apply now
              </button>
            </div>
          </div>

          {/* Card 3: Renew or Replace your Passport */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden h-138">
            <img
              src={imgThree}
              alt="Nigerian Passport Renewal"
              className="w-full h-[213px] md:h-66 object-cover"
            />
            <div className="p-4 flex flex-col ">
              <h3 className="text-[24px] md:text-[28px] font-semibold text-gray-900 mb-2">
                Renew or Replace your Passport
              </h3>
              <p className="text-gray-600 text-[20px] mb-4 pr-6">
                Easily update your expired, damaged, or lost passport.
              </p>
              <button
                className="w-full bg-green-600 
              text-white py-3 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset- mt-auto"
              >
                Apply now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartYourJourney;
