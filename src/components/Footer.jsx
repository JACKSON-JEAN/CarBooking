import React from 'react'
import{FaArrowRight, FaYoutube, FaLinkedinIn, FaFacebookF} from 'react-icons/fa'
import { IoLogoTwitter} from "react-icons/io5";


const Footer = () => {
  let currentDate=new Date()
  let year = currentDate.getFullYear()
  return (
    <footer>
      <div className=' bg-slate-700 py-10 px-40 text-white flex justify-between'>
        <section>
            <h2 className=' font-bold text-xl mb-4'>Jack<span className=' text-red-600'>Motors</span></h2>
            
            <p className=' font-normal text-white mb-2'>Subscribe to the newsletter</p>
            <form className=' w-60 h-9 p-[0.5px] rounded-sm bg-white flex justify-between mb-6'>
                <input className=' bg-transparent rounded-sm w-52 border-0 outline-0 text-black px-2 text-sm' type="text" placeholder='Email...' />
                <button className=' w-10 bg-red-600 flex justify-center items-center rounded-sm shadow-4xl text-sm'><FaArrowRight/></button>
            </form>
            <div className=" flex gap-3">
                <a href="#" className=' text-sm w-7 h-7 border border-white rounded-full flex items-center justify-center duration-300 hover:bg-slate-100 hover:text-black'><IoLogoTwitter/></a>
                <a href="#" className=' text-sm w-7 h-7 border border-white rounded-full flex items-center justify-center duration-300 hover:bg-slate-100 hover:text-black'><FaFacebookF/></a>
                <a href="#" className=' text-sm w-7 h-7 border border-white rounded-full flex items-center justify-center duration-300 hover:bg-slate-100 hover:text-black'><FaLinkedinIn/></a>
                <a href="#" className=' text-sm w-7 h-7 border border-white rounded-full flex items-center justify-center duration-300 hover:bg-slate-100 hover:text-black'><FaYoutube/></a>
            </div>
        </section>
        <section>
            <p className=' text-lg font-normal text-white '>Top cities</p>
            <ul>
              <li className=' text-base'>Kampala</li>
              <li className=' text-base'>Mbarara</li>
              <li className=' text-base'>Fortportal</li>
              <li className=' text-base'>Gulu</li>
              <li className=' text-base'>Mbale</li>
              <li className=' text-base'>Entebbe</li>
            </ul>
        </section>
        <section>
            <p className=' text-lg font-normal text-white '>Explore</p>
            <ul>
              <li className=' text-base'>Airport Transfers</li>
              <li className=' text-base'>Intercity Trips</li>
              <li className=' text-base'>Wedding Events</li>
              <li className=' text-base'>Business Meetings</li>
              
            </ul>
        </section>
        <section>
            <p className=' text-lg font-normal text-white '>Intercity rides</p>
            <ul>
              <li className=' text-base'>Kampala - Mbarara</li>
              <li className=' text-base'>Fortportal - Mbarara</li>
              <li className=' text-base'>Gulu - Lira</li>
              <li className=' text-base'>Mbale - Soroti</li>
              <li className=' text-base'>Entebbe - Kampala</li>
            </ul>
        </section>
      </div>
      <div className=' w-full bg-black text-white flex justify-center items-center py-4 font-normal text-sm'>
        <p>Copyright &copy; {year} JackMotors.</p>
      </div>
        
    </footer>
    
  )
}

export default Footer
