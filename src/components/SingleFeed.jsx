import React from 'react'

const SingleFeed = ({feed}) => {
  return (
    <div className=' h-full flex-1 min-w-fit shadow-4xl rounded-md duration-300 hover:bg-red-600 hover:text-slate-100 cursor-pointer flex items-center p-2'>
        <img src={feed.image} alt="" className=' h-14 w-14 rounded-full mr-2'/>
        <div className=''>
            <p className=" font-bold text-sm capitalize">{feed.name}</p>
           <p className="client-feedbk-email text-xs">{feed.email}</p>
        </div>
    </div>
  )
}

export default SingleFeed
