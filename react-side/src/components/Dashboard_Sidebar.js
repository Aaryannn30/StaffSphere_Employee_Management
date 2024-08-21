import React from 'react'
import {FaHome} from 'react-icons/fa'

const Sidebar = ({sidebarToggle}) => {
  return (
    <div className={`${sidebarToggle? " hidden " : " block "} fixed w-64 h-full px-4 py-2 bg-gray-800`}>
        <div className='my-2 mb-4'> 
            <h1 className='font-bold text-white text-2x'>Admin Dashboard</h1>
        </div>
        <hr />
        <ul className='mt-3 font-bold text-white'>
            <li className='py-2 mb-2 rounded hover:shadow hover:bg-blue-500'>
                <a href='' className='px-3'>
                    <FaHome className='inline-block w-6 h-6 mr-2 -mt-2'></FaHome>Home
                </a>
            </li>

            <li className='py-2 mb-2 rounded hover:shadow hover:bg-blue-500'>
                <a href='' className='px-3'>
                    <FaHome className='inline-block w-6 h-6 mr-2 -mt-2'></FaHome>Home
                </a>
            </li>

            <li className='py-2 mb-2 rounded hover:shadow hover:bg-blue-500'>
                <a href='' className='px-3'>
                    <FaHome className='inline-block w-6 h-6 mr-2 -mt-2'></FaHome>Home
                </a>
            </li>

            <li className='py-2 mb-2 rounded hover:shadow hover:bg-blue-500'>
                <a href='' className='px-3'>
                    <FaHome className='inline-block w-6 h-6 mr-2 -mt-2'></FaHome>Home
                </a>
            </li>

            <li className='py-2 mb-2 rounded hover:shadow hover:bg-blue-500'>
                <a href='' className='px-3'>
                    <FaHome className='inline-block w-6 h-6 mr-2 -mt-2'></FaHome>Home
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar
