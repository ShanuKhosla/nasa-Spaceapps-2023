import React, { useState } from 'react';
import backgroundImage from '/nasaPlusTheme.svg';
import "./styles/CustomTexts.css"
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, textVariant } from '../utils/motion';
import { TypingText } from "./CustomTexts";

const ParticipationDetails = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  return (
    <motion.div
      className="h-screen w-full px-[20px] sm:px-[40px] lg:px-[60px] py-8 md:py-70 bg-[#FFFFFF] bg-center bg-no-repeat bg-cover overflow-x-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'right',
      }}
    >
      <motion.h1
        variants={fadeIn('right', 'tween', 0.2, 0.4)}
        initial={animationComplete ? "" : "hidden"}
        whileInView="show"
        onAnimationComplete={handleAnimationComplete}
        className="text-4xl  xs:text-5xl lg:text-6xl text-[#07173F] font-extrabold font-firaSans tracking-wider mb-2"
      >
        DETAILS OF PARTICIPATION
      </motion.h1>
      
    </motion.div>
  );
}

export default ParticipationDetails;
