import React from 'react';
import passportimg from "../../images/image 255 (1).png";
import circle from "../../images/Frame 68.png";



const RegularizeVisa = () => {

  const items = [
    "Expired Visa On Arrival",
    "Expired CERPAC",
    "Expired Single Entry Visa",
    "Overstayed e_Visa",
    "Changing Visa Purpose",
  ];


  return (
    <>
    
    <section className=" text-black py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Who Needs To Regularize Their Visa
        </h2>
        <p className="text-[#474747] font-semibold max-w-3xl mx-auto">
          Visa regularization applies to foreign nationals in Nigeria who are
          out of status or need legally adjust or extend their immigration
          stay. Below are common categories of individuals qualify.
        </p>
      </div>
      <section className='ml-30'>

      <div className="flex flex-col md:flex-row items-center justify-center gap-15 max-w-6xl mx-auto">
        {/* Image */}
        <div className="w-full  ">
          <img
            src={passportimg}
            alt="Nigerian Passport"
            className="rounded-xl w-full object-cover "
          />
        </div>

        {/* List */}
        <div className=" md:w-1/2 space-y-5 container mx-auto justify-center">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-4 text-lg">
              <span className="bg-gray-700 text-black p-2 rounded-full">
                < img src={circle} alt='circle-icon'  className="text-black w-4 h-4" />
              </span>
              <span className="text-black">{item}</span>
            </div>
          ))}
        </div>
      </div>
      </section>
    </section>
  
    
    </>
  );
};

export default RegularizeVisa