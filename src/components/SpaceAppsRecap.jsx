import React, {useState} from 'react';
import { motion } from 'framer-motion';
import {fadeIn} from '../utils/motion';
import backgroundImage from '/starsUpscaled.png';


const SpaceAppsRecap = () => {

  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  return (
    <div className='flex items-center flex-col justify-center'>
    <div className='flex flex-row items-center justify-around'>
    <motion.div
      className="h-full  px-[20px] sm:px-[30px] lg:px-[50px] py-3 bg-cover bg-no-repeat bg-right"
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
        className="md:w-[95%] text-xl sm:text-2xl lg:text-3xl text-[#ffffff] my-5 leading-tight font-overpass font-normal tracking-wide">
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
          SpaceApps Athlone, also known as <span className='font-black text-[#eafe07]'>HackAthlone</span>, is one of the 300+ locations for this year's NASA SpaceApps Challenge.<a className='text-[#eafe07]  no-underline' href='#tus'> <span className='font-bold tracking-sung text-[#eafe07]'> Technology University of the Shannon</span></a> takes pride in hosting 200 participants on their campus for <span className='font-bold tracking-sung text-[#eafe07]'>48 hours</span> to collaborate on <span className='font-bold tracking-sung text-[#eafe07]'>30 problem statements</span> that cater to all STEAM fields.<br /><br />
          HackAthlone stands as the sole in-person Hackathon location in Ireland for this event, offering exciting prizes, goodies, and all necessary technical components and F&B provisions. It also holds the distinction of being the sole location in Europe that will livestream the event to the public. <br /><br />
          Skilled mentors from both academia and industry will join in to assist the students in producing high-quality projects. This hackathon will be documented for open-source research purposes.          
          </motion.p>
    </div> 

  <motion.a 
          variants={fadeIn('down', 'tween', 0.8, 0.4)}
        initial={animationComplete ? "" : "hidden"}
        whileInView="show"
        onAnimationComplete={handleAnimationComplete} 
  href='#timeline'><button className="pointer my-5 bg-[#eafe07] px-5 py-3 mb-[100px] text-black rounded-full border-4 border-slate-500 text-2xl font-extrabold font-firaSans " style={{ cursor: 'pointer' }}>
   Unfold The Timeline
  </button>
  </motion.a>

  <div 
  className=''
  id='discover' />  

</motion.div>
</div>
    
    <div
    style={{ backgroundImage: `url(${backgroundImage})` }}
     className='mt-[-60px] w-full flex items-center justify-center bg-cover bg-no-repeat bg-left'>
        <a href='#discover'>
        <img className='' src="scrollDown.gif" />
        </a>
      </div>

    </div>
  );
};

export default SpaceAppsRecap;
