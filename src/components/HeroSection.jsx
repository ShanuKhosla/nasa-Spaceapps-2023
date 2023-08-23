/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '/heroBg.png';
import { fadeIn, staggerContainer, textVariant } from '../utils/motion';
import "./styles/CustomTexts.css"


const HeroSection = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  return (
    <motion.div
      className="my-[-30px] flex items-center justify-center flex-col h-screen bg-[#000000] bg-right bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}

    >
      <motion.h1 
      variants={fadeIn('down', 'tween', 0.2, 0.5)}
      initial="hidden"
      animate={animationComplete ? "show" : "hidden"} // Only animate when animationComplete is true
      onAnimationComplete={handleAnimationComplete}
      className=" text-4xl  xs:text-6xl lg:text-7xl text-[#FFFFFF] font-extrabold font-firaSans text-center tracking-wider mb-2"><span className='font-black text-[#eafe07]'>HackAth</span><span className='font-thin text-[#ffffff]'>l</span><span className='font-black text-[#eafe07]'>on</span><span className='font-thin text-[#ffffff]'>e</span> <br /></motion.h1>
      <motion.h1 
      variants={fadeIn('down', 'tween', 0.7, 0.5)}
      initial="hidden"
      animate={animationComplete ? "show" : "hidden"} // Only animate when animationComplete is true
      onAnimationComplete={handleAnimationComplete}
      className='text-xl text-[#FFFFFF] font-extrabold font-firaSans text-center tracking-wider'>also known as</motion.h1> 
      <br />
      
      <motion.h1 
      variants={fadeIn('down', 'tween', 1.2, 0.5)}
      initial="hidden"
      animate={animationComplete ? "show" : "hidden"} // Only animate when animationComplete is true
      onAnimationComplete={handleAnimationComplete}
      className=" text-2xl  xs:text-3xl lg:text-4xl text-[#FFFFFF] font-extrabold font-firaSans text-center tracking-wider mb-2">NASA International SpaceApps <br /> Challenge 2023 <span className='font-black'>Athlone</span></motion.h1>
      <motion.p
        variants={fadeIn('down', 'tween', 1.7, 0.5)}
        initial="hidden"
        animate={animationComplete ? "show" : "hidden"} // Only animate when animationComplete is true
        onAnimationComplete={handleAnimationComplete} // Update the state when animation is complete
        className="text-lg sm:text-2xl leading-relaxed font-normal font-overpass tracking-wide mt-10 text-center md:w-full max-w-[90%]"
      >
        Explore Open Science Together,  <span className='font-extrabold text-[#eafe07]'> <a className='no-underline text-[#eafe07]' href='https://www.spaceappschallenge.org/2023/locations/athlone/' target='_blank'>Register Now </a> </span>
      </motion.p>     
      
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
