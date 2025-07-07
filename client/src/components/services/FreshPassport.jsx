import React from 'react'


import birth from "../../images/Vectorbirth.svg";
import people from "../../images/people.svg";
import group from "../../images/Groupicon.svg";




const FreshPassport = () => {
 
 
 
  return (
    <>
      <section className="bg-green-50 py-16 px-4 md:px-0 text-center">
        <div className="md:w-11/12 container mx-auto">
          <h2 className="text-[24px] lg:text-[44px] lg:px-52 font-bold text-gray-900 mb-4">
            Fresh Passport Application Requirements
          </h2>
          <p className="text-gray-700 mb-10 ">
            First-time Nigerian passport applicants must fill out and pay for
            the e-Passport form at
            <br />
            <span className="text-green-700 font-medium">
              passport.immigration.gov.ng
            </span>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border-2 border-green-400 rounded-lg md:py-10 p-6 bg-green-50 shadow-sm">
              <div className="text-green-600 text-4xl mb-4 flex justify-center">
                <img src={birth} alt="" />
              </div>
              <h3 className="text-[28px] md:px-14 font-semibold mb-2">
                Citizenship By Birth
              </h3>
              <p className="text-gray-600 text-[18px]">
                Citizens by birth must show an NPC birth certificate or a signed
                statement of age along with a Nigerian ID.
              </p>
            </div>

            <div className="border-2 border-green-400 rounded-lg p-6 md:py-10  bg-green-50 shadow-sm">
              <div className="text-green-600 text-4xl mb-4 flex justify-center">
                <img src={people} alt="" />
              </div>
              <h3 className="text-[28px] font-semibold mb-2">Naturalization</h3>
              <p className="text-gray-600 text-[18px]">
                Citizens who are naturalised must show their Presidential
                Certificate of Naturalisation.
              </p>
            </div>

            <div className="border-2 border-green-400 rounded-lg md:py-10 p-6 bg-green-50 shadow-sm">
              <div className="text-green-600 text-4xl mb-4 flex justify-center">
                <img src={group} alt="" />
              </div>
              <h3 className="text-[28px] font-semibold mb-2">Registration</h3>
              <p className="text-gray-600 text-[18px]">
                Citizens who are registered must show their Certificate of
                Registration.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FreshPassport