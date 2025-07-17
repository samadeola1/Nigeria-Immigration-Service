import React from "react";

export default function App() {
  const heroStyle = {
    backgroundImage: `url('https://res.cloudinary.com/dd9nujmdt/image/upload/v1752324640/03445281f60a38b08cb400432c1177d6cf6674bb_ggtbca.png')`,
   
    backgroundPosition: "top center",
  };

  return (

    <div
      className="relative flex items-center w-full min-h-[400px] lg:min-h-[600px] bg-cover bg-no-repeat mt-20"
      style={heroStyle}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="relative z-10 w-11/12 mx-auto container h-full flex items-center">
       
        <div className="flex flex-col items-center p-4 py-8 text-center text-white sm:p-8 sm:py-16 md:items-start md:text-left">
          {/* Heading - Adjusted font size for small screens (sm:text-3xl) and removed max-w-xl */}
          <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Need Help Or Support?
          </h1>
        
          <p className="mb-4 text-base md:text-xl max-w-lg">
            We're Here to Help. Choose a topic, reach out to our support team,
            or visit a local office.
          </p>

          {/* Call-to-action Button */}
          <button className="px-8 py-3 font-semibold text-white transition-transform duration-300 ease-in-out bg-green-600 rounded-lg shadow-lg hover:bg-green-700 transform hover:scale-105">
            Visit Help Center
          </button>
        </div>
      </div>
    </div>
  );
}
