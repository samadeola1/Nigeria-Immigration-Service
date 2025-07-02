import React from "react";
import Icon1 from "../../assets/user-square.svg";
import Icon2 from "../../assets/wallet-money.svg";
import Icon3 from "../../assets/chart-square.svg";

const directorateData = [
  {
    id: 1,
    icon: Icon1,
    title: "Human Resources",
    description:
      "Manages recruitment, appointments, promotions, and staff development to ensure a well-equipped workforce.",
  },
  {
    id: 2,
    icon: Icon2,
    title: "Finance & Accounts",
    description:
      "Oversees budgeting, financial planning, and revenue tracking to support operational goals.",
  },
  {
    id: 3,
    icon: Icon3,
    title: "Planning & Research",
    description:
      "Conducts strategic planning, research, and statistical analysis to drive informed policy decisions.",
  },
 
];

const Directorates = () => {
  return (
    <section className="bg-[#F1F1F1] mx-auto container md:bg-white py-12 px-4 md:w-11/12 lg:px-0 ">
      <div className=" mx-auto">
        <h2 className="text-[28px] md:text-[30px] px-6 lg:text-[44px] font-bold text-[#212121] mb-2 text-center">
          Explore Our Directorates
        </h2>
        <p className="text-[#474747] md:hidden px-8  text-[20px] mb-12 text-center">
          Discover key departments driving the mission of the Nigeria
          Immigration Service.
        </p>
        <p className="text-[#474747] hidden md:block md:px-0 xl:px-34  text-[20px] mb-12 text-center">
          Discover key departments driving the mission of the Nigeria
          Immigration Service. Learn what each directorate does and how they
          contribute to national security and service delivery.
        </p>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {directorateData.map((item, idx) => (
            <div
              key={idx}
              className="flex bg-white gap-[2px] flex-col items-center py-4 md:px-[0px] border-[1px] border-[#E0E0E0] rounded-[12px]"
            >
              <img
                src={item.icon}
                alt=""
                className="w-[48px] h-[48px] mt-6 mb-3"
              />
              <h3 className="text-[28px] px-10 md:px-6 font-semibold text-[#212121] mb-2 text-center">
                {item.title}
              </h3>
              <p className="text-[#474747] px-8 text-[18px] text-center mb-6">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Directorates;