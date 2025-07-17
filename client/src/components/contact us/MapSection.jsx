import React from 'react'

const MapSection = () => {
  return (
    <>
      <div className="max-w-full mx-auto">
        <iframe
          className="w-full h-[300px] md:h-[400px] xl:h-[600px] border-0"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7881.257663928758!2d7.259978393579101!3d9.006258900000006!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e64df70000001%3A0x56c3036f67950230!2sNigeria%20Immigration%20Service%20Headquarters%20Abuja!5e0!3m2!1sen!2sus!4v1752174700388!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map"
        ></iframe>
      </div>
    </>
  );
}

export default MapSection