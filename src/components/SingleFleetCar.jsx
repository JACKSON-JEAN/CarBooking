import React from 'react'
import{FaMapMarkerAlt,FaGasPump, FaCar, } from 'react-icons/fa'
import {RiDashboard3Line, RiFundsBoxLine, RiChargingPile2Line, RiShoppingBag2Line} from 'react-icons/ri'

const SingleFleetCar = ({item}) => {
  return (
    <div className=' shadow-4xl rounded-sm p-1 flex flex-col justify-between cursor-pointer'>
      <div className=' flex justify-between'>
        <span>
          <p className=' text-xs font-bold capitalize'>{item.name}</p>
          <p className=' text-xs font-bold capitalize'>{item.make}</p>
        </span>
        <span>
          <p className=' text-xs capitalize'><span className=' font-bold'>{item.price}$</span>/Day</p>
          <p className=' text-xs font-bold capitalize'>{item.location}</p>
        </span>
      </div>

      <img src={item.image} alt="" className=' w-full' />

      <div className=' flex justify-between mt-2'>
        <span className=' flex flex-col justify-center items-center'>
          <p className='text-xs'><FaGasPump/></p>
          <p className=' text-xs font-bold capitalize'>{item.fuelType}</p>
        </span>
        <span className=' flex flex-col justify-center items-center'>
          <p className='text-xs'><RiDashboard3Line/></p>
          <p className=' text-xs font-bold capitalize'>{item.cylinder}</p>
        </span>
        <span className=' flex flex-col justify-center items-center'>
          <p className='text-xs'><FaCar/></p>
          <p className=' text-xs font-bold capitalize'>{item.speed} speed</p>
        </span>
      </div>
      
    </div>
  )
}

export default SingleFleetCar
