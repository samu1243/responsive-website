import React from 'react'
import './index.css'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-[rgb(209,76,76)]'>About me</p>
                </div>
                <div>
                </div>
            </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold '>
                        <p>I'm a Full-Stack developer looking to work with you to develop
                    awesome projects.</p>
                    </div>
                    <div className='text-xl'>
                        <p className='my-4'>Always eager to learn more, whether is getting better at
                    the technologies I work with or learning new ones. Sports enjoyer, love to work out and go jogging.</p>
                    <a href='https://docs.google.com/document/d/14FCAxcNo71baaozqb5JiNUplO8Azmr6xOwgMTVbG5YE/edit?usp=sharing' target='_blank' rel='noreferrer' className='border-[1px] border-[rgb(209,76,76)] text-2xl font-bold py-2 px-4 text-[rgb(209,76,76)] hover:bg-[rgb(209,76,76)] hover:text-white cv'>Check out my CV!</a>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default About