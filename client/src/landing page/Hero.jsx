import React, { useState, useEffect } from "react";
import img1 from "../images/WhatsApp Image 2025-06-21 at 12.05.59_5118bdb6 1.svg";
import img2 from "../images/image 177.svg";
import img3 from "../images/image 178.svg";
import img4 from "../images/Frame 1000009760.svg";
import img5 from "../images/WhatsApp Image 2025-06-21 at 12.05.59_5118bdb6 2.svg";
import img6 from "../images/image 177 (1).svg";
import img7 from "../images/iPhone 13 mini - 10.svg";
import img8 from "../images/image 178 (1).svg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Desktop slides data
  const desktopSlides = [
    {
      image: img1,
      content: (
        <div className="absolute lg:bottom-60 xl:bottom-30 flex flex-col gap-[30px]">
          <div>
            <h1 className="lg:text-[75px] xl:text-[84px] lg:w-[90%] xl:w-[70%] font-bold text-white drop-shadow-lg leading-26">
              Nigeria <span className="text-[#6BCE9C]">Immigration</span>{" "}
              Service
            </h1>
            <p className="text-[24px] font-normal lg:w-[90%] xl:w-[65%] text-white drop-shadow-md mt-4 leading-relaxed">
              Begin your journey with confidence. Whether you're pursuing career
              growth, or a better future for your family, is ready to welcome
              you.
            </p>
          </div>
          <div className="flex gap-[24px]">
            <button className="bg-[#00AA55] text-white  hover:bg-green-700 transition-colors duration-200 px-[23px] py-[14px] rounded-md font-semibold text-[18px] cursor-pointer">
              Apply now
            </button>
            <button className="border border-white  text-white hover:text-gray-500 hover:bg-blue-100 transition-colors duration-200 px-[26px] py-[14px] rounded-md font-semibold text-[18px] cursor-pointer">
              Explore services
            </button>
          </div>
        </div>
      ),
    },
    {
      image: img2,
      content: (
        <div className="absolute bottom-30  flex flex-col gap-[12px]">
          <h1 className="lg:text-[75px] xl:text-[84px] font-semibold lg:w-[90%] xl:w-[80%] text-white drop-shadow-md leading-28">
            Your Gateway TO A New Life In Nigeria.
          </h1>
          <p className="text-[28px] text-white  font-normal lg:w-[80%]  xl:w-[80%]">
            From passport applications to visa processing and permit renewals
            manage it all in one place with ease and reliability.
          </p>
          <div className="mt-4">
            <button className="bg-[#00AA55] text-white  hover:bg-green-700 transition-colors duration-200 px-[26px] py-[14px] rounded-md text-[18px] font-semibold ">
              Get started
            </button>
          </div>
        </div>
      ),
    },
    {
      image: img4,
      content: (
        <div className="absolute bottom-30 flex flex-col gap-[12px] ">
          <h1 className="lg:text-[70px] xl:text-[84px] lg:w-[90%] font-semibold  text-white drop-shadow-md leading-28">
            Overstay <span className="text-[#6BCE9C]"> Amnesty</span> and
            Immigration Update
          </h1>
          <p className="text-[28px] font-normal text-white  lg:w-[80%]  xl:w-[80%]">
            Find out if you qualify for visa regularization, get key immigration
            updotes and access verified guidance-all in one place
          </p>
          <div className="mt-2">
            <button className="bg-[#00AA55] hover:bg-green-700 text-white  transition-colors duration-200 px-[26px] py-[14px]   rounded-md text-[18px] font-semibold ">
              Check Eligibility
            </button>
          </div>
        </div>
      ),
    },
    {
      image: img3,
      content: (
        <div className="absolute bottom-30  flex flex-col gap-[12px]">
          <div>
            <p className="lg:text-[75px] xl:text-[84px] lg:w-[55%] font-semibold   text-white  drop-shadow-md leading-28">
              Need Help Or Support?
            </p>
            <p className="text-[28px] font-normal lg:w-[70%] text-white   xl:w-[67%]">
              We're Here to help. Choose a topic, reach out to our support team
              or visit a local office
            </p>
          </div>
          <div className="mt-2">
            <button className="bg-[#00AA55] text-white  hover:bg-green-700 transition-colors duration-200 px-[26px] py-[14px]   rounded-md text-[18px] font-semibold ">
              Visit Help Center
            </button>
          </div>
        </div>
      ),
    },
  ];

  // Mobile slides data
  const mobileSlides = [
    {
      image: img5,
      content: (
        <div className="absolute bottom-8  md:bottom-30 px-4 md:px-15 flex flex-col gap-[12px] md:gap-[16px] text-center">
          <div>
            <h1 className="text-[28px] md:text-[44px] font-bold text-white drop-shadow-lg">
              Nigeria <span className="text-[#6BCE9C]">Immigration</span>{" "}
              Service
            </h1>
            <p className="text-[16px] md:text-[20px] font-normal text-white drop-shadow-md mt-2">
              Begin your journey with confidence. Whether you're pursuing career
              growth, world-class education, or a better future for your family,
              we are ready to welcome you.
            </p>
          </div>
          <div className="flex flex-col gap-[8px] md:gap-[12px] px-[87px] md:px-[200px]">
            <button className="bg-[#00AA55] text-white   hover:bg-green-700 transition-colors duration-200 px-[9px] py-[10px] rounded-md font-semibold text-[15px] cursor-pointer">
              Apply now
            </button>
            <button className="border border-[#00AA55] text-[#00AA55] hover:bg-green-200 transition-colors duration-200 px-[9px] py-[10px] rounded-md font-semibold text-[15px] cursor-pointer">
              Explore services
            </button>
          </div>
        </div>
      ),
    },
    {
      image: img6,
      content: (
        <div className="absolute bottom-20 md:bottom-30 px-4 md:px-15 flex flex-col gap-[12px] md:gap-[16px] items-center text-center">
          <h1 className="text-[26px] md:text-[42px] font-bold  md:w-full text-white drop-shadow-md">
            Your Gateway TO A New Life In Nigeria.
          </h1>
          <p className="text-[16px] md:text-[20px] text-white  font-normal">
            From passport applications to visa processing and permit renewals
            manage it all in one place with ease and reliability.
          </p>
          <div className="mt-2">
            <button className="bg-[#00AA55] text-white  hover:bg-green-700 transition-colors duration-200 px-[18px] py-[10px] md:px-[24px] md:py-[14px]  rounded-md text-[15px] font-semibold ">
              Get started
            </button>
          </div>
        </div>
      ),
    },
    {
      image: img7,
      content: (
        <div className="absolute bottom-20 md:bottom-30 px-4 md:px-15 flex flex-col gap-[12px]  items-center text-center">
          <h1 className="text-[28px] md:text-[42px] font-bold md:w-[85%] text-white drop-shadow-md">
            Overstay <span className="text-[#6BCE9C]"> Amnesty</span> and
            Immigration Update
          </h1>
          <p className="text-[16px] text-white  md:text-[20px] font-normal">
            Find out if you qualify for visa regularization, get key immigration
            updotes and access verified guidance-all in one place
          </p>
          <div className="">
            <button className="bg-[#00AA55] text-white  hover:bg-green-700 transition-colors duration-200 px-[18px] py-[10px] md:px-[24px] md:py-[14px]  rounded-md text-[15px] font-semibold ">
              Check Eligibility
            </button>
          </div>
        </div>
      ),
    },
    {
      image: img8,
      content: (
        <div className="absolute bottom-20 md:bottom-30 px-4 md:px-15 flex flex-col gap-[12px]  items-center text-center">
          <p className="text-[28px] md:text-[42px] font-bold md:w-[85%] text-white drop-shadow-md">
            Need Help Or Support?
          </p>
          <p className="text-[16px] md:text-[20px] text-white  font-normal">
            We're Here to help. Choose a topic, reach out to our support team or
            visit a local office
          </p>
          <div className="">
            <button className="bg-[#00AA55] text-white  hover:bg-green-700 transition-colors duration-200 px-[18px] py-[10px] md:px-[24px] md:py-[14px]   rounded-md text-[15px] font-semibold ">
              Visit Help Center
            </button>
          </div>
        </div>
      ),
    },
  ];

  useEffect(() => {
    // Preload images to prevent blinking
    [...desktopSlides, ...mobileSlides].forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % desktopSlides.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [desktopSlides.length]);

  return (
    <div className="w-full">
      {/* Desktop Version */}
      <div className="w-full hidden lg:block relative min-h-screen overflow-hidden mt-4">
        {/* All desktop slides */}
        {desktopSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              className="w-full min-h-screen object-cover"
              src={slide.image}
              alt={`Nigeria Immigration Service - Slide ${index + 1}`}
            />
            <div className="absolute inset-0 z-10 w-11/12 container mx-auto">
              <div className="animate-fade-in-up">{slide.content}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Version */}
      <div className="lg:hidden relative overflow-hidden mt-20">
        {/* All mobile slides */}
        {mobileSlides.map((slide, index) => (
          <div
            key={index}
            className={`transition-opacity duration-1000 ease-in-out ${
              index === currentSlide
                ? "opacity-100"
                : "opacity-0 absolute inset-0"
            }`}
          >
            <div className="relative">
              <img
                className="w-full mt-8"
                src={slide.image}
                alt={`Nigeria Immigration Service - Mobile Slide ${index + 1}`}
              />
              <div className="animate-fade-in-up">{slide.content}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
