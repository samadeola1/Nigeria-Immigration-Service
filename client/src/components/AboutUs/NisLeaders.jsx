import React, { useRef } from "react";
import leader1 from "../../assets/leader1.svg";
import leader2 from "../../assets/leader2.svg";
import leader3 from "../../assets/leader3.svg";
import leader4 from "../../assets/leader4.svg";
import leader5 from "../../assets/leader5.svg";

const leaders = [
  {
    img: leader1,
    name: "Leader 1",
    title: "Kemi Nanna Nandap Pcc, Mmis, Fsm",
    desc: "Comptroller General, Nigeria Immigration Service. ",
    featured: true,
  },
  {
    img: leader2,
    name: "Leader 2",
    title: "Caroline Wura-Ola Adepoju",
    desc: "CGIS (2023 to February 2024)",
  },
  {
    img: leader3,
    name: "Leader 3",
    title: "Isah Jere Idris MFR",
    desc: "Ag. CGIS (2021 - 2023)",
  },
  {
    img: leader4,
    name: "Leader 4",
    title: "Muhammed Babandede, MFR",
    desc: "CGIS (2016 – 2021)",
  },
  {
    img: leader5,
    name: "Leader 5",
    title: "Martin Kure Abeshi",
    desc: "CGIS (2015 – 2016)",
  },
];

const NisLeaders = () => {
  const sliderRef = useRef(null);

  return (

    <section className="bg-white container px-6 md:w-11/12 lg:px-0 mx-auto">
      <div className=" md:w-11/12 lg:container mx-auto">
        <h2 className="text-[28px] md:text-[30px] lg:text-[44px] font-bold text-[#000000] mb-[30px] lg:mb-[50px] text-center">
          Current and Past Leaders
        </h2>

        {/* Desktop & Tablet Layout */}
        <div className="hidden lg:block">
          {/* current Leader */}
          <div className="flex flex-col items-center mb-[56px]">
            <div className=" rounded-2xl overflow-hidden  mb-6 bg-gradient-to-b from-[#f7fafc] to-white">
              <img
                src={leaders[0].img}
                alt={leaders[0].name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-[26px] lg:text-[30px] font-bold  text-[#212121] mb-2 text-center drop-shadow-lg">
              {leaders[0].title}
            </h3>
            <p className="text-[#474747] text-[18px] lg:text-[20px] text-center max-w-2xl">
              {leaders[0].desc}
            </p>
          </div>
          {/* Past Leaders  */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[32px] md:px-0">
            {leaders.slice(1).map((leader, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center group transition-transform duration-300"
              >
                <div className="w-full rounded-[24px] overflow-hidden mb-3 ">
                  <img
                    src={leader.img}
                    alt={leader.name}
                    className="w-full h-full object-cover group-hover:scale-120 ease-out-in group-hover:-translate-y-[-8px] transition-transform duration-600"
                  />
                </div>
                <h4 className="text-[16px] lg:text-[28px] px-4 font-bold text-[#212121] mb-3 text-left">
                  {leader.title}
                </h4>
                <p className="text-[#474747] text-[14px] px-4 lg:text-[20px] text-left w-full">
                  {leader.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile layout*/}
        <div className="lg:hidden">
          <div
            ref={sliderRef}
            className="flex gap-6  overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {leaders.map((leader, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 flex flex-col items-center snap-center"
                style={{
                  width: 280,
                  minWidth: 220,
                }}
              >
                <div className="w-full h-[300px] rounded-2xl overflow-hidden shadow-lg mb-3 bg-gradient-to-b from-[#f7fafc] to-white">
                  <img
                    src={leader.img}
                    alt={leader.name}
                    className="w-[281px] h-[300px] object-cover"
                  />
                </div>
                <div className="w-full flex flex-col items-center mt-2">
                  <h4 className="font-semibold text-[#212121] mb-1 text-[24px] text-center">
                    {leader.title}
                  </h4>
                  <p className="text-[#474747] text-center text-[14px]">
                    {leader.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


export default NisLeaders;