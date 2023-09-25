import React from 'react';
import { Link } from 'react-router-dom';
import  Tilt  from 'react-tilt';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { blogs } from '../constants';

const BlogCard = ({ image, title, summary, author, date, link }) => {

  const handleReadMoreClick = () => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  };


    return (
      <motion.div variants={fadeIn('down', 'spring', 1.2, 2)} className="">
        <Tilt
          options={{
            max: 10,
            scale: 1,
            speed: 50
          }}
          className="bg-[#07173F] shadow-xl rounded-2xl sm:w-[360px] w-full h-full"
          
        >
          <div>
            <img
              src={image}
              alt="Blog Image"
              className="w-full h-[50%] object-contain rounded-t-2xl rounded-b-none"
              style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
            />
          </div>
  
          <div className="p-5">
            <div className="mt-1 mb-5">
              <h2 className="text-lg sm:text-xl lg:text-xl mb-2 font-overpass font-extrabold tracking-tight">
                {title}
              </h2>
              <p className="text-md font-overpass font-thin">{summary}</p>
            </div>
            <div className="flex flex-row align-center justify-between ">
              <div className="">
                <p className="text-[15px] font-overpass font-semibold">{author}</p>
                <p className="text-[15px] font-overpass font-semibold">{date}</p>
              </div>
              <Link className='' to={link} onClick={handleReadMoreClick}>
              <button className="bg-[#07173F] text-xl font-firaSans cursor-pointer hover:bg-[#eafe07] hover:text-black transition duration-700 px-4 py-1 rounded-md border-1 border-white">
                Read More
              </button>
            </Link>
            </div>
          </div>
        </Tilt>
      </motion.div>
    );
  };

export default BlogCard;
