import React, {useState} from 'react';
import backgroundImage from '/binaryNumbers.svg';
import { motion } from 'framer-motion';
import {fadeIn, staggerContainer, textVariant} from '../utils/motion';
import { TypingText } from "./CustomTexts";

const CTA = () => {

  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };
  return (
    <motion.div
      className="h-full px-[20px] sm:px-[40px] lg:px-[60px] py-8 md:py-70 bg-[#0042A6] bg-left bg-no-repeat bg-cover flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <motion.h1
        variants={fadeIn('left', 'tween', 0.2, 0.7)}
        initial={animationComplete ? "" : "hidden"}
        whileInView="show"
        onAnimationComplete={handleAnimationComplete} // Update the state when animation is complete
        className="text-5xl lg:text-6xl font-extrabold font-firaSans text-white text-center mb-4">
        Join Our Hackathon Now!
      </motion.h1>
      <motion.button
        variants={fadeIn('right', 'tween', 0.2, 0.7)}
        initial={animationComplete ? "" : "hidden"}
        whileInView="show"
        onAnimationComplete={handleAnimationComplete} // Update the state when animation is complete
        className="px-6 py-3 bg-white text-[#0042A6] text-lg md:text-xl font-overpass font-semibold rounded-full hover:bg-[#07173F] hover:text-white transition-colors duration-300">
        Register Now
      </motion.button>
    </motion.div>
  );
}

export default CTA;
