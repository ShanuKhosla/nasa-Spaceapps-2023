import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TypingText } from "./CustomTexts";
import { fadeIn, staggerContainer, textVariant } from '../utils/motion';

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
      className="h-screen px-[60px] py-[70px] bg-[#0042A6]"
    >
      <TypingText
        title="NASA INTERNATIONAL SPACEAPPS 2023"
        textStyles="text-center"
      />
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
