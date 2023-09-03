import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { IoMdArrowDropdown } from 'react-icons/io'
import { AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'
import { useNavigate, useLocation } from 'react-router-dom';
import { BiSolidRightArrow } from 'react-icons/bi'
import logo from "../logo.png"
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
      if (location.pathname === '/team' || location.pathname === '/contact' || location.pathname === '/services' || location.pathname === '/about' || location.pathname === '/') {
        handleCloseClick()
      } else {
        overlayElement.style.transform = "translateY(0%)";
      }
    }
  }, [location.pathname]);

  return (
    <div className='relative  shadow-cyan-400 shadow-sm'>
      <div className='flex z-20 w-full  items-center justify-between p-3 px-6 md:px-10'>
        <div>
          {/* <h1 className='text-4xl font-bold  text-cyan-400 mb-5'>Logo</h1> */}
          <img src={logo} className='w-[60px] mb-0 md:mb-4' alt="" />
        </div>
        <div className=' md:flex hidden items-center space-x-10 relative text-cyan-400'>
          <NavLink to="/" className="text-white hover:text-cyan-400 transition-all duration-500" >Home</NavLink>
          <NavLink to="/about" className="text-white hover:text-cyan-400 transition-all duration-500" >About us</NavLink>
          <div className="serviceBox">
            <button>
              <NavLink to="/services" className="text-white hover:text-cyan-400 transition-all duration-500" >Services </NavLink>
            </button>
            <IoMdArrowDropdown />
            <div className='servicesBlock z-40  transition-all duration-1000 shadow-md bg-slate-500 shadow-cyan-400'>
              <div className="serviceContainer  bg-orange-500">

                <div className="block1 block">
                  <h3 className=' font-semibold text-xl'>Cyber & Digital Security</h3>
                  <div className='mt-5 flex flex-col space-y-5'>
                    <div className='flex items-center  gap-2'>
                      <BiSolidRightArrow fontSize="10px" />
                      <Link className='a transition-all duration-500'>Informattion Security Assesment</Link>
                    </div>
                    <div className='flex items-center  gap-2'>
                      <BiSolidRightArrow fontSize="10px" />

                      <Link className='a transition-all duration-500'>Vulnerability Management</Link>
                    </div>
                    <div className='flex items-center  gap-2'>
                      <BiSolidRightArrow fontSize="10px" />

                      <Link className='a transition-all duration-500'>Network Penetration Testing</Link>
                    </div>
                    <div className='flex items-center  gap-2'>
                      <BiSolidRightArrow fontSize="10px" />

                      <Link className='a transition-all duration-500'>Web Application Penetration Testing</Link>
                    </div>
                    <div className='flex items-center  gap-2'>
                      <BiSolidRightArrow fontSize="10px" />

                      <Link className='a transition-all duration-500'>Wireless Penetration Testing</Link>
                    </div>
                    <div className='flex items-center  gap-2'>
                      <BiSolidRightArrow fontSize="10px" />

                      <Link className='a transition-all duration-500'>VOIP Penetration Testing</Link>
                    </div>
                    <div className='flex items-center  gap-2'>
                      <BiSolidRightArrow fontSize="10px" />

                      <Link className='a transition-all duration-500'>Internet of Things (IOT) Security Testing</Link>
                    </div>



                  </div>
                </div>
                <div className='block2 block'>
                  <div className='mt-8 flex flex-col space-y-5'>


                    <div className='flex items-center  gap-2'>
                      <BiSolidRightArrow fontSize="10px" />

                      <Link className='a transition-all duration-500'>Source Code Review</Link>
                    </div>
                    <div className='flex items-center  gap-2'>
                      <BiSolidRightArrow fontSize="10px" />

                      <Link className='a transition-all duration-500'>Blockchain Security Testing</Link>
                    </div>

                    <div className='flex items-center  gap-2'>
                      <BiSolidRightArrow fontSize="10px" />

                      <Link className='a transition-all duration-500'>Smart Contract Security Testing</Link>
                    </div>
                    <div className='flex items-center  gap-2'>
                      <BiSolidRightArrow fontSize="10px" />

                      <Link className='a transition-all duration-500'>Thick Client  Security Testing</Link>
                    </div>
                    <div className='flex items-center  gap-2'>
                      <BiSolidRightArrow fontSize="10px" />

                      <Link className='a transition-all duration-500'>Enterprise Wireless Penetration Testing</Link>
                    </div>
                    <div className='flex items-center  gap-2'>
                      <BiSolidRightArrow fontSize="10px" />

                      <Link className='a transition-all duration-500'>Mobile Application  Penetration Assessment</Link>
                    </div>
                    <div className='flex items-center  gap-2'>
                      <BiSolidRightArrow fontSize="10px" />

                      <Link className='a transition-all duration-500'>MAPT (Mobile Application  Penetration Testing)</Link>
                    </div>


                  </div>
                </div>

              </div>

            </div>


          </div>
          <div className='Consultingservicesbox relative'>
            <div className='flex items-center space-x-1'>
              <NavLink to="/services" className="text-white hover:text-cyan-400 transition-all duration-500" >Consulting Services</NavLink>
              <IoMdArrowDropdown />
            </div>
            <div className='Consultingservicesblock p-3 min-w-[250px] flex flex-col gap-4 bg-black shadow-md shadow-cyan-400 absolute'>
              <div className='flex items-center'>
                <BiSolidRightArrow fontSize="10px" />

                <Link className='a transition-all duration-500'>PCI DSS Implimentation</Link>
              </div>
              <div className='flex items-center  gap-2'>
                <BiSolidRightArrow fontSize="10px" />

                <Link className='a transition-all duration-500'>ISO 2700 Implimentation</Link>
              </div>
              <div className='flex items-center  gap-2'>
                <BiSolidRightArrow fontSize="10px" />

                <Link className='a transition-all duration-500'>Data Privacy GDPR</Link>
              </div>
              <div className='flex items-center  gap-2'>
                <BiSolidRightArrow fontSize="10px" />

                <Link className='a transition-all duration-500'>Cyber Risk Assessment</Link>
              </div>
              <div className='flex items-center  gap-2'>
                <BiSolidRightArrow fontSize="10px" />

                <Link className='a transition-all duration-500'>Data Localization</Link>
              </div>
            </div>

          </div>

          <NavLink to="/team" className="text-white hover:text-cyan-400 transition-all duration-500">Our Team</NavLink>
          <NavLink to="/contact" className="text-white hover:text-cyan-400 transition-all duration-500">Contact Us</NavLink>

        </div>
        <div className='inline md:hidden'>
          <button onClick={handleClick}>

            <AiOutlineMenu color='aqua' />
          </button>
        </div>

      </div>
      <div className="overlay z-50">
        <div className='p-6 flex items-center justify-end mr-3'>

          <AiOutlineClose onClick={handleCloseClick} fontSize="1.3rem" fontWeight="600" color='aqua' />
        </div>
        <div className='t flex flex-col gap-5 font-medium mx-auto w-10/12 text-center min-h-[80vh] items-center justify-center text-2xl text-cyan-400'>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/services">Consulting Services</Link>
          <Link to="/team">Our Team</Link>
          <Link to="/contact">Contact Us</Link>

        </div>
      </div>

    </div>
  )
}

export default Navbar