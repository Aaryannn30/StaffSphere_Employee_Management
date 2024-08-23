// import React from 'react'
// import { FaSearch, FaUser, FaUserCircle } from 'react-icons/fa'
// import { FaBars } from 'react-icons/fa'
// import { FaBell } from 'react-icons/fa'
// import { FaCog } from 'react-icons/fa'
// import { IoIosLogOut } from "react-icons/io";

// const navbar = ({ sidebarToggle, setSidebarToggle }) => {
//     return (
//         <nav className='flex justify-between px-4 py-3 bg-gray-800'>
//             <div className='flex items-center text-xl'>
//                 <FaBars className='text-white cursor-pointer me-4' onClick={() => setSidebarToggle(!sidebarToggle)}></FaBars>
//                 <span className='font-semibold text-white'>Employee</span>
//             </div>

//             <div className='flex items-center gap-x-5'>
//                 <div className='relative md:w-65'>
//                     <span className='relative inset-y-0 left-0 flex items-center pl-2 md:absolute'>
//                         <button className='p-1 text-white focus:outline-none md:text-black'><FaSearch></FaSearch></button></span>
//                     <input type='text' className='hidden w-full px-4 py-1 pl-12 rounded shadow outline-none md:block' />
//                 </div>

//                 <div className='text-white'>
//                     <FaBell className='w-6 h-6'></FaBell>
//                 </div>

//                 <div className='relative'>
//                     <button className='text-white group'>
//                         <FaUserCircle className='w-6 h-6 mt-1' />
//                         <div className='absolute right-0 z-10 hidden w-32 bg-white rounded-lg shadow group-focus:block top-full'>
//                             <ul className='py-2 text-sm text-gray-950'>
//                                 <li><a href=""><FaUser />Profile</a></li>
//                                 <li><a href=""><FaCog />Settings</a></li>
//                                 <li><a href=""><IoIosLogOut />Logout</a></li>
//                             </ul>
//                         </div>
//                     </button>
//                 </div>
//             </div>
//         </nav>
//     )
// }

// export default navbar


import React from 'react';
import { FaSearch, FaBell, FaUserCircle, FaUserPlus, FaNewspaper } from 'react-icons/fa';
import { LuFlower } from "react-icons/lu";
import SearchBar from './SearchBar';

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-4 py-2 bg-gray-900 shadow-md z-50">
            {/* Website Name */}
            <div className="flex items-center text-sm">
                <LuFlower className='text-purple-500 h-5 w-5'/>
                <span className="font-semibold text-white">&nbsp;StaffSphere </span>
                <span className='text-white font-thin'>&nbsp;Work Management</span>
            </div>

            <div className="flex items-center gap-x-4 justify-around">
                {/* Search Input */}
                {/* <div className="relative w-48">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <button className="p-1 text-gray-400 focus:outline-none">
                            <FaSearch className="text-white hover:text-gray-300 transition-colors duration-300" />
                        </button>
                    </span>
                    <input 
                        type="text" 
                        className="hidden md:block w-full pl-8 pr-3 py-1 text-white bg-gray-700 border border-gray-600 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Search..."
                    />
                </div> */}
                <SearchBar/>

                {/* Notification Icon */}
                <div className="relative">
                    <FaBell 
                        className="w-4 h-4 text-white hover:text-gray-300 transition-colors duration-300 cursor-pointer"
                    />
                </div>

                {/* Update Feed Icon */}
                <div className="relative">
                    <FaNewspaper 
                        className="w-4 h-4 text-white hover:text-gray-300 transition-colors duration-300 cursor-pointer"
                    />
                </div>

                {/* Invite Members Icon */}
                <div className="relative">
                    <FaUserPlus 
                        className="w-4 h-4 text-white hover:text-gray-300 transition-colors duration-300 cursor-pointer"
                    />
                </div>

                {/* User Profile Icon with Dropdown */}
                <div className="relative">
                    <button className="text-white group focus:outline-none">
                        <FaUserCircle className="w-4 h-4 transition-transform duration-300 transform hover:scale-110" />
                        <div className="absolute right-0 mt-1 w-36 bg-white rounded-lg shadow-lg hidden group-focus:block">
                            <ul className="py-2 text-sm text-gray-700">
                                <li className="px-3 py-2 hover:bg-gray-100 flex items-center gap-x-2">
                                    Profile
                                </li>
                                <li className="px-3 py-2 hover:bg-gray-100 flex items-center gap-x-2">
                                    Settings
                                </li>
                                <li className="px-3 py-2 hover:bg-gray-100 flex items-center gap-x-2">
                                    Logout
                                </li>
                            </ul>
                        </div>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

