import React from "react";
import approvedVisa from "../assets/imageShadow.png";
import arrorRight from "../assets/arrow-right.png";

const LandingAndExit = () => {
  return (
    <div className="w-full bg-[#E6F7EE] border-0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <div className="flex lg:flex-row  items-center gap-0 md:gap-[60px] lg:gap-[80px] py-[80px] flex-col-reverse  md:flex-col">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-[24px] text-center lg:text-start md:text-[36px] lg:text-[40px] font-bold font-poppins text-[#0e0909] pt-5 pb-4">
              Landing and Exit Cards
            </h2>
            <p className="text-[#555555] text-[20px] leading-relaxed mb-6 font-normal font-poppins hidden lg:block">
              Landing and Exit Cards are mandatory travel documents required of
              all passengers entering or departing Nigeria. These cards must be
              completed upon arrival at or departure from Nigerian borders and
              serve as a critical instrument for immigration control and border
              management. commences May 1, 2025
            </p>
            {/* ========================== */}
            <p
              className="text-[#555555] text-[16px] leading-relaxed mb-6 px-[15px] md:px-[60px] md:text-center font-normal 
             font-poppins lg:hidden"
            >
              Landing and Exit Cards are mandatory travel documents required of
              all passengers entering or departing Nigeria. These cards must be
              completed upon arrival at or departure from Nigerian borders.
            </p>
            {/* ========================= */}
            <a
              href="#"
              className="flex items-center text-center text-[#00AA55] text-[18px] lg:text-[20px] font-semibold hover:underline justify-center lg:justify-start font-poppins"
            >
              Read more
              <img
                src={arrorRight}
                alt="Arrow right"
                className="ml-3 w-4 h-4"
              />
            </a>
          </div>

          <div className="">
            <img
              src={approvedVisa}
              alt="Approved Visa"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingAndExit;
