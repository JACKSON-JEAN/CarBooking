import React from 'react'
import { IoLogoGooglePlaystore, IoLogoApple, IoLogoTwitter} from "react-icons/io5";
import{FaYoutube, FaLinkedinIn, FaFacebookF} from 'react-icons/fa'
import {Link} from 'react-router-dom'

import image from '../assets/2.PNG'

const Hero = () => {
  return (
    <div className=' bg-gradient-to-b from-black to-gray-600 text-slate-100 w-full h-[90%] mb-16 px-40 flex items-center relative' id='home'>
         <div className=' flex-1 '>
            <div className=' flex items-center'>
                <div className=' w-7 h-3.5 relative border-2 rounded-lg border-red-600'>
                    <div className=' w-full h-0.5 bg-red-600 absolute left-3 top-1'></div>
                    <div className=' w-2 h-2 border-t-2 border-r-2 border-t-red-600 border-r-red-600 absolute left-7 top-0.5 rotate-45'></div>
                </div>
                <p className=" text-red-600 text-xs capitalize ml-4 font-bold">car rental services</p>
            </div>
            <div>
                <p className=" font-bold text-xl capitalize my-2">Where Every Mile is a Smiling Journey!</p>
                <div className=" text-sm font-light text-gray-300 max-w-sm">
                    <p >Experience luxury on wheels with our premier car rental services. Choose from a curated selection of elite vehicles, each designed to elevate your journey.</p>
                </div> 
            </div>

            <div className="my-4 flex gap-5">
                <div className=" bg-red-600 w-32 h-10 flex items-center justify-center">
                        <IoLogoGooglePlaystore className=' text-xl'/>
                    <div className="flex flex-col gap-0 ml-2 align-middle">
                        <span className=' text-[9px]'>Get it on</span>
                        <p className=' text-sm font-bold'>Google Play</p>
                    </div>
                </div>
                <div className=" bg-slate-100 w-32 h-10 flex items-center justify-center text-black">
                    <IoLogoApple className='text-xl'/>
                    <div className=" flex flex-col gap-0 ml-2 align-middle">
                        <span className=' text-[9px]'>Download on the</span>
                        <p className=' text-sm font-bold'>App Store</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div className=' flex-1'>
            <img src={image} alt="" className=' w-full'/>
        </div>


        <div className=" absolute right-7 flex flex-col gap-5 my-auto">
            <a href="#" className=' text-sm w-7 h-7 border border-white rounded-full flex items-center justify-center duration-300 hover:bg-slate-100 hover:text-black'><IoLogoTwitter/></a>
            <a href="#" className=' text-sm w-7 h-7 border border-white rounded-full flex items-center justify-center duration-300 hover:bg-slate-100 hover:text-black'><FaFacebookF/></a>
            <a href="#" className=' text-sm w-7 h-7 border border-white rounded-full flex items-center justify-center duration-300 hover:bg-slate-100 hover:text-black'><FaLinkedinIn/></a>
            <a href="#" className=' text-sm w-7 h-7 border border-white rounded-full flex items-center justify-center duration-300 hover:bg-slate-100 hover:text-black'><FaYoutube/></a>
        </div>

        <div className=" absolute left-7 my-auto flex flex-col justify-center items-center gap-1 ">
            <p className=' text-[10px] text-white'>01</p>
            <div className=' bg-slate-100 h-60 w-[3px]'>
                <div className=' w-full h-36 bg-red-600'></div>
            </div>
            <p className=' text-[10px] text-white'>05</p>
        </div>

        <div className=' absolute -bottom-10 bg-slate-200 shadow-4xl rounded-md mx-auto w-[calc(100%-320px)] h-20 shadow-3xl'>
            <form className=' w-full h-full flex text-black items-end justify-between px-4 py-4'>
                <div className='flex w-[calc(100%-120px)] justify-between gap-2'>
                    <div className='flex-1'>
                    <p className=' text-sm capitalize font-bold'>pick up location</p>
                    <select name="" id="" className=' border border-gray-300 bg-transparent w-full h-8 px-2'></select>
                </div>
                <div className='flex-1'>
                    <p className=' text-sm capitalize font-bold'>return location</p>
                    <select name="" id="" className=' border bg-transparent border-gray-300 w-full h-8 px-2'></select>
                </div>
                <div className='flex-1'>
                    <p className=' text-sm capitalize font-bold'>pick up date</p>
                    <input type="date"  className=' border bg-transparent border-gray-300 w-full h-8 outline-none px-2'/>
                </div>
                <div className=' flex-1'>
                    <p className=' text-sm capitalize font-bold'>return date</p>
                    <input type="date"  className=' border bg-transparent border-gray-300 w-full h-8 outline-none px-2'/>
                </div>
                </div>
                <div className=' ml-2 h-full flex items-end'>
                    <Link to='/fleet'>
                      <button className=' rounded-sm bg-red-600 w-28 h-8 font-bold capitalize text-slate-100 shadow-4xl'>filter</button>
                    </Link>
                   
                </div>
            </form>
        </div>

    </div>
  )
}

export default Hero
