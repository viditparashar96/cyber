import React from 'react'

function HomeTextAnime(props) {
  return (
    <div ref={props.refe} className=' w-[100vw]'> 
        <div className='box bg-[url(https://www.sisainfosec.com/wp-content/uploads/2022/09/1-1.gif)] bg-cover text-center bg-center container min-w-[100vw] text-black h-[100vh]  flex justify-center items-center flex-col gap-4'>

       <h1 className='h1 text-[3vw] font-semibold'>Digital transformation is opening doors to <br /> newer and evolving threats.</h1>
       <h1 className='h2 text-[3vw] font-semibold'>Compliant organizations are getting breached, <br /> despite investments in advanced technology <br /> and increasing cyber spends.
</h1>
       <h1 className='h3 text-[3vw] font-semibold'>Fueling your digital journey requires <br />
<span className='text-[#faa731]'>Forensics-driven Cybersecurity.</span></h1>


        </div>
    </div>
  )
}

export default HomeTextAnime