import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';
import backgroundImage from '/starsUpscaled.png';


const SpaceappsConnect = () => {

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
            Unlocking SpaceApps Connect: Your Ultimate Guide        
        </motion.h1>


    <div className='flex flex-col justify-between gap-1 px-[21%] my-6 font-firaSans tracking-wide text-xl'>
      <p>Sneha</p> 
      <p>6 min read | Sep 24, 2023</p>
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

    <div className='mt-8 mb-4 text-lg mx-auto font-overpass font-light tracking-tight leading-normal text-justify max-w-[90%] md:max-w-[75%] lg:max-w-[60%] flex flex-col items-start gap-5'>
          <p>Are you ready to dive into SpaceApps Connect for an enriching NASA International Space Apps Challenge 2023 experience? Look no further because we've got your comprehensive guide right here!</p>
          <p><i>Please note that while this guide provides a sneak peek, some visual elements may differ slightly from the platform you'll use in the 2023 NASA Space Apps Challenge.</i></p>
    <img className='my-5 rounded-xl object-contain max-w-full' src='./blog8.jpg' alt='banner' />
          
    <p><b>SpaceApps Connect: Where the Magic Happens</b></p>
        <p>SpaceApps Connect, formerly known as Space Apps Chat, takes center stage this year on GitHub Discussions. It's important to highlight that SpaceApps Connect is entirely FREE and is OPTIONAL for participants to utilize. However, understanding how this platform functions will be invaluable for participants.</p>
        <p>SpaceApps Connect acts as the collaborative communication hub for the NASA International Space Apps Challenge community. Within this digital space, you'll find Local Leads, Navigators, Subject Matter Experts (SMEs), Global Collaborators, Participants, and the NASA Space Apps Global Organizing (GO) Team, all coming together to create an atmosphere of innovation and learning.</p>
          <p><b>Participants can use this platform to:</b></p>
          <p><b>1) Find Teammates: </b> Connect with like-minded individuals and form teams to tackle challenges.</p>
          <p><b>2) Seek Guidance: </b> Ask questions about challenges, access resources, and learn from the Space Apps community.</p>
          <p><b>3) Collaborate: </b>Engage in discussions, brainstorm ideas, and explore creative solutions.</p>
          <p><b>Code of Conduct: Ensuring a Professional Atmosphere</b></p>
          <p>At NASA Space Apps, professionalism and respect are paramount. We've put together a code of conduct to create a safe and inclusive space. If you encounter any issues, such as discrimination, harassment, or bullying, don't hesitate to contact your Local Team. We're here to ensure a productive and welcoming environment.</p>
          <p><b>How to Join Space Apps Connect </b></p>
          <p>To dive into SpaceApps Connect, you'll need a GitHub account. Here's a quick rundown:</p>
          <p>1) Visit github.com.</p>
          <p>2) If you don't have a GitHub account, sign up (top right).</p>
          <p>3) Create your account using the same email address that you used to register yourself on the Nasa Spaceapps Challenge. </p>
          <p>4) Optional: Customize your username for easy identification within the Space Apps community (e.g., FirstName-Local-Event).</p>
          <p>5) Once you've verified your account, welcome to the GitHub community!</p>
          <p><b>Navigating to the Space Apps Repository</b></p>
          <p>Once you're logged in, head to the Space Apps repository by either typing "www.github.com/nasa/spaceapps/" in your browser's address bar or using GitHub's search feature. Once there, click on the "Discussions" tab.</p>
<p><b>Categories & How to Post a Discussion</b></p>
<p>Categories make navigation a breeze. As a participant, you'll have access to specific categories, including Welcome, Announcements, Challenges, Find A Team, General, Global Offers, Languages, Local Events, Project Submission Help, and Random. Each category serves a unique purpose.</p>
<p>Before posting, search for similar discussions to avoid duplication. When writing a title, make it clear, concise, and informative. Then, select the relevant category and hit "Start discussion."</p>

<p><b>Etiquette for Posting in Space Apps Connect</b></p>
<p>Ensure you search for similar discussions before creating a new one. Write clear and concise titles to facilitate easy identification. Mention other users using "@" followed by their GitHub username, but please avoid spamming.</p>

<p><b>How to Comment On A Discussion</b></p>
<p>Engage in discussions by clicking on the one you want and adding your comment in the content box.</p>

<p><b>How to Reference Another Discussion</b></p>
<p>If you need to reference another discussion, click on the word bubble icon in the content section of your post and select the desired discussion.</p>

<p><b>How to Search and Filter for a Discussion Using Labels</b></p>
<p>Before creating a new discussion, search for existing ones. Use filters to refine your search, and remember, the more labels you select, the more specific your results.</p>

<p><b>How to Close a Discussion</b></p>
<p>Once a discussion is resolved or no longer relevant, close it to keep the space organized. Select "Close discussion" or provide a reason for closure.</p>

<p><b>Local Event Category</b></p>
<p>If there is a dedicated discussion space for your Local Event, you will find it in the Local Events category. Use it as a hub for your event-related discussions, ensuring a professional attitude at all times.</p>

<p>Now that you've unlocked the secrets of SpaceApps Connect, get ready to embark on an incredible Space Apps journey! Stay connected, collaborate, and let the innovation begin.</p>
<p>Happy connecting and hacking!</p>

<p className='font-semibold'>Join us from October 6th to 8th, 2023, at TU Shannon . Let's reach for the stars together! 🚀🌌 <span className='text-[#2E96F5] font-bold text-xl'>#SpaceApps2023</span> <span className='text-[#eafe07] font-bold text-xl'>#HackAth</span><span className='text-xl font-light'>l</span><span className='text-[#eafe07] font-bold text-xl'>on</span><span className='text-xl font-light'>e</span></p>
    </div>
      </div>
</motion.div>
    </>
  );
}

export default SpaceappsConnect;
