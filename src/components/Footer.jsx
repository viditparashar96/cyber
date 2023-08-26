import React from 'react'
import {FaMapMarkerAlt} from 'react-icons/fa'
import {IoIosCall} from 'react-icons/io'
import {BiLogoGmail} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import {BiLogoFacebook} from 'react-icons/bi'
import {BiLogoTwitter} from 'react-icons/bi'
import {BiLogoLinkedinSquare} from 'react-icons/bi'

function Footer() {
    return (
        <div className='text-white md:mt-0 mt-3  bg-black shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] shadow-cyan-400  w-full  pt-2'>

            <div className="upperf md:w-8/12 w-full md:mx-auto mx-0 bg-black  flex pt-10 md:flex-row flex-col mb-3">
                <div className="left md:w-[50%] p-3 ">
                    <h5 className=' text-xs font-semibold  text-[#b0b0b0]'>ABOUT US</h5>
                    <p className='mt-7 text-sm  text-[#b0b0b0]'>
                       <span className=' font-semibold text-cyan-400'>ISECURION</span> is an information security company providing out-most service quality, innovation and research in the field of Information Security and Technology. We provide a unique blend of services to our customers catering to the current information security landscape
                    </p>
                </div>
                <div className="right w-full  md:w-[50%]   pt-3 md:pl-0 pl-2 md:ml-4 flex flex-col space-y-8">
                    <h5 className=' text-xs font-semibold text-[#b0b0b0]'>CONTACT US</h5>
                    <div className='mt-7 flex space-x-3 w-full'>
                    <FaMapMarkerAlt/>
                    <p className='md:w-8/12 w-full text-sm  text-[#b0b0b0]'>
                        <span  className=' font-semibold text-cyan-400'>	ISECURION TECHNOLOGY & CONSULTING PVT. LTD.</span> <br />
                        2nd Floor,#670,6th main road,RBI Layout,Opposite Elita Promenade, J P Nagar 7th Phase, Bengaluru - 560078, Karnataka, INDIA
                    </p>
                    </div>
                    <div className='flex space-x-3 items-center'>
                        <IoIosCall/>
                        <p className='text-sm text-[#b0b0b0]'>+918861201570</p>
                    </div>
                    <div className='flex items-center space-x-3'>
                        <BiLogoGmail/>
                        <p className='text-sm  text-[#b0b0b0]'>info@isecurion.com</p>
                    </div>
                </div>

            </div>
            <div className="lowerf w-full mb-5 bg-black">
                <div className="midcontainer  md:w-8/12 flex-col md:flex-row mx-auto flex p-4">
                    <div className="lowerleft  md:w-[50%]">
                        <div className=' flex justify-center md:justify-start items-start gap-x-2 font-medium text-xs'>
                            <Link className=' text-[#b0b0b0]'>Privacy & Policy</Link>
                            |
                             <Link className=' text-[#b0b0b0]'>Disclaimer</Link>
                             |
                             <Link className=' text-[#b0b0b0]'>Terns of Use</Link>

                        </div>
                        <div className='flex justify-center md:justify-start items-center gap-x-2 text-xs mt-2'>
                            <p className=' text-[#b0b0b0]'>
                            Copyright © 2020 isecurion 
                            </p>
                        |  
                        <p className=' text-[#b0b0b0]'> Copyright © 2020 isecurion </p>

                        </div>
                    </div>
                    <div className="lowerright flex items-center justify-center md:mt-0 mt-3 space-x-4  py-3 md:w-[50%] w-[100%] ">
                        <h6 className=' text-xs font-medium  text-[#b0b0b0]'>Connect with us</h6>
                    <div className='flex space-x-2'>
                            <BiLogoFacebook />
                            <BiLogoTwitter/>
                            <BiLogoLinkedinSquare/>
                        </div>
                        </div>
                       
                </div>
            </div>


        </div>
    )
}

export default Footer