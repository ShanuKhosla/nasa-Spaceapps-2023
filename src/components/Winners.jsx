import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import backgroundImage from '/starsUpscaled.png';


const Winners = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };
  
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    const [animationComplete, setAnimationComplete] = useState(false);

    const handleAnimationComplete = () => {
      setAnimationComplete(true);
    };

  return (
    <>
    <motion.div
      className="h-full px-[20px] sm:px-[40px] lg:px-[60px] py-5  bg-center bg-no-repeat bg-cover "
      style={{backgroundImage: `url(${backgroundImage})`}}
      variants={fadeIn('down', 'tween', 0.3, 0.4)}
          initial={animationComplete ? "" : "hidden"}
          whileInView="show"
          onAnimationComplete={handleAnimationComplete}
    >



  
      <motion.h1 
      variants={fadeIn('down', 'tween', 0.7, 0.2)}
          initial={animationComplete ? "" : "hidden"}
          whileInView="show"
          onAnimationComplete={handleAnimationComplete}
      className="text-3xl text-center xs:text-5xl lg:text-6xl text-[#FFFFFF] font-extrabold font-firaSans tracking-wider mb-2">
      Our Crowned Champions
      </motion.h1>
      <motion.p
        variants={fadeIn('down', 'tween', 0.9, 0.2)}
        initial="hidden"
        animate={animationComplete ? 'show' : 'hidden'}
        onAnimationComplete={handleAnimationComplete}
        className="text-2xl text-center font-bold text-[#eafe07] sm:text-3xl leading-relaxed font-overpass tracking-wide"
      >
        Where Innovation Meets Excellence      
        </motion.p>
        <motion.div
              variants={fadeIn('', '', 1, 1)}
              initial="hidden"
              animate={animationComplete ? 'show' : 'hidden'}
              onAnimationComplete={handleAnimationComplete}
              className='flex items-center md:space-x-6 flex-col justify-center my-5 md:flex-row'

        >
           {isMobile ? (
        <>
          <img className='w-full md:w-1/3 p-5 shadow-2xl' src='./firstPos.jpg' />
          <img className='w-full md:w-1/3 p-5 shadow-2xl' src='./secondPos.jpg' />
          <img className='w-full md:w-1/3 p-5 shadow-2xl ' src='./thirdPos.jpg' />
        </>
      ) : (
        <>
          <img className='w-full md:w-1/3 p-5 shadow-2xl md:relative md:top-8' src='./secondPos.jpg' />
          <img className='w-full md:w-1/3 p-5 shadow-2xl' src='./firstPos.jpg' />
          <img className='w-full md:w-1/3 p-5 shadow-2xl md:relative md:top-16' src='./thirdPos.jpg' />
        </>
      )}

        </motion.div>
    </motion.div>
    </>
  )
}

export default Winners