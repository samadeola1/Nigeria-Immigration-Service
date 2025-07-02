import React from "react";

const EmpoweringProgress = () => {
  const cardData = [
    {
      id: 1,
      title: "Regional Alignments",
      description: "Introduction of FCWAS and African Affairs Division.",
    },

    {
      id: 2,
      title: "Border Patrol Management",
      description: "Allens control border patrol management.",
    },

    {
      id: 3,
      title: "Issuance of Passports",
      description: "Issuance of all Nigerian documents since 1998.",
    },

    {
      id: 4,
      title: "MRP Launch",
      description: "Introducing the machine readable in June 1998.",
    },

    {
      id: 5,
      title: "CERPA Rollouts",
      description:
        "Rolling out the Combined Experlitate  Residence Permit and Aliens card.",
    },

    {
      id: 6,
      title: "Online Payments",
      description: "Adopting revenue collection for online payments.",
    },
  ];

  return (
    <section className="w-full bg-[#006834] pt-20 pb-13 md:py-23 border-0">
      <div className="max-w-7xl container mx-auto sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[24px] md:text-[28px] font-bold font-poppins text-[FEFEFE] px-5 md:px-10 mb-4 md:p-0 ">
            Empowering Progress Through Innovation & Service
          </h2>
          <p className="text-[20px] md:text-[24px] text-[F3F3F3] font-poppins font-normal px-13 md:px-4 lg:px-14 md:pb-4">
            From regional integration to digital transformation, the NIS has
            continuously evolved to serve Nigeria and the world with increased
            speed, security, and transparency.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mx-auto px-7 md:px-0  md:max-w-5xl">
          {cardData.map((card, index) => (
            <div
              key={card.id}
              className={`bg-white rounded-2xl shadow-lg md:mb-4 ${
                index >= 4 ? "hidden lg:block" : ""
              }`}
            >
              <div className="p-4 flex flex-col justify-between py-4 ">
                <h3 className="text-[18px] lg:text-[20px] font-semibold text-gray-900 md:pb-2  font-poppins md:text-center lg:text-start">
                  {card.title}
                </h3>
                <p className="text-gray-600 text:[16px] md:text-[16px] lg:text-[18px] font-poppins font-normal md:text-center lg:text-start pr-0  lg:pr-35">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmpoweringProgress;
