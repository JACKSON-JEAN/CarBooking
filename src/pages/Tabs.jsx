import React, { useState } from 'react'
import {FeedbackInfo} from '../Links'

const Tabs = () => {
    const[count, setCount]=useState(1)
    const[filteredItem, setItems]=useState([])

    const handleChangeCount=(i)=>{
        setCount(i)
    }

    
  return (
    <div>
        {/* <h1 className=' mx-auto my-10 text-center'>{count}</h1> */}
        {
            FeedbackInfo.filter(item=>item.id===count).map(item=>{
                return<div key={item.id} className='px-4 my-2 mx-auto max-w-sm flex flex-col items-center justify-center'>
                    <img src={item.image} alt="" className=' w-20 h-20 rounded-full '/>
                    <p>{item.email}</p>
                </div>
            })
        }
      {
        FeedbackInfo.map(item=>{
            return <div onClick={()=>handleChangeCount(item.id)} key={item.id} className=' bg-lime-400 py-2 px-4 my-2 mx-auto max-w-sm cursor-pointer'>
                <p>{item.email}</p>
            </div>
        })
      }
    </div>
  )
}

export default Tabs
