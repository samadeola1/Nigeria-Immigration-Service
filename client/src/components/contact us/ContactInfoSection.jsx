import React from "react";
import phoneIcon from "../../assets/phone-icon.svg";
import mailIcon from "../../assets/mail-icon.svg";
import locationIcon from "../../assets/location-icon.svg";
import workingHoursIcon from "../../assets/working-hours-icon.svg";

const ContactInfoSection = () => {
  return (
    <div className="flex-1 w-full  bg-white rounded-md">
      <div className="">
        <h2 className="text-[20px]  md:text-[28px] xl:text-[44px] font-bold text-[#000101] mb-4">
          Get In Touch With Us
        </h2>
        <p className="text-[18px] md:text-[24px] text-[#000101]  font-normal my-4">
          Feel free to reach out to us with any inquiries, feedback, or support
          you may need.
        </p>
      </div>
      <div className="border-b-[1px] border-[#000000] w-full my-8 mb-"></div>

      <div className="space-y-10">
        {/* Phone */}
        <div className="flex items-center gap-4 w-full md:w-auto">
          <img
            src={phoneIcon}
            alt="Phone"
            className="w-[45px] h-[45px] md:w-[70px] md:h-[70px] md:p-3 p-1 rounded-full animate__animated animate__heartBeat animate__slow"
          />
          <div className="space-y-3">
            <p className="block text-[#000101] font-bold">Phone</p>
            <p className="md:text-[20px] font-light text-[#000101]">
              0700-CALL-NIS (0700-2255-647)
            </p>
          </div>
        </div>
        {/* Mail */}
        <div className="flex items-center gap-4 w-full md:w-auto">
          <img
            src={mailIcon}
            alt="Mail"
            className="w-[45px] h-[45px] md:w-[70px] md:h-[70px]   md:p-3 p-1 rounded-full animate__animated animate__heartBeat animate__slow"
          />
          <div className="space-y-3">
            <p className="block  text-[#000101] font-bold">Mail</p>
            <p className="md:text-[20px] font-light text-[#000101] ">
              Support@immigration.gov.ng
            </p>
          </div>
        </div>
        {/* Address */}
        <div className="flex items-start gap-4 w-full md:w-auto">
          <img
            src={locationIcon}
            alt="Address"
            className="w-[45px] h-[45px] md:w-[70px] md:h-[70px]  md:p-3 p-1 rounded-full animate__animated animate__heartBeat animate__slow"
          />
          <div className="space-y-3">
            <p className="block  text-[#000101] font-bold">Address</p>
            <p className="md:text-[20px] font-light text-[#000101]">
              Umaru Musa Yar'Adua <br /> Expressway, Sauka, Abuja.{" "}
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 w-full md:w-auto">
          <img
            src={workingHoursIcon}
            alt="hours"
            className="w-[45px] h-[45px] md:w-[70px] md:h-[70px]  md:p-3 p-1 rounded-full animate__animated animate__heartBeat animate__slow"
          />
          <div className="space-y-3">
            <p className="block  text-[#000101] font-bold">
              Working Hours
            </p>
            <p className="md:text-[20px] font-light text-[#000101] font-Inter">
              Mon-Fri: 8:00 AM -4:00PM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoSection;
