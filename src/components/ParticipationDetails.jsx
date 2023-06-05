import React from 'react';
import backgroundImage from '/nasaPlusTheme.svg';

const ParticipationDetails = () => {
  return (
    <div
      className="bg-[#FFFFFF] h-screen px-8 md:px-[60px] py-8 md:py-70 bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${backgroundImage})`
      }}
    >
      
      <h1 className="text-6xl text-[#07173F] font-extrabold font-firaSans tracking-wider mb-2">
        DETAILS OF PARTICIPATION
      </h1>
    </div>
  );
}

export default ParticipationDetails;
