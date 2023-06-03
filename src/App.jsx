  import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
  import './App.css'
  import  Volunteer  from './components/Volunteer'
  import  HomePage  from './components/HomePage'
  import  Ambassador  from './components/Ambassador'
  import  Sponsors  from './components/Sponsors'

  function App() {
    return (
      <div className="">
      <Routes>
    <Route path='/' element={<HomePage />}/>
    <Route path='/ambassador' element={<Ambassador />} />
    <Route path='/volunteer' element={<Volunteer />} />
    <Route path='/sponsors' element={<Sponsors />} />
  </Routes>

</div>
    )
  }

  export default App
