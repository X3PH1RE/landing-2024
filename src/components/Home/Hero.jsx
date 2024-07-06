import React from 'react'

const Hero = () => {
  return (
    <div className='z-[99] absolute block top-[10%] md:left-[30%] left-[15%]'>
        <h1 className='orbitron text-center text-white text-6xl md:text-9xl'>Space Up</h1>
        <br />
        <button className='cursor-pointer hover:bg-[#CC2B35] md:ml-48 ml-10 bg-[#A6232B] text-white orbitron text-center md:px-5 md:py-4 md:text-md text-sm px-2 py-1'>BUY TICKETS (coming soon)</button>
    </div>
  )
}

export default Hero