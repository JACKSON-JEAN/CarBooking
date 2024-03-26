import React from 'react'

const BrandsFilter = () => {
  return (
    <div>
        <h2 className=' font-semibold text-base'>Brands</h2>
        <div>
          <input type="radio" value='color' name='brand' id='AllBrands' className=' mr-1'/>
          <label htmlFor="AllBrands" className=' text-base capitalize cursor-pointer'>All</label>
        </div>
        <div>
          <input type="radio" value='color' name='brand' id='mercedes' className=' mr-1'/>
          <label htmlFor="mercedes" className=' text-base capitalize cursor-pointer'>mercedes</label>
        </div>
        <div>
          <input type="radio" value='color' name='brand' id='tesla' className=' mr-1'/>
          <label htmlFor="tesla" className=' text-base capitalize cursor-pointer'>tesla</label>
        </div>
        <div>
          <input type="radio" value='color' name='brand' id='toyota' className=' mr-1'/>
          <label htmlFor="toyota" className=' text-base capitalize cursor-pointer'>toyota</label>
        </div>
        <div>
          <input type="radio" value='color' name='brand' id='Nissan' className=' mr-1'/>
          <label htmlFor="Nissan" className=' text-base capitalize cursor-pointer'>Nissan</label>
        </div>
      
    </div>
  )
}

export default BrandsFilter
