/* eslint-disable no-unused-vars */
import React from 'react';
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




function App() {
  return (
    <div className="bg-black">
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
    </div>
  );
}

export default App;
