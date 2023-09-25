import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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
import DayOne from './components/DayOne';
import DayTwo from './components/DayTwo';
import DayThree from './components/DayThree';
import SpaceExploration from './components/blogs/SpaceExploration';
import HowToRegister from './components/blogs/HowToRegister';
import SpaceappsChallengesGuide from './components/blogs/SpaceappsChallengesGuide';
import WhySpaceAppsAthlone from './components/blogs/WhySpaceAppsAthlone';
import Teambuilding from './components/blogs/Teambuilding';
import Preloader from './components/Preloader';
import Challenges from './components/Challenges';

function App() {
  const [showPreloader, setShowPreloader] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Show the preloader only if on the homepage
    if (location.pathname === '/') {
      setShowPreloader(true);

      // Hide the preloader after a delay (e.g., 2 seconds)
      const preloaderTimeout = setTimeout(() => {
        setShowPreloader(false);
      }, 2500);

      // Cleanup the timeout if the component unmounts or when preloader is hidden
      return () => clearTimeout(preloaderTimeout);
    }
  }, [location.pathname]);

  return (
    <div className="bg-black">
      {showPreloader && <Preloader />} {/* Show preloader only on the homepage */}
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
        <Route path="/spaceexploration" element={<SpaceExploration />} />
        <Route path="/howToRegister" element={<HowToRegister />} />
        <Route path="/challenges" element={<SpaceappsChallengesGuide />} />
        <Route path="/whyAthlone" element={<WhySpaceAppsAthlone />} />
        <Route path="/teamBuilding" element={<Teambuilding />} />
        <Route path="/day-one" element={<DayOne />} />
        <Route path="/day-two" element={<DayTwo />} />
        <Route path="/day-three" element={<DayThree />} />
        <Route path="/spaceappsChallenges" element={<Challenges />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
