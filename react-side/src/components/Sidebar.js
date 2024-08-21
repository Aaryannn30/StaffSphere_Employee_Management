import React, { useState } from 'react';
import { FaTachometerAlt, FaUser, FaBell, FaCog, FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex w-screen h-screen bg-gray-100 mt-16">
            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full bg-gray-900 text-white shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    } transition-transform duration-300 ease-in-out w-[200px] mt-16`}
            >
                {/* Toggle Button at the Top */}
                <div className="flex items-center justify-between h-16 px-4 bg-gray-800 border-b border-gray-700">
                    <h1 className="text-lg font-bold">My Sidebar</h1>
                    <button onClick={toggleSidebar} className="focus:outline-none">
                        <FaTimes className="w-5 h-5" />
                    </button>
                </div>
                <nav className="flex-1 px-2 py-4 space-y-2">
                    <a
                        href="/"
                        className="flex items-center px-3 py-2 text-gray-200 bg-gray-800 rounded-lg hover:bg-gray-700 hover:text-white transition"
                    >
                        <FaTachometerAlt className="w-4 h-4" />
                        <span className="ml-3 text-sm">Dashboard</span>
                    </a>
                    <a
                        href="/"
                        className="flex items-center px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-lg transition"
                    >
                        <FaUser className="w-4 h-4" />
                        <span className="ml-3 text-sm">Profile</span>
                    </a>
                    <a
                        href="/"
                        className="flex items-center px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-lg transition"
                    >
                        <FaBell className="w-4 h-4" />
                        <span className="ml-3 text-sm">Notifications</span>
                    </a>
                    <a
                        href="/"
                        className="flex items-center px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-lg transition"
                    >
                        <FaCog className="w-4 h-4" />
                        <span className="ml-3 text-sm">Settings</span>
                    </a>
                    <a
                        href="/"
                        className="flex items-center px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-lg transition"
                    >
                        <FaSignOutAlt className="w-4 h-4" />
                        <span className="ml-3 text-sm">Logout</span>
                    </a>
                </nav>
            </div>

            {/* Toggle Button Outside Sidebar for Opening */}
            {!isOpen && (
                <div className="flex items-center p-1 bg-gray-800 text-white">
                    <nav className="flex-1 space-y-8 mb-10">
                        <button onClick={toggleSidebar} className="focus:outline-none flex items-center px-3 py-2 mb-36 text-gray-200 bg-gray-800 rounded-lg hover:bg-gray-700 hover:text-white transition ">
                            <FaBars className="w-4 h-4" />
                        </button>
                        <button onClick={toggleSidebar}
                            className="flex items-center px-3 py-2 text-gray-200 bg-gray-800 rounded-lg hover:bg-gray-700 hover:text-white transition"
                        >
                            <FaTachometerAlt className="w-4 h-4" />
                        </button>
                        <button onClick={toggleSidebar}
                            className="flex items-center px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-lg transition"
                        >
                            <FaUser className="w-4 h-4" />
                        </button>
                        <button onClick={toggleSidebar}
                            className="flex items-center px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-lg transition"
                        >
                            <FaBell className="w-4 h-4" />
                        </button>
                        <button onClick={toggleSidebar}
                            className="flex items-center px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-lg transition"
                        >
                            <FaCog className="w-4 h-4" />
                        </button>
                        <button onClick={toggleSidebar}
                            className="flex items-center px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-lg transition"
                        >
                            <FaSignOutAlt className="w-4 h-4" />
                        </button>
                    </nav>
                </div>
            )}

            {/* Main Content */}
            <div className={`${!isOpen ? 'ml-[20ox]' : 'ml-[210px]'} 'flex-1 mt-4 transition-transform duration-300 ease-in-out' `}>
                <h2 className="text-2xl font-bold">Main Content</h2>
                <p className="mt-4 text-gray-600">
                    This is the main content area. When the sidebar is toggled, this area will remain visible and
                    unaffected by the sidebar's state.
                </p>
            </div>
        </div>
    );
};

export default Sidebar;
