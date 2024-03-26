import React from 'react'
import image from '../assets/4.PNG'
import abt from '../assets/mybanner.png'
import abt1 from '../assets/about1.jpg'
import abt3 from '../assets/img.jpg'
import {fleetCars} from '../Links'
import SingleFleetCar from './SingleFleetCar'
import { Link } from 'react-router-dom'

import{BiCar, BiCreditCard, BiCall} from 'react-icons/bi'

const About = () => {
  return (
    <div className=' bg-slate-200 pt-20 px-40' id='about'>
      
      <div className=' flex gap-20'>
        <section className=' flex-1'>
          <div >
            <p className=' text-xs uppercase'>Experience with us</p>
            <p className=' text-base uppercase font-semibold'>Why <span className=' text-red-600'>choose us</span></p>
          </div>
            
            <img src={image} alt="" className=' w-full -ml-8'/>
        </section>
        <section className=' flex-1'>
          <div className=' flex gap-4 mb-4'>
            <div className=' w-6 h-6 rounded-sm flex justify-center items-center text-red-600 text-sm shadow-4xl'><BiCar/></div>
            <div>
              <p className=' text-xs uppercase font-semibold'>Wide selection</p>
              <p className=' text-xs capitalize'>Choose from our diverce fleet of vehicles, carefully curated to suit your unique style and needs.</p>
            </div>
          </div>
          <div className=' flex gap-4 mb-4'>
            <div className=' w-6 h-6 rounded-sm flex justify-center items-center text-red-600 text-sm shadow-4xl'><BiCar/></div>
            <div>
              <p className=' text-xs uppercase font-semibold'>Seamless reservations</p>
              <p className=' text-xs capitalize'>our user-friendly booking process ensures a stress-free experience</p>
            </div>
          </div>
          <div className=' flex gap-4 mb-4'>
            <div className=' w-6 h-6 rounded-sm flex justify-center items-center text-red-600 text-sm shadow-4xl'><BiCreditCard/></div>
            <div>
              <p className=' text-xs uppercase font-semibold'>exceptional customer support</p>
              <p className=' text-xs capitalize'>our dedicated team is available around the clock to assist you. from inquiries to on-road support. we're here whenever you need us.</p>
            </div>
          </div>
          <div className=' flex gap-4 mb-4'>
            <div className=' w-6 h-6 rounded-sm flex justify-center items-center text-red-600 text-sm shadow-4xl'><BiCar/></div>
            <div>
              <p className=' text-xs uppercase font-semibold'>transparent pricing</p>
              <p className=' text-xs capitalize'>enjoy straight forward pricing with no hidden fees.</p>
            </div>
          </div>
        </section>
      </div>

      <div className=' flex gap-20 mt-10'>
        <section className=' flex-1'>
             <p className=' text-base capitalize font-semibold mb-4'>About <span className=' text-red-600'>JackMotors</span></p>
             <p className=' capitalize text-sm font-semibold'>We are providing the best cars services.</p>

             <p className=' text-xs capitalize mb-4'>At JackMotors we pride ourselves in delivering extensive services to fullfill all your needs with first class customer care.</p>

             <p className=' text-xs capitalize mb-4'>Dynamically unleash market positioning convergency for scallable infrastructures rather than market driven items. Without resource leveling process improvement.</p>

             <div className=' mb-4'>
              <div className=' w-full flex justify-between text-xs font-semibold capitalize'>
                <p>Professional drivers</p>
                <p>80%</p>
              </div>
              
              <div className=' h-1 w-full border-spacing-1 bg-slate-300 rounded-md'>
                <div className=' h-full w-[80%] bg-red-600 rounded-sm'></div>
              </div>
             </div>

             <div>
              <div className=' w-full flex justify-between text-xs font-semibold capitalize'>
                <p>Exclussive services</p>
                <p>90%</p>
              </div>
              
              <div className=' h-1 w-full border-spacing-1 bg-slate-300 rounded-md'>
                <div className=' h-full w-[90%] bg-red-600 rounded-sm'></div>
              </div>
             </div>
            
        </section>
        <section className=' flex-1'>
          <img src={abt} alt="" className=' w-full'/>
        </section>
      </div>

      <div className=' w-full'> 
          <p className=' text-base capitalize font-semibold'>Our <span className=' text-red-600'>Fleet</span></p>
          <p className=' capitalize text-xs max-w-sm mb-3'>Our wide range of cars for rent ensures you'll find the the perfect match for your journey. We provide a selection that suits your preferences.</p>

          <div className=' w-full grid grid-cols-4 gap-10'>
            {
              fleetCars.filter(car=>car.id<5).map(car=>{
                return<SingleFleetCar key={car.id} item={car}/>
              })
            }          
          </div>

          <div className=' w-full mt-7 flex justify-center'>
            <Link to='/fleet'>
                <button className=' text-sm font-semibold bg-red-600 text-slate-100 cursor-pointer py-[3px] px-2 rounded-sm shadow-4xl'>Explore All</button>
            </Link>
            
          </div>
      </div>
    </div>
  )
}

export default About
