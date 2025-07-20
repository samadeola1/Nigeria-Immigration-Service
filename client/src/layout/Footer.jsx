import React from 'react'
import nisLogo from "../images/Frame 1171279530.svg"
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-[#006834] py-6 text-white">
      <div className="w-11/12 container mx-auto  ">
        <div className="flex flex-col lg:flex-row justify-between gap-4">
          {/* Logo & Contact */}
          <div className="space-y-4 flex flex-col ">
            {/* Logo */}
            <div>
              <img src={nisLogo} alt="NIS Logo" className="" />
            </div>

            {/* Address */}
            <div className="flex items-start space-x-3 text-sm">
              <FaMapMarkerAlt className="mt-1" />
              <p>
                Umar Musa Yar Adu’a Express Way, Airport Road,
                <br />
                Sauka, Abuja, FCT, Nigeria
              </p>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-3 text-sm">
              <FaPhoneAlt />
              <p>+234-912-1900-655</p>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-3 text-sm">
              <FaEnvelope />
              <p className="">Nis.servicom@Nigeriaimmigration.gov.ng</p>
            </div>
          </div>

          <div className=" flex  text-[#EDEDED] flex-col lg:flex-row lg:gap-[120px] gap-6">
            {/* Quick Links */}
            <div>
              <h4 className="font-normal text-[16px] mb-3 ">Quick links</h4>
              <ul className="space-y-4 text-sm">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">service</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>

            {/* Help */}
            <div className="flex flex-col">
              <h4 className="font-normal text-[16px] mb-3 ">Help</h4>
              <ul className="space-y-4 text-sm flex-col">
                <li>
                  <a href="#">Faqs</a>
                </li>
                <li>
                  <a href="#">Terms & Condition</a>
                </li>
                <li>
                  <a href="#">Privacy Policies</a>
                </li>
                <li>
                  <a href="#">How It Works</a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col">
              <h4 className="font-semibold text-lg mb-3">Socials</h4>
              <div className="text-lg flex flex-col space-y-4">
                <a
                  href="https://www.facebook.com/NigeriaImmigrationService/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.instagram.com/nigeriaimmigrationservice/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://twitter.com/nigimmigration"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.linkedin.com/company/nigeria-immigration-service/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white mt-10 pt-4 text-center text-sm">
          <p>
            © Copyright Nigeria Immigration Service 2024 All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
