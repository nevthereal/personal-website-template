import React from 'react'

const Work = () => {
  return (
    <div className='bg-gradient-to-r p-4 text-gray-300'>
        <h1 className='text-3xl uppercase font-black underline'>Work</h1>
        <h2>Here is a quick overview of my projects</h2>
        <div className='flex flex-wrap my-4 gap-4'>
            <div className='border border-gray-400 rounded-lg p-4 bg-gray-200 text-gray-700'>
                <h2 className='text-2xl font-bold hover:text-[#4267B2] duration-300'>Facebook Clone</h2>
                <p>This was one of my first projects. I built it using ReactJS and TailwindCSS.</p>
                <button className='rounded px-3 py-2 m-1 bg-pink-400 shadow-lg shadow-pink-400 hover:shadow-pink-600 duration-200'>Link</button>
                <button className='rounded px-3 py-2 m-1 bg-cyan-400 shadow-lg shadow-cyan-400 hover:shadow-cyan-600 duration-200'>Source Code</button>
            </div>
            <div className='border border-gray-400 rounded-lg p-4 bg-gray-200 text-gray-700'>
                <h2 className='text-2xl font-bold hover:text-[#4c8951] duration-300'>LetsChat - Chat App</h2>
                <p>I built this website using ReactJS TailwindCSS and Google Firebase. It's the my first Firebase project and I use Firebase authentication and Firebase's Firestore Database for the App's back-end</p>
                <button className='rounded px-3 py-2 m-1 bg-pink-400 shadow-lg shadow-pink-400 hover:shadow-pink-600 duration-200'>Link</button>
                <button className='rounded px-3 py-2 m-1 bg-cyan-400 shadow-lg shadow-cyan-400 hover:shadow-cyan-600 duration-200'>Source Code</button>
            </div>
            <div className='border border-gray-400 rounded-lg p-4 bg-gray-200 text-gray-700'>
                <h2 className='text-2xl font-bold hover:text-[#4db7b7] duration-300'>MathApp</h2>
                <p>For this project I purely used HTML, CSS (the conventional CSS) and Javascript. Here you can perform various different mathematical actions such as normal Arithmetic or Algebra as well as some simple Geometry Tasks.</p>
                <button className='rounded px-3 py-2 m-1 bg-pink-400 shadow-lg shadow-pink-400 hover:shadow-pink-600 duration-200'>Link</button>
                <button className='rounded px-3 py-2 m-1 bg-cyan-400 shadow-lg shadow-cyan-400 hover:shadow-cyan-600 duration-200'>Source Code</button>
            </div>
        </div>
    </div>
  )
}

export default Work