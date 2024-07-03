import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Link to='/' className='absolute top-10 left-10 z-[99]'>
        <img src="/logo.png" alt="logo" className='md:w-40 w-20' />
    </Link>
  )
}

export default Navbar