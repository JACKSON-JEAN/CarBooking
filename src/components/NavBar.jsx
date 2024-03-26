import React from 'react'
import { BiPhoneCall,BiLock } from "react-icons/bi";
import { FaBars, FaTimes } from "react-icons/fa";
import {MenuLinks} from '../Links.js'
import {NavLink} from 'react-router-dom'
import{Link} from 'react-scroll'
import logo from '../assets/logoz.png'

const NavBar = () => {
  return (
    <div className=' w-full h-14 bg-black text-slate-100 flex items-center justify-between px-40 fixed top-0 left-0 z-50'>
      <NavLink to='/' className=' h-full flex items-center relative'>

        
        <img src={logo} alt="" className=' max-w-[150px] -ml-5'/>
        <h2 className=' font-bold text-lg absolute bottom-1 left-1'>Jack<span className=' text-red-600'>Motors</span></h2>
      
      </NavLink>
      
      
      <div className=' flex items-center gap-5'>

        <Link className=' text-sm font-semibold cursor-pointer' to='home' spy={true} smooth={true} offset={0} duration={500}>Home</Link>
        <Link className=' text-sm font-semibold cursor-pointer' to='services' spy={true} smooth={true} offset={0} duration={500}>Services</Link>
        <Link className=' text-sm font-semibold cursor-pointer' to='about' spy={true} smooth={true} offset={0} duration={500}>About</Link>
        

        <p className='flex items-center text-sm font-semibold'><span className=' w-5 h-5 mr-1 rounded bg-red-600 flex justify-center items-center '><BiPhoneCall className=' text-slate-100'/> </span><span>+256 776 286 453</span></p>

        <p className=' flex items-center text-sm font-semibold bg-red-600 cursor-pointer py-[3px] px-2 rounded-sm'><BiLock className=' text-slate-100'/><span>SignIn</span></p>

      </div>
      
    </div>
  )
}

export default NavBar
