import React , {useState} from 'react';
import { motion } from 'framer-motion';
import { TypingText } from "./CustomTexts";
import { fadeIn, staggerContainer, textVariant } from '../utils/motion';
import "./styles/CustomTexts.css"
import backgroundImage from '/starsUpscaled.png';
import organizingTeam from '/organizingTeam.jpg';
import campusAmbassador from '/campus.jpg';
import mentor from '/mentor.jpg';



const Volunteer = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [hoveredDiv, setHoveredDiv] = useState(null);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };
  return(
    <motion.div
      className=" h-full px-[20px] sm:px-[40px] lg:px-[60px] overflow-x-hidden"
      style={{backgroundImage: `url(${backgroundImage})`}}
      >
      <motion.h1
        variants={fadeIn('right', 'tween', 0.2, 0.6)}
        initial={animationComplete ? "" : "hidden"}
        whileInView="show"
        onAnimationComplete={handleAnimationComplete}
        className="text-4xl  xs:text-5xl lg:text-6xl text-[#FFFFFF] font-extrabold font-firaSans tracking-wider mb-2">
        Join Us
      </motion.h1>
      <motion.p
        variants={fadeIn('down', 'tween', 0.7, 0.5)}
        initial="hidden"
        animate={animationComplete ? 'show' : 'hidden'}
        onAnimationComplete={handleAnimationComplete}
        className="text-lg sm:text-2xl leading-relaxed font-light font-overpass tracking-wide"
      >
        Make a difference. Volunteer today.
</motion.p>
        <div className='flex flex-col xl:flex-row items-start justify-between gap-10 lg:gap-3 mt-8 mb-5'>


        <div 
          style={{backgroundImage: `url(${mentor})`}}
          onMouseEnter={() => setHoveredDiv(3)}
          onMouseLeave={() => setHoveredDiv(null)}
          className={`${hoveredDiv == 3 ? 'lg:opacity-100 ' : 'lg:opacity-70'} cursor-pointer h-[300px] justify-between  w-full bg-cover bg-center bg-no-repeat  rounded-lg py-8  flex flex-col items-center transition ease-in-out duration-1000`}>
          <div className='flex flex-col items-center justify-between  mb-4'>
            <h1 className='mt-3 mb-1 text-2xl xs:text-4xl font-firaSans'>Mentor</h1>
            {/* <p className='text-sm font-firaSans'>very short text. max 2 lines</p> */}
            </div>
            {/* <hr className='w-[85%] opacity-80 mt-4 mb-20' /> */}
            {/* <div className='flex flex-col items-start justify-between gap-4 mt-8 mb-6 font-overpass'>
            <p>Loren Ipsum</p>
            <p>Loren Ipsum</p>
            <p>Loren Ipsum</p>
            <p>Loren Ipsum</p>
            <p>Loren Ipsum</p>
            <p>Loren Ipsum</p>
            </div> */}
            <a href='https://forms.gle/BX5EWHuyeew5CPd8A' target="_blank"><button className='px-20 sm:px-40 py-2 bg-black bg-opacity-10 backdrop-blur-2xl text-[#2E96F5] text-xl md:text-2xl font-firaSans font-semibold rounded-lg hover:bg-opacity-60 hover:border-white hover:text-white transition-colors duration-700 border-[3px] cursor-pointer border-sky-500 '>Join Us</button></a>
          </div>

                   
          
          <div 
          style={{backgroundImage: `url(${campusAmbassador})`}}
          onMouseEnter={() => setHoveredDiv(2)}
          onMouseLeave={() => setHoveredDiv(null)}
          className={`${hoveredDiv == 2 ? 'lg:opacity-100' : 'lg:opacity-70'} cursor-pointer h-[300px] justify-between w-full bg-cover bg-center bg-no-repeat  rounded-lg py-8  flex flex-col items-center transition ease-in-out duration-1000`}>
          <div className='flex flex-col items-center justify-between mb-4'>
            <h1 className='mt-3 mb-1 text-2xl xs:text-4xl font-firaSans'>Campus Ambassador</h1>
            {/* <p className='text-sm font-firaSans'>very short text. max 2 lines</p> */}
            </div>
            {/* <hr className='w-[85%] opacity-80 mt-4 mb-20' /> */}
            {/* <div className='flex flex-col items-start justify-between gap-4 mt-8 mb-6 font-overpass'>
            <p>Loren Ipsum</p>
            <p>Loren Ipsum</p>
            <p>Loren Ipsum</p>
            <p>Loren Ipsum</p>
            <p>Loren Ipsum</p>
            <p>Loren Ipsum</p>
            </div> */}
            <a href='https://forms.gle/MxBQ4MSdwqP8YDfG9' target="_blank"><button className='px-20 sm:px-40 py-2  backdrop-blur-2xl  bg-black bg-opacity-100 text-[#2E96F5] text-xl md:text-2xl font-firaSans font-semibold rounded-lg hover:bg-opacity-60 hover:border-white hover:text-white transition-colors duration-700 border-[3px] cursor-pointer border-sky-500 '>Join Us</button></a>
          </div>  


          <div 
          style={{backgroundImage: `url(${organizingTeam})`}}
          onMouseEnter={() => setHoveredDiv(1)}
          onMouseLeave={() => setHoveredDiv(null)}
          className={`${hoveredDiv == 1 ? 'lg:opacity-100' : 'lg:opacity-70'} cursor-pointer  h-[300px] justify-between w-full bg-cover bg-center bg-no-repeat  rounded-lg py-8  flex flex-col items-center transition ease-in-out duration-1000`}>
          <div className='flex flex-col items-center justify-between mb-4'>
            <h1 className='mt-3 mb-1 text-2xl xs:text-4xl font-firaSans'>Organizing Team</h1>
            {/* <p className='text-sm font-firaSans'>very short text. max 2 lines</p> */}
            </div>
            {/* <hr className='w-[85%] opacity-80 mt-4 mb-20' /> */}
            {/* <div className='flex flex-col items-start justify-between gap-4 mt-8 mb-6 font-overpass'>
            <p>Loren Ipsum</p>
            <p>Loren Ipsum</p>
            <p>Loren Ipsum</p>
            <p>Loren Ipsum</p>
            <p>Loren Ipsum</p>
            <p>Loren Ipsum</p>
            </div> */}
            
            <a className="" href='https://forms.gle/agNyHH4QeM8ZB1Cv6' target="_blank"><button className='px-20 sm:px-40 py-2 backdrop-blur-2xl bg-black bg-opacity-10 text-[#2E96F5] text-xl md:text-2xl font-firaSans font-semibold rounded-lg hover:bg-opacity-60 hover:border-white hover:text-white transition-colors duration-700 border-[3px] cursor-pointer border-sky-500 '>Join us</button></a>
          </div>         
          
        </div>
      
    </motion.div>
  );
}

export default Volunteer;
