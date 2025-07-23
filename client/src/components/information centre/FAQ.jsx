import React, { useState } from "react";

// List of FAQ items with questions and answers
const faqs = [
  {
    question: "How do I check the status of my visa application?",
    answer:
      "You can check your status via the immigration portal or contact support.",
  },
  {
    question: "Who qualifies for the visa amnesty program?",
    answer:
      "Anyone with expired short-term visa or CERPAC over 30 days may qualify.",
  },
  {
    question: "Where can I apply for a CERPAC card?",
    answer:
      "Submit documented proof and contact support for further instruction.",
  },
  {
    question: "What if I overstayed my visa due to illness or emergency?",
    answer:
      "Submit documented proof and contact support for further instruction.",
  },
  {
    question: `Where do I report suspicious visa agents?`,
    answer: `Yes, via the official portal using a sponsor's application.`,
  },
  {
    question: "Is payment online secure?",
    answer: "Yes. Ensure you're using the official immigration.gov.ng site.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null); 

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
            className="px-4 pb-5 text-[#8b8989] text-base md:text-lg"
            dangerouslySetInnerHTML={{ __html: faq.answer }} // Inject raw HTML for answer
          />
        )}
      </div>
    ));

  return (
    <div className="w-full bg-white py-10 px-4 md:px-0">
      <div className="w-full md:w-11/12 container mx-auto">
        <h1 className="text-3xl lg:text-[44px] font-bold text-[#212121] uppercase text-center mb-8">
          Frequently Asked Questions
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

export default FAQ;
