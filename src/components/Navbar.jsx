import React from 'react'
import {FaBars, FaUserCircle} from 'react-icons/fa'

const Nav = () => {
  return (
    <div className='bg-violet-500 px-4 py-3 flex justify-between ml-64 w-full'>
      <div className='flex items-center text-xl'>
        <FaBars className='text-white me-4 cursor-pointer' />
        <span className='text-white font-semibold'>Chat</span>
      </div>
      <div className='flex items-center gap-x-5'>
        <div className='relative md:w-65'>
          <span className='relative md:absolute inset-y-0 left-0 flex items-center pl-2'>
          <div className='relative'>
        <button className='text white'>
          <FaUserCircle className='w-6 h-6 mt-1' />
          <div className='z-10 hidden absolute rounded-lg shadow w-32'>
          <ul>
            <li><a href="">Profile</a></li>
            <li><a href="">Setting</a></li>
            <li><a href="">Log Out</a></li>
          </ul>
          </div>
        </button>
      </div>
          </span>
        </div>
      </div>
      
    </div>
  )
}

export default Nav
