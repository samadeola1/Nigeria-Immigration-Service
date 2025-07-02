// import React, { useState, useEffect, useRef } from 'react';
// import { RiArrowDropDownLine } from "react-icons/ri";
// import { IoMenuOutline } from "react-icons/io5";
// import { IoClose } from "react-icons/io5";
// import logo from '../images/image 7.svg'
// // import { CiSearch } from "react-icons/ci";

// const Navbar = () => {
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const mobileMenuRef = useRef(null);

//   const toggleDropdown = (dropdownName) => {
//     setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
//   };

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//     setActiveDropdown(null); // Close any open dropdowns when toggling mobile menu
//   };

//   // Click outside to close mobile menu
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
//         setIsMobileMenuOpen(false);
//         setActiveDropdown(null);
//       }
//     };

//     if (isMobileMenuOpen) {
//       document.addEventListener('mousedown', handleClickOutside);
//     } else {
//       document.removeEventListener('mousedown', handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [isMobileMenuOpen]);

//   return (
//     <>
//       {/* Desktop Navbar */}
//       <div className='bg-white text-black shadow-sm'>
//         <div className='w-11/12 container mx-auto flex justify-between items-center py-4'>
//           <div className='w-auto'>
//             <div className=' w-auto'>
//               <img src={logo} alt="" />
//             </div>
//           </div>

//           {/* Desktop Navigation Menu */}
//           <div className='hidden lg:flex items-center lg:space-x-4 xl:space-x-8'>
//             <div>
//               <p className='text-gray-700 hover:text-green-600 font-medium cursor-pointer transition-colors duration-200 py-2'>
//                 Home
//               </p>
//             </div>
            
//             <div className='relative'>
//               <p 
//                 onClick={() => toggleDropdown('about')}
//                 className='text-black hover:text-green-600 font-medium flex items-center cursor-pointer transition-colors duration-200 py-2'
//               >
//                 About us
//                 <RiArrowDropDownLine 
//                   className={`ml-1 h-5 w-5 transition-transform duration-200 ${
//                     activeDropdown === 'about' ? 'rotate-180' : ''
//                   }`} 
//                 />
//               </p>
              
//               {/* About us Dropdown */}
//               {activeDropdown === 'about' && (
//                 <div className='absolute  mt-9 w-80 bg-white shadow-lg border border-gray-200 z-50 text-black'>
//                   <div className='py-2'>
//                     <a href='#' className='block px-[16px] text-[16px] font-medium hover:text-white hover:bg-green-600 transition-colors duration-200 border-b border-slate-200 py-[16px]'>
//                       Our Core Mandate
//                     </a>
//                     <a href='#' className='block px-4 text-[16px] font-medium hover:text-white hover:bg-green-600 transition-colors duration-200 border-b border-slate-200 py-[16px]'>
//                       Vision and Mission
//                     </a>
//                     <a href='#' className='block px-4 text-[16px] font-medium hover:text-white hover:bg-green-600 transition-colors duration-200 border-b border-slate-200 py-[16px]'>
//                       NIS Structure
//                     </a>
//                     <a href='#' className='block px-4 text-[16px] font-medium hover:text-white hover:bg-green-600 transition-colors duration-200 border-b border-slate-200 py-[16px]'>
//                       NIS History
//                     </a>
//                     <a href='#' className='block px-4 text-[16px] font-medium hover:text-white hover:bg-green-600 transition-colors duration-200 py-[16px]'>
//                       Past and Current Leaders
//                     </a>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Services */}
//             <div className='relative'>
//               <p 
//                 onClick={() => toggleDropdown('services')}
//                 className='text-black hover:text-green-600 font-medium flex items-center cursor-pointer transition-colors duration-200 py-2'
//               >
//                 Services
//                 <RiArrowDropDownLine 
//                   className={`ml-1 h-5 w-5 transition-transform duration-200 ${
//                     activeDropdown === 'services' ? 'rotate-180' : ''
//                   }`} 
//                 />
//               </p>
              
