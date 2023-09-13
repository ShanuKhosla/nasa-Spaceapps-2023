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
        </motion.p>
        <br />
        <a href='https://www.spaceappschallenge.org/2023/locations/athlone/' target='_blank'>

        <motion.button
          variants={fadeIn('down', 'tween', 2.3, 0.7)}
          initial={animationComplete ? "" : "hidden"}
          whileInView="show"
          onAnimationComplete={handleAnimationComplete} // Update the state when animation is complete
          className="px-6 py-3 bg-white text-[#0042A6] text-xl md:text-2xl font-firaSans font-semibold rounded-full hover:bg-[#07173F] hover:text-white transition-colors duration-500 border-[4px] cursor-pointer border-sky-500 ">
          Register Now
        </motion.button>
        </a>        
        <div id='about' /> 
      <div className='mt-2'>
        <a href='#about'>
        <img className='' src="scrollDown.gif" />
        </a>
      </div>


      
    </motion.div>
  );
}

export default HeroSection;
