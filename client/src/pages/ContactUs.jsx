import React from "react";
import Hero from "../components/contact us/Hero";
import MapSection from "../components/contact us/MapSection";
import ContactInfoSection from "../components/contact us/ContactInfoSection";
import ContactFormSection from "../components/contact us/ContactFormSection";

const ContactUs = () => {
  return (
    <>
      {/* Hero section, typically full-width and responsive */}
      <Hero />

      {/* Main content wrapper for contact information and form */}
      <div className="w-11/12 mx-auto container bg-white py-10 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
        {/*
          Contact Form Section:
          - order-1: Appears first on mobile screens (default order in a single column).
          - lg:order-2: Moves to the second column (right side) on large screens.
        */}
        <div className="order-1 lg:order-2">
          <ContactFormSection />
        </div>

        <div className="order-2 lg:order-1">
         
          {/* Contact Information component */}
          <ContactInfoSection />
        </div>
      </div>

      {/* Map section, typically full-width and responsive */}
      <MapSection />
    </>
  );
};

export default ContactUs;
