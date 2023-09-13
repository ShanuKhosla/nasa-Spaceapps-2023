/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
import React, {useState} from 'react';
import backgroundImage from '/ctaStars.png';
import { motion } from 'framer-motion';
import {fadeIn} from '../utils/motion';


const CTA = () => {

  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };
  return (
    <motion.div
      className="h-full w-full px-[20px] sm:px-[40px] lg:px-[60px] py-8 md:py-[70px]  bg-center bg-no-repeat bg-cover flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >

<iframe 
className='my-10 z-10 border-2 border-slate-500 rounded-xl'
width="1000" height="564" src="https://www.youtube.com/embed/ybgqC-gtQVw" title="Explore Open Science Together | NASA Space Apps Challenge" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <motion.h1
        variants={fadeIn('down', 'tween', 0.2, 0.7)}
        initial={animationComplete ? "" : "hidden"}
        whileInView="show"
        onAnimationComplete={handleAnimationComplete} // Update the state when animation is complete
        className="text-5xl lg:text-6xl font-extrabold font-firaSans text-white text-center mb-4">
        Join Our Hackathon Now!
      </motion.h1>
      <a href='https://www.spaceappschallenge.org/2023/locations/athlone/' target='_blank'>

      <motion.button
        variants={fadeIn('up', 'tween', 0.2, 0.7)}
        initial={animationComplete ? "" : "hidden"}
        whileInView="show"
        onAnimationComplete={handleAnimationComplete} // Update the state when animation is complete
        className="px-6 py-3 bg-white text-[#0042A6] text-lg md:text-2xl font-firaSans font-semibold rounded-full hover:bg-[#07173F] hover:text-white transition-colors duration-300 border-4 cursor-pointer border-sky-500 shadow-xl">
        Register Now
      </motion.button>
      </a>
    </motion.div>
  );
}

export default CTA;
