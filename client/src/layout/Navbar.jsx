import React, { useState, useEffect, useRef } from 'react';
import { NavLink,Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import logo from '../images/image 7.svg'
import logo1 from '../images/Frame 1171279530.svg'

const Navbar = () => {
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
const mobileMenuRef = useRef(null);

const toggleMobileMenu = () => {
  setIsMobileMenuOpen(!isMobileMenuOpen);
};

const closeMobileMenu = () => {
  setIsMobileMenuOpen(false);
};

// Handle click outside mobile menu
useEffect(() => {
  const handleClickOutside = (event) => {
    if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
      setIsMobileMenuOpen(false);
    }
  };

  if (isMobileMenuOpen) {
    document.addEventListener('mousedown', handleClickOutside);
  }

  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, [isMobileMenuOpen]);

return (
  <>
    {/* Desktop Navbar */}
    <div className="fixed top-0 left-0 right-0 bg-white text-black shadow-sm z-40">
      <div className="w-11/12 container mx-auto flex justify-between items-center py-4">
        <Link to="/">
          <div className=" w-auto">
            <img src={logo} alt="" />
          </div>
        </Link>

        {/* Desktop Navigation Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `text-gray-700 hover:text-green-600 font-medium cursor-pointer transition-colors duration-200 py-2 ${
                isActive ? "text-green-600" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              `text-gray-700 hover:text-green-600 font-medium cursor-pointer transition-colors duration-200 py-2 ${
                isActive ? "text-green-600" : ""
              }`
            }
          >
            About us
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `text-gray-700 hover:text-green-600 font-medium cursor-pointer transition-colors duration-200 py-2 ${
                isActive ? "text-green-600" : ""
              }`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/information-center"
            className={({ isActive }) =>
              `text-gray-700 hover:text-green-600 font-medium cursor-pointer transition-colors duration-200 py-2 ${
                isActive ? "text-green-600" : ""
              }`
            }
          >
          information Center
          </NavLink>
          <NavLink
            to="contact-us"
            className={({ isActive }) =>
              `text-gray-700 hover:text-green-600 font-medium cursor-pointer transition-colors duration-200 py-2 ${
                isActive ? "text-green-600" : ""
              }`
            }
          >
            Contact Us
          </NavLink>
        </div>

        {/* Desktop Apply Now Button */}
        <button className="hidden lg:block bg-[#00AA55] hover:bg-green-700 text-white rounded-2xl px-6 py-3 font-medium transition-colors duration-200">
          Apply now
        </button>

        {/* Mobile Hamburger Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 text-2xl"
        >
          {isMobileMenuOpen ? <IoMdClose /> : <IoIosMenu />}
        </button>
      </div>
    </div>

    {/* Mobile Menu Overlay */}
    {isMobileMenuOpen && (
      <div
        ref={mobileMenuRef}
        className="lg:hidden fixed inset-0 w-full h-[60vh] bg-[#006834] z-50 flex flex-col"
      >
        {/* Mobile Menu Header */}
        <div className="flex justify-between items-center p-4 ">
          <Link to="/" onClick={closeMobileMenu}>
            <div className=" w-auto px-4">
                <img src={logo1} alt="" />
            </div>
          </Link>

          <button
            onClick={toggleMobileMenu}
            className="flex flex-col justify-center items-center w-8 h-8 text-2xl text-white"
          >
            <IoMdClose />
          </button>
        </div>
        {/* Mobile Menu Items */}
        <div className="flex-1 px-8 pb-4 space-y-4">
          <Link to="/about-us" onClick={closeMobileMenu}>
            <div className=" py-4">
              <p className="text-white text-lg font-medium cursor-pointer py-2 hover:text-white/80 transition-colors duration-200">
                About us
              </p>
            </div>
          </Link>

          <Link to="/services" onClick={closeMobileMenu}>
            <div className=" py-4">
              <p className="text-white text-lg font-medium cursor-pointer py-2 hover:text-white/80 transition-colors duration-200">
                Services
              </p>
            </div>
          </Link>

          <Link to="/information-center" onClick={closeMobileMenu}>
            <div className="pb-4">
              <p className="text-white text-lg font-medium cursor-pointer py-2 hover:text-white/80 transition-colors duration-200">
                Information Center
              </p>
            </div>
          </Link>

          <Link to="/contact-us" onClick={closeMobileMenu}>
            <div className="pb-4">
              <p className="text-white text-lg font-medium cursor-pointer py-2 hover:text-white/80 transition-colors duration-200">
                Contact Us
              </p>
            </div>
          </Link>
        </div>
      </div>
    )}
  </>
);
};

export default Navbar;