import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black text-white font-black text-center py-4'>
        <p className='text-xl mb-4'>©P all rights reserved</p>
            <a href="https://instagram.com/example" className='text-3xl'><i class="fa-brands fa-square-instagram m-4 hover:scale-105 duration-200"></i></a>
            <a href="https://twitter.com/example" className='text-3xl'><i class="fa-brands fa-square-twitter m-4 hover:scale-105 duration-200"></i></a>
            <a href="https://github.com/example" className='text-3xl'><i class="fa-brands fa-square-github m-4 hover:scale-105 duration-200"></i></a>
            <a href="mailto:example@example.com" className='text-3xl'><i class="fa-solid fa-square-envelope m-4 hover:scale-105 duration-200"></i></a>
    </div>
  )
}

export default Footer