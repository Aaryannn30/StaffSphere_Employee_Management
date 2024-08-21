import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar';

const Dasbboard = () => {

    return (
        <>
            <Navbar scroll='false'/>
            <div className="flex fixed">
                <Sidebar />
            </div>
        </>   
    )
}

export default Dasbboard;
// import React from 'react';

// const SidebarLayout = () => {
//     return (
//         <div className="flex h-screen">
//             {/* Sidebar */}
//             <div className="w-48 bg-[#f5efff] shadow-lg h-full fixed top-0 left-0 flex flex-col">
//                 <a href="#home" className="block py-4 px-4 font-serif bg-[#B1AFFF] text-white">
//                     Profile
//                 </a>
//                 <a href="#perinfo" className="block py-4 px-4 font-serif text-black hover:bg-gray-700 hover:text-white">
//                     Personal info
//                 </a>
//                 <a href="#news" className="block py-4 px-4 font-serif text-black hover:bg-gray-700 hover:text-white">
//                     Working status
//                 </a>
//                 <a href="#contact" className="block py-4 px-4 font-serif text-black hover:bg-gray-700 hover:text-white">
//                     Notifications
//                 </a>
//                 <a href="#about" className="block py-4 px-4 font-serif text-black hover:bg-gray-700 hover:text-white">
//                     Session history
//                 </a>
//             </div>

//             {/* Main Content */}
//             <div className="flex-1 ml-48 flex flex-col">
//                 <div className="flex flex-grow">
//                     {/* Profile Section */}
//                     <div className="bg-white shadow-lg border border-gray-300 flex-shrink-0" style={{ width: '500px', height: '250px' }}>
//                         {/* Profile content here */}
//                     </div>

//                     {/* Social Links Section */}
//                     <div className="bg-white shadow-lg border border-gray-300 flex-shrink-0" style={{ width: '520px', height: '200px' }}>
//                         {/* Social links content here */}
//                     </div>
//                 </div>

//                 <div className="flex flex-grow">
//                     {/* Contact Information Section */}
//                     <div className="bg-white shadow-lg border border-gray-300 flex-shrink-0" style={{ width: '500px', height: '200px' }}>
//                         {/* Contact information content here */}
//                     </div>

//                     {/* Project Status Section */}
//                     <div className="bg-white shadow-lg border border-gray-300 flex-shrink-0" style={{ width: '520px', height: '2=-50px' }}>
//                         {/* Project status content here */}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SidebarLayout;
