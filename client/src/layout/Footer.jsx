import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <div className='bg-green-900 text-white px-6 py-12 md:px-16'>
    <footer className="max-w-[1440px] m-auto">
      <div className="mx-auto grid grid-cols-4 md:grid-cols-4 gap-10">
        {/* Logo & Contact Info */}
        <div>
          <img
            src="/images/image 234.png"
            alt="Nigeria Immigration Service"
            className="mb-4 w-36"
          />
          <div className="flex items-start gap-2 mb-2">
            <MdLocationOn className="text-xl mt-1" />
            <p className="text-sm leading-snug">
              Umar Musa Yar Adu'a Express Way, Airport Road,<br />
              Sauka, Abuja, FCT, Nigeria
            </p>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <MdPhone className="text-xl" />
            <p className="text-sm">+234-912-1900-655</p>
          </div>
          <div className="flex items-center gap-2">
            <MdEmail className="text-xl" />
            <p className="text-sm">Nis.servicom@Nigeriainimmigration.gov.ng</p>
          </div>
        </div>


        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Self-service</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
          </ul>
        </div>

        {/* Help Links */}
        <div>
          <h3 className="font-semibold mb-4">Help</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Faqs</a></li>
            <li><a href="#" className="hover:underline">Terms & Condition</a></li>
            <li><a href="#" className="hover:underline">Privacy Policies</a></li>
            <li><a href="#" className="hover:underline">How It Works</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
  <h3 className="font-semibold mb-4">Socials</h3>
  <div className="flex items-center gap-4 text-xl">
    <a href="#" className="hover:text-gray-300">
      <FaFacebookF className="w-5 h-5" />
    </a>
    <a href="#" className="hover:text-gray-300">
      <FaInstagram className="w-5 h-5" />
    </a>
    <a href="#" className="hover:text-gray-300">
      <FaTwitter className="w-5 h-5" />
    </a>
    <a href="#" className="hover:text-gray-300">
      <FaLinkedinIn className="w-5 h-5" />
    </a>
  </div>
</div>

      </div>

      <hr className="border-t border-gray-400 my-8" />

      <div className="text-center text-sm">
        © Copyright Nigeria Immigration Service 2024 All Rights Reserved
      </div>
    </footer>
    </div>
  );
}