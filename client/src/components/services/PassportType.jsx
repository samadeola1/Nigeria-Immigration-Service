import React from "react";
import imgOne from "../../assets/image 244.png";
import imgTwo from "../../assets/image 245.png";
import imgThree from "../../assets/image 246.png";

const PassportType = () => {
  const cardData = [
    {
      id: 1,
      title: "Enhanced e-Passports",
      image: `${imgOne}`,
    },

    {
      id: 2,
      title: "Official Passports",
      image: `${imgTwo}`,
    },

    {
      id: 3,
      title: "Diplomatic Passports",
      image: `${imgThree}`,
    },
  ];

  return (
    <section className="w-full bg-white pt-20 pb-13 md:py-23 border-0">
      <div className="w-11/12 container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[28px] md:text-[44px] font-bold font-poppins text-[#212121] px-5 md:px-10 mb-4 md:p-0 ">
            Passport Types
          </h2>

          {/* desktop display */}
          <p className="text-[20px] md:text-[18px] text-[#474747] font-poppins font-normal md:px-4 lg:px-50 hidden lg:block">
            There are three kinds of fingerprint enhanced e-Passports that the
            Nigerian Immigration Service gives out. Normal passports (green) for
            Nigerians and comes in 32-page/5-year, 64-page/5-year, and
            64-page/10-year, Official Passports (blue) for the Government
            officials and Diplomatic passports.
          </p>

          {/* mobile display */}

          <p className="text-[20px] text-[#474747] font-poppins font-normal  lg:hidden">
            The Nigeria Immigration Service offers three types of e-passports:
            Standard (Green), Official (Blue), and Diplomatic—available in
            various page and validity options.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[326px] md:max-w-full mx-auto">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl shadow-lg relative overflow-hidden"
            >
              <div>
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-[326px] h-[330px] md:w-full md:h-[400px]  object-cover rounded-2xl"
                />
              </div>
              {/* Text overlay for all cards */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-[28px] font-bold text-center px-4">
                  {card.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PassportType;
