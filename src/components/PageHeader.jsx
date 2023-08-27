import React from 'react'

function PageHeader({heading}) {
  return (
    <div className="header w-full font-semibold text-lg md:text-2xl bg-[#31303062] p-4 rounded-md">
    <h1 className=' mt-[1vw] ml-[16vw] text-cyan-400'>{heading}</h1>

  </div>
  )
}

export default PageHeader