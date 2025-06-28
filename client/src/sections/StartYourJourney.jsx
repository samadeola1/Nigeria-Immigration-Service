import React from "react";
import imgOne from "../assets/image 6.png";
import imgTwo from "../assets/image 7.png";
import imgThree from "../assets/image 8.png";

const StartYourJourney = () => {
  const cardData = [
    {
      id: 1,
      image: imgOne,
      alt: "Nigerian Passport",
      title: "Apply From Nigeria",
      description:
        "We accept all application online. the applicant will be required to visit a passport office for biometric enrolment.",
    },
    {
      id: 2,
      image: imgTwo,
      alt: "Hand holding Nigerian Passport",
      title: "Apply From Outside Nigeria",
      description:
        "Application is submitted online. Applicant must book with a Nigerian Mission for biometric enrolment.",
    },
    {
      id: 3,
      image: imgThree,
      alt: "Nigerian Passport Renewal",
      title: "Renew or Replace your Passport",
      description: "Easily update your expired, damaged, or lost passport.",
    },
  ];

  return (
    <section className="bg-gray-100 py-12 border-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-bold font-poppins text-gray-900 pl-10 pr-10 pb-4 lg">
            Start Your Journey With Ease
          </h2>
          <p className="text-lg text-gray-600 px-1 lg:px-[30px] font-poppins font-normal text-[16px] lg:text-[24px]">
            Choose your application path below whether you’re in Nigeria, abroad
            or renewing your passport, we have made it simple and accessible for
            you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 max-w-full gap-[70px] ">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="lg:w-[400px] bg-white rounded-lg shadow-lg overflow-hidden h-[490px] md:h-[505px] lg:h-[551px]"
            >
              <img
                src={card.image}
                alt={card.alt}
                className="w-full  object-cover"
              />
              <div className="p-4 flex flex-col justify-between h-[255px] md:h-[350px] lg:h-[290px]">
                <div>
                  <h3 className="text-[24px] lg:text-[28px] md:pb-2 lg:pb-0 font-semibold text-gray-900 mb-2 pr-[40px] font-poppins">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text:[16px] lg:text-[20px] font-poppins font-normal pr-[30px] md:pr-[5px]">
                    {card.description}
                  </p>
                </div>
                <div>
                  <button className="w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 mt-auto font-poppins font-normal cursor-pointer text-[15px] lg:text-[20px]">
                    Apply now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StartYourJourney;
