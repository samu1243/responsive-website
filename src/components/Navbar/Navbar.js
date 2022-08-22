import React, { useState } from 'react'
import logo from '../../assets/images/logo.png'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const Navbar = () => {
    const [menu, setMenu] = useState(false)
    const handleMenu = () =>{
        setMenu(!menu)
    }


  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <Link to='/'>
                <img src={logo} alt='logo' style={{ width:'50px'}}></img>
            </Link>
        </div>  
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        <div className='md:hidden z-10' onClick={handleMenu}>
            {!menu ? <FaBars className='hover:text-[rgb(209,76,76)] text-2xl'/> : <FaTimes className='hover:text-[rgb(209,76,76)] text-2xl'/>}
        </div>
        <ul className={!menu ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                 <li className='py-6 text-4xl hover:text-[rgb(209,76,76)] font-bold'>Home</li>
                <li className='py-6 text-4xl hover:text-[rgb(209,76,76)] font-bold'>About</li>
                <li className='py-6 text-4xl hover:text-[rgb(209,76,76)] font-bold'>Skills</li>
                <li className='py-6 text-4xl hover:text-[rgb(209,76,76)] font-bold'>Projects</li>
                <li className='py-6 text-4xl hover:text-[rgb(209,76,76)] font-bold'>Contact</li>
        </ul>
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
                <a rel='noreferrer' target='_blank' href='https://www.linkedin.com/in/samuel-djekki/' className='flex justify-between items-center w-full text-gray-300 font-bold text-xl'>
                    Linkedin <FaLinkedin size={30}/>
                </a>
                </li>
                <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                <a rel='noreferrer' target='_blank' href='https://github.com/samu1243' className='flex justify-between items-center w-full text-gray-300 font-bold text-xl'>
                    Github <FaGithub size={30}/>
                </a>
                </li>
                <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#7289da]'>
                <a rel='noreferrer' target='_blank' href='https://discord.com/users/258830033026547713' className='flex justify-between items-center w-full text-gray-300 font-bold text-xl'>
                    Discord <FaDiscord size={30}/>
                </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar