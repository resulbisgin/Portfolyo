import React, { useState } from 'react'
import {FaBars,FaTimes,FaLinkedin,FaGithub} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { Link } from 'react-scroll';
const Navbar = () => {
  const [nav,setNav]=useState(false)
  const handleClick=()=>{
    setNav(!nav)
  }
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-regal-blue text-gray-300'>
            <div>
                {/*<img src={Logo} alt='Logo' className='w-[50px]' />*/}
            </div>
            {/*Menü */}
                <ul className='hidden md:flex'>
                    <li><Link to='home' smooth={true} duration={500}>
                      Home
                     </Link></li>
                    <li> <Link to='about' smooth={true} duration={500}>
                       About
                    </Link></li>
                    <li>  <Link to='skills' smooth={true} duration={500}>
                         Skills
                     </Link></li>
                </ul>
            {/*Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10 transition-all cursor-pointer'>
               {!nav ? <FaBars/>:<FaTimes/>}
            </div>
            {/*Mobile Menü */}
            <ul className={!nav ? 'hidden' :'absolute top-0 left-0 w-full  h-screen bg-regal-blue flex flex-col justify-center items-center '}>
                    <li className='py-6 text-4xl'><Link to='home' smooth={true} duration={500}>
                      Home
                     </Link></li>
                    <li className='py-6 text-4xl'><Link to='about' smooth={true} duration={500}>
                       About
                    </Link></li>
                    <li className='py-6 text-4xl'><Link to='skills' smooth={true} duration={500}>
                         Skills
                     </Link></li>
                   
            </ul>
            {/*Social Icons */}
            <div  className='hidden lg:flex fixed flex-col top-[35%] left-0 '>
              <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
                  <a  className='flex justify-between items-center w-full text-gray-300' 
                  href='https://www.linkedin.com/in/resul-bi%C5%9Fgin-66190a225/'
                  target="_blank"
                  >
                    Linkedin <FaLinkedin size={30}/>
                  </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                  <a className='flex justify-between items-center w-full text-gray-300' 
                  href='https://github.com/resulbisgin'
                  target="_blank"
                  >
                    Github <FaGithub size={30}/>
                  </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                  <a className='flex justify-between items-center w-full text-gray-300' 
                  href='mailto:resulbiginresul_20011@hotmail.com'
                 
                  >
                    Email <HiOutlineMail size={30}/>
                  </a>
                </li>
              </ul>
            </div>
    </div>
  )
}

export default Navbar