import React from 'react'

const SingleService = ({item}) => {
  return (
    <div className=' h-36 shadow-4xl rounded-md p-1 flex'>
        <img src={item.image} alt="" className=' h-full rounded-md mr-4'/>
        <div>
            <p className=' text-base capitalize font-bold'>{item.name}</p>
            <p className=' text-xs capitalize'>{item.info}</p>
        </div>
    </div>
  )
}

export default SingleService
