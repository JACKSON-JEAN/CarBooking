import React from 'react'
import {brands} from '../Links'

const Brands = () => {
  return (
    <div className=' h-20 flex justify-between px-40 bg-slate-200'>
      {
        brands.map(item=>{
            return <img src={item.image} alt=""  className=' h-full'/>
        })
      }
    </div>
  )
}

export default Brands
