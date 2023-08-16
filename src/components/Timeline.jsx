import React, { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { events } from "../constants";
import { motion } from 'framer-motion';
import {fadeIn} from '../utils/motion';
import backgroundImage from '/tester.png';



const EventCard = ({ event }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: '#eafe07',
      color: '#fff'
}}

    contentArrowStyle={{
      borderRight: '10px solid #FFFFFF'
    }}

    date={
    <p className="font-overpass relative bottom-[15px] font-extrabold tracking-wider">
      {event.day}
    </p>
  }

    iconStyle={{
      background: event.iconBg
    }}
    >
    <div>
      <h3 className="text-black text-3xl md:text-3xl leading-tight font-overpass font-normal tracking-wide">
        {event.title}
      </h3>
      <p className="text-black mt-5 max-w-full text-2xl md:text-3xl leading-snug font-overpass font-normal tracking-wide " style={{margin: 0}}>
        {event.date}
      </p>
    </div>

    <ul className=" list-none ml-5 mt-5 space-y-2 mt-5 max-w-full text-md md:text-xl text-base leading-snug font-overpass font-normal tracking-wide text-black">
      {event.points.map((point, index) => (
        <li
          key={`event-point-${index}`}
          className="text-black pl-1 tracking-wider my-3 test-justify"
          >
          {point}
        </li>
      ))}
    </ul>

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
      className="bg-[#07173F] h-full px-8 px-[20px] sm:px-[40px] lg:px-[60px] py-8 md:py-70 bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${backgroundImage})`
      }}
      
    >
      <motion.h1
        variants={fadeIn('right', 'tween', 0.2, 0.4)}
        initial={animationComplete ? "" : "hidden"}
        whileInView="show"
        onAnimationComplete={handleAnimationComplete} // Update the state when animation is complete
        className="text-4xl text-center md:text-5xl lg:text-6xl text-[#FFFFFF] font-extrabold font-firaSans tracking-wider mb-2">
        EVENT TIMELINE
      </motion.h1>
      <motion.div className="mt-20 flex flex-col">
        <VerticalTimeline>
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
