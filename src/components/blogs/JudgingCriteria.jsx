import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';
import backgroundImage from '/starsUpscaled.png';


const JudgingCriteria = () => {

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
        className="text-3xl  xs:text-4xl text-center px-10 text-[#FFFFFF] font-extrabold font-firaSans tracking-wider mb-2">
            Decoding the SpaceApps Challenge 2023: How Projects Soar to Victory      
        </motion.h1>


    <div className='flex flex-col justify-between gap-1 px-[21%] my-6 font-firaSans tracking-wide text-xl'>
      <p>Shaiv Mehrotra</p> 
      <p>5 min read | Sep 21, 2023</p>
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
    <p>As you prepare for the thrilling journey of SpaceApps Athlone 2023, you might be wondering how your project will be evaluated and what criteria judges will use to determine the winners. Rest assured, we have a transparent and comprehensive judging process in place to give every participant a clear understanding of what it takes to achieve cosmic success. <span><a className='text-[#eafe07] font-bold italic tracking-wide mx-1' href='https://drive.google.com/file/d/1rMeQlAJnR0sulPwRtlZ9jq3CI2lMb0If/view?usp=sharing'>Download Marks Distribution</a></span></p>
    <img className='my-5 rounded-xl object-contain max-w-full' src='./blog6.jpg' alt='banner' />
    <p><strong>Understanding the Judging Process</strong></p>
    <p> Before we delve into the specific criteria, let's demystify the overall judging process. At SpaceApps Athlone, we value fairness and equity in recognizing the brilliance of each project. Here's how the judging process unfolds:</p>

    <p><b>1. Challenge Domains: </b>The hackathon encompasses various challenge domains, each focusing on different facets of space exploration and technology. Teams compete within these domains, ensuring projects are evaluated within a context that considers their unique themes and objectives.</p>
    <p><b>2. Selection of Top Teams: </b>In each challenge domain, top-performing teams are chosen based on the number of teams participating within that domain. This approach ensures that projects are assessed within the framework of their specific domains, promoting diversity and fairness.</p>
    <p><b>3. Choosing the Winners: </b>From the selected top teams within each challenge domain, the ultimate winners emerge. This meticulous process guarantees that excellence is acknowledged within particular domains, ensuring a level playing field for all teams.</p>
    <p><strong>The Core Judging Criteria</strong></p>
    <p>Now, let`s delve into the heart of the matter—the judging criteria. While we won't divulge the exact scoring details, rest assured that these criteria offer a clear roadmap for your project's evaluation. They are designed to provide a holistic assessment, covering various dimensions to recognize technical expertise, creativity, and innovation.</p>
    <p><b>- Impact: </b>We evaluate how your project can make a significant difference. Does it address a critical problem in an inventive way? Will it inspire and help a large audience?</p>
    <p><b>- Creativity: </b>Innovation is at the core of SpaceApps. We look for projects that bring fresh, imaginative approaches to the challenges. Are you pushing the boundaries of what's possible?</p>
    <p><b>- Validity: </b>Does your solution hold up scientifically? Will it work in the real world? We ensure that projects have a strong foundation.</p>
    <p><b>- Relevance: </b>Is your project directly responsive to the challenge it was submitted for? How complete, technically feasible, and user-friendly is your solution?</p>
    <p><b>- Presentation: </b>Communication is key. We assess how effectively your team tells the story of your project. Can you articulate the challenge, the solution, and why it's important with clarity and persuasiveness?</p>
    <p><strong>Celebrating Diversity and Inclusion</strong></p>
    <p>SpaceApps Athlone is all about celebrating diversity and innovation in all its forms. Our judging criteria are tailor-made to offer an inclusive platform where every team can shine. Whether you're engineering cutting-edge software, crafting inspiring artwork, or devising ingenious solutions, our criteria ensure that your project is evaluated fairly and comprehensively.</p>
    <p>So, whether you're a technical genius, a creative virtuoso, or a hybrid of both, know that the criteria are designed to assess projects in their entirety. The SpaceApps Challenge 2023 is about pushing boundaries, unleashing creativity, and embracing the spirit of exploration. Your journey to the stars begins here, and our judging process is your roadmap to cosmic recognition.</p>
    <p>As we venture closer to the event, stay tuned for more updates. In the meantime, keep stoking your imagination, honing your skills, and preparing to launch your project into the cosmic arena of SpaceApps Athlone 2023. It's a journey like no other, and together, we'll make it truly stellar! 🚀🌌</p>
    <p><span><a className='text-[#eafe07] font-bold italic tracking-wide text-lg md:text-3xl mx-1 ' href='https://drive.google.com/file/d/1rMeQlAJnR0sulPwRtlZ9jq3CI2lMb0If/view?usp=sharing'>Download Marks Distribution</a></span></p>
<p className='font-semibold'>At SpaceApps Athlone, every idea has the potential to change the world, and our judging process ensures that every spark of genius is acknowledged and celebrated! 🌟🌠  <span className='text-[#2E96F5] font-bold text-xl'>#SpaceApps2023</span> <span className='text-[#0960E1] font-bold text-xl'>#CosmicRecognition</span> <span className='text-[#0042A6] font-bold text-xl'>#JudgingCriteria </span> <span className='text-[#eafe07] font-bold text-xl'>#HackAth</span><span className='text-xl font-light'>l</span><span className='text-[#eafe07] font-bold text-xl'>on</span><span className='text-xl font-light'>e</span></p>
    </div>
      </div>
</motion.div>
    </>
  );
}

export default JudgingCriteria;
