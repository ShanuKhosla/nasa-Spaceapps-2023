import React, {useState} from 'react';
import backgroundImage from '/nasaPlusTheme.svg';
import "./styles/CustomTexts.css"
import { motion } from 'framer-motion';
import {fadeIn, staggerContainer, textVariant} from '../utils/motion';
import { TypingText } from "./CustomTexts";

const ParticipationDetails = () => {

  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  return (
    <motion.div
      className="bg-[#FFFFFF] h-screen px-8 px-[20px] sm:px-[40px] lg:px-[60px] py-8 md:py-70 bg-center bg-no-repeat bg-cover header"
      style={{
        backgroundImage: `url(${backgroundImage})`
      }}
    >

      <motion.h1
        variants={fadeIn('right', 'tween', 0.2, 0.4)}
        initial={animationComplete ? "" : "hidden"}
        whileInView="show"
        onAnimationComplete={handleAnimationComplete} // Update the state when animation is complete
        className="text-5xl lg:text-6xl text-[#07173F] font-extrabold font-firaSans tracking-wider mb-2">
        DETAILS OF PARTICIPATION
      </motion.h1>
    </motion.div>
  );
}

export default ParticipationDetails;
