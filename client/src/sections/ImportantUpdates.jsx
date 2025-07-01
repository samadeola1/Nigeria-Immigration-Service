import React from "react";
import image1 from "../assets/Image1.png";
import image2 from "../assets/Image2.png";
import image3 from "../assets/Image3.png";

export default function ImportantUpdates() {
  const updates = [
    {
      title:
        "Nigeria Immigration Service honored with security partnership recognition award at the Nigeria Police Award 2025 Ceremony.",
      description:
        "The Nigeria Immigration Service honored with security partnership recognition award at the Nigeria Police Award 2025 Ceremony.",
      image: image2,
    },
    {
      title:
        "The Comptroller General, KN Nandap, pcc, mmis, fsmn, participated in the Constitution Review Legislative Dialogue",
      description:
        "The Comptroller General, participated in the Constitution Review Legislative Dialogue on National Security Architecture, themed",
      image: image3,
    },
    {
      title:
        "The General, KN Nandap, pcc, mmis, fsmn, received a courtesy visit from the International Organization for Migration (IOM) delegation",
      description:
        "The General received a courtesy visit from the International Organization for Migration (IOM) delegation, led by Dimanche Sharon, the",
      image: image1,
    },
  ];
  return (
    <div className="w-full bg-gray-100 py-16 px-6 md:px-20 ">
      <section className="max-w-[1440px] m-auto">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-black text-3xl md:text-4xl font-bold mb-4">
            Important Updates
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {updates.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden">
              <img
                src={item.image}
                alt="Update"
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-4 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm mb-4">{item.description}</p>
                <a
                  href="#"
                  className="text-green-800 font-semibold text-sm inline-flex items-center group"
                >
                  Read more
                  <span className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}