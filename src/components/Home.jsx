import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
const Home = () => {
  return (
    <div name='home' className=' w-full h-screen bg-regal-blue'>
      <div className='max-w-[1000px] gap-y-1 mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>
        Hello, my name is
        </p>
        <h1 className='text-4xl sm:text-7xl  font-bold text-[#ccd6f6]'>Resul Bişgin</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'am a Web Developer.</h2>
        <p className='text-[#8892b0] py-4 max-w-[760px]'>I am a back-end web developer.A person who is trying to improve himself and stay up-to-date with software and who wants to prepare useful contents, products for people.</p>
      <div>
        <button className='text-white group border-2 px-6 py-3 my-2 flex items-center  hover:bg-pink-500 hover:border-pink-500 transition-all' >View Work 
        <span className=' group-hover:rotate-90 duration-200'><HiArrowNarrowRight className='ml-3 ' /></span>
        </button>
      </div>

      </div>
    </div>
  )
}

export default Home