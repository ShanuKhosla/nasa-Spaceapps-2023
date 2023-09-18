/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
import React, {useState} from 'react';
import backgroundImage from '/ctaStars.png';
import { motion } from 'framer-motion';
import {fadeIn} from '../utils/motion';


const CTA = () => {

  const [showPopup, setShowPopup] = useState(false);

  const handleMouseEnter = () => {
    setShowPopup(true);
    console.log("hovered");
  };

  const handleMouseLeave = () => {
    setShowPopup(false);
  };


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
className='my-10 border-2 border-slate-500 rounded-xl max-w-[100%]  md:max-w-[100%] md:h-[491px]'
width="873" height="315" src="https://www.youtube.com/embed/lUuRRAFhfM0?si=x0y6FHF4p_xhX7dN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <motion.h1
        variants={fadeIn('down', 'tween', 0.2, 0.7)}
        initial={animationComplete ? "" : "hidden"}
        whileInView="show"
        onAnimationComplete={handleAnimationComplete} // Update the state when animation is complete
        className="text-5xl lg:text-6xl font-extrabold font-firaSans text-white text-center mb-4">
        Are you ready to take on the challenge?
      </motion.h1>
      <div className='flex flex-col sm:flex-row items-center justify-between gap-4'>
      <a href='https://www.spaceappschallenge.org/2023/locations/athlone/' target='_blank'>
      <motion.button
        variants={fadeIn('left', 'tween', 0.2, 0.7)}
        initial={animationComplete ? "" : "hidden"}
        whileInView="show"
        onAnimationComplete={handleAnimationComplete} // Update the state when animation is complete
        className="px-6 py-3 bg-white text-[#0042A6] text-xl md:text-2xl font-firaSans font-semibold rounded-full hover:bg-[#07173F] hover:text-white transition-colors duration-300 border-4 cursor-pointer border-sky-500 shadow-xl">
        Register Now
      </motion.button>
      </a>      
      
      <a href="/howToRegister" target='_blank'>
        <motion.button
          variants={fadeIn('right', 'tween', 0.2, 0.7)}
          initial={animationComplete ? "" : "hidden"}
          whileInView="show"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onAnimationComplete={handleAnimationComplete} // Update the state when animation is complete
          className="px-4 py-3  bg-black bg-opacity-90 text-[#2E96F5] text-xl md:text-2xl font-firaSans font-semibold rounded-full hover:bg-[#07173F] hover:text-white transition-colors duration-500 border-[4px] cursor-pointer border-sky-500 ">
          Not Sure, How?
        </motion.button>
        </a>
      </div>
      {showPopup && <div className={`invisible lg:visible z-[9999] ${showPopup ? 'slide-in' : 'slide-out'}  w-[50%] shadow-xl bg-[#f6f4f4] rounded-md popup bottom-5`}>
            <img className='object-contain flex item-center justify-center w-full max-h-full p-1' src="./hackathlone4.gif" />
          </div>}
    </motion.div>
  );
}

export default CTA;
