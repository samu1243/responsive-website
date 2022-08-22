import React from 'react'
import apiBlog from '../../assets/images/apiBlog.png'
import finalP from '../../assets/images/finalProject.png'
import jwt from '../../assets/images/jwt.png'
import './index.css'

const Projects = () => {
  return (
    <div name='projects' className='bg-[#0a192f] w-full md:h-screen text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[rgb(209,76,76)]'>Projects</p>
                <p className='py-6 font-semibold'>These are some of the projects that I've done</p>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-4'>
                <div style={{backgroundImage: `url(${apiBlog})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100 duration-300 text-center'>
                        <span className='text-2xl font-bold text-white tracking-wider '>
                            Website fetching api information
                        </span> 
                        <div className='pt-8 text-center'>
                            <a href='https://github.com/samu1243/starwars-blog-api'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#4BB543]
                                '>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    style={{ backgroundImage: `url(${finalP})` }}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <div className='opacity-0 group-hover:opacity-100 text-center'>
                         <span className='text-2xl font-bold text-white tracking-wider'>
                             Full-Stack project to finish my bootcamp.
                         </span>
                    <div className='pt-8 text-center'>
                        <a href='https://github.com/samu1243/final-project' target='_blank' rel='noreferrer'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#4BB543]'>
                            Code
                        </button>
                        </a>
                    </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${jwt})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100 duration-300 text-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Simple JWT authentication
                        </span> 
                        <div className='pt-8 text-center'>
                            <a href='https://github.com/samu1243/jwt-authentication-flask' target='_blank' rel='noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#4BB543]
                                '>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects