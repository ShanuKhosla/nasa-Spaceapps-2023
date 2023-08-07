/* eslint-disable no-unused-vars */
import React from 'react';
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
import BlogDetail from './components/BlogDetail';


function App() {
  const location = useLocation();

  // Function to check if the current path starts with "/blogs"
  const isBlogsPage = location.pathname.startsWith('/blogs');

  return (
    <div className="bg-black">
      {!isBlogsPage && <Navbar />} {/* Show Navbar for all routes except those that start with "/blogs" */}
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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
