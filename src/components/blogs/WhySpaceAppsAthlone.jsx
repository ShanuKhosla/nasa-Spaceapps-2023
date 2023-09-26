import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';
import backgroundImage from '/starsUpscaled.png';


const WhySpaceAppsAthlone = () => {

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
        Blast Off to Success: Seven Reasons to Choose Space Apps Athlone
      </motion.h1>


    <div className='flex flex-col justify-between gap-1 px-[21%] my-6 font-firaSans tracking-wide text-xl'>
      <p>Shaiv Mehrotra & Sneha </p> 
      <p>4 min read | Sep 13, 2023</p>
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
    <p>Are you ready to embark on an extraordinary journey of innovation and discovery at Space Apps Athlone? The countdown has begun, and we're thrilled to share some incredible provisions that await you at this year's hackathon. From access to NASA's Open Data to the chance to win a trip to witness a rocket launch, Space Apps Athlone is packed with opportunities to ignite your creativity and propel your career to new heights.</p>
    <img className='my-5 rounded-xl object-contain max-w-full' src='./blog4.png' alt='banner' />
    <img className='my-5 rounded-xl object-contain max-w-full' src='./blog4.png' alt='banner' />
    <p><strong>1. NASA's Open Data: Fuel Your Imagination</strong></p>
<p>
Space Apps Athlone offers participants exclusive access to NASA's Open Data. Imagine having the vast resources of NASA at your fingertips—satellite imagery, astronomical data, and a treasure trove of information from the cosmos. With this data, the possibilities are as limitless as the universe itself. Whether you're developing a cutting-edge app or conducting groundbreaking research, NASA's Open Data is your launchpad to success.
</p>

<p><strong>2. Networking and Collaboration: Connect with the Best</strong></p>
<p>
One of the most significant benefits of participating in Space Apps Athlone is the opportunity to network and collaborate with industry leaders, subject matter experts, and researchers. Rub shoulders with the best and brightest minds in the field. Forge valuable connections that can open doors to exciting opportunities in the aerospace and technology sectors.
</p>

<p><strong>3. State-of-the-Art Facilities: 48 Hours of Innovation</strong></p>
<p>
For 48 thrilling hours, participants will have access to the TU Shannon Engineering Building—a hub of innovation and inspiration. Here, you can work closely with your teammates in a dynamic environment designed to fuel your creativity. This facility provides the perfect backdrop for brainstorming, prototyping, and turning your ideas into reality.
</p>

<p><strong>4. Hackshop, Hacklab, and Mentorship: Your Toolkit for Success</strong></p>
<p>
At Space Apps Athlone, we've got your back. Access our Hackshop, stocked with an array of hardware, electronics, and materials to bring your projects to life. The Hacklab is your space for tackling challenges related to hardware, electronics, mechanical engineering, and material science. Plus, you'll have mentorship from experienced professionals to guide you every step of the way.
</p>

<p><strong>5. Meals & Beverages: Stay Energized</strong></p>
<p>
We understand that innovation requires fuel. That's why we provide meals and beverages throughout the 48-hour hackathon. Stay energized and focused as you work towards your goals. Whether it's a midnight snack or a quick coffee break, we've got you covered.
</p>

<p><strong>6. Prizes, Awards, and More: Reach for the Stars</strong></p>
<p>
Space Apps Athlone offers participants the chance to win cash prizes, awards, and exclusive hackathon merchandise. But the excitement doesn't end there. The grand prize is a fully funded trip to NASA to witness a rocket launch in person—an experience that's truly out of this world!
</p>

<p><strong>7. Portfolio Boost: Elevate Your Career</strong></p>
<p>
Participating in Space Apps Athlone is not just about the competition. It's about gaining valuable experience that can set you apart in the job market. Add this prestigious hackathon to your portfolio and showcase your skills, teamwork, and problem-solving abilities to future employers and collaborators.
</p>
<p>Space Apps Athlone is not just an event; it's a launchpad for your dreams and aspirations. With NASA's Open Data, top-notch facilities, mentorship, and incredible prizes, you have everything you need to succeed. Join us in exploring the cosmos, pushing the boundaries of technology, and making history at Space Apps Athlone. Your journey to the stars begins here!
</p>
    </div>
      </div>
</motion.div>
    </>
  );
}

export default WhySpaceAppsAthlone;