//               {/* Services Dropdown */}
//               {activeDropdown === 'services' && (
//                 <div className='absolute  mt-9 w-80 bg-white shadow-lg border border-gray-200 z-50 text-black'>
//                   <div className='py-2'>
//                     <a href='#' className='block px-[16px] text-[16px] font-medium hover:text-white hover:bg-green-600 transition-colors duration-200 border-b border-slate-200 py-[16px]'>
//                       Passport
//                     </a>
//                     <a href='#' className='block px-[16px] text-[16px] font-medium hover:text-white hover:bg-green-600 transition-colors duration-200 border-b border-slate-200 py-[16px]'>
//                       Nigerian Visas
//                     </a>
//                     <a href='#' className='block px-[16px] text-[16px] font-medium hover:text-white hover:bg-green-600 transition-colors duration-200 border-b border-slate-200 py-[16px]'>
//                       ECOWAS Travel Certificate
//                     </a>
//                     <a href='#' className='block px-[16px] text-[16px] font-medium hover:text-white hover:bg-green-600 transition-colors duration-200 border-b border-slate-200 py-[16px]'>
//                       Convention Travel Document
//                     </a>
//                     <a href='#' className='block px-[16px] text-[16px] font-medium hover:text-white hover:bg-green-600 transition-colors duration-200 border-b border-slate-200 py-[16px]'>
//                       CERPAC
//                     </a>
//                     <a href='#' className='block px-[16px] text-[16px] font-medium hover:text-white hover:bg-green-600 transition-colors duration-200 border-b border-slate-200 py-[16px]'>
//                       Landing and Exit Card
//                     </a>
//                     <a href='#' className='block px-[16px] text-[16px] font-medium hover:text-white hover:bg-green-600 transition-colors duration-200 py-[16px]'>
//                       Citizenship and Business (C&B)
//                     </a>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Information center */}
//             <div className='relative'>
//               <p 
//                 onClick={() => toggleDropdown('info')}
//                 className='text-black hover:text-green-600 font-medium flex items-center cursor-pointer transition-colors duration-200 py-2'
//               >
//                 Information center
//                 <RiArrowDropDownLine 
//                   className={`ml-1 h-5 w-5 transition-transform duration-200 ${
//                     activeDropdown === 'info' ? 'rotate-180' : ''
//                   }`} 
//                 />
//               </p>
              
//               {/* Information center Dropdown */}
//               {activeDropdown === 'info' && (
//                 <div className='absolute  mt-9 w-80 bg-white shadow-lg border border-gray-200 z-50 text-black'>
//                   <div className='py-2'>
//                     <a href='#' className='block px-[16px] text-[16px] font-medium hover:text-white hover:bg-green-600 transition-colors duration-200 border-b border-slate-200 py-[16px]'>
//                       Regularize your visa
//                     </a>
//                     <a href='#' className='block px-[16px] text-[16px] font-medium hover:text-white hover:bg-green-600 transition-colors duration-200 border-b border-slate-200 py-[16px]'>
//                       Everything visa
//                     </a>
//                     <a href='#' className='block px-[16px] text-[16px] font-medium hover:text-white hover:bg-green-600 transition-colors duration-200 border-b border-slate-200 py-[16px]'>
//                       Important Updates
//                     </a>
//                     <a href='#' className='block px-[16px] text-[16px] font-medium hover:text-white hover:bg-green-600 transition-colors duration-200 border-b border-slate-200 py-[16px]'>
//                       Press Release
//                     </a>
//                     <a href='#' className='block px-[16px] text-[16px] font-medium hover:text-white hover:bg-green-600 transition-colors duration-200 py-[16px]'>
//                       Event Gallery
//                     </a>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Self service */}
//             <div className='relative'>
//               <p 
//                 onClick={() => toggleDropdown('self')}
//                 className='text-black hover:text-green-600 font-medium flex items-center cursor-pointer transition-colors duration-200 py-2'
//               >
//                 Self service
//                 <RiArrowDropDownLine 
//                   className={`ml-1 h-5 w-5 transition-transform duration-200 ${
//                     activeDropdown === 'self' ? 'rotate-180' : ''
//                   }`} 
//                 />
//               </p>
              
//               {/* Self service Dropdown */}
//               {activeDropdown === 'self' && (
//                 <div className='absolute  mt-9 w-80 bg-white shadow-lg border border-gray-200 z-50 text-black'>
//                   <div className='py-2'>
//                     <a href='#' className='block px-[16px] text-[16px] font-medium hover:text-white hover:bg-green-600 transition-colors duration-200 border-b border-slate-200 py-[16px]'>
//                       Track Application
//                     </a>
//                     <a href='#' className='block px-[16px] text-[16px] font-medium hover:text-white hover:bg-green-600 transition-colors duration-200 border-b border-slate-200 py-[16px]'>
//                       Appointment Availability
//                     </a>
//                     <a href='#' className='block px-[16px] text-[16px] font-medium hover:text-white hover:bg-green-600 transition-colors duration-200 py-[16px]'>
//                       Apply for e-visa
//                     </a>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Desktop Apply Now Button */}
//           <button className='hidden lg:block bg-[#00AA55] hover:bg-green-700 text-white rounded-2xl px-6 py-3 font-medium transition-colors duration-200'>
//             Apply now
//           </button>

