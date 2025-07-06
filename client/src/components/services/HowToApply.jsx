import React from "react";
import everythingPassportImg from "../../assets/everythingPassImg.svg";
import renewalImg from "../../assets/renewal-img.svg";
import changeOfDataImg from "../../assets/changeofdata-img.svg";
import PassportCard from "../reuseable/PassportCard"

const cards = [
  {
    title: "Fresh Passport",
    img: everythingPassportImg,
  },
  {
    title: "Renewal",
    img: renewalImg,
  },
  {
    title: "Change of Data",
    img: changeOfDataImg,
  },
];

const HowToApply = () => {
  return (
    <div className="w-full bg-white py-10 px-4 md:px-0">
      <div className="w-full md:w-11/12 xl:container mx-auto">
        <h1 className="text-[28px] md:text-[44px] font-bold text-[#212121] text-center mb-8">
          How To Apply
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {cards.map((card, idx) => (
            <PassportCard key={idx} title={card.title} img={card.img} />
          ))}
        </div>
        <div className="flex justify-center mt-14">
          <button className="bg-[#1BA94C] hover:bg-[#15803d] w-[400px] h-[66px] text-white font-semibold text-[20px] px-8 py-3 rounded-[8px] transition-colors duration-200">
            Click to Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowToApply;
