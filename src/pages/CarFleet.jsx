import React from 'react'
import Footer from '../components/Footer'
import Filters from '../components/Filters'
import {fleetCars} from '../Links'
import {FaSearch, FaGasPump, FaCar} from 'react-icons/fa'
import {RiDashboard3Line} from 'react-icons/ri'
import {Link} from 'react-router-dom'

const CarFleet = () => {
  return (
    <div>
      <div className=' px-40 pt-20 pb-10 h-auto w-full flex gap-8'>
        <Filters/>
      <div className=' w-3/4 h-full '>
        {/* <div className=' mb-5 bg-slate-100 w-60 h-8 rounded-sm flex p-[2px]'>
          <input type="text" placeholder='Search...' className=' w-52 bg-transparent h-full rounded-sm pl-2 outline-none border-none'/>
          <button className=' w-10 h-full bg-red-600 flex justify-center items-center rounded-sm cursor-pointer'><FaSearch className=' text-sm text-white'/></button>
        </div> */}
        <div className=' mb-5 bg-slate-200 shadow-4xl rounded-sm mx-auto w-full h-20 shadow-3xl border-t-4 border-red-600'>
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
                      <button className=' rounded-sm bg-red-600 w-28 h-8 font-bold capitalize text-slate-100 shadow-4xl'>filter</button>
                </div>
            </form>
        </div>
        
        <div className=' w-full h-full grid grid-cols-3 gap-4'>
          {
            fleetCars.map(car=>{
              return <div className=' shadow-4xl rounded-sm p-4 flex flex-col justify-between cursor-pointer'>
                <div className=' flex justify-between'>
                <span>
                  <p className=' text-xs font-bold capitalize'>{car.name}</p>
                  <p className=' text-xs font-bold capitalize'>{car.make}</p>
                </span>
                <span>
                  <p className=' text-xs capitalize'><span className=' font-bold'>{car.price}$</span>/Day</p>
                  <p className=' text-xs font-bold capitalize'>{car.location}</p>
                </span>
                </div>
                <img src={car.image} alt="" className=' w-full'/>
                <div className=' flex justify-between mt-2'>
                  <span className=' flex flex-col justify-center items-center'>
                    <p className='text-xs'><FaGasPump/></p>
                    <p className=' text-xs font-bold capitalize'>{car.fuelType}</p>
                  </span>
                  <span className=' flex flex-col justify-center items-center'>
                    <p className='text-xs'><RiDashboard3Line/></p>
                    <p className=' text-xs font-bold capitalize'>{car.cylinder}</p>
                  </span>
                  <span className=' flex flex-col justify-center items-center'>
                    <p className='text-xs'><FaCar/></p>
                    <p className=' text-xs font-bold capitalize'>{car.speed} speed</p>
                  </span>
                  </div>
              </div>
            })
          }
        </div>
      </div>
      </div>

    <Footer/>
    </div>
  )
}

export default CarFleet
