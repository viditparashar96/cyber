import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import Serviceblog from '../components/Serviceblog';
import PageHeader from '../components/PageHeader'
import img1 from "../images/img1.png"
import img2 from "../images/img2.png"
import img3 from "../images/img3.png"
import img4 from "../images/img4.png"
import img5 from "../images/img5.png"
import img6 from "../images/img6.png"




function Services() {
  return (
    <div className='text-white'>
      <Navbar />
      <PageHeader heading="SERVICES" />
      <div className='md:w-7/12 w-full mx-auto md:mb-0 mb-6 bg-black'>
        <div className='py-5 flex gap-8 items-center text-9xl' >
          <h1 className='md:visible hidden'>O1</h1>
          <h1 className='md:text-4xl text-2xl  text-cyan-400 text-center font-semibold'>WE PROVIDE BEST OPTION TO SECURE YOUR DATA</h1>
        </div>
        <div className='mt-4 justify-center flex flex-wrap gap-7'>

          <Serviceblog
            img={img1}
            title="CLOUD SECURITY SOLUTIONS"
            para="Ensuring ongoing security in the cloud requires not only equipping your cloud instances with defensive security controls, but also regularly assessing their ability to withstand the latest data breach threats.

            "
          />
          <Serviceblog
            img={img2}
            title="MANAGED IT SECURITY SERVICES
            "
            para="We offers both network and application pentest services. These services simulate a real-world cyber attack, allowing organizations to safely review the security posture of their applications and networking devices

            "
          />
          <Serviceblog
            img={img3}
            title="INFORMATION SECURITY TRAINING
            "
            para="We have a large number of experienced information security instructor. Our Company The Cyber Warrior ( Leading IT Security Services & Training Providing Company) is offering a wide range of Information Security Training.

            "
          />
          <Serviceblog
            img={img4}
            title="SOFTWARE TESTING - QA, QC
            "
            para="We do industry projects, including GIT, Selenium, Jenkins, Postman, SoapUI and JMeter to apply engineering to software development processes and build quality products.

            "
          />
          <Serviceblog
            img={img5}
            title="TECH SUPPORT CONSULTING
            "
            para="We solve the technical needs from hardware and software set-up and optimization to system monitoring 24/7 technical services and managed SOC, we provide all the services you need to maintain the security, health and efficiency of your network.

            "
          />
          <Serviceblog
            img={img6}
            title="AUTOMATION TESTING TRAINING
            "
            para="We provides extensive hands-on training in software development, testing, and quality assurance technology skills, including phase-end and capstone projects based on real business scenarios.

            "
          />
          <Serviceblog
            img={img6}
            title="NETWORK PENETRATION TESTING
            "
            para="We provides extensive hands-on training in software development, testing, and quality assurance technology skills, including phase-end and capstone projects based on real business scenarios.

            "
          />
          <Serviceblog img={img6} title="VULNERABILITY ASSESSMENT
" para="We provides extensive hands-on training in software development, testing, and quality assurance technology skills, including phase-end and capstone projects based on real business scenarios.

"/>
          <Serviceblog img={img6} title="WEB APPLICATION PENETRATION TESTING
" para="We provides extensive hands-on training in software development, testing, and quality assurance technology skills, including phase-end and capstone projects based on real business scenarios.

"/>
          <Serviceblog img={img6} title="WEB APPLICATION PENETRATION TESTING
" para="We provides extensive hands-on training in software development, testing, and quality assurance technology skills, including phase-end and capstone projects based on real business scenarios.

"/>


        </div>


      </div>
      <Footer/>
    </div>
  )
}

export default Services