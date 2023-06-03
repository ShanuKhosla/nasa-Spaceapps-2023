import React from 'react';

const About = () => {
  return(
    <div className="h-screen px-[60px] py-[70px] bg-[#07173F] bg-[url('./Group_6.svg')] bg-left bg-cover bg-no-repeat">
      <h1 className="text-6xl font-extrabold font-firaSans tracking-wider mb-2">SPACE APPS 2023</h1>
      <h2 className="text-4xl text-[#E43700] my-4 leading-tight font-overpass font-normal tracking-wide">Join us October 7-8, 2023 for the <br />
<span className="text-white">largest annual space & science</span> <br />
hackathon in the world!</h2>
<p className="mt-5 max-w-[70%] text-xl leading-snug font-overpass font-normal tracking-wide">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br /><br />Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<button className=" mt-9 bg-[#eafe07] px-5 py-3 rounded-md text-xl text-black font-overpass font-bold ">Space Apps 2023 FAQ</button>
</div>
  );
}

export default About;
