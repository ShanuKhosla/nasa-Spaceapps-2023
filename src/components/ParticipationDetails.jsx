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
    <>

    <motion.div
      className="h-full w-full px-[20px] sm:px-[40px] lg:px-[60px] py-8 md:py-70 bg-[#FFFFFF] bg-center bg-no-repeat bg-cover overflow-x-hidden"
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
      
      <motion.div
      variants={fadeIn('right', 'tween', 0.2, 0.4)}
        initial={animationComplete ? "" : "hidden"}
        whileInView="show"
        onAnimationComplete={handleAnimationComplete}
        className='flex items-center justify-center flex-col gap-5'
        >

        <motion.p
        variants={fadeIn('down', 'tween', 1.2, 0.4)}
          initial={animationComplete ? "" : "hidden"}
          whileInView="show"
          onAnimationComplete={handleAnimationComplete} // Update the state when animation is complete
          className="text-justify mt-5 max-w-full md:max-w-[58%] text-lg md:text-2xl leading-snug font-overpass font-bold tracking-wide text-[#07173F]"
        >
          Check Here for more Updates
        </motion.p>
        <a href='https://www.spaceappschallenge.org/2023/locations/athlone/' target='_blank'>
      <motion.button
        variants={fadeIn('right', 'tween', 0.2, 0.7)}
        initial={animationComplete ? "" : "hidden"}
        whileInView="show"
        onAnimationComplete={handleAnimationComplete} // Update the state when animation is complete
        className="px-6 py-3 bg-[#07173F]  text-lg md:text-xl font-overpass font-semibold rounded-full hover:bg-[#07173F] hover:text-[#E43700] text-white transition-colors duration-300">
        Register Now
      </motion.button>
        </a>
      
      </motion.div>
    </motion.div>

      

    </>
  );
}

export default ParticipationDetails;
