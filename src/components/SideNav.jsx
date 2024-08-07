import React from 'react'
import {FaHome, FaCog, FaRegEnvelope} from 'react-icons/fa'

const SideNav = () => {
  return (
    <div className='w-64 bg-violet-500 fixed h-full px-4 py-2'>
        <div className='my-2 mb-4'>
            <h1 className='text-2x text-white font-bold'>Admin</h1>
        </div>
        <hr />
        <ul className='mt-3 text-white font-bold'>
            <li className='mb-2 rounded hover:shadow hover:bg-violet-700 py-2'>
                <a href="" className='px-3'>
                <FaHome className='inline-block w-6 h-6 mr-2 -mt-2'></FaHome>
                Home</a>
            </li>
            <li className='mb-2 rounded hover:shadow hover:bg-indigo-700 py-2'>
                <a href="" className='px-3'>
                <FaRegEnvelope className='inline-block w-6 h-6 mr-2 -mt-2'></FaRegEnvelope>
                Inbox</a>
            </li>
            <li className='mb-2 rounded hover:shadow hover:bg-blue-600 py-2'>
                <a href="" className='px-3'>
                <FaCog className='inline-block w-6 h-6 mr-2 -mt-2'></FaCog>    
                Setting</a>
            </li>
            <li className='mb-2 rounded hover:shadow hover:bg-red-400 py-2'>
                <a href="" className='px-3'>
                
                Log out</a>
            </li>
        </ul>
      
    </div>
  )
}

export default SideNav
