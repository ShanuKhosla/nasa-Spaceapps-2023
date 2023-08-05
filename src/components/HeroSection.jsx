import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TypingText } from "./CustomTexts";
import { fadeIn, staggerContainer, textVariant } from '../utils/motion';
import "./styles/CustomTexts.css"


const HeroSection = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  return (
    <motion.div
      variants={fadeIn('right', 'tween', 0.2, 0.5)}
      initial="hidden"
      animate={animationComplete ? "show" : "hidden"} // Only animate when animationComplete is true
      onAnimationComplete={handleAnimationComplete} // Update the state when animation is complete
      className="h-screen px-[20px] sm:px-[40px] lg:px-[60px] py-[70px] bg-[#0042A6] header my-5"
    >
      <h1 className=" text-4xl  xs:text-5xl lg:text-6xl text-[#FFFFFF] font-extrabold font-firaSans text-center tracking-wider mb-2"><span className='font-bolder text-[#E43700]'>HackAth</span><span className='font-light text-[#eafe07]'>l</span><span className='font-bolder text-[#E43700]'>on</span><span className='font-light text-[#eafe07]'>e</span> <br /></h1>
      <h1 className='text-xl text-[#FFFFFF] font-extrabold font-firaSans text-center tracking-wider'>also known as</h1> 
      <br />
      
      <h1 className=" text-2xl  xs:text-3xl lg:text-5xl text-[#FFFFFF] font-extrabold font-firaSans text-center tracking-wider mb-2">NASA INTERNATIONAL SPACEAPPS 2023 Athlone</h1>
      <motion.p
        variants={fadeIn('down', 'tween', 1, 0.5)}
        initial="hidden"
        animate={animationComplete ? "show" : "hidden"} // Only animate when animationComplete is true
        onAnimationComplete={handleAnimationComplete} // Update the state when animation is complete
        className="text-lg sm:text-2xl leading-relaxed font-normal font-overpass tracking-wide mt-10 text-center"
      >
        SUBHEADING 1
      </motion.p>
      <motion.p
        variants={fadeIn('down', 'tween', 1.5, 0.5)}
        initial="hidden"
        animate={animationComplete ? "show" : "hidden"} // Only animate when animationComplete is true
        onAnimationComplete={handleAnimationComplete} // Update the state when animation is complete
        className="text-lg sm:text-2xl leading-relaxed font-normal font-overpass tracking-wide text-center"
      >
        SUBHEADING 2
      </motion.p>
    </motion.div>
  );
}

export default HeroSection;
