import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { IoMdArrowDropdown } from 'react-icons/io'
import { AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'
import { useNavigate, useLocation } from 'react-router-dom';
import { BiSolidRightArrow } from 'react-icons/bi'
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
    <div className='relative shadow-cyan-400 shadow-md'>
      <div className='flex z-20 w-full  items-center justify-between p-7 px-6 md:px-10'>
        <div>
          <h1 className='text-4xl font-bold  text-cyan-400 mb-5'>Logo</h1>
        </div>
        <div className=' md:flex hidden items-center space-x-10 relative text-cyan-400'>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About us</NavLink>
          <div className="serviceBox">
            <button>
              <NavLink to="/services">Services </NavLink>
            </button>
            <IoMdArrowDropdown />
            <div className='servicesBlock shadow-md shadow-cyan-400'>
              <div className="serviceContainer">

                <div className="block1 block">
                  <h3 className=' font-semibold text-xl'>Cyber & Digital Security</h3>
                  <div className='mt-5 flex flex-col space-y-5'>
                    <div className='flex items-center  gap-2'>
                      <BiSolidRightArrow fontSize="10px" />
                      <Link className='a'>Vulnerability and Penetration Testing Services</Link>
                    </div>
                    <div className='flex items-center  gap-2'>
                      <BiSolidRightArrow fontSize="10px" />

                      <Link className='a'>Source Code Review</Link>
                    </div>
                    <div className='flex items-center  gap-2'>
                      <BiSolidRightArrow fontSize="10px" />

                      <Link className='a'>Server Hardening Testing</Link>
                    </div>
                    <div className='flex items-center  gap-2'>
                      <BiSolidRightArrow fontSize="10px" />

                      <Link className='a'>Firewall Network Devices Security Review</Link>
                    </div>
                    <div className='flex items-center  gap-2'>
                      <BiSolidRightArrow fontSize="10px" />

                      <Link className='a'> Could Security Configuration Review</Link>
                    </div>
                    <div className='flex items-center  gap-2'>
                      <BiSolidRightArrow fontSize="10px" />

                      <Link className='a'>AL/ML Devices Security Testing</Link>
                    </div>
                    <div className='flex items-center  gap-2'>
                      <BiSolidRightArrow fontSize="10px" />

                      <Link className='a'>IOT/SCADA DEvices Security Testing</Link>
                    </div>
                    <div className='flex items-center  gap-2'>
                      <BiSolidRightArrow fontSize="10px" />

                      <Link className='a'>Robotics Process Automation(RPA)</Link>
                    </div>


                  </div>
                </div>
                <div className="block2 block">
                  <h3 className=' font-semibold text-xl'>Managed Security Services</h3>
                  <div className='mt-5 flex flex-col space-y-5'>
                    <div className='flex items-center  gap-2'>
                      <BiSolidRightArrow fontSize="10px" />
                      <Link className='a'>External Security Threat Intelligence</Link>
                    </div>
                    <div className='flex items-center  gap-2'>
                      <BiSolidRightArrow fontSize="10px" />

                      <Link className='a'>Honeypot as Service
                      </Link>
                    </div>
                    <div className='flex items-center  gap-2'>
                      <BiSolidRightArrow fontSize="10px" />

                      <Link className='a'>Incident Response & Malware Analysis
                      </Link>
                    </div>
                    <div className='flex items-center  gap-2'>
                      <BiSolidRightArrow fontSize="10px" />

                      <Link className='a'>Virtual Chief Information Security Officer (V-CISO)
                      </Link>
                    </div>
                    <div className='flex items-center  gap-2'>
                      <BiSolidRightArrow fontSize="10px" />

                      <Link className='a'> Virtual Data Protection Officer (VDPO)
                      </Link>
                    </div>
                    <div className='flex items-center  gap-2'>
                      <BiSolidRightArrow fontSize="10px" />

                      <Link className='a'>ECP-DR Consulting
                      </Link>
                    </div>
                    <div className='flex items-center  gap-2'>
                      <BiSolidRightArrow fontSize="10px" />

                      <Link className='a'>Vulnerability and Penetration Testing Services</Link>
                    </div>



                  </div>
                </div>
                <div className="block3 block">
                  <h3 className=' font-semibold text-xl'>Specialised Cyber Security Services</h3>
                  <div className='mt-5 flex flex-col space-y-5'>
                    <div className='flex items-center  gap-2'>
                      <BiSolidRightArrow fontSize="10px" />
                      <Link className='a'>Social Engineering Attack Simulation
                        (SRC- PhaasTM)
                      </Link>
                    </div>
                    <div className='flex items-center  gap-2'>
                      <BiSolidRightArrow fontSize="10px" />

                      <Link className='a'>Red Teaming Exercise
                      </Link>
                    </div>
                    <div className='flex items-center  gap-2'>
                      <BiSolidRightArrow fontSize="10px" />

                      <Link className='a'>Digital Forensics Analysis
                      </Link>
                    </div>
                    <div className='flex items-center  gap-2'>
                      <BiSolidRightArrow fontSize="10px" />

                      <Link className='a'>Root Cause Analysis</Link>
                    </div>




                  </div>
                </div>
                <div className="block4 block">
                  <h3 className=' font-semibold text-xl'>Governance Risk & Compliance (GRC)</h3>

                  <div className='mt-5 flex flex-col space-y-5'>
                    <div className='flex items-center  gap-2'>
                      <BiSolidRightArrow fontSize="10px" />
                      <Link className='a'>Compliance Management
                      </Link>
                    </div>
                    <div className='flex items-center  gap-2'>
                      <BiSolidRightArrow fontSize="10px" />

                      <Link className='a'>Information System Audit & Assurance
                      </Link>
                    </div>
                    <div className='flex items-center  gap-2'>
                      <BiSolidRightArrow fontSize="10px" />

                      <Link className='a'>IT Risk Management
                      </Link>
                    </div>
                    <div className='flex items-center  gap-2'>
                      <BiSolidRightArrow fontSize="10px" />

                      <Link className='a'>Data Protection & Privacy</Link>
                    </div>



                  </div>
                </div>
              </div>

            </div>


          </div>
          <NavLink to="/team">Our Team</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>

        </div>
        <div className='block md:hidden'>
          <button onClick={handleClick}>

            <AiOutlineMenu color='aqua' />
          </button>
        </div>

      </div>
      <div className="overlay">
        <div className='p-6 flex items-center justify-end mr-3'>

          <AiOutlineClose onClick={handleCloseClick} fontSize="1.3rem" fontWeight="600" color='aqua' />
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