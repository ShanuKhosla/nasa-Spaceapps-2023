/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '/spaceAgencies.png';
import { fadeIn } from '../utils/motion';
import './styles/CustomTexts.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { dayones } from "../constants";



const EventCard = ({ dayone }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: '#eafe07',
      color: '#fff',
      
      
      
}}

    contentArrowStyle={{
      borderRight: '10px solid #FFFFFF',
      
      
    }}

    

    icon={
      <div className='bg-black rounded-full flex justify-center items-center w-full h-full'>
      <img
          src={dayone.icon}
          className="w-[90%] h-[90%] object-contain rounded-full relative"
          />
          </div>
    }

    date={
    <p className="font-overpass text-black lg:text-white relative bottom-[15px] font-extrabold tracking-wider">
      {dayone.day}
    </p>
  }
    >
    <div>
      <h3 className="text-black text-3xl md:text-3xl tracking-tight font-overpass font-normal ">
        {dayone.title}
      </h3>

    </div>

    <ul className=" list-none max-w-full text-md md:text-xl font-overpass font-normal text-black">
      {dayone.points.map((point, index) => (
        <li
          key={`event-point-${index}`}
          className="text-black text-justify tracking-tight leading-tight pl-1 tracking-tight leading-tight my-2 "
          >
          {point}
        </li>
      ))}
    </ul>


  </VerticalTimelineElement>
);



const DayOne = () => {

    const [animationComplete, setAnimationComplete] = useState(false);

    const handleAnimationComplete = () => {
      setAnimationComplete(true);
    };
   

  return (
    <motion.div
    style={{
    backgroundImage: `url(${backgroundImage})`}}
     className="h-full w-full py-8 md:py-70 overflow-x-hidden bg-[#ffffff] bg-cover bg-no-repeat bg-bottom">
    <div className='px-[20px] sm:px-[40px] lg:px-[60px]'>      
      <motion.h1
        variants={fadeIn('right', 'tween', 0.2, 0.4)}
        initial={animationComplete ? '' : 'hidden'}
        whileInView="show"
        onAnimationComplete={handleAnimationComplete}
        className="text-4xl  xs:text-5xl lg:text-6xl font-extrabold text-white font-firaSans tracking-wider mb-2"
      >
        DAY 1
      </motion.h1>

      <motion.h2
        variants={fadeIn('down', 'tween', 0.6, 0.4)}
        initial={animationComplete ? "" : "hidden"}
        whileInView="show"
        onAnimationComplete={handleAnimationComplete} // Update the state when animation is complete
        className="md:w-[95%] text-1xl sm:text-2xl lg:text-3xl text-[#EAFE07] my-5 leading-tight font-overpass font-normal tracking-wide">
        FRIDAY, OCTOBER 6
      </motion.h2>
    </div>
    <motion.div className="relative right-[3px] flex flex-col">
        <VerticalTimeline>
        <div></div>
          {dayones.map((dayone, index) => (
            <EventCard key={index} dayone={dayone} />
          ))}
        </VerticalTimeline>
      </motion.div>
    </motion.div>
  );
}

export default DayOne;
