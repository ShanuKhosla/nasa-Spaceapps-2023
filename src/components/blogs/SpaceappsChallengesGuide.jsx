import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';
import backgroundImage from '/starsUpscaled.png';


const SpaceappsChallengesGuide = () => {

    const [animationComplete, setAnimationComplete] = useState(false);
    const [isLiked, setIsLiked] = useState(() => {
        const savedLiked = JSON.parse(localStorage.getItem('isLiked'));
        return savedLiked !== null ? savedLiked : false;
      });    const [likeCount, setLikeCount] = useState(() => {
        const savedLikeCount = JSON.parse(localStorage.getItem('likeCount'));
        return savedLikeCount !== null ? savedLikeCount : 482; // Default like count to 971
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
        className="text-3xl w-[90%] md:w-[80%] lg:w-[63%] mx-auto  xs:text-4xl text-center text-[#FFFFFF] font-extrabold font-firaSans tracking-wider mb-2">
        Navigating the SpaceApps Hackathon Challenges: A Guide to Choosing Your Path
      </motion.h1>


    <div className='flex flex-col justify-between gap-1 px-[21%] my-6 font-firaSans tracking-wide text-xl'>
      <p>Shaiv Mehrotra</p>
      <p>4 min read | Sep 4, 2023</p>
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
    <p>Are you ready to embark on an interstellar journey of creativity, data analysis, game development, and space exploration? The NASA SpaceApps Challenge 2023 is here, and it brings with it a galaxy of exciting challenges to choose from. With 31 unique challenges spanning four distinct domains, it's time to chart your course among the stars. In this blog post, we'll guide you through how to choose the perfect challenge for your journey.</p>
    <img className='my-5 rounded-xl object-contain max-w-full' src='./blog3.png' alt='banner' />
    <p><b> A Multiverse of Domains: Explore Diverse Challenges </b></p>
    <p>The SpaceApps Hackathon 2023 features a diverse range of challenges spread across several domains:</p>
    <p> <b>Space Exploration:</b>  These challenges revolve around exploring the cosmos, understanding celestial phenomena, and solving real-world problems related to space travel.</p>
    <p> <b>Creative:</b>  Unleash your artistic and imaginative side with challenges that encourage storytelling, visualizations, and engaging content creation related to space and science.</p>
    <p> <b>Data Science:</b>  Dive deep into data analytics and visualization to uncover insights from various space-related datasets, contributing to scientific discoveries and innovations.</p>
    <p> <b>Game Development:</b>  If you're a gaming enthusiast, these challenges allow you to craft interactive experiences and educational games centered around space and science themes.</p>
    <p><b>Climate:</b>Tackle challenges related to climate science, sustainability, and environmental awareness, making a positive impact on our planet.</p>
    <p><b>Art:</b>Fuse science and art by participating in challenges that encourage artistic expressions inspired by space and scientific concepts.</p>
    <p><b>Open Sciences:</b>Dive into the world of open science projects, contributing to collaborative research and discovery.</p>
    <p><b>Difficulty Levels: Beginner, Intermediate, and Advanced</b></p>
    <p>Each challenge is tagged with a difficulty level, making it easier for participants to find the one that matches their skills and experience:</p>
    <p><b>-  Beginner: </b> These challenges are ideal for newcomers or those looking to get started in a specific domain. They often provide step-by-step guidance.</p>
    <p><b>-  Intermediate:</b>  If you have some experience and want a challenge that requires a bit more expertise, intermediate-level challenges offer complexity without being overwhelmingly difficult.</p>
    <p><b>-  Advanced: </b> For the seasoned veterans and experts, advanced challenges present complex problems that demand in-depth knowledge and innovative solutions.</p>
    <p><b> Choosing Your Challenge </b></p>
    <p>With a multitude of challenges to explore, how do you choose the right one for you? Here's a step-by-step guide:</p>
    <p><b>1.  Registration:</b>  First, make sure to register for the SpaceApps Hackathon. Once registered, you'll gain access to the entire pool of challenges.</p>
    <p><b>2. Exploration:</b> Take your time to explore the challenges. Read the challenge descriptions to understand the problem statement, goals, and expected outcomes.</p>
    <p><b>3. Filter by Domain:</b> Narrow down your choices by selecting the domain that aligns with your interests and skills—space exploration, creative, data science, or game development.</p>
    <p><b>4. Filter by Difficulty:</b> Choose a difficulty level that suits your expertise. If you're new to the field, start with beginner challenges to build your confidence.</p>
    <p><b>5. Passion and Interest:</b> Consider what genuinely excites you. Passion fuels creativity and innovation, so pick a challenge that resonates with your interests.</p>
    <p><b>6. Team or Solo:</b> Decide whether you want to work alone or collaborate with a team. Some challenges may require interdisciplinary skills, making teamwork valuable.</p>
    <p><b>7. Diversity:</b> Don't limit yourself to just one challenge. Feel free to explore multiple challenges from different domains and difficulty levels to expand your horizons.</p>
    <p>By following these steps, you'll be well on your way to selecting the perfect challenge that aligns with your skills, passion, and goals. Remember that the SpaceApps Hackathon is not just a competition; it's a learning opportunity, a chance to collaborate with like-minded individuals, and a platform to contribute to space science and exploration.</p>
    <p>So, whether you're a beginner stargazer or an advanced space aficionado, there's a challenge waiting for you. Get ready to embark on your cosmic journey at the SpaceApps Hackathon 2023, and may the stars guide your way.</p>
    </div>
      </div>
</motion.div>
    </>
  );
}

export default SpaceappsChallengesGuide;
