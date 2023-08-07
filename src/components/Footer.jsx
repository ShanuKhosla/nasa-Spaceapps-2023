import React from 'react';
import backgroundImage from '/starsUpscaled.png';


const Footer = () => {
  return (<>
    <div 
    style={{ backgroundImage: `url(${backgroundImage})` }}
    className = "bg-center bg-no-repeat bg-cover px-[20px] sm:px-[40px] lg:px-[60px] py-[40px] flex flex-col gap-[50px] xl:flex-row items-center justify-between">

    <div className="">
    <p className="xl:max-w-[500px] max-w-[700px] text-justify text-xl leading-snug font-overpass font-normal">Space Apps is funded by  NASA's <span className="underline-offset-4 text-semibold"><a href="https://science.nasa.gov/earth-science">Earth Science Division</a></span>  through a contract with Booz Allen Hamilton,  Mindgrub, and SecondMuse.</p>
  </div>
  <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:justify-between">
  <div className="flex gap-2 xl:flex-row flex-col items-center justify-around ">
    <a className="underline-offset-5" href=""><p className="text-xl relative md:right-[60px] font-overpass font-semibold tracking-tight mx-3 text-white font-bold">PRIVACY POLICY</p></a>
    <a className="underline-offset-5" href=""><p className="text-xl relative md:right-[60px] font-overpass font-semibold tracking-tight mx-3 text-white font-bold">LEGAL</p></a>
    <a className="underline-offset-5" href=""><p className="text-xl relative md:right-[60px] font-overpass font-semibold tracking-tight mx-3 text-white font-bold">CONTACT</p></a>
  </div>
  <div className=" flex flex-col items-center justify-between gap-4">
    <div>
      <p className="max-w-[400px] text-xl leading-snug font-overpass font-normal">Connect with #SpaceApps</p>
    </div>
    <div className="flex flex-row items-center gap-8">
      <img className="w-[55px] " src="/facebook.png" />
      <img className="w-[55px] " src="/twitter.png" />
      <img className="w-[55px] " src="/instagram.png" />
    </div>
  </div>
</div>
</div>
</>);
};

export default Footer;
