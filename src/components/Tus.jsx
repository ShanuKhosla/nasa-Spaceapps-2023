/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import backgroundImage from '/tusStrips.png';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import tusMarker from "/marker.png"
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import { Carousel } from 'react-responsive-carousel';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';


const Tus = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  const latitude = 53.45710720439234;
  const longitude = -7.897407425947888;

  const customIcon = L.icon({
    iconUrl: tusMarker, // Replace with the actual path to the icon
    iconSize: [40, 40],
    iconAnchor: [32, 32],
  });

  const logos = [
    { id: 1, src: '/tus1.jpg' },
    { id: 2, src: '/tus2.jpg' },
    { id: 3, src: '/tus3.jpg' },
    { id: 4, src: '/tus4.jpg' },
  ];

  const [isCarouselPaused, setIsCarouselPaused] = useState(false);

  return (
    <>

    <motion.div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: '21%'
      }}
      className="h-full w-full mt-20 py-8 overflow-x-hidden bg-[#000000] bg-contain bg-repeat-y bg-right"
    >
      <div className="px-[20px] sm:px-[40px] lg:px-[60px] ">
        <motion.h1
          variants={fadeIn('right', 'tween', 0.2, 0.4)}
          initial={animationComplete ? '' : 'hidden'}
          whileInView="show"
          onAnimationComplete={handleAnimationComplete}
          className="text-4xl max-w-[80%] md:w-full  xs:text-5xl lg:text-6xl font-extrabold text-white font-firaSans tracking-wide mb-2"
        >
          Technology University of the Shannon
        </motion.h1>

        <motion.p
          variants={fadeIn('down', 'tween', 1.2, 0.4)}
          initial={animationComplete ? '' : 'hidden'}
          whileInView="show"
          onAnimationComplete={handleAnimationComplete}
          className="text-justify my-8 max-w-full md:max-w-[90%] text-lg md:text-xl leading-snug font-overpass font-normal tracking-wide text-white w-[76%] md:w-[75%]"
        >
        <span className='font-black text-[#eafe07]'>NASA Spaceapps Challenge 2023</span> is being held at the heart of Ireland, Athlone. <span className='font-black text-[#eafe07]'>Technology University of the Shannon</span> is being presented as the host location for this massive in-person hackathon. The university needs no introduction for its merits in innovation and technology, preaching knowledge and excellence to over <span className='font-black text-[#eafe07]'>7000+</span> students. It is also responsible for supporting the hackathon with technological components, hackshop materials and subject matter experts to provide mentorship for a smooth and exciting event.</motion.p>
      </div>
      <div className="px-[20px] sm:px-[40px] lg:px-[60px]">
      <MapContainer center={[53.41799981189298, -7.9051877486443285]} zoom={16} scrollWheelZoom={false}>
      <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker 
      position={[53.41799981189298, -7.9051877486443285]} 
      icon={customIcon}
      >
      <Popup>
      <Carousel 
      showStatus={false} 
      showIndicators={false} 
      showThumbs={false}
      showArrows={false}
      autoPlay={!isCarouselPaused}
      infiniteLoop
      onMouseEnter={() => setIsCarouselPaused(true)} // Pause on hover
      onMouseLeave={() => setIsCarouselPaused(false)} // Resume on unhover
      className=''>
      {logos.map((logo) => (
          <div key={logo.id} className="flex items-center justify-center p-7"> {/* Adjust width and height as needed */}
            <img
              src={logo.src}
              alt={`Logo ${logo.id}`}
              className="max-h-full max-w-full"
            />
          </div>
        ))}
              </Carousel>     
      </Popup>
      </Marker>
    </MapContainer>
      </div>
    </motion.div>
    <div className='h-[100px]' id='winners' />
    </>
  );
};

export default Tus;
