import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { blogs } from '../constants';
import BlogCard from './BlogCard'; // Make sure the import is correct
import backgroundImage from '/blogsBgd.jpg';


const Blog = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  return (
    <>
    <div
    className='bg-center bg-no-repeat bg-cover'
    style={{backgroundImage: `url(${backgroundImage})`}}
    >
    <motion.div
      variants={fadeIn('down', 'tween', 0.2, 0.5)}
      initial="hidden"
      animate={animationComplete ? 'show' : 'hidden'}
      onAnimationComplete={handleAnimationComplete}
      className="h-full px-[20px] sm:px-[40px] lg:px-[60px] py-5 header"
      
    >
  

      <motion.h1 
      variants={fadeIn('down', 'tween', 0.2, 0.5)}
          initial={animationComplete ? "" : "hidden"}
          whileInView="show"
          onAnimationComplete={handleAnimationComplete}
      className="text-4xl xs:text-5xl lg:text-6xl text-[#FFFFFF] font-extrabold font-firaSans tracking-wider mb-2">
        BLOGS
      </motion.h1>
      <motion.p
        variants={fadeIn('down', 'tween', 0.7, 0.5)}
        initial="hidden"
        animate={animationComplete ? 'show' : 'hidden'}
        onAnimationComplete={handleAnimationComplete}
        className="text-lg sm:text-2xl leading-relaxed font-normal font-overpass tracking-wide"
      >
        Explore Our Insightful Blog Collection
      </motion.p>

      {/* Render each blog card using the blogs data */}
      <div className="mt-10 flex flex-wrap gap-10">
        {blogs.map((blog, index) => (
          <BlogCard
            key={index}
            image={blog.image}
            tags={blog.tags}
            title={blog.title}
            summary={blog.summary}
            author={blog.author}
            date={blog.date}
          />
        ))}
      </div>
    </motion.div>
    </div>
    </>
  );
};

export default Blog;
