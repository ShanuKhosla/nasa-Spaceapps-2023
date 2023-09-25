import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';
import backgroundImage from '/starsUpscaled.png';


const SpaceExploration = () => {

    const [animationComplete, setAnimationComplete] = useState(false);
    const [isLiked, setIsLiked] = useState(() => {
        const savedLiked = JSON.parse(localStorage.getItem('isLiked'));
        return savedLiked !== null ? savedLiked : false;
      });    const [likeCount, setLikeCount] = useState(() => {
        const savedLikeCount = JSON.parse(localStorage.getItem('likeCount'));
        return savedLikeCount !== null ? savedLikeCount : 971; // Default like count to 971
      });

      useEffect(() => {
        localStorage.setItem('likeCount', JSON.stringify(likeCount));
      }, [likeCount]);

      
  useEffect(() => {
    localStorage.setItem('isLiked', JSON.stringify(isLiked));
  }, [isLiked]);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  

  const handleLikeClick = () => {
    if (isLiked) {
      setLikeCount(prevCount => prevCount - 1);
    } else {
      setLikeCount(prevCount => prevCount + 1);
    }
    setIsLiked(!isLiked);
  };


return (
    <>
         <motion.div
    style={{backgroundImage: `url(${backgroundImage})`}}      
    className="h-full bg-center bg-repeat px-[1%] overflow-x-hidden"
      >

<a className='absolute left-2 top-[105px] no-underline' href="/blogs"><button className='invisible lg:visible font-firaSans bg-black cursor-pointer hover:bg-[#eafe07] hover:text-black transition ease duration-500 flex relative top-1 font-bold tracking-wide text-xl px-3 py-1 border-2 border-sky-500 shadow-2xl rounded-md'>Back</button></a>


      <div className=''>
      <motion.h1
        variants={fadeIn('right', 'tween', 0.2, 0.6)}
        initial={animationComplete ? "" : "hidden"}
        whileInView="show"
        onAnimationComplete={handleAnimationComplete}
        className="text-3xl  xs:text-4xl text-center text-[#FFFFFF] font-extrabold font-firaSans tracking-wider mb-2">
        The Importance of Diversity in Space Exploration
      </motion.h1>


    <div className='flex flex-col justify-between gap-1 px-[21%] my-6 font-firaSans tracking-wide text-xl'>
      <p>Mitrashi Das</p>
      <p>5 min read | Aug 04, 2023</p>
    </div>

    <hr className='opacity-30 w-[90%] md:w-[80%] lg:w-[63%] mx-auto' />
        <div className='px-[21%] my-4'>
        <div className='flex flex-row items-center gap-1.5 font-firaSans '>
        <button
        className=''
    onClick={handleLikeClick}
    style={{ border: 'none', background: 'none', cursor: 'pointer' }}
  >
    {isLiked ? (
      <img className='' src="./like.png" width={25} alt="liked" />
    ) : (
      <img className='' src="./unlike.png" width={25} alt="like" />
    )}
  </button>
        </div>
        {/* <img
            src={isPlaying ? './pause.png' : './play.png'}
            width={25}
            alt='play-pause'
            onClick={handleToggleSpeech}
            style={{ cursor: 'pointer' }}
          /> */}
        </div>


    <hr className='opacity-30 w-[90%] md:w-[80%] lg:w-[63%] mx-auto' />

    <div className='mt-8 mb-4 text-lg mx-auto font-overpass font-light tracking-tight leading-normal text-justify max-w-[90%] md:max-w-[75%] lg:max-w-[60%] flex flex-col items-center gap-6'>
    <p>Space exploration is one of the most important endeavors of our time. It has the potential to transform our understanding of the universe, and help us develop new technologies that can benefit humanity as a whole. But to reach its full potential, space exploration must be inclusive and diverse. Diversity in spatial analysis is important for many different reasons. </p>
    <img className='my-5 rounded-xl object-contain max-w-full' src='./blog1.png' alt='banner' />
    <p><b>First</b>, it can bring a broader perspective on the challenges of spatial exploration. With teams of scientists, engineers and astronauts, we are able to think critically and solve problems in new and innovative ways.</p>
    <p><b>Second</b>, the diversity of space exploration helps us to be an inclusive and equitable society. Seeing people from all walks of life represented in the space program sends the message that everyone has a place in the future of space exploration. This can inspire young people from all walks of life to pursue careers in STEM fields, helping us build a more just and equitable world.</p>
    <p><b>Ultimately</b>, diverse spatial exploration is just the right thing to do. No one group of people has a monopoly on knowledge or skills. If we want to reach our full potential in the space, we need to attract the talents and insights of people from all walks of life.</p>
    <p>There are many ways to increase diversity in spatial exploration. We can start by ensuring that our educational institutions provide opportunities for students from all backgrounds to study STEM subjects. We can also work to increase visibility for women and minorities in the space program, fostering a welcoming and inclusive environment.</p>
    <p>By diversifying space exploration, we can help ensure that it is more successful, fairer, and more representative of the world in which we live.Here are some specific examples of how diversity has helped advance space exploration:</p>
    <p>In the early days of the space program, women were excluded from many important roles. However, many women, such as Catherine Johnson and Margaret Hamilton, were able to make important contributions. Their work contributed to the success of the Apollo mission.</p>
    <p>In recent years, there has been a growing movement to increase the number of people of color in the space program. This group has been able to bring more diversity to the program, as well as help inspire young people of color to pursue careers in STEM fields. There is also a growing movement to increase the number of people with disabilities in the space program. This movement is important because it shows that people with disabilities can be as successful as anyone else in the space.</p>
    <p>These are just a few examples of how diversity has helped advance space exploration. As we explore the universe, it is important to continuously increase the diversity of the spatial system. This will help us reach our full potential in the space, and help create an inclusive and equitable society.</p>
    </div>
      </div>
</motion.div>
    </>
  );
}

export default SpaceExploration;
