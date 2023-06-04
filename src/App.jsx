  import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
  import './App.css'
  import  Volunteer  from './components/Volunteer'
  import  HomePage  from './components/HomePage'
  import  Ambassador  from './components/Ambassador'
  import  Sponsors  from './components/Sponsors'
  import Faqs from './components/Faqs';
  import Contact from './components/Contact';
  import Footer from './components/Footer';
  import AboutSpaceApps from './components/AboutSpaceApps';


  function App() {
    return (
      <div className="">
      <Routes>
    <Route path='/' element={<HomePage />}/>
    <Route path='/faq' element={<Faqs />}/>
    <Route path='/contact' element={<Contact />}/>
    <Route path='/about' element={<AboutSpaceApps />}/>
    <Route path='/ambassador' element={<Ambassador />} />
    <Route path='/volunteer' element={<Volunteer />} />
    <Route path='/sponsors' element={<Sponsors />} />
  </Routes>

</div>
    )
  }

  export default App
