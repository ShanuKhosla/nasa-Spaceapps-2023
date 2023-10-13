/* eslint-disable react/no-unescaped-entities */
import {useState} from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import backgroundImage from '/starsUpscaled.png';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { teamReviews } from '../constants';

const TestimonialCard = ({image, testimonial, teamname}) => {
  return (
    <>
      <div className='flex h-fit bg-black/80 my-6 p-4 my rounded-xl flex-col md:flex-row items-center gap-5 w-full justify-center backdrop-blur-2xl shadow-xl'>
      {/* <div className='bg-white rounded-full w-[300px] h-[300px] overflow-hidden'>
          <img
            className='w-full h-full object-cover'
            src={image}
            alt='team image'
          />
        </div> */}
        <div className='w-full md:w-[70%] flex items-center justify-between gap-5 text-justify flex-col'>
          <p className='italic text-center my-8 w-[90%] text-lg md:text-2xl leading-snug font-overpass font-light tracking-tight text-[#f5f7f8]'>
          “{testimonial}”
          </p>
          <p className='text-justify max-w-full md:max-w-[90%] text-2xl leading-snug font-overpass font-extrabold tracking-tight text-[#f5f7f8]'>
           {teamname}
          </p>
        </div>
      </div>
    </>
  );
};


const Testimonials = () => {
    const [animationComplete, setAnimationComplete] = useState(false);

    const handleAnimationComplete = () => {
      setAnimationComplete(true);
    };

  return (
    <>
    <motion.div
      className="h-full px-[20px] sm:px-[40px] lg:px-[60px] py-5 my-10 mt-20  bg-center bg-no-repeat bg-cover "
      style={{backgroundImage: `url(${backgroundImage})`}}

    >


    
  
      <motion.h1 
      variants={fadeIn('down', 'tween', 0.7, 0.2)}
          initial={animationComplete ? "" : "hidden"}
          whileInView="show"
          onAnimationComplete={handleAnimationComplete}
      className="text-3xl text-center xs:text-5xl lg:text-6xl text-[#FFFFFF] font-extrabold font-firaSans tracking-wider mb-2">
      Hackathon Unplugged: Team Stories
      </motion.h1>
      <motion.p
        variants={fadeIn('down', 'tween', 0.9, 0.2)}
        initial="hidden"
        animate={animationComplete ? 'show' : 'hidden'}
        onAnimationComplete={handleAnimationComplete}
        className="text-lg text-center italic font-light my-5 text-[#eafe07]  leading-relaxed font-overpass tracking-wide"
      >
        “Let's hear what the Teams have to say”
        </motion.p>
        <Carousel
        autoPlay={true}
        interval={5000}
        stopOnHover={true}
        showThumbs={true}
        showStatus={false}
        showArrows={true}
        infiniteLoop={true}
        transitionTime={500}
        className='p-5 h-fit'
        
        >
        {teamReviews.map((review, index) => (
            <TestimonialCard
              key={index} 
              testimonial={review.testimonial} 
              teamname={review.teamname} 
            />
          ))} 
        </Carousel>
        
        
        </motion.div>
</>
  )
}

export default Testimonials