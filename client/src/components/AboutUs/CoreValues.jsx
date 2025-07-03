import React from "react";

import { FaLayerGroup, FaBoxOpen, FaShieldAlt, FaLightbulb } from 'react-icons/fa';

const values = [
  {
    icon: <FaLayerGroup className="text-green-500 text-4xl mb-4" />,
    title: 'Transparency',
    description: 'We operate with honesty, fairness, and uphold the law in every process.',
  },
  {
    icon: <FaBoxOpen className="text-green-500 text-4xl mb-4" />,
    title: 'Trusted Service',
    description: 'We are committed to providing fast, transparent, and respectful service to all.',
  },
  {
    icon: <FaShieldAlt className="text-green-500 text-4xl mb-4" />,
    title: 'Security',
    description: 'We safeguard national interests by protecting borders.',
  },
  {
    icon: <FaLightbulb className="text-green-500 text-4xl mb-4" />,
    title: 'Innovation',
    description: 'We embrace technology and modern practices to improve immigration experiences.',
  },
];
const CoreValues = () => {
  return (
   <section className="bg-green-100 py-16 px-6 md:px-20 text-center">
      <div className="max-w-[1440px] m-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Core Values</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {values.map((value, index) => (
          <div key={index} className="flex flex-col items-center">
            {value.icon}
            <h3 className="text-lg font-semibold mt-2 mb-2 text-gray-900">{value.title}</h3>
            <p className="text-sm text-gray-600 max-w-xs">{value.description}</p>
          </div>
        ))}
      </div>
      </div>
      
    </section>
  );
};

export default CoreValues;
