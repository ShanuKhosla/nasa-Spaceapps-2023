import React from 'react';
import backgroundImage from '/nasaPlusTheme.svg';
import "./styles/CustomTexts.css"

const ParticipationDetails = () => {
  return (
    <div
      className="bg-[#FFFFFF] h-screen px-8 px-[40px] lg:px-[60px] py-8 md:py-70 bg-center bg-no-repeat bg-cover header"
      style={{
        backgroundImage: `url(${backgroundImage})`
      }}
    >

      <h1 className="text-5xl lg:text-6xl text-[#07173F] font-extrabold font-firaSans tracking-wider mb-2">
        DETAILS OF PARTICIPATION
      </h1>
    </div>
  );
}

export default ParticipationDetails;