//           {/* Mobile Hamburger Menu Button */}
//           <button 
//             onClick={toggleMobileMenu}
//             className='lg:hidden flex justify-center items-center w-10 h-10 text-black hover:text-green-600 transition-colors duration-200'
//           >
//             {isMobileMenuOpen ? (
//               <IoClose className="w-6 h-6" />
//             ) : (
//               <IoMenuOutline className="w-12 h-12" />
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu Overlay */}
//       {isMobileMenuOpen && (
//         <div className="lg:hidden fixed inset-0 bg-black/50 z-50 flex justify-end">
//           <div 
//             ref={mobileMenuRef}
//             className="w-full  h-[80vh] bg-[#006834] flex flex-col transform transition-transform duration-300 ease-in-out shadow-2xl px-[25px]"
//           >
//             {/* Mobile Menu Header */}
//             <div className="flex justify-between items-center p-4 ">
//               <div className=' w-auto'>
//                 <img src={logo} alt="" />
//               </div>
//               <button 
//                 onClick={toggleMobileMenu}
//                 className='flex justify-center items-center w-10 h-10 text-white hover:text-green-200 transition-colors duration-200'
//               >
//                 <IoClose className="w-12 h-12" />
//               </button>
//             </div>
//             {/* Mobile Menu Items */}
//             <div className="flex-1 px-4 pb-4 space-y-4 overflow-y-auto">
//               {/* Home */}
//               <div className="pb-4 ">
//                 <a href="#" className="block text-white text-lg font-medium py-2 hover:text-green-200 transition-colors duration-200">
//                   Home
//                 </a>
//               </div>

//               {/* About us */}
//               <div className="pb-4 ">
//                 <div 
//                   onClick={() => toggleDropdown('about')}
//                   className="flex justify-between items-center text-white text-lg font-medium cursor-pointer py-2 hover:text-green-200 transition-colors duration-200"
//                 >
//                   <span>About us</span>
//                   <RiArrowDropDownLine 
//                     className={`h-6 w-6 transition-transform duration-200 ${
//                       activeDropdown === 'about' ? 'rotate-180' : ''
//                     }`} 
//                   />
//                 </div>
//                 {activeDropdown === 'about' && (
//                   <div className="mt-2 space-y-2 pl-4 transform transition-all duration-300 ease-in-out">
//                     <a href='#' className='block text-white/80 hover:text-white py-2 transition-colors duration-200'>Our Core Mandate</a>
//                     <a href='#' className='block text-white/80 hover:text-white py-2 transition-colors duration-200'>Vision and Mission</a>
//                     <a href='#' className='block text-white/80 hover:text-white py-2 transition-colors duration-200'>NIS Structure</a>
//                     <a href='#' className='block text-white/80 hover:text-white py-2 transition-colors duration-200'>NIS History</a>
//                     <a href='#' className='block text-white/80 hover:text-white py-2 transition-colors duration-200'>Past and Current Leaders</a>
//                   </div>
//                 )}
//               </div>

//               {/* Services */}
//               <div className="pb-4">
//                 <div 
//                   onClick={() => toggleDropdown('services')}
//                   className="flex justify-between items-center text-white text-lg font-medium cursor-pointer py-2 hover:text-green-200 transition-colors duration-200"
//                 >
//                   <span>Services</span>
//                   <RiArrowDropDownLine 
//                     className={`h-6 w-6 transition-transform duration-200 ${
//                       activeDropdown === 'services' ? 'rotate-180' : ''
//                     }`} 
//                   />
//                 </div>
//                 {activeDropdown === 'services' && (
//                   <div className="mt-2 space-y-2 pl-4 transform transition-all duration-300 ease-in-out">
//                     <a href='#' className='block text-white/80 hover:text-white py-2 transition-colors duration-200'>Passport</a>
//                     <a href='#' className='block text-white/80 hover:text-white py-2 transition-colors duration-200'>Nigerian Visas</a>
//                     <a href='#' className='block text-white/80 hover:text-white py-2 transition-colors duration-200'>ECOWAS Travel Certificate</a>
//                     <a href='#' className='block text-white/80 hover:text-white py-2 transition-colors duration-200'>Convention Travel Document</a>
//                     <a href='#' className='block text-white/80 hover:text-white py-2 transition-colors duration-200'>CERPAC</a>
//                     <a href='#' className='block text-white/80 hover:text-white py-2 transition-colors duration-200'>Landing and Exit Card</a>
//                     <a href='#' className='block text-white/80 hover:text-white py-2 transition-colors duration-200'>Citizenship and Business (C&B)</a>
//                   </div>
//                 )}
//               </div>

