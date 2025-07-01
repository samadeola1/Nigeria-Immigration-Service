import React from 'react'

const AboutUs = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center bg-[#F5F7FA] px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#212121] mt-20 font-poppins">
          About Us
        </h1>
        <p className="max-w-2xl text-center text-[#474747] text-lg md:text-xl font-poppins mb-6">
          The Nigeria Immigration Service is dedicated to providing seamless,
          secure, and innovative immigration solutions. Our mission is to
          facilitate safe travel, support national security, and deliver
          exceptional service to all residents and visitors.
        </p>
        <div className="flex flex-col md:flex-row gap-6 mt-4">
          <div className="bg-white rounded-xl shadow-md p-6 w-full md:w-72">
            <h2 className="text-xl font-semibold text-[#1BA94C] mb-2">
              Our Vision
            </h2>
            <p className="text-[#474747] text-base">
              To be a modern, effective, and people-focused immigration service.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 w-full md:w-72">
            <h2 className="text-xl font-semibold text-[#1BA94C] mb-2">
              Our Values
            </h2>
            <p className="text-[#474747] text-base">
              Integrity, professionalism, innovation, and service excellence.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs