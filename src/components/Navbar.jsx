import React from 'react'

const Navbar = () => {
  return (
    <div className='text-white font-bold p-4 flex justify-between bg-gradient-to-r h-20'>
        <a href="/" className='text-5xl text-cyan-400 hover:text-blue-500 font-black hover:scale-105 duration-100 ease-in hover:rotate-[4deg]'>P</a>
        <div className='my-auto flex gap-4 text-lg text-gray-300'>
            <a href="/about" className='hover:scale-105 duration-100 ease-in'>About</a>
            <a href="/skills" className='hover:scale-105 duration-100 ease-in'>Skills</a>
            <a href="/work" className='hover:scale-105 duration-100 ease-in'>Work</a>
            <a href="/contact" className='hover:scale-105 duration-100 ease-in'>Contact</a>
        </div>
    </div>
  )
}

export default Navbar