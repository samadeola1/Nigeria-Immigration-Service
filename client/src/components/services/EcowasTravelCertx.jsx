import React from "react";

const faqs = [
  {
    question: "Eligibility",
    answer:
      '<ul class="list-disc list-inside space-y-1"><li>The ECOWAS Travel Certificate is issued to Nigerian citizens desirous of traveling to other ECOWAS member states.</li></ul>',
  },
  {
    question: "Validity",
    answer:
      '<ul class="list-disc list-inside space-y-1"><li>An ECOWAS Travel Certificate is typically valid for two (2) years from the date of issue.</li><li>It can be renewed for a further period.</li><li>Please always check the official Nigeria Immigration Service portal for the most current validity periods.</li></ul>',
  },
  {
    question: "Purpose of Travel Certificate",
    answer:
      '<ul class="list-disc list-inside space-y-1"><li>It serves as a recognized travel document valid for travel within the sixteen (16) countries of the Economic Community of West African States (ECOWAS) sub-region.</li><li>It facilitates free movement of community citizens.</li></ul>',
  },
  {
    question: "Issuing Authority",
    answer:
      '<ul class="list-disc list-inside space-y-1"><li>In Nigeria, the ECOWAS Travel Certificate is issued by the Nigeria Immigration Service (NIS).</li><li>You can obtain it at NIS Service Headquarters, State Commands, FCT office, and various local government immigration offices.</li></ul>',
  },
  {
    question: `Requirements for Issuance of ECOWAS Travel Certificate`,
    answer: `To apply for an ECOWAS Travel Certificate, typical requirements include:
      <ul class="list-disc list-inside mt-2 space-y-1">
        <li>Letter of confirmation of Nigerian Citizenship from applicant's Local Government Chairman.</li>
        <li>National Identification Number (NIN).</li>
        <li>Original Birth Certificate or Age Declaration.</li>
        <li>Certificate of State of Origin.</li>
        <li>Passport-sized Photographs (usually two).</li>
        <li>A duly filled and signed Guarantor's form, accompanied by the guarantor's valid ID.</li>
        <li>Evidence of online payment for the application fee.</li>
        <li>For students/trainees, a letter of introduction from their institution accepting immigration responsibility.</li>
      </ul>
      <p class="mt-2">It is highly recommended to visit the official Nigeria Immigration Service (NIS) website or portal for the most current and comprehensive list of requirements, as they may be updated.</p>`,
  },
  {
    question: "Replacements and Amendments",
    answer:
      '<ul class="list-disc list-inside space-y-1"><li>An ECOWAS Travel Certificate may be replaced under several conditions: if all pages are exhausted while still valid, if it has reached its total validity period, if it is mutilated, or if it requires amendments (e.g., change of data).</li><li>For a lost or stolen certificate, a police report is mandatory, and replacement may only occur after a reasonable waiting period.</li><li>The application for replacement or amendment is typically done through the same online process as a fresh application.</li></ul>',
  },
];

const EcowasTravelCertx = () => {
  return (
    <div className="w-full bg-white py-10 px-4 md:px-0">
      <div className="w-full md:w-11/12 container mx-auto">
        <h1 className="text-3xl lg:text-[44px] font-bold text-[#212121] uppercase text-center mb-8">
          ECOWAS Travel Certificate
        </h1>
        <div className="w-full  mx-auto flex flex-col gap-[5px]">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              // Removed 'border border-[#212121] rounded-xl' and added 'border-b border-[#212121]'
              // If you wanted a full border *and* a bottom border, let me know.
              // For now, it's just a border-bottom as requested.
              className="w-full border-[2px] rounded-xl border-[#212121] bg-white"
            >
              <details className="group w-full ">
                <summary
                  className="flex items-center justify-between cursor-pointer px-[20px] py-[15px] font-semibold text-black
                  group-open:bg-green-700 hover:bg-green-700   transition-colors text-lg md:text-[24px]
                  group-open:rounded-xl hover:rounded-xl group-open:text-white hover:text-white select-none"
                >
                  {" "}
                  {/* Added hover:text-white */}
                  {faq.question}
                  <span
                    className="ml-2 transition-transform duration-300 group-open:rotate-180 text-black
                  group-open:text-white hover:text-white"
                  >
                    {" "}
                    {/* Added hover:text-white for arrow */}
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19 9L12 16L5 9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </summary>
                <div
                  className="px-4 pb-5 text-[#474747] text-base md:text-lg" // Answer text remains dark grey
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                ></div>
              </details>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EcowasTravelCertx;
