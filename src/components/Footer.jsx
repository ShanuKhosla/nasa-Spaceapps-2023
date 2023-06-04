import React from 'react';

const Footer = () => {
  return (<>
    <div className = "bg-black px-[60px] py-[40px] flex flex-row items-center justify-between" >
    <div className="">
    <p className=" max-w-[400px] text-xl leading-snug font-overpass font-normal">Space Apps is funded by <br /> NASA's <span className="underline-offset-4 text-semibold"><a href="https://science.nasa.gov/earth-science">Earth Science Division</a></span> <br /> through a contract with Booz Allen Hamilton, <br /> Mindgrub, and SecondMuse.</p>
  </div>
  <div className="flex flex-row items-center justify-around ">
    <a className="no-underline" href=""><p className="text-xl relative right-[60px] font-overpass font-semibold tracking-tight mx-3 text-white font-bold">PRIVACY POLICY</p></a>
    <a className="no-underline" href=""><p className="text-xl relative right-[60px] font-overpass font-semibold tracking-tight mx-3 text-white font-bold">LEGAL</p></a>
    <a className="no-underline" href=""><p className="text-xl relative right-[60px] font-overpass font-semibold tracking-tight mx-3 text-white font-bold">CONTACT</p></a>
  </div>
  <div className=" flex flex-col items-center justify-between gap-4">
    <div>
      <p className=" max-w-[400px] text-xl leading-snug font-overpass font-normal" >Connect with #SpaceApps</p>
    </div>
    <div className="flex flex-row items-center gap-8">
      <img className="w-[55px] " src="/facebook.png" />
      <img className="w-[55px] " src="/twitter.png" />
      <img className="w-[55px] " src="/instagram.png" />
    </div>
  </div>
</div>
</>);
};

export default Footer;
