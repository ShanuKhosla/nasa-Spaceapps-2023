/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { events } from "../constants";
import { motion } from 'framer-motion';
import {fadeIn} from '../utils/motion';
import backgroundImage from '/timelineBg.png';



const EventCard = ({ event }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: '#eafe07',
      color: '#fff',
      
      
      
}}

    contentArrowStyle={{
      borderRight: '10px solid #FFFFFF',
      
      
    }}

    date={
    <p className="font-overpass text-black lg:text-white relative bottom-[15px] font-extrabold tracking-wider">
      {event.day}
    </p>
  }

    icon={
      <div className='bg-black rounded-full flex justify-center items-center w-full h-full'>
      <img
          src={event.icon}
          className="w-[90%] h-[90%] object-contain rounded-full relative"
          />
          </div>
    }
    >
    <div>
      <h3 className="text-black text-3xl md:text-3xl tracking-tight font-overpass font-normal ">
        {event.title}
      </h3>
      <p className="text-black mt-5 max-w-full text-2xl md:text-3xl  font-overpass font-extrabold" style={{margin: 0}}>
        {event.date}
      </p>
    </div>

    <ul className=" list-none max-w-full text-md md:text-xl font-overpass font-normal text-black">
      {event.points.map((point, index) => (
        <li
          key={`event-point-${index}`}
          className="text-black text-justify  pl-1 tracking-tight leading-tight my-2 "
          >
          {point}
        </li>
      ))}
    </ul>

    <a target='_blank' className='pointer btn' href={event.links} rel="noreferrer"><button className='pointer bg-black px-3 py-2 text-white rounded-md text-md font-semibold font-overpass tracking-snug' style={{ cursor: 'pointer' }}>{event.button}</button></a>

  </VerticalTimelineElement>
);



const Timeline = () => {

  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };
  return(
    <>

    <motion.div
      className="bg-[#07173F] h-full  px-[20px] sm:px-[40px] lg:px-[60px] py-6 md:py-[115px] bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${backgroundImage})`
      }}
      
    >
      <motion.h1
        variants={fadeIn('right', 'tween', 0.2, 0.4)}
        initial={animationComplete ? "" : "hidden"}
        whileInView="show"
        onAnimationComplete={handleAnimationComplete} // Update the state when animation is complete
        className="text-4xl text-center md:text-5xl mb-[4%] lg:text-6xl text-[#FFFFFF] font-extrabold font-firaSans tracking-wider">
        EVENT TIMELINE
      </motion.h1>
      <motion.div className="relative right-[3px] flex flex-col">
        <VerticalTimeline>
        <div></div>
          {events.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </VerticalTimeline>
      </motion.div>
    </motion.div>
    </>
  );
}

export default Timeline;
