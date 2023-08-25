import React, { useState,useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { IoMdArrowDropdown } from 'react-icons/io'
import { AiOutlineMenu } from 'react-icons/ai'
import {AiOutlineClose} from 'react-icons/ai'
import { useNavigate,useLocation } from 'react-router-dom';
import '../App.css';
function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const overlayElement = document.querySelector(".overlay");
  const navigate = useNavigate();
  const location = useLocation();
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const handleClick = () => {
    console.log("sadas");
    const overlayElement = document.querySelector(".overlay");
    if (overlayElement) {
      overlayElement.style.transform = "translateY(0%)";
    }
  };

  const handleCloseClick = () => {
    const overlayElement = document.querySelector(".overlay");
    if (overlayElement) {
      overlayElement.style.transform = "translateY(-100%)";
    }
  };

  useEffect(() => {
    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const overlayElement = document.querySelector(".overlay");
    if (overlayElement) {
      if (windowWidth > 767) {
        overlayElement.style.transform = "translateY(-100%)";
      }
    }
  }, [windowWidth]);

  useEffect(() => {
    if (overlayElement) {
      if (location.pathname === '/team' || location.pathname === '/contact'||location.pathname === '/services'||location.pathname === '/about'||location.pathname === '/') {
        handleCloseClick()
      } else {
        overlayElement.style.transform = "translateY(0%)";
      }
    }
  }, [location.pathname]);

  return (
    <div className='relative'>
      <div className='flex z-20 w-full bg-red-300 items-center justify-between p-4 px-6 md:px-10'>
        <div>
          <h1 className='text-4xl font-bold'>Logo</h1>
        </div>
        <div className=' md:flex hidden items-center space-x-10 relative'>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About us</NavLink>
          <div className='flex items-center group '>
            <button>
              <NavLink to="/services">Services </NavLink>
            </button>
            <IoMdArrowDropdown />
            <div className='absolute hidden top-6 left-0  flex-col bg-white shadow-lg rounded-md min-w-[100%] p-4 gap-y-3 group-hover:flex '>

              <Link>P Testing</Link>
              <Link>P Testing</Link>
              <Link>P Testing</Link>


            </div>


          </div>
          <NavLink to="/team">Our Team</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>

        </div>
        <div className='block md:hidden'>
          <button onClick={handleClick}>

            <AiOutlineMenu />
          </button>
        </div>

      </div>
      <div className="overlay">
        <div className='p-6 flex items-center justify-end mr-3'>

        <AiOutlineClose onClick={handleCloseClick} fontSize="1.3rem" fontWeight="600" color='aqua'/>
        </div>
        <div className='t flex flex-col gap-5 font-medium mx-auto w-10/12 text-center min-h-[80vh] items-center justify-center text-2xl text-cyan-400'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/team">Our Team</Link>
            <Link to="/contact">Contact Us</Link>

        </div>
      </div>
    </div>
  )
}

export default Navbar