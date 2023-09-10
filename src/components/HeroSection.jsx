/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '/heroBgd.png';
import { fadeIn, staggerContainer, textVariant } from '../utils/motion';
import "./styles/CustomTexts.css"


const HeroSection = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  return (
    <motion.div
      className="my-[-30px] py-3 flex items-center justify-center flex-col h-screen bg-[#000000] bg-right bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}

    >
      <motion.h1 
      variants={fadeIn('down', 'tween', 0.2, 0.5)}
      initial="hidden"
      animate={animationComplete ? "show" : "hidden"} // Only animate when animationComplete is true
      onAnimationComplete={handleAnimationComplete}
      className=" text-4xl  xs:text-6xl lg:text-7xl text-[#FFFFFF] font-extrabold font-firaSans text-center tracking-wider mb-2"><span className='font-black text-[#eafe07]'>HackAth</span><span className='font-thin text-[#ffffff]'>l</span><span className='font-black text-[#eafe07]'>on</span><span className='font-thin text-[#ffffff]'>e</span> <br /></motion.h1>

      <span className='shootingStars'></span>
    

      <motion.h1 
      variants={fadeIn('down', 'tween', 0.7, 0.5)}
      initial="hidden"
      animate={animationComplete ? "show" : "hidden"} // Only animate when animationComplete is true
      onAnimationComplete={handleAnimationComplete}
      className='text-xl text-[#FFFFFF] font-extrabold font-firaSans text-center tracking-wider'>also known as</motion.h1> 
      <br />
      <motion.img 
      variants={fadeIn('down', 'tween', 1.2, 0.5)}
      initial="hidden"
      animate={animationComplete ? "show" : "hidden"} // Only animate when animationComplete is true
      onAnimationComplete={handleAnimationComplete}
      src="/spaceapps_Logo.png" className="w-[40%] md:w-[18%] lg:w-[15%] relative left-2 bottom-3" alt="Logo" />
      <motion.p
        variants={fadeIn('down', 'tween', 1.7, 0.5)}
        initial="hidden"
        animate={animationComplete ? "show" : "hidden"} // Only animate when animationComplete is true
        onAnimationComplete={handleAnimationComplete} // Update the state when animation is complete
        className="text-lg sm:text-2xl leading-relaxed font-normal font-overpass tracking-wide mt-4 text-center md:w-full max-w-[80%]"
      >
        Explore Open Science Together
        <br />
        <a className='no-underline relative top-0.5' href='https://www.spaceappschallenge.org/2023/locations/athlone/' target='_blank'><button className='cursor-pointer text-md sm:text-xl leading-relaxed relative top-0.5 text-[#f6f4f4] font-overpass font-semibold my-3 border-2 border-solid border-sky-500 px-5 py-2 rounded-md bg-black hover:bg-[#eafe07] text-[#f6f4f4] hover:text-black transition-all duration-1000 ease-in-out'>Register Now </button></a></motion.p>     
      
      <div className='mt-5'>
        <a href='#about'>
        <img className='' src="scrollDown.gif" />
        </a>
      </div>


      <div id='about'>

      </div>
    </motion.div>
  );
}

export default HeroSection;
