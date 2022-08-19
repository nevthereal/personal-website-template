import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-black text-white font-bold p-4 flex justify-between'>
        <a href="/" className='text-5xl text-cyan-400 font-black'>P</a>
        <div className='my-auto flex gap-4 text-lg'>
            <a href="/about">About</a>
            <a href="/skills">Skills</a>
            <a href="/work">Work</a>
            <a href="/contact">Contact</a>
        </div>
    </div>
  )
}

export default Navbar