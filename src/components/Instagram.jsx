import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import backgroundImage from '/starsUpscaled.png';

const Instagram = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  return (
    <>
      <motion.div
        style={{ backgroundImage: `url(${backgroundImage})` }}
        className='w-full flex flex-col items-center justify-between px-1 gap-1 bg-center bg-repeat bg-cover '
      >
        <motion.h1
          variants={fadeIn('down', 'tween', 0.5, 0.4)}
          initial={animationComplete ? '' : 'hidden'}
          whileInView='show'
          onAnimationComplete={handleAnimationComplete}
          className='font-firaSans font-bold text-5xl tracking-tight mb-1 text-center'
        >
          Check out our Instagram
        </motion.h1>        
        
        <a href='https://www.instagram.com/spaceappsathlone/' target="_blank" className='font-firaSans cursor-pointer text-[#eafe07] hover:text-[#f6f4f4] transition ease duration-1000 font-bold text-xl no-underline tracking-tight mb-8 text-center'
>
            @spaceappsathlone
        </a>
        
        <motion.div
          variants={fadeIn('down', 'tween', 1.1, 0.7)}
          initial='hidden'
          animate={animationComplete ? 'show' : 'hidden'}
          onAnimationComplete={handleAnimationComplete}
          className='flex flex-row flex-wrap items-start justify-center gap-8 my-3'
        >
         <iframe
            src='https://www.instagram.com/p/CyBirTTxKgP/embed/'
            width={300}
            height={400}
            className='rounded-md'
            frameBorder='0'
            scrolling='no'
            allowtransparency='true'
            allow='encrypted-media'
          /> 
          <iframe
            src='https://www.instagram.com/p/Cxuyn6js_Cn/embed/'
            width={300}
            height={400}
            className='rounded-md'
            frameBorder='0'
            scrolling='no'
            allowtransparency='true'
            allow='encrypted-media'
          />

          <iframe
            src='https://www.instagram.com/p/Cxiw9xRNFtO/embed/'
            width={300}
            height={400}
            className='rounded-md'
            frameBorder='0'
            scrolling='no'
            allowtransparency='true'
            allow='encrypted-media'
          />
          <iframe
            src='https://www.instagram.com/p/CxdsGb7hnqK/embed/'
            width={300}
            height={400}
            className='rounded-md'
            frameBorder='0'
            scrolling='no'
            allowtransparency='true'
            allow='encrypted-media'
          />


        </motion.div>
      </motion.div>
    </>
  );
};

export default Instagram;
