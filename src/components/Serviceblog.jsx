import React from 'react'

function Serviceblog({img,title,para}) {
  return (
    <div className='w-[300px]  border border-cyan-400 p-6 flex flex-col gap-3'>
        <div className=''>
            <img src={img} alt="cloud" width={60}/>
        </div>
        <div>
            <h1 className=' border-b-2 border-b-white font-semibold py-2'>{title}</h1>
        </div>
        <div>
            <p>{para}</p>
        </div>
    </div>
  )
}

export default Serviceblog