import React, { useState } from 'react';
import backgroundImage from '/discoverSpace.png';
import "./styles/CustomTexts.css"
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, textVariant } from '../utils/motion';
import { TypingText } from "./CustomTexts";
import CountUp from 'react-countup';

const ParticipationDetails = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  return (
    <>
      <motion.div
        className="translucent-background h-full w-full px-[20px] sm:px-[30px] lg:px-[60px] py-8 md:py-70 bg-[#FFFFFF] bg-center bg-no-repeat  bg-cover overflow-x-hidden"
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
          className="text-4xl text-center  xs:text-5xl lg:text-6xl text-[#ffffff] font-extrabold font-firaSans tracking-wider mb-2"
        >
          DISCOVER
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
            className="text-center mt-5 max-w-full md:max-w-[58%] text-md md:text-2xl leading-snug font-overpass font-bold tracking-normal  md:tracking-wider text-[#07173F]"
          >
            <span className='font-semibold text-white'>GLOBAL NUMBERS</span> <span className='font-light text-white'>FROM OUR</span> <span className='font-black text-[#eafe07]'>PREVIOUS EVENT</span>
          </motion.p>

          <hr className="border-t-2 border-white w-[80%] my-10" />

          <div className='flex flex-col lg:flex-row gap-10 items-center justify-between text-center'>
            <motion.div
              variants={fadeIn('down', 'tween', 0.6, 0.4)}
              initial={animationComplete ? "" : "hidden"}
              whileInView="show"
              onAnimationComplete={handleAnimationComplete}
              className='gap-5 mx-10'
            >
              <div className="text-4xl text-center xs:text-5xl lg:text-6xl text-[#ffffff] font-extrabold font-firaSans tracking-wider text-center relative left-3">
  <CountUp
    start={animationComplete ? 0 : null}
    end={28286}
    duration={5.4}
    delay={1.0}
    separator=","
    useEasing={true}
    onAnimationEnd={handleAnimationComplete}
  >
  </CountUp>
</div>
              <p className='text-2xl mt-2 font-overpass text-center relative left-[5px] font-semibold tracking-wide'>
                Registered <br /> Participants
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn('down', 'tween', 1.0, 0.4)}
              initial={animationComplete ? "" : "hidden"}
              whileInView="show"
              onAnimationComplete={handleAnimationComplete}
              className='gap-5 mx-10'
            >
              <CountUp
                start={animationComplete ? 0 : null}
                end={323}
                duration={5.4}
                delay={1.4}
                separator=","
                useEasing={true}
                onAnimationEnd={handleAnimationComplete}
                className="text-4xl text-center xs:text-5xl lg:text-6xl text-[#ffffff] font-extrabold font-firaSans tracking-wider mb-2 text-center relative"
              />
              <p className='text-2xl mt-2 font-overpass text-center font-semibold tracking-wide'>
                Local Virtual <br /> Events
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn('down', 'tween', 1.4, 0.4)}
              initial={animationComplete ? "" : "hidden"}
              whileInView="show"
              onAnimationComplete={handleAnimationComplete}
              className='gap-5 mx-10 relative'
            >
              <CountUp
                start={animationComplete ? 0 : null}
                end={4534}
                duration={5.4}
                delay={1.8}
                separator=","
                useEasing={true}
                onAnimationEnd={handleAnimationComplete}
                className="text-4xl text-center xs:text-5xl lg:text-6xl relative text-[#ffffff] font-extrabold font-firaSans tracking-wider mb-2 text-center relative"
              />
              <p className='text-2xl mt-2 font-overpass text-center font-semibold tracking-wide'>
                Teams <br /> Participated
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn('down', 'tween', 1.8, 0.4)}
              initial={animationComplete ? "" : "hidden"}
              whileInView="show"
              onAnimationComplete={handleAnimationComplete}
              className='gap-5 mx-10'
            >
              <CountUp
                start={animationComplete ? 0 : null}
                end={12}
                duration={5.4}
                delay={2.2}
                separator=","
                useEasing={true}
                onAnimationEnd={handleAnimationComplete}
                className="text-4xl text-center xs:text-5xl lg:text-6xl text-[#ffffff] font-extrabold font-firaSans tracking-wider mb-2 text-center relative"
              />
              <p className='text-2xl mt-2 font-overpass text-center font-semibold tracking-wide'>
                International <br/> Space Agencies
              </p>
            </motion.div>
          </div>

          <hr className="border-t-2 border-white w-[80%] my-10" />

        </motion.div>
      </motion.div>
    </>
  );
}

export default ParticipationDetails;
