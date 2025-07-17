import React, { useState } from "react";

const faqs = [
  {
    question: "Eligibility",
    answer:
      '<ul class="list-disc list-inside space-y-1"><li>All Nationals of countries that are signatories to the ECOWAS Treaty</li></ul>',
  },
  {
    question: "Validity",
    answer:
      '<ul class="list-disc list-inside space-y-1"><li>It is valid for travel in ECOWAS sub region</li></ul>',
  },
  {
    question: "Purpose of Travel Certificate",
    answer:
      '<ul class="list-disc list-inside space-y-1"><li>Passport.</li><li>It is a recognized travel document valid for travels within the Sixteen (16) Countries of ECOWAS.</li><li>Form of Identity</li><li>This proves that the holder is a community citizen.</li><li> It can be held concurrently with the National Passport</li></ul>',
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
      `
  },
  {
    question: "Replacements and Amendments",
    answer:
      '<ul class="list-disc list-inside space-y-1"><li>Application for replacement shall be made in the same or any other prescribed form, and supported by attaching the Certificate to be replaced. Lost or stolen certificate may only be replaced after a reasonable time must have been elapsed (i.e about two to six months) and must be supported with.</li></ul>',
  },
];

const EcowasTravelCertx = () => {
  const [openIndex, setOpenIndex] = useState(null); // Track the index of the currently open FAQ

  // Function to toggle a question open/closed
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Close if it's already open, otherwise open it
  };

  // Limit FAQ list for mobile view (first 4 items + last item)
  const faqsForMobile = [...faqs.slice(0, 4), faqs[5]];

  // Function to render FAQ list dynamically
  const renderFAQ = (faqList) =>
    faqList.map((faq, idx) => (
      <div
        key={idx}
        className="w-full border-[0.5px] rounded-xl border-[#c9c6c6] bg-white mb-[15px]" // Card styling
      >
        {/* FAQ Header - clickable to toggle answer */}
        <div
          className={`flex items-center justify-between cursor-pointer px-[20px] py-[15px] text-[18px] md:text-[20px] font-normal
            ${
              openIndex === idx
                ? "bg-[#05AA55] text-white rounded-xl"
                : "text-[#212121]"
            }
            hover:bg-[#05AA55] rounded-xl hover:text-white transition-colors`}
          onClick={() => handleToggle(idx)} // Toggle this FAQ
        >
          <span>{faq.question}</span> {/* Display the question text */}
          {/* Arrow icon that rotates if open */}
          <span
            className={`ml-2 transform transition-transform duration-300 ${
              openIndex === idx ? "rotate-180 text-white" : "text-[#474747]"
            }`}
          >
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
        </div>

        {/* Conditionally render the answer if this question is open */}
        {openIndex === idx && (
          <div
            className="px-4 pb-5 mt-5 text-[#8b8989] text-base md:text-lg"
            dangerouslySetInnerHTML={{ __html: faq.answer }} // Inject raw HTML for answer
          />
        )}
      </div>
    ));

  return (
    <div className="w-full bg-white py-10 px-4 md:px-0">
      <div className="w-full md:w-11/12 container mx-auto">
        <h1 className="text-3xl lg:text-[44px] font-bold text-[#212121] uppercase text-center mb-8">
         ECOWAS TRAVEL CERTIFICATE
        </h1>

        {/* Responsive layout: show smaller list on mobile, full list on desktop */}
        <div className="w-full mx-auto flex flex-col gap-[15px]">
          <div className="md:hidden">{renderFAQ(faqsForMobile)}</div>{" "}
          {/* Mobile view */}
          <div className="hidden md:block">{renderFAQ(faqs)}</div>{" "}
          {/* Desktop view */}
        </div>
      </div>
    </div>
  );
};

export default EcowasTravelCertx;
