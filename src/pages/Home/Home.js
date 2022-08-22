import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'


export const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#ccd6f6] text-xl font-semibold py-2'>Hi there, I am</p>
            <h1 className='text-4xl sm:text-8xl font-bold text-[rgb(209,76,76)] '>Samuel Djekki</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[rgb(201,125,125)]'>Full Stack Developer</h2>
            <p className='text-[#ccd6f6] text-xl font-semibold py-4 max-w-[650px]'>Highly interested in large projects. Currently having fun designing cool websites. Feel free to check out my page. Also, please do contact me with any questions you may have!</p>
            <div>
                <Link to='' className='button text-[rgb(209,76,76)] border-[1px] font-semibold border-[rgb(209,76,76)] px-4 py-2 hover:bg-[rgb(209,76,76)] hover:text-[#ccd6f6] my-2'>Contact me</Link>
            </div>
        </div>
    </div>
  )
}

