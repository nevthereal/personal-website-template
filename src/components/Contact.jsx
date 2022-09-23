import React from 'react'

const Contact = () => {
  return (
    <div className='bg-gradient-to-r p-4 text-gray-300'>
        <h1 className='text-3xl uppercase font-black underline'>Contact</h1>
        
        <div className='pt-8'>
            <div>
                <h2 className='text-2xl font-bold'>Email:</h2>
                <p>Contact me via my email: <a href="mailto:john.doe@example.com" className='underline font-bold'></a> </p>
            </div>
        </div>

    </div>
  )
}

export default Contact