//               {/* Information Center */}
//               <div className="pb-4 ">
//                 <div 
//                   onClick={() => toggleDropdown('info')}
//                   className="flex justify-between items-center text-white text-lg font-medium cursor-pointer py-2 hover:text-green-200 transition-colors duration-200"
//                 >
//                   <span>Information Center</span>
//                   <RiArrowDropDownLine 
//                     className={`h-6 w-6 transition-transform duration-200 ${
//                       activeDropdown === 'info' ? 'rotate-180' : ''
//                     }`} 
//                   />
//                 </div>
//                 {activeDropdown === 'info' && (
//                   <div className="mt-2 space-y-2 pl-4 transform transition-all duration-300 ease-in-out">
//                     <a href='#' className='block text-white/80 hover:text-white py-2 transition-colors duration-200'>Regularize your visa</a>
//                     <a href='#' className='block text-white/80 hover:text-white py-2 transition-colors duration-200'>Everything visa</a>
//                     <a href='#' className='block text-white/80 hover:text-white py-2 transition-colors duration-200'>Important Updates</a>
//                     <a href='#' className='block text-white/80 hover:text-white py-2 transition-colors duration-200'>Press Release</a>
//                     <a href='#' className='block text-white/80 hover:text-white py-2 transition-colors duration-200'>Event Gallery</a>
//                   </div>
//                 )}
//               </div>

//               {/* Self Services */}
//               <div className="pb-4">
//                 <div 
//                   onClick={() => toggleDropdown('self')}
//                   className="flex justify-between items-center text-white text-lg font-medium cursor-pointer py-2 hover:text-green-200 transition-colors duration-200"
//                 >
//                   <span>Self Services</span>
//                   <RiArrowDropDownLine 
//                     className={`h-6 w-6 transition-transform duration-200 ${
//                       activeDropdown === 'self' ? 'rotate-180' : ''
//                     }`} 
//                   />
//                 </div>
//                 {activeDropdown === 'self' && (
//                   <div className="mt-2 space-y-2 pl-4 transform transition-all duration-300 ease-in-out">
//                     <a href='#' className='block text-white/80 hover:text-white py-2 transition-colors duration-200'>Track Application</a>
//                     <a href='#' className='block text-white/80 hover:text-white py-2 transition-colors duration-200'>Appointment Availability</a>
//                     <a href='#' className='block text-white/80 hover:text-white py-2 transition-colors duration-200'>Apply for e-visa</a>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;
// Mock logo component since we don't have the actual image

import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import logo from '../images/image 7.svg'



const Navbar = () => {
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
const mobileMenuRef = useRef(null);

const toggleMobileMenu = () => {
  setIsMobileMenuOpen(!isMobileMenuOpen);
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
          <Link to="/">
            <div>
              <p className="text-gray-700 hover:text-green-600 font-medium cursor-pointer transition-colors duration-200 py-2">
                Home
              </p>
            </div>
          </Link>

          <Link to="/about-us">
            <div>
              <p className="text-gray-700 hover:text-green-600 font-medium cursor-pointer transition-colors duration-200 py-2">
                About us
              </p>
            </div>
          </Link>

          <div>
            <p className="text-gray-700 hover:text-green-600 font-medium cursor-pointer transition-colors duration-200 py-2">
              Services
            </p>
          </div>

          <div>
            <p className="text-gray-700 hover:text-green-600 font-medium cursor-pointer transition-colors duration-200 py-2">
              Information center
            </p>
          </div>

          <div>
            <p className="text-gray-700 hover:text-green-600 font-medium cursor-pointer transition-colors duration-200 py-2">
            Contact us
            </p>
          </div>
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
          <Link to="/">
            <div className=" w-auto">
              <img src={logo} alt="" />
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
          <Link to="about-us">
            <div className=" py-4">
              <p className="text-white text-lg font-medium cursor-pointer py-2 hover:text-white/80 transition-colors duration-200">
                About us
              </p>
            </div>
          </Link>

          <div className=" pb-4">
            <p className="text-white text-lg font-medium cursor-pointer py-2 hover:text-white/80 transition-colors duration-200">
              Services
            </p>
          </div>

          <div className="pb-4">
            <p className="text-white text-lg font-medium cursor-pointer py-2 hover:text-white/80 transition-colors duration-200">
              Information Center
            </p>
          </div>

          <div className="pb-4">
            <p className="text-white text-lg font-medium cursor-pointer py-2 hover:text-white/80 transition-colors duration-200">
              Self Services
            </p>
          </div>
        </div>
      </div>
    )}
  </>
);
};

export default Navbar;