import React from "react";
import { Link } from "react-router-dom"; 

const ErrorPage = () => {
  return (
 
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 pt-20 text-center">
      <h1 className="text-7xl sm:text-8xl md:text-9xl font-extrabold text-[#00AA55] mb-6">
        404
      </h1>

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Page Not Found
      </h2>

      <p className="text-base sm:text-lg text-gray-600 mb-10 max-w-md">
        The page you're looking for isn't here, but don’t worry we’ll guide you
        back to safety.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm mb-16">
        
        <Link
          to="/" 
          className="bg-[#00AA55] text-white px-6 py-3 rounded-md font-semibold text-lg hover:bg-[#008A3F] transition-colors duration-200 w-full shadow-md whitespace-nowrap flex items-center justify-center"
        >
          Back to Homepage
        </Link>

       
        <Link
          to="/contact-us" 
          className="bg-white text-[#00AA55] border border-[#00AA55] px-6 py-3 rounded-md font-semibold text-lg hover:bg-gray-50 transition-colors duration-200 w-full shadow-md whitespace-nowrap flex items-center justify-center"
        >
          Visit Help Center
        </Link>
      </div>

      <p className="text-sm text-gray-500 mt-auto pb-4">
        &copy; {new Date().getFullYear()} Nigeria Immigration Service. All
        rights reserved.
      </p>
    </div>
  );
};

export default ErrorPage;
