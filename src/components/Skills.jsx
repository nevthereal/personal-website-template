import React from 'react'

const Skills = () => {
  return (
    <div className='bg-gradient-to-r p-4 text-gray-300'>
        <h1 className='text-3xl uppercase font-black underline'>Skills</h1>
        <table className='m-8 mx-auto'>
            <tbody>
                <tr className='border-b'>
                    <td className='font-bold'>Front-End </td>
                    <td className='font-bold'>HTML, CSS, JavaScript, php</td>
                    <td className='font-black'>SINCE 2019</td>
                </tr>
                <tr className='border-b'>
                    <td className='font-bold'>Back-End </td>
                    <td className='font-bold'>Python, SQL</td>
                    <td className='font-black'>SINCE 2019</td>
                </tr>
                <tr>
                    <td className='font-bold'>Other </td>
                    <td className='font-bold'>ReactJS, TailwindCSS, Google Firebase</td>
                    <td className='font-black'>SINCE 2019</td>
                </tr>
            </tbody>
        </table>
        <h2 className='text-2xl font-bold'>Tools I use:</h2>
        <ul>
          <li className='hover:text-[#017acc] duration-500'>Visual Studio Code</li>
          <li className='hover:text-[#fb4502] duration-500'>Adobe Creative Cloud</li>
          <li className='hover:text-[#fb4502] duration-500'>Microsoft Office</li>
          <li className='hover:text-[#ffff00] duration-500'>Google Workspaces</li>
          <li className='hover:text-[#19bffb] duration-500'>iCloud Drive</li>
          <li className='hover:text-[#8c31ac] duration-500'>Git</li>
          <li className='hover:text-[#ffd02f] duration-500'>Miro</li>
        </ul>
        <p className='pt-8'>Find out more on my <a className='font-bold underline' href="/work">Work</a> Page</p>
    </div>
  )
}

export default Skills