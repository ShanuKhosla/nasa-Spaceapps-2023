/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '/heroBgd.png';
import { fadeIn, staggerContainer, textVariant } from '../utils/motion';
import "./styles/CustomTexts.css";
import Countdown from 'react-countdown';


const HeroSection = () => {

  const [showPopup, setShowPopup] = useState(false);
  const [showMobilePopup, setShowMobilePopup] = useState(false);
  const [buttonClass, setButtonClass] = useState('bg-opacity-90'); // Initial class

   // Calculate the target date and time (October 6, 2023, 6:00 AM)
   const targetDate = new Date('2023-10-06T06:00:00Z').getTime();
   const currentDate = Date.now();
 
   // Calculate the difference in milliseconds
   const difference = targetDate - currentDate;

  useEffect(() => {
    let timeoutId; // Variable to store timeout ID

    const handleScroll = () => {
      // Clear any existing timeout
      clearTimeout(timeoutId);

      // Set the class to bg-opacity-10 immediately on scroll
      setButtonClass('bg-opacity-10');

      // Set a timeout to change it back to bg-opacity-90 after 300 milliseconds
      timeoutId = setTimeout(() => {
        setButtonClass('bg-opacity-90');
      }, 300);
    };

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Clear the timeout and remove the event listener when component is unmounted
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    setShowMobilePopup(true);
    console.log("Clicked on");
  }

  const handleClose = () => {
    setShowMobilePopup(false);
  };

  const handleMouseEnter = () => {
    setShowPopup(true);
    console.log("Hovered on");
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
      className="my-[-30px] py-3 flex items-center justify-center flex-col h-screen bg-[#000000] bg-right bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}

    >

      <motion.h1 
      variants={fadeIn('down', 'tween', 3.2, 0.5)}
      initial="hidden"
      animate={animationComplete ? "show" : "hidden"} // Only animate when animationComplete is true
      onAnimationComplete={handleAnimationComplete}
      className=" text-4xl  xs:text-6xl lg:text-7xl text-[#FFFFFF] font-extrabold font-firaSans text-center tracking-wider mb-2"><span className='font-black text-[#eafe07]'>HackAth</span><span className='font-thin text-[#ffffff]'>l</span><span className='font-black text-[#eafe07]'>on</span><span className='font-thin text-[#ffffff]'>e</span> <br /></motion.h1>

      <span className='shootingStars'></span>
    

      <motion.h1 
      variants={fadeIn('down', 'tween', 3.7, 0.5)}
      initial="hidden"
      animate={animationComplete ? "show" : "hidden"} // Only animate when animationComplete is true
      onAnimationComplete={handleAnimationComplete}
      className='text-xl text-[#FFFFFF] font-extrabold font-firaSans text-center tracking-wider'>also known as</motion.h1> 
      <br />
      <motion.img 
      variants={fadeIn('down', 'tween', 4.2, 0.5)}
      initial="hidden"
      animate={animationComplete ? "show" : "hidden"} // Only animate when animationComplete is true
      onAnimationComplete={handleAnimationComplete}
      src="/spaceapps_Logo.png" className="w-[40%] md:w-[18%] lg:w-[15%] relative left-2 bottom-3" alt="Logo" />
      <motion.p
        variants={fadeIn('down', 'tween', 4.7, 0.5)}
        initial="hidden"
        animate={animationComplete ? "show" : "hidden"} // Only animate when animationComplete is true
        onAnimationComplete={handleAnimationComplete} // Update the state when animation is complete
        className="text-lg sm:text-2xl leading-relaxed font-normal font-overpass tracking-wide mt-4 text-center md:w-full max-w-[80%]"
      >
        Explore Open Science Together
        </motion.p>
        <br />

        <motion.div
         variants={fadeIn('down', 'tween', 5.5, 0.7)}
          initial={animationComplete ? "" : "hidden"}
          whileInView="show"
          onAnimationComplete={handleAnimationComplete}
          className='flex flex-col sm:flex-row items-center justify-between gap-4'
        >
        <a href='https://www.spaceappschallenge.org/2023/challenges/' target='_blank'>
        <motion.button
          variants={fadeIn('left', 'tween', 6.6, 0.9)}
          initial={animationComplete ? "" : "hidden"}
          whileInView="show"
          onAnimationComplete={handleAnimationComplete} // Update the state when animation is complete
          className="px-9 py-3 bg-opacity-0 bg-black text-[#f6f4f4]  text-lg md:text-2xl font-firaSans font-semibold rounded-full hover:bg-[#eafe07] hover:text-black transition-colors duration-1000 border-[4px] cursor-pointer border-amber-500 ">
          Challenges
        </motion.button>        
        </a>         
        <div className='flex flex-row items-center justify-between gap-4'>
        <a href='https://www.spaceappschallenge.org/2023/locations/athlone/' target='_blank'>
        <motion.button
          variants={fadeIn('down', 'tween', 5.9, 0.5)}
          initial={animationComplete ? "" : "hidden"}
          whileInView="show"
          onAnimationComplete={handleAnimationComplete} // Update the state when animation is complete
          className="px-6 py-3 bg-white text-[#0042A6] text-md md:text-2xl font-firaSans font-semibold rounded-full hover:bg-[#07173F] hover:text-white transition-colors duration-500 border-[4px] cursor-pointer border-sky-500 ">
          Register Now
        </motion.button>        
        </a>        
        <a href="/howToRegister" target='_blank'>
        <motion.button
          variants={fadeIn('right', 'tween', 6.6, 0.9)}
          initial={animationComplete ? "" : "hidden"}
          whileInView="show"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onAnimationComplete={handleAnimationComplete} // Update the state when animation is complete
          className="px-4 py-3  bg-black bg-opacity-90 md:bg-opacity-10 text-[#2E96F5] text-md md:text-2xl font-firaSans font-semibold rounded-full hover:bg-[#07173F] hover:text-white transition-colors duration-500 border-[4px] cursor-pointer border-sky-500 ">
          Not Sure, How?
        </motion.button>
        </a>
        </div>
        </motion.div>
          {showPopup && <div className={`hidden lg:block z-[9999] ${showPopup ? 'slide-in' : 'slide-out'}  w-[50%] shadow-xl bg-[#f6f4f4] rounded-md popup bottom-5`}>
            <img className='object-contain flex item-center justify-center w-full max-h-full p-1' src="./notSureHow.gif" />
          </div>}

          <div>
          <button
        onClick={handleClick}
        className={`z-[9000] h-[30px] cursor-pointer border-2 border-sky-500 hover:bg-[#f6f4f4] flex items-center justify-start w-[30px] bg-[#eafe07] rounded-full fixed left-2 bottom-5  transition-all ease duration-500 ${buttonClass}`}>
        <img src='arrow-right.png' width={30} className='relative right-[1.5px]' alt="Open Gif" />
      </button>

      {showMobilePopup && (
        <div className={`z-[9999] ${showMobilePopup ? 'slide-in' : 'slide-out'} sm:w-[50%]  w-[98%] shadow-xl bg-[#f6f4f4] rounded-md popup bottom-0`}>
          <img className='object-contain flex item-center justify-center w-full max-h-full p-1' src="./notSureHow.gif" alt="Gif" />
          <button className='w-6 h-6 bg-opacity-0 bg-black rounded-full z-10 absolute top-1 right-1' onClick={handleClose}><img src='cancel.png' /></button>
        </div>
      )}
    </div>

    <div className='absolute bottom-0 right-0 flex flex-col items-center justify-between gap-2  rounded-md px-3 py-3'>
      <p className='font-firaSans font-bold text-sm sm:text-md md:text-xl lg:text-3xl tracking-wide'>Hack Starts In</p>
      <Countdown
        date={currentDate + difference}
        renderer={({ days, hours, minutes, seconds }) => (
          <div className='font-firaSans font-bold text-md  sm:xt-lg md:text-2xl lg:text-4xl tracking-wide'>
            {days}d {hours}h {minutes}m {seconds}s
          </div>
        )}
      />
    </div>


        <div id='about' /> 
      <div className='mt-2'>
        <a href='#about'>
        <img className='' src="scrollDown.gif" />
        </a>
      </div>


      
    </motion.div>
  );
}

export default HeroSection;
