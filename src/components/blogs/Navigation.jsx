import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';
import backgroundImage from '/starsUpscaled.png';


const Navigation = () => {

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
            Navigating Your Way to NASA SpaceApps Challenge at TU Shannon in Athlone
      </motion.h1>


    <div className='flex flex-col justify-between gap-1 px-[21%] my-6 font-firaSans tracking-wide text-xl'>
      <p>Sneha</p>
      <p>5 min read | Sep 25, 2023</p>
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
    <p>Are you ready to embark on an exciting journey of innovation and exploration? The NASA SpaceApps Challenge is coming to TU Shannon in Athlone, and it's an event you won't want to miss. This year's challenge offers participants the option to join in person or remotely, but we highly recommend attending in person to fully immerse yourself in the hackathon experience. Picture this: brainstorming with your team, coding through the night, and collaborating with like-minded space enthusiasts – all under one roof. To help you get there, we've put together a handy guide on how to reach TU Shannon's engineering building from major cities like Dublin, Limerick, Cork, and Galway.</p>
    <img className='my-5 rounded-xl object-contain max-w-full' src='./blog9.jpg' alt='banner' />
    <p><b>Getting There: Your Options</b></p>
    <p>There are three major ways to reach TU Shannon: by bus, train, or driving. Let's explore these options to make your journey as smooth as possible.</p>
    <p><b>1. Taking the Bus: Your Best Bet</b></p>
    <p>If you're coming from Dublin, Limerick, Cork, or Galway, taking the bus is arguably the most convenient way to reach Athlone. Several bus services connect these cities to Athlone, including Citylink, Aircoach and Bus Éireann. The 763 (<a className='text-[#eafe07] font-bold tracking-wide' target='_blank' href='https://www.citylink.ie/timetables/galway-ballinasloe-athlone-dublin-city-airport'>Timetable</a>) and 706/706X (<a className='text-[#eafe07] font-bold tracking-wide' target='_blank' href='https://www.aircoach.ie/timetables/706%20706X'>Timetable</a>) routes are your best friends if you are traveling from Dublin or Galway. Route 72 (<a className='text-[#eafe07] font-bold tracking-wide' target='_blank' href='https://buseireann.ie/inner.php?id=406&form-view-timetables-from=&form-view-timetables-to=&form-view-timetables-route=72&form-view-timetables-submit=1'>Timetable</a>) is available if you are traveling from Limerick. If you are traveling from Cork you can come either via Galway using route 51 (<a className='text-[#eafe07] font-bold tracking-wide' target='_blank' href='https://www.expressway.ie/route/51/cork-to-galway-via-limerick)/2023-08-30'>Timetable</a>) or via Dublin using route 704x (<a className='text-[#eafe07] font-bold tracking-wide' target='_blank' href='https://www.aircoach.ie/timetables/704X'>Timetable</a>). The buses will drop you off at a central location. From there, follow the signs leading to TU Shannon's engineering building.</p>
    <p><b className='text-[#eafe07] text-2xl underline'>Pro tip:</b> <i>Booking your bus tickets in advance, especially since it's a weekend event, can save you both time and money. Don't wait until the last minute!</i></p>
    <p><b>2. Opt for the Train: Cheaper and more Comfortable </b></p>
    <p>Trains are another great option, particularly if you're conscious of your budget and prefer a comfortable journey. Irish Rail provides train services from major cities to Athlone. You can pre book your tickets <a className='text-[#eafe07] font-bold tracking-wide' target='_blank' href='https://www.irishrail.ie/en-ie/'>here</a>. However, please note that the train station is approximately 3 kilometers away from TU Shannon's engineering building. To bridge this gap, consider taking a cab or bus (Route ATH1 or A1) from the train station to the venue.</p>
    <p><b>3. Driving: The Choice for Flexibility</b></p>
    <p>If you prefer the freedom and flexibility of driving to Athlone, there's ample parking available at TU Shannon engineering building. This option allows you to bring your team along and have more control over your schedule. You can use <a className='text-[#eafe07] font-bold tracking-wide' target='_blank' href='https://maps.app.goo.gl/FwtphKJJ9ZrCrSve9'>Google Maps</a> to get the correct route by road. </p>
    <p>In conclusion, remember you're not alone in this journey! Volunteers will also be on hand to assist you in finding your way if you face issues at any point. The NASA SpaceApps Challenge at TU Shannon in Athlone promises to be an unforgettable experience. Whether you're traveling from Dublin, Limerick, Cork, Galway or any other city you have several convenient transportation options at your disposal. Plan ahead, book your tickets in advance, and get ready to embark on a journey of innovation, collaboration, and exploration. We can't wait to see you there!</p>
    <p className='font-semibold'>Join us from October 6th to 8th, 2023, at TU Shannon . Let's reach for the stars together! 🚀🌌 <span className='text-[#2E96F5] font-bold text-xl tracking-wide'>#SpaceApps2023</span> <span className='text-[#eafe07] font-bold text-xl tracking-wide'>#HackAth</span><span className='text-xl font-light tracking-wide'>l</span><span className='text-[#eafe07] font-bold text-xl tracking-wide'>on</span><span className='text-xl font-light tracking-wide'>e</span></p>
    </div>
      </div>
</motion.div>
    </>
  );
}

export default Navigation;
