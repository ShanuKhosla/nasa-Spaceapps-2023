import React, {useState} from 'react';
import { motion } from 'framer-motion';
import {fadeIn, staggerContainer, textVariant} from '../utils/motion';
import { TypingText } from "./CustomTexts";
import backgroundImage from '/about.png';


const SpaceAppsRecap = () => {

  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  return (
    <motion.div
      className="h-full  px-[20px] sm:px-[40px] lg:px-[60px] py-8 md:py-70 bg-cover bg-no-repeat bg-bottom"
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
          The NASA International Space Apps Challenge (or Space Apps) is an international hackathon that will take place virtually and in person over a 48 hour period around the globe on dates October 6th, 7th and 8th, 2023.          <br /><br />
          Since its inception in 2012 by the Earth Science division, NASA's International Space Apps Challenge has engaged 220,000+ registrants from 180+ countries in using NASA's open data to build innovative solutions that solve challenges we face on Earth and in Space. <br /><br />
          The event embraces collaborative problem solving with a goal of producing open-source solutions to challenges we currently face on Earth and in space. Space Apps is open to the public and free for all ages to attend.
          
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
