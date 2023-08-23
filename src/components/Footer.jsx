import React from 'react';
import backgroundImage from '/starsUpscaled.png';


const Footer = () => {
  return (<>
    <div 
    style={{ backgroundImage: `url(${backgroundImage})` }}
    className = "bg-center bg-no-repeat bg-cover px-[20px] sm:px-[40px] lg:px-[60px] py-[40px] flex flex-col gap-[30px] xl:flex-row items-start justify-between"
    >

    <div className="">
    <p className="xl:max-w-[800px] max-w-[700px] text-justify text-md leading-snug font-overpass font-normal">
    Space Apps is funded by NASA's <span className="font-semibold"><a className="text-[#2E96F5] no-underline" href="https://science.nasa.gov/earth-science">Earth Science Division</a></span> through a contract with <a className='font-semibold text-[#2E96F5] no-underline'  href='https://www.boozallen.com/'>Booz Allen Hamilton</a>, <a  className='font-semibold text-[#2E96F5] no-underline' href='https://www.mindgrub.com/'>Mindgrub</a>, and <a className='font-semibold text-[#2E96F5] no-underline'  href='https://www.secondmuse.com/'>SecondMuse</a>.
    <br /><br />
    <span className=''> Copyright ©2023 NASA | <a className='font-semibold text-[#2E96F5] no-underline' href='https://www.nasa.gov/about/highlights/HP_Privacy.html'>Privacy Policy</a> | <a className='font-semibold text-[#2E96F5] no-underline' href='https://www.spaceappschallenge.org/legal/'>Legal</a> | <a className='font-semibold text-[#2E96F5] no-underline'>Contact</a> | <a className='font-semibold text-[#2E96F5] no-underline' href='https://www.spaceappschallenge.org/resources/'>Resources</a> </span>
</p>
<br />

  </div>

  <hr className='visible lg:hidden w-full'/>

  <div className=" flex flex-col items-center justify-between gap-4">
    <div>
      <p className="max-w-[400px] text-md leading-snug font-overpass font-normal ">Connect with #SpaceAppsAthlone</p>
    </div>
    <div className="flex flex-row items-center gap-8">
      <a href='https://www.facebook.com/spaceapps.athlone'><img className="w-[52px]" src="/facebook.png" /></a>
      <a href='https://twitter.com/hack_athlone'><img className="w-[52px] " src="/twitter.png" /></a>
      <a href='https://www.instagram.com/spaceapps_athlone'><img className="w-[52px] " src="/instagram.png" /></a>
    </div>
  </div>

</div>
</>);
};

export default Footer;
