import { Route, Routes } from 'react-router-dom';
import './Scroller.css'

import About from './pages/About';
import Services from './pages/Services';
import OurTeam from './pages/OurTeam';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Notfound from './pages/Notfound';



function App() {
  return (
    <div className='bg-black w-full'>
      
      


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/team' element={<OurTeam />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Notfound />} />


      </Routes>
    </div>
  );
}

export default App;
