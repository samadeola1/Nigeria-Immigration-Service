import React from 'react';
import everythingVisaImg from '../assets/everythingVisaImg.svg';
import everythingPassImg from '../assets/everythingPassImg.svg';
import travelCertImg from '../assets/travelCertImg.svg';
import arrowInCircleIcon from '../assets/arrowInCircle-icon.svg';

const services = [
  {
    title: "Everything Visa",
    img: everythingVisaImg,
    icon: arrowInCircleIcon,
    overlay:
      "Explore Nigeria's diverse visa categories, Each tailored to a specific travel needs. From tourism to Business or Study, Find the right option, Meet the requirements, and enjoy a seamless visa experience.",
  },
  {
    title: "Everything Passport",
    img: everythingPassImg,
    icon: arrowInCircleIcon,
    overlay:
      "Enjoy a streamlined application process by obtaining or renewing your passport online. Experience ultimate convenience with secure, contactless procedures, all from the comfort of your home",
  },
  {
    title: "Travel Certificate",
    img: travelCertImg,
    icon: arrowInCircleIcon,
    overlay:
      "Lost or stolen passport? Dont panic. The new emergency travel certificate is now within reach, allowing you to get back on track in less than 72 hours.",
  },
];

const OurServices = () => {
  return (
    <section className="bg-[#FEFEFE] font-poppins">
      <div className="max-w-screen-xl px-4 lg:px-[100px] py-8 mx-auto lg:py-16">
        <h2 className="mb-4 text-[30px] md:text-[44px] tracking-tight font-bold text-center text-[#212121]">
          Our Services
        </h2>
        <p className="mb-10 text-[18px] md:text-[24px] px-6 md:px-40  text-center text-[#474747]">
          Explore our core services designed to make passport, visa, and travel
          processing easier and faster.
        </p>
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center md:flex-wrap lg:flex-nowrap">
          {services.map((service, idx) => {
            // Split the title into two lines
            const [firstLine, ...rest] = service.title.split(" ");
            const secondLine = rest.join(" ");
            return (
              <div
                key={idx}
                className="relative group w-full max-w-[400px] rounded-[24px] overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
                style={{ minWidth: 320 }}
              >
                {/* Card Image */}
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-[400px] h-[346px] object-cover rounded-[24px] transition-all duration-300"
                />
                {/* Title and lines - left aligned */}
                <div className="absolute top-22 left-8 flex flex-col items-start z-10 pointer-events-none w-[80%] group-hover:hidden">
                  <div className="flex items-center mb-2">
                    <div className="bg-white h-[2px] w-8 rounded-full mr-2"></div>
                    <div className="bg-white h-[2px] w-4 rounded-full"></div>
                  </div>
                  <span className="text-white text-[44px] font-bold leading-tight text-left break-words drop-shadow-lg">
                    {firstLine}
                    <br />
                    {secondLine}
                  </span>
                </div>
                {/* Arrow Icon  */}
                <div className="absolute bottom-16 left-8 z-10 pointer-events-none group-hover:hidden">
                  <img
                    src={service.icon}
                    alt="arrow in circle"
                    className="w-12 h-12"
                  />
                </div>
                {/* Overlay card */}
                <div className="absolute left-0 right-0 bottom-0 top-3 bg-gradient-to-r from-[#F3F3F3] to-[#A9A9A9] rounded-b-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between">
                  <div className="pt-12 px-5">
                    <p className="text-gray-900 text-[18px] text-left mt-4">
                      {service.overlay}
                    </p>
                  </div>
                  <div className="flex items-end px-5 pb-5">
                    <img
                      src={service.icon}
                      alt="arrow in circle"
                      className="w-12 h-12"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

  

export default OurServices;