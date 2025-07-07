import React from 'react';

const HereToHelp = () => {
  return (
    <section className="relative bg-cover bg-center rounded-[2rem] overflow-hidden my-12 mx-auto max-w-6xl h-[400px]" style={{ backgroundImage: `url('/assets/Help.png')` }}
>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
          We’re Here to Help You
        </h2>
        <p className="text-white text-lg md:text-xl mb-6 max-w-2xl">
          Reach out to us for assistance with your applications,
          <br className="hidden md:block" />
          services, or any inquiries
        </p>
        <button className="bg-green-700 text-white font-semibold px-6 py-3 rounded-md hover:bg-green-800 transition">
          Contact us
        </button>
      </div>
    </section>
  );
};

export default HereToHelp;
