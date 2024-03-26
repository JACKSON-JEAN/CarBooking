import React from 'react'
import Colors from './Colors'
import BrandsFilter from './BrandsFilter'
import {FaSearch, FaGasPump, FaCar} from 'react-icons/fa'

const Filters = () => {
  return (
    <div className=' h-auto w-1/4'>
      <div className='shadow-4xl w-full h-auto rounded-sm px-4 py-2 border-t-4 border-red-600'>
        <div className=' mb-5 bg-slate-100 w-60 h-8 rounded-sm flex p-[2px]'>
          <input type="text" placeholder='Search...' className=' w-52 bg-transparent h-full rounded-sm pl-2 outline-none border-none'/>
          <button className=' w-10 h-full bg-red-600 flex justify-center items-center rounded-sm cursor-pointer'><FaSearch className=' text-sm text-white'/></button>
        </div>
        <Colors/>
        <BrandsFilter/>
      </div>
          
      </div>
  )
}

export default Filters
