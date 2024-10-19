import React from 'react'
import { IoMailUnreadOutline } from "react-icons/io5";
import { BsTelephoneFill } from "react-icons/bs";


const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-5xl' data-aos="flip-right">Contact Me</h2>
                <p className='text-gray-600 text-[18px] pt-2' data-aos="flip-right">
                   For professional inquiries or collaborations, please feel free to reach out. I look forward to connecting with you.
                   </p>
                   <div className='flex gap-3 items-center' data-aos="flip-right">
                    <IoMailUnreadOutline size={30} /> mmuneerkhan1963@gmail.com
                   </div>    <div className='flex gap-3 items-center' data-aos="flip-right">
                    < BsTelephoneFill  size={30} /> 03363986511
                   </div>
            </div>
            <div className='space-y-8'>
                <div className='flex flex-col gap-1' data-aos="flip-right">
                    <label htmlFor="name">Name</label> 
                    <input type="text"
                    className='h-[40px] bg-transparent border border-accent'
                    id='name'/>      
                </div>
                <div className='flex flex-col gap-1' data-aos="flip-right">
                    <label htmlFor="email">Email</label> 
                    <input type="text"
                    className='h-[40px] bg-transparent border border-accent'
                    id='email'/>      
                </div>
                <div className='flex flex-col gap-1' data-aos="flip-right">
                    <label htmlFor="msg">Message</label> 
                    <textarea 
                    className=' bg-transparent border border-accent'
                    id='msg' rows={6}>  
                    </textarea >  
                </div>
                <button className='bg-accent p-2 px-6' data-aos="flip-right">Send</button>
              </div>
        </div>
    </div>
  )
}

export default Contact
