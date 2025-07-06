import React from "react";

const PassportCard = ({ title, img }) => {
  return (
  
    <div className="relative rounded-[24px] overflow-hidden h-[300px] flex items-end group">
      <img
        src={img}
        alt={title}
      
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-125"
      />

 
      <div className="absolute z-10 w-full text-center top-32">
        <span className="text-white text-xl md:text-[28px] font-bold">
          {title}
        </span>
      </div>
    </div>
  );
};

export default PassportCard;
