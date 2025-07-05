import React from 'react'


import birth from "../../images/Vectorbirth.svg";
import people from "../../images/people.svg";
import group from "../../images/Groupicon.svg";




const FreshPassport = () => {
 
 
 
  return (
   
   
   <>
     <section className="bg-green-50 py-16 px-4 text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Fresh Passport Application Requirements
        </h2>
        <p className="text-gray-700 mb-10 text-lg">
          First-time Nigerian passport applicants must fill out and pay for the e-Passport form at
          <br />
          <span className="text-green-700 font-medium">passport.immigration.gov.ng</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="border-2 border-green-400 rounded-lg p-6 bg-green-50 shadow-sm">
            <div className="text-green-600 text-4xl mb-4 flex justify-center">
              <img src={birth} alt="" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Citizenship By Birth</h3>
            <p className="text-gray-600">
              Citizens by birth must show an NPC birth certificate or a signed statement of age along with a Nigerian ID.
            </p>
          </div>

          
          <div className="border-2 border-green-400 rounded-lg p-6 bg-green-50 shadow-sm">
            <div className="text-green-600 text-4xl mb-4 flex justify-center">
              <img src={people} alt="" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Naturalization</h3>
            <p className="text-gray-600">
              Citizens who are naturalised must show their Presidential Certificate of Naturalisation.
            </p>
          </div>

          
          <div className="border-2 border-green-400 rounded-lg p-6 bg-green-50 shadow-sm">
            <div className="text-green-600 text-4xl mb-4 flex justify-center">
              <img src={group} alt="" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Registration</h3>
            <p className="text-gray-600">
              Citizens who are registered must show their Certificate of Registration.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default FreshPassport