import React from 'react'
import person from '../assets/person.jpeg'

const Home = () => {
  return (
    <div>
      <div className='pt-32 h-screen bg-gradient-to-r p-4 -mt-20'>
        <p className='text-3xl font-bold mx-auto text-right md:text-center text-white'>My Name is P, Welcome to my Portfolio</p>
        <button className='my-auto text-white font-black rounded-xl border p-2 md:mt-8 hover:scale-105 duration-100 ease-in'><a href="/about">Explore!</a></button>
        <div className='mt-32 md:mx-auto translate-y-[20px] translate-x-[20px] h-[300px] w-[300px] rounded-2xl border border-white bg-black/5'></div>
        <img src={person} alt="" className='-translate-y-[300px] md:mx-auto h-[300px] w-[300px] rounded-2xl border border-gray-700 shadow-2xl shadow-black/75' />
      </div>
    </div>
  )
}

export default Home