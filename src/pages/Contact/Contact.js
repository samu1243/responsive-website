import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    
    const refForm = useRef()
    const sendEmail = (e) => {
        e.preventDefault()
    emailjs
    .sendForm(
        'personal_portfolio',
        'template_8y1jt0u',
        refForm.current,
        '5EMA0LxpEY-MiY-C6'
    )
    .then(
        () => {
            alert('Message sent successfully!')
            window.location.reload(false)
        },
        () => {
            alert('Failed to send message. Please, try again.')
        }
    )
}


  return (
    <div name='contact' className='bg-[#0a192f] w-full h-screen flex justify-center items-center p-4'>
        <form action='' className='flex flex-col max-w-[600px] w-full' ref={refForm}>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[rgb(209,76,76)] text-gray-300'>
                    Contact me
                </p>
                <p className='text-gray-300 py-6 font-semibold'>
                    Please feel free to contact me with any questions that you may have!
                </p>
            </div>
            <input className='p-2 bg-[rgb(251,166,166)] font-bold' placeholder='Name' name='name' required></input>
            <input className='my-4 p-2 bg-[rgb(249,185,185)] font-bold' placeholder='Email' name='email' required></input>
            <textarea className='bg-[rgb(251,201,201)] p-2  font-bold' name='message' placeholder='Message' rows='10'></textarea>
            <button className='text-2xl font-semibold py-2 text-[rgb(209,76,76)] border-[1px] border-[rgb(209,76,76)] hover:text-white hover:bg-[rgb(209,76,76)] mx-auto flex my-2 items-center px-2' onClick={sendEmail}>Send</button>
        </form>
    </div>
  )
}

export default Contact