import React,{useState} from 'react'
import SingleFeed from './SingleFeed'
import {FaArrowRight, FaArrowLeft, FaQuoteLeft, FaQuoteRight} from 'react-icons/fa'
import {FeedbackInfo} from '../Links'

const Feedback = () => {
  const[index, setIndex]=useState(1)


  const handleChangeIndex=(i)=>{
    setIndex(i)
  }
  return (
    <div className=' w-full bg-slate-200  px-40 pt-14 mb-6'>
      <p className=" w-full text-center text-xl font-semibold capitalize">clients <span className=' text-red-600'>feedback</span></p>
      <p className=" w-full text-center text-base capitalize mb-5">What our clients say</p>

      {
        FeedbackInfo.filter(item=>item.id===index).map(item=>{
          return<div className=" mb-7 h-64" key={item.id} >
        <div className=" flex flex-col items-center justify-center">
            <img src={item.image} alt="" className=' w-24 h-24 rounded-full border border-red-500'/>
            <p className=" capitalize font-bold text-base">{item.name}</p>
            <p className=" text-sm font-semibold">{item.email}</p>
        </div>
        <div className=" max-w-md mx-auto text-center text-xs capitalize">
            <p>" {item.info} "</p>
        </div>
        
      </div>
        })
      }

      {/* <div className=" flex items-center justify-center my-7 gap-20 text-lg ">
        <FaArrowLeft className=' cursor-pointer' onClick={prevPerson}/><FaArrowRight className=' cursor-pointer' onClick={nextPerson}/>
      </div> */}
      <div className=' h-16 flex w-full justify-between'>
        {
          FeedbackInfo.map(item=>{
            return<div  key={item.id} onClick={()=>handleChangeIndex(item.id)}>
              <SingleFeed feed={item}/>
            </div>
          })
        }        
      </div>
    </div>
  )
}

export default Feedback
