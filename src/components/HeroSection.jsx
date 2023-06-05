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
      className="h-full px-[40px] lg:px-[60px] py-[70px] bg-[#0042A6] header"
    >
      <h1 className=" text-5xl lg:text-6xl text-[#FFFFFF] font-extrabold font-firaSans tracking-wider mb-2">NASA INTERNATIONAL SPACEAPPS 2023</h1>
      <motion.p
        variants={fadeIn('down', 'tween', 1, 0.5)}
        initial="hidden"
        animate={animationComplete ? "show" : "hidden"} // Only animate when animationComplete is true
        onAnimationComplete={handleAnimationComplete} // Update the state when animation is complete
        className="text-2xl leading-relaxed font-normal font-overpass tracking-wide"
      >
        SUBHEADING 1
      </motion.p>
      <motion.p
        variants={fadeIn('down', 'tween', 1.5, 0.5)}
        initial="hidden"
        animate={animationComplete ? "show" : "hidden"} // Only animate when animationComplete is true
        onAnimationComplete={handleAnimationComplete} // Update the state when animation is complete
        className="text-2xl leading-relaxed font-normal font-overpass tracking-wide"
      >
        SUBHEADING 2
      </motion.p>
    </motion.div>
  );
}

export default HeroSection;
