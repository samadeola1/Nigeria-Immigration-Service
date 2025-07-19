import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { HiOutlineUserCircle } from "react-icons/hi2"; // Import the new icon
import logo from "../images/image 7.svg";
import logo1 from "../images/Frame 1171279530.svg";
import { useAuthStore } from "../store/authStore";
import toast from "react-hot-toast";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showDesktopDropdown, setShowDesktopDropdown] = useState(false);
  const [showMobileUserDropdown, setShowMobileUserDropdown] = useState(false);

  const mobileMenuRef = useRef(null);
  const desktopDropdownRef = useRef(null);

  const user = useAuthStore((state) => state.user);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const logoutUser = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // When opening mobile menu, ensure mobile user dropdown is closed
    if (!isMobileMenuOpen) {
      setShowMobileUserDropdown(false);
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setShowMobileUserDropdown(false); // Also close mobile user dropdown
  };

  const handleLogout = () => {
    logoutUser();
    navigate("/signin");
    toast.success("Logged out successfully!");
    setShowDesktopDropdown(false); // Close desktop dropdown
    setShowMobileUserDropdown(false); // Close mobile dropdown
  };

  // Determine the display name for the user
  const userDisplayName = user
    ? user.name // Prioritize 'name' property from the user object
      ? user.name
      : user.displayName || user.email // Fallback to displayName (for Google) or email
    : "";

  // Close menus/dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close mobile menu
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
        setShowMobileUserDropdown(false); // Also close mobile user dropdown
      }
      // Close desktop dropdown
      if (
        desktopDropdownRef.current &&
        !desktopDropdownRef.current.contains(event.target)
      ) {
        setShowDesktopDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Desktop Navbar */}
      <div className="fixed top-0 left-0 right-0 bg-white text-black shadow-sm z-40">
        <div className="w-11/12 container mx-auto flex justify-between items-center py-4">
          <Link to="/">
            <div className="w-auto">
              <img src={logo} alt="NIS Logo" />
            </div>
          </Link>

          {/* Desktop Navigation Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Conditionally render Home link */}
            {!isAuthenticated && (
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
            )}
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
              Information Center
            </NavLink>
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                `text-gray-700 hover:text-green-600 font-medium cursor-pointer transition-colors duration-200 py-2 ${
                  isActive ? "text-green-600" : ""
                }`
              }
            >
              Contact Us
            </NavLink>
          </div>

          {/* Desktop Auth Dropdown or Apply Button */}
          <div className="relative hidden lg:block" ref={desktopDropdownRef}>
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setShowDesktopDropdown((prev) => !prev)}
                  className="bg-transparent hover:bg-gray-100 text-[#00AA55] font-poppins rounded-2xl py-2 font-semibold text-[18px] flex items-center space-x-2 transition-colors duration-200"
                >
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt="Profile"
                      className="w-8 h-8 rounded-full object-cover bg-neutral-200"
                    />
                  ) : (
                    <HiOutlineUserCircle className="w-8 h-8 text-gray-500" />
                  )}
                  <span>Hi, {userDisplayName}!</span>{" "}
                  {/* Corrected to use userDisplayName */}
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      showDesktopDropdown ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="gray"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {showDesktopDropdown && (
                  <div className="absolute right-0 mt-2 bg-white shadow-md rounded-md w-48 py-2 z-50">
                    <Link
                      to="/track-application"
                      className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                      onClick={() => setShowDesktopDropdown(false)}
                    >
                      Track Application
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/signin">
                <button className="bg-[#00AA55] cursor-pointer hover:bg-green-700 text-white rounded-2xl px-6 py-3 font-medium transition-colors duration-200">
                  Apply now
                </button>
              </Link>
            )}
          </div>

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
          className="lg:hidden fixed inset-0 w-full h-screen bg-[#006834] z-50 flex flex-col pt-4 overflow-y-auto"
        >
          <div className="flex justify-between items-center p-8 ">
            <Link to="/" onClick={closeMobileMenu}>
              <div className="w-auto">
                <img src={logo1} alt="NIS Logo" />
              </div>
            </Link>

            <button
              onClick={toggleMobileMenu}
              className="flex flex-col justify-center items-center w-8 h-8 text-2xl text-white"
            >
              <IoMdClose />
            </button>
          </div>

          {/* Regular mobile navigation links */}
          <div className="flex-1 px-8 pb-4 space-y-4">
            {/* Conditionally render Home link in mobile menu */}
            {!isAuthenticated && (
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `block py-2 text-lg font-medium cursor-pointer transition-colors duration-200 ${
                    isActive ? "text-white/90" : "text-white"
                  } hover:text-white/80`
                }
                onClick={closeMobileMenu}
              >
                Home
              </NavLink>
            )}
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                `block py-2 text-lg font-medium cursor-pointer transition-colors duration-200 ${
                  isActive ? "text-white/90" : "text-white"
                } hover:text-white/80`
              }
              onClick={closeMobileMenu}
            >
              About us
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `block py-2 text-lg font-medium cursor-pointer transition-colors duration-200 ${
                  isActive ? "text-white/90" : "text-white"
                } hover:text-white/80`
              }
              onClick={closeMobileMenu}
            >
              Services
            </NavLink>
            <NavLink
              to="/information-center"
              className={({ isActive }) =>
                `block py-2 text-lg font-medium cursor-pointer transition-colors duration-200 ${
                  isActive ? "text-white/90" : "text-white"
                } hover:text-white/80`
              }
              onClick={closeMobileMenu}
            >
              Information Center
            </NavLink>
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                `block py-2 text-lg font-medium cursor-pointer transition-colors duration-200 ${
                  isActive ? "text-white/90" : "text-white"
                } hover:text-white/80`
              }
              onClick={closeMobileMenu}
            >
              Contact Us
            </NavLink>

            {/* Conditional rendering for mobile menu auth state */}
            <div className="pt-8 mt-8">
              {" "}
              {/* Added border-top for separation */}
              {isAuthenticated ? (
                <>
                  <button
                    onClick={() => setShowMobileUserDropdown((prev) => !prev)}
                    className="w-full text-left py-2 text-lg font-medium text-white flex items-center space-x-2 hover:text-white/80 transition-colors duration-200"
                  >
                    {user.photoURL ? (
                      <img
                        src={user.photoURL}
                        alt="Profile"
                        className="w-8 h-8 rounded-full object-cover bg-neutral-200"
                      />
                    ) : (
                      <HiOutlineUserCircle className="w-8 h-8 text-white" />
                    )}
                    <span>Hi, {userDisplayName}!</span>{" "}
                    {/* Corrected to use userDisplayName */}
                    <svg
                      className={`w-4 h-4 ml-auto transition-transform ${
                        showMobileUserDropdown ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {showMobileUserDropdown && (
                    <div className="pl-4 pt-2 pb-2 space-y-2 bg-white/10 rounded-md mt-2">
                      {" "}
                      {/* Nested dropdown style */}
                      <Link
                        to="/track-application"
                        className="block  py-2 text-base font-medium text-white hover:bg-white/20 rounded-md transition-colors duration-200"
                        onClick={closeMobileMenu}
                      >
                        Track Application
                      </Link>
                      <button
                        onClick={() => {
                          handleLogout();
                          closeMobileMenu();
                        }}
                        className="block text-[#00AA55] text-left px-4 py-2 text-base font-medium  rounded-md bg-white transition-colors duration-200"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <Link to="/signin" onClick={closeMobileMenu}>
                  <button className="w-full bg-[#00AA55] cursor-pointer hover:bg-green-700 text-white rounded-md px-6 py-3 font-medium transition-colors duration-200 text-lg">
                    Apply now
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
