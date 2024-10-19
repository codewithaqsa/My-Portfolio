import React from 'react';
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  return (
    <div className='container pt-g'>
  <div className='flex justify-between iten-center'>
    <div className='text-xi font-medium'>Aqsa Muneer</div>
    <ul className='gap-10 rg:gap-16 hidden md:flex'>
      <li className='menuLink'><a href='#hero'>Home</a></li>
      <li className='menuLink'><a href='#about'>About</a></li>
      <li className='menuLink'><a href='projects'>Projects</a></li>
      <li className='menuLink'><a href='#skills'>Skills</a></li>
      <li className='menuLink'><a href='#contact'>Contact</a></li>
    </ul>
    <IoMdMenu className='md-hidden' size={30} />
     </div>
  
    </div>
  )
}

export default Navbar;
