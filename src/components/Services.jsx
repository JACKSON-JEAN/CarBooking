import React from 'react'
import SingleService from './SingleService'
import{ServicesInfo} from '../Links'

const Services = () => {
  return (
    <div className=' w-full bg-slate-200 px-40 pt-20' id='services'>
      <h2 className=' w-full text-center text-xl font-semibold capitalize'>our <span className=' text-red-600'>services</span></h2>
      <div className=" text-xs capitalize max-w-sm text-center mx-auto mb-4">
        <p>We invite you to try our services, and we personally guarantee that you will be completely satisfied.</p>
      </div>
      <div className=' w-full grid grid-cols-2 gap-10'>
        {
            ServicesInfo.map(service=>{
                return<SingleService key={service.id} item={service}/>
            })
        }
        
        
      </div>
    </div>
  )
}

export default Services
