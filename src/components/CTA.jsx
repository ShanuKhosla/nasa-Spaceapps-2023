import React from 'react';
import backgroundImage from '/binaryNumbers.svg';

const CTA = () => {
  return (
    <div
      className="h-full px-8 md:px-[60px] py-8 md:py-70 bg-[#0042A6] bg-left bg-no-repeat bg-cover flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1 className="text-4xl md:text-6xl font-extrabold font-firaSans text-white text-center mb-4">
        Join Our Hackathon Now!
      </h1>
      <button className="px-6 py-3 bg-white text-[#0042A6] text-lg md:text-xl font-overpass font-semibold rounded-full hover:bg-[#07173F] hover:text-white transition-colors duration-300">
        Register Now
      </button>
    </div>
  );
}

export default CTA;
