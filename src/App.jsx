/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Volunteer from './components/Volunteer';
import HomePage from './components/HomePage';
import Ambassador from './components/Ambassador';
import Sponsors from './components/Sponsors';
import Faqs from './components/Faqs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutSpaceApps from './components/AboutSpaceApps';
import Blog from './components/Blog';
import BlogDetail from './components/BlogDetail';
import DayOne from './components/DayOne';
import DayTwo from './components/DayTwo';
import DayThree from './components/DayThree';
import ScaleLoader from "react-spinners/ScaleLoader";
import { motion } from 'framer-motion';
import { fadeIn } from './utils/motion';







function App() {

  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <div className="bg-black">
    {loading ? (
      <motion.div className='h-screen bg-black flex items-center justify-center flex-col w-full'>

        <div className='relative right-1'>
        <ScaleLoader
          color="#eafe07"
          loading={loading}
          size={30}
          aria-label="Loading Spinner"
        />
        </div>
        <motion.h1 
        variants={fadeIn('', 'fadeIn', 0.2, 0.5)}
      initial="hidden"
      animate={animationComplete ? "show" : "hidden"} 
      onAnimationComplete={handleAnimationComplete}
        className='my-5 sm:text-3xl text-[14px] font-firaSans font-semibold  tracking-wider text-center relative'>Welcome To <span className='font-black text-[#eafe07]'>HackAth</span><span className='font-thin text-[#ffffff]'>l</span><span className='font-black text-[#eafe07]'>on</span><span className='font-thin text-[#ffffff]'>e</span></motion.h1>
        </motion.div>
    ) : (
      <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/faq" element={<Faqs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutSpaceApps />} />
        <Route path="/ambassador" element={<Ambassador />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blogs/:title" element={<BlogDetail />} /> {/* Update the route to include "/blogs/:title" */}
        <Route path="/day-one" element={<DayOne />} />
        <Route path='/day-two' element={<DayTwo />} />
        <Route path='/day-three' element={<DayThree />} />
      </Routes>
      <Footer />
      </>
    ) }
    
    </div>
  );
}

export default App;
