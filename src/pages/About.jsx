import React from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';

function About() {
  return (
    <div className='text-white w-full bg-black'>
      <Navbar />
      <div className='min-h-[70vh]'>
        <PageHeader heading="ABOUT US"/>
        <div className=' md:pl-0 pl-4 md:w-8/12 w-full mx-auto flex flex-col gap-10 mt-[3vw]'>
          <div>
            <p className=' text-[#b0b0b0]'>
            <span className=' text-cyan-400 font-semibold'>Global Infosec</span> is an ISO 27001:2013 certified information security consulting company providing out-most service quality, innovation and research in the field of Information Security and Technology. We provide a unique blend of services to our customers catering to the current information security landscape.
            </p>
          </div>
          <div>
            <p className=' text-[#b0b0b0]'>Our business oriented approach helps us understand our client’s security requirements based on their business type and processes related to it. Along with identifying critical loopholes in our client systems, Global Infosecalso provides support in remediation by aligning them with industry best practices and compliance requirements.</p>
          </div>
          <div className='flex flex-col space-y-5'>
            <h1 className='text-cyan-500 font-semibold border-l-4 pl-4 border-cyan-500'>OUR VISION</h1>
            <p className=' text-[#b0b0b0]'>Our vision is to provide our customers with out-most experience in the field of information Security and become the world leaders in the information security arena.</p>
          </div>
          <div className='flex flex-col space-y-5'>
            <h1 className='text-cyan-500 font-semibold border-l-4 pl-4 border-cyan-500'>OUR MISSION</h1>
            <p className=' text-[#b0b0b0]'>Our mission is to help our customers manage their information Security risk and compliance with our wide range of technical service expertise and products. Our team of spirited professionals are dedicated to provide highest quality of service for our customers.

</p>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default About