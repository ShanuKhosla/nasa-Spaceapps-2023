import React, {useState} from 'react';
import { motion } from 'framer-motion';
import {fadeIn, staggerContainer, textVariant} from '../utils/motion';
import { TypingText } from "./CustomTexts";
import backgroundImage from '/starsUpscaled.png';


const SpaceAppsRecap = () => {

  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  return (
    <>
    <div className='flex flex-row items-center justify-around'>
    <motion.div
      className="h-full  px-[20px] sm:px-[30px] lg:px-[50px] py-3 bg-cover bg-no-repeat bg-bottom"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      id=''
    >
      <motion.h1
        variants={fadeIn('right', 'tween', 0.2, 0.4)}
        initial={animationComplete ? "" : "hidden"}
        whileInView="show"
        onAnimationComplete={handleAnimationComplete} // Update the state when animation is complete
        className="text-4xl  xs:text-5xl lg:text-6xl font-extrabold font-firaSans tracking-wider mb-2">
        <span className='font-black text-[#eafe07]'>HackAth</span><span className='font-thin text-[#ffffff]'>l</span><span className='font-black text-[#eafe07]'>on</span><span className='font-thin text-[#ffffff]'>e</span>
      </motion.h1>
      <motion.h2
        variants={fadeIn('down', 'tween', 0.6, 0.4)}
        initial={animationComplete ? "" : "hidden"}
        whileInView="show"
        onAnimationComplete={handleAnimationComplete} // Update the state when animation is complete
        className="md:w-[95%] text-1xl sm:text-2xl lg:text-3xl text-[#ffffff] my-5 leading-tight font-overpass font-normal tracking-wide">
        Join us <span className='font-extrabold text-[#eafe07]'>October 6-8, 2023 </span>for the 
        largest annual space & sciences
        hackathon in the world!
      </motion.h2>
      <div className="">
        <motion.p
          variants={fadeIn('down', 'tween', 1, 0.4)}
          initial={animationComplete ? "" : "hidden"}
          whileInView="show"
          onAnimationComplete={handleAnimationComplete} // Update the state when animation is complete
          className="text-justify mt-1 lg:mt-5 w-full md:max-w-[95%] text-md md:text-lg leading-snug font-overpass font-normal tracking-wide text-white">
          SpaceApps Athlone, also known as <span className='font-black text-[#eafe07]'>HackAthlone</span>, is one of the 300+ locations for this year's NASA SpaceApps Challenge. <span className='font-semibold tracking-tight'>Technology University of the Shannon</span> takes pride in hosting 200 participants on their campus for 48 hours to collaborate on 25 problem statements that cater to all STEAM fields.<br /><br />
          HackAthlone stands as the sole in-person Hackathon location in Ireland for this event, offering exciting prizes, goodies, and all necessary technical components and F&B provisions. It also holds the distinction of being the sole location in Europe that will livestream the event to the public. <br /><br />
          Skilled mentors from both academia and industry will join in to assist the students in producing high-quality projects. This hackathon will be documented for open-source research purposes.          
          </motion.p>
    </div> 
      <motion.a
        variants={fadeIn('down', 'tween', 1, 0.4)}
        initial={animationComplete ? "" : "hidden"}
        whileInView="show"
        onAnimationComplete={handleAnimationComplete} // Update the state when animation is complete
        href="/faq" className="pointer">
  <button className="my-5 bg-[#eafe07] px-5 py-3 mb-[100px] rounded-md text-xl text-black font-overpass font-bold" style={{ cursor: 'pointer' }}>
    Space Apps 2023 FAQ
  </button>
</motion.a>
</motion.div>
  <div 
  style={{ backgroundImage: `url(${backgroundImage})` }}
  >
  <img className="hidden xs:hidden sm:hidden md:block object-contain md:w-[300px] xl:w-[450px] mr-[20px]" src="/TUS.png" />
  </div>
    </div>
    <motion.div className='bg-center'
    style={{ backgroundImage: `url(${backgroundImage})` }}
    >

    <motion.img 
    variants={fadeIn('down', 'tween', 0.2, 0.9)}
        initial={animationComplete ? "" : "hidden"}
        whileInView="show"
        onAnimationComplete={handleAnimationComplete} 
    className=' relative bottom-5 sm:top-[70px] sm:left-5 lg:top-[110px] lg:left-10 px-[20px] sm:px-[30px] lg:px-[50px]' src='/tusLogo.png' />
    </motion.div>

      
    </>
  );
};

export default SpaceAppsRecap;
