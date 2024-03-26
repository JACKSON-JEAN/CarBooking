import React from 'react'

const Colors = () => {
  return (
    <div>
        <h2 className=' font-semibold text-base'>Colors</h2>
        <div>
          <input type="radio" value='color' name='colors' id='All' className=' mr-1'/>
          <label htmlFor="All" className=' text-base capitalize cursor-pointer'>All</label>
        </div>
        <div>
          <input type="radio" value='color' name='colors' id='black' className=' mr-1'/>
          <label htmlFor="black" className=' text-base capitalize cursor-pointer'>black</label>
        </div>
        <div>
          <input type="radio" value='color' name='colors' id='red' className=' mr-1'/>
          <label htmlFor="red" className=' text-base capitalize cursor-pointer'>red</label>
        </div>
        <div>
          <input type="radio" value='color' name='colors' id='white' className=' mr-1'/>
          <label htmlFor="white" className=' text-base capitalize cursor-pointer'>white</label>
        </div>
        <div>
          <input type="radio" value='color' name='colors' id='blue' className=' mr-1'/>
          <label htmlFor="blue" className=' text-base capitalize cursor-pointer'>blue</label>
        </div>
      
    </div>
  )
}

export default Colors
