import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import { FaMapMarkerAlt } from 'react-icons/fa'
import { IoIosCall } from 'react-icons/io'
import { BiLogoGmail } from 'react-icons/bi'
import ReCAPTCHA from "react-google-recaptcha"
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import toast from 'react-hot-toast';

import axios from "axios"
function Contact() {
  const [isVerify, setIsverify] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  function onChange(value) {
    // console.log("Captcha value:", value);
    setIsverify(true)

  }
  function handleChange(e) {
    const { name, value } = e.target
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const { name, value } = e.target
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
    if(formData.email<=0 || formData.name<=0 || formData.subject<=0 || formData.message<=0){
      toast.error("Fill up the mandotory fields")
    }
    else{

      if(!formData.email.includes("gmail")){
        toast.error("Enter correct gmail")

      }
      else{
        
   
    // console.log(formData)
    try {
      const res = await axios.post("https://cyberback-vvvi.onrender.com/contact", formData)
      if (res.data.success) {

        toast.success("Email set successfully")
      }
      else {
        toast.error("Something is wrong")

      }


    } catch (error) {
      toast.error(error.message)
      console.log(error)
    }
  }

  }
  }
  return (
    <div className='text-white overflow-x-hidden'>
      <Navbar />
      {/* Contact Hero */}
      <PageHeader heading="CONTACT US" />

      <div className='w-full   flex-col md:flex-row flex'>
        <div className="left md:pl-0 pl-3   w-full md:w-[50%] h-[50%] md:h-[100%] flex flex-col justify-start md:justify-center items-start md:items-center">
          <div className='pt-4 '>
            <div>
            </div>
            <h1 className='pl-4 border-l-4 border-cyan-400 md:text-lg text-sm font-semibold'>CONTACT FORM</h1>
            <form className='flex flex-col gap-4 py-6 items-start' onSubmit={handleSubmit}>
              <div className='flex md:flex-row flex-col md:space-x-8'>
                <div>

                  <h1 className='mb-2'>Name <sup className='text-red-800'>*</sup></h1>
                  <input name='name' value={formData.name} onChange={handleChange} type="text" className=' bg-[#1111117b] rounded-sm border border-cyan-400  border-opacity-20 outline-none pl-2' placeholder='Name' />
                </div>
                <div>
                  <h1 className='mb-2'>Email <sup className='text-red-800'>*</sup></h1>
                  <input name='email' value={formData.email} onChange={handleChange} type="email" className=' bg-[#1111117b] rounded-sm border border-cyan-400  border-opacity-20 outline-none pl-2' placeholder='Email' />
                </div>
              </div>

              <div>
                <h1 className='mb-2'>Subject <sup className='text-red-800'>*</sup></h1>
                <input name='subject' value={formData.subject} onChange={handleChange} type="text" className=' bg-[#1111117b] rounded-sm border border-cyan-400  border-opacity-20 outline-none pl-2' placeholder='Subject' />
              </div>
              <div>
                <h1 className='mb-2'>Message <sup className='text-red-800'>*</sup></h1>
                <textarea name="message" value={formData.message} onChange={handleChange}  className='rounded-sm bg-[#1111117b] border border-opacity-20 border-cyan-400 pl-2 pt-2 outline-none min-w-[300px] md:min-w-[400px] min-h-[200px]' placeholder='Message'>

                </textarea>
              </div>
              <div>

                <ReCAPTCHA
                  sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                  onChange={onChange}
                  theme='dark'

                />
              </div>
              <button className={` ${isVerify ? " bg-cyan-400" : "bg-[#1111117b]"} p-3 rounded-sm ${isVerify ? " cursor-pointer" : " cursor-not-allowed"}`} disabled={!isVerify}>Submit</button>

            </form>
          </div>

        </div>
        <div className="right flex  flex-col justify-start pl-3 md:pl-5 p-4  w-full md:w-[50%]  h-[50%] md:h-[100%]">
          <h5 className=' md:text-lg text-sm pl-4 border-l-4 border-cyan-400 font-semibold '>CONTACT US</h5>

          <div className=" flex flex-col space-y-8 mt-[5vw]">
            <div className='mt-7 flex space-x-3 w-full'>
              <FaMapMarkerAlt />
              <p className='md:w-8/12 w-full md:text-md text-sm text-[#b0b0b0]'>
                <span className=' font-semibold text-cyan-400'>	Global Infosec TECHNOLOGY & CONSULTING PVT. LTD.</span> <br />
                1st Floor, Plot No. 16, Near SBI BANK Behind Sultanpur Metro Station, New Delhi 110030
              </p>
            </div>
            <div className='flex space-x-3 items-center'>
              <IoIosCall />
              <p className=' text-[#b0b0b0] md:text-md text-sm'>+918861201570</p>
            </div>
            <div className='flex items-center space-x-3'>
              <BiLogoGmail />
              <p className='md:text-md text-sm text-[#b0b0b0]'>info@Global Infosec.com</p>
            </div>
          </div>


        </div>


      </div>
      <Footer />
    </div>
  )
}

export default Contact