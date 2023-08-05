import React, {useState} from 'react';
import backgroundImage from '/Group_6.svg';
import { motion } from 'framer-motion';
import {fadeIn, staggerContainer, textVariant} from '../utils/motion';
import { TypingText } from "./CustomTexts";


const SpaceAppsRecap = () => {

  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  return (
    <motion.div
      className="h-full  px-[20px] sm:px-[40px] lg:px-[60px] py-8 md:py-70 bg-[#07173F] bg-left bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <motion.h1
        variants={fadeIn('right', 'tween', 0.2, 0.4)}
        initial={animationComplete ? "" : "hidden"}
        whileInView="show"
        onAnimationComplete={handleAnimationComplete} // Update the state when animation is complete
        className="text-4xl  xs:text-5xl lg:text-6xl font-extrabold font-firaSans tracking-wider mb-2">
        HackAthlone
      </motion.h1>
      <motion.h2
        variants={fadeIn('down', 'tween', 0.7, 0.4)}
        initial={animationComplete ? "" : "hidden"}
        whileInView="show"
        onAnimationComplete={handleAnimationComplete} // Update the state when animation is complete
        className="md:max-w-[60%] text-2xl sm:text-3xl lg:text-4xl text-[#eafe07] my-4 leading-tight font-overpass font-normal tracking-wide">
        Join us October 6-8, 2023 for the 
        largest annual space & sciences
        hackathon in the world!
      </motion.h2>
      <div className="">
        <motion.p
          variants={fadeIn('down', 'tween', 1.2, 0.4)}
          initial={animationComplete ? "" : "hidden"}
          whileInView="show"
          onAnimationComplete={handleAnimationComplete} // Update the state when animation is complete
          className="text-justify mt-5 max-w-full md:max-w-[58%] text-lg md:text-xl leading-snug font-overpass font-normal tracking-wide text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          <br /><br />
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </motion.p>
    </div>
      <motion.a
        variants={fadeIn('down', 'tween', 1, 0.4)}
        initial={animationComplete ? "" : "hidden"}
        whileInView="show"
        onAnimationComplete={handleAnimationComplete} // Update the state when animation is complete
        href="/faq" className="pointer">
  <button className="mt-9 bg-[#eafe07] px-5 py-3 rounded-md text-xl text-black font-overpass font-bold" style={{ cursor: 'pointer' }}>
    Space Apps 2023 FAQ
  </button>
</motion.a>

</motion.div>
  );
};

export default SpaceAppsRecap;
