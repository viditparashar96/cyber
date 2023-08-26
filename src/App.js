import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

import About from './pages/About';
import Services from './pages/Services';
import OurTeam from './pages/OurTeam';
import Contact from './pages/Contact';
import Home from './pages/Home';



function App() {
  return (
    <div className='bg-black w-full h-fit'>
      
      


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/team' element={<OurTeam />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
