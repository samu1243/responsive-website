import React from 'react'
import react from '../../assets/images/react.png'
import flask from '../../assets/images/flask.png'
import html from '../../assets/images/html.png'
import python from '../../assets/images/python.png'
import javascript from '../../assets/images/javascript.png'
import tailwind from '../../assets/images/tl.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[rgb(209,76,76)]'>Technologies</p>
                <p className='py-4'>These are some of the technologies that I have experience with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-300'>
                    <img src={react} className='w-20 mx-auto' alt='react'></img>
                    <p className='my-2 font-bold'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-300'>
                    <img src={flask} className='w-20 mx-auto' alt='flask'></img>
                    <p className='my-2 font-bold'>Flask</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-300'>
                    <img src={html} className='w-20 mx-auto' alt='html'></img>
                    <p className='my-2 font-bold'>Html</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-300'>
                    <img src={python} className='w-20 mx-auto' alt='python'></img>
                    <p className='my-2 font-bold'>Python</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-300'>
                    <img src={javascript} className='w-20 mx-auto' alt='javascript'></img>
                    <p className='my-2 font-bold'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-300'>
                    <img src={tailwind} className='w-20 mx-auto' alt='tailwind'></img>
                    <p className='my-2 font-bold'>Tailwind</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills