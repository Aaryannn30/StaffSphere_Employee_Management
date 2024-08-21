import React from 'react'
import { FaSearch, FaUser, FaUserCircle } from 'react-icons/fa'
import { FaBars } from 'react-icons/fa'
import { FaBell } from 'react-icons/fa'
import { FaCog } from 'react-icons/fa'
import { IoIosLogOut } from "react-icons/io";

const navbar = ({sidebarToggle,setSidebarToggle}) => {
  return (
    <nav className='flex justify-between px-4 py-3 bg-gray-800'>
    <div className='flex items-center text-xl'>
        <FaBars className='text-white cursor-pointer me-4' onClick={()=> setSidebarToggle(!sidebarToggle)}></FaBars>
        <span className='font-semibold text-white'>Employee</span>
    </div>

    <div className='flex items-center gap-x-5'>
        <div className='relative md:w-65'>
            <span className='relative inset-y-0 left-0 flex items-center pl-2 md:absolute'>
                <button className='p-1 text-white focus:outline-none md:text-black'><FaSearch></FaSearch></button></span>
            <input type='text' className='hidden w-full px-4 py-1 pl-12 rounded shadow outline-none md:block'/>
        </div>

    <div className='text-white'>
        <FaBell className='w-6 h-6'></FaBell>
    </div>

    <div className='relative'>
        <button className='text-white group'>
            <FaUserCircle className='w-6 h-6 mt-1'/>
            <div className='absolute right-0 z-10 hidden w-32 bg-white rounded-lg shadow group-focus:block top-full'>
                <ul className='py-2 text-sm text-gray-950'>
                    <li><a href=""><FaUser />Profile</a></li>
                    <li><a href=""><FaCog />Settings</a></li>
                    <li><a href=""><IoIosLogOut />Logout</a></li>
                </ul>
            </div>
        </button>
    </div>
    </div>
    </nav>
  )
}

export default navbar
