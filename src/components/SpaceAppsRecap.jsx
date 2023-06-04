import React from 'react';
import backgroundImage from '/Group_6.svg';

const SpaceAppsRecap = () => {
  return (
    <div
      className="h-full px-8 md:px-[60px] py-8 md:py-70 bg-[#07173F] bg-left bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1 className="text-6xl font-extrabold font-firaSans tracking-wider mb-2">
        SPACE APPS 2023
      </h1>
      <h2 className="text-4xl text-[#E43700] my-4 leading-tight font-overpass font-normal tracking-wide">
        Join us October 7-8, 2023 for the <br />
        <span className="text-white">largest annual space & science</span> <br />
        hackathon in the world!
      </h2>
      <p className="mt-5 max-w-full md:max-w-[70%] text-xl leading-snug font-overpass font-normal tracking-wide text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        <br /><br />
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <a href="/faq" className="pointer">
  <button className="mt-9 bg-[#eafe07] px-5 py-3 rounded-md text-xl text-black font-overpass font-bold" style={{ cursor: 'pointer' }}>
    Space Apps 2023 FAQ
  </button>
</a>

    </div>
  );
};

export default SpaceAppsRecap;
