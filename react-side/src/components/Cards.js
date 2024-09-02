// import React from 'react';

// const Cards = () => {
//     return (
//         <div className="flex flex-col">
//             <div className="flex flex-row h-screen w-full">
//                 <div className="w-1/2 flex justify-center items-center bg-sky-50 box-bordert">
//                     <div className="h-80 w-80 rounded-lg m-0 bg-cyan-500"></div>
//                 </div>
//                 <div className="w-1/2 flex justify-center items-center bg-slate-50 box-border ">
//                     <h2 className="text-black text-center text-lg">
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
//                         repellendus sunt ipsa, explicabo, voluptatem fugiat iusto dolorem,
//                         porro perspiciatis quidem esse asperiores consequuntur. Obcaecati,
//                         possimus amet! Necessitatibus accusantium deleniti odit?
//                     </h2>
//                 </div>
//             </div>

//             <div className="flex flex-row h-screen w-full">
//                 <div className="w-1/2 flex justify-center items-center bg-sky-50 box-border">
//                     <h2 className="text-black text-center text-lg">
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
//                         repellendus sunt ipsa, explicabo, voluptatem fugiat iusto dolorem,
//                         porro perspiciatis quidem esse asperiores consequuntur. Obcaecati,
//                         possimus amet! Necessitatibus accusantium deleniti odit?
//                     </h2>
//                 </div>
//                 <div className="w-1/2 flex justify-center items-center bg-slate-50  box-border">
//                     <div className="h-80 w-80 rounded-lg m-5 bg-pink-500"></div>
//                 </div>
//             </div>

//             <div className="flex flex-row h-screen w-full">
//                 <div className="w-1/2 flex justify-center items-center bg-sky-50 box-border">
//                     <div className="h-80 w-80 rounded-lg m-5 bg-yellow-300"></div>
//                 </div>
//                 <div className="w-1/2 flex justify-center items-center bg-slate-50  box-border">
//                     <h2 className="text-black text-center text-lg">
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
//                         repellendus sunt ipsa, explicabo, voluptatem fugiat iusto dolorem,
//                         porro perspiciatis quidem esse asperiores consequuntur. Obcaecati,
//                         possimus amet! Necessitatibus accusantium deleniti odit?
//                     </h2>
//                 </div>
//             </div>

//             <div className="flex flex-row h-screen w-full">
//                 <div className="w-1/2 flex justify-center items-center bg-sky-50 box-border">
//                     <h2 className="text-black text-center text-lg">
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
//                         repellendus sunt ipsa, explicabo, voluptatem fugiat iusto dolorem,
//                         porro perspiciatis quidem esse asperiores consequuntur. Obcaecati,
//                         possimus amet! Necessitatibus accusantium deleniti odit?
//                     </h2>
//                 </div>
//                 <div className="w-1/2 flex justify-center items-center bg-slate-50 box-border">
//                     <div className="h-80 w-80 rounded-lg m-5 bg-teal-400"></div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Cards;

// sssssssssssssssssssssssssssssssssssss

import React from 'react';

const Cards = () => {
  return (
    <div className="flex flex-col overflow-x-hidden font-sans text-azure m-0 p-0">
      <div className="flex flex-row h-screen w-full">
        <div className="flex justify-center items-center w-1/2">
          <div className="h-[500px] w-[600px] rounded-[7%] bg-[#CBE2B5] m-5"></div>
        </div>
        <div className="flex justify-center items-center w-1/2 bg-[#fefeff] p-5 box-border">
          <div>
            <p className="font-semibold text-[#0D134C] text-lg uppercase tracking-widest mb-5">Scheduling and Time tracking</p>
            <h2 className="text-[#0D134C] text-4xl text-left m-0">Full control, from scheduling to payroll</h2>
            <p className="text-[#0D134C] text-base text-left">Easily create & send schedules, accurately track work hours to digital timesheets, and get pay right, time and again.</p>
            <ul className="text-[#0D134C] text-base font-semibold columns-2">
              <li className="flex items-center"><i className="fab text-xl">&#xf77a;</i> Team Scheduling</li>
              <li className="flex items-center"><i className="fab text-xl">&#xf77a;</i> Time Clock</li>
              <li className="flex items-center"><i className="fab text-xl">&#xf77a;</i> Geofence</li>
              <li className="flex items-center"><i className="fab text-xl">&#xf77a;</i> One-click Payroll</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-row h-screen w-full">
        <div className="flex justify-center items-center w-1/2 bg-[#fefeff] p-5 box-border">
          <div>
            <p className="font-semibold text-[#0D134C] text-lg uppercase tracking-widest mb-5">Scheduling and Time tracking</p>
            <h2 className="text-[#0D134C] text-4xl text-left m-0">Full control, from scheduling to payroll</h2>
            <p className="text-[#0D134C] text-base text-left">Easily create & send schedules, accurately track work hours to digital timesheets, and get pay right, time and again.</p>
            <ul className="text-[#0D134C] text-base font-semibold columns-2">
              <li className="flex items-center"><i className="fab text-xl">&#xf77a;</i> Team Scheduling</li>
              <li className="flex items-center"><i className="fab text-xl">&#xf77a;</i> Time Clock</li>
              <li className="flex items-center"><i className="fab text-xl">&#xf77a;</i> Geofence</li>
              <li className="flex items-center"><i className="fab text-xl">&#xf77a;</i> One-click Payroll</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center items-center w-1/2">
          <div className="h-[500px] w-[600px] rounded-[7%] bg-[#CBE2B5] m-5"></div>
        </div>
      </div>

      <div className="flex flex-row h-screen w-full">
        <div className="flex justify-center items-center w-1/2">
          <div className="h-[500px] w-[600px] rounded-[7%] bg-[#CBE2B5] m-5"></div>
        </div>
        <div className="flex justify-center items-center w-1/2 bg-[#fefeff] p-5 box-border">
          <div>
            <p className="font-semibold text-[#0D134C] text-lg uppercase tracking-widest mb-5">Scheduling and Time tracking</p>
            <h2 className="text-[#0D134C] text-4xl text-left m-0">Full control, from scheduling to payroll</h2>
            <p className="text-[#0D134C] text-base text-left">Easily create & send schedules, accurately track work hours to digital timesheets, and get pay right, time and again.</p>
            <ul className="text-[#0D134C] text-base font-semibold columns-2">
              <li className="flex items-center"><i className="fab text-xl">&#xf77a;</i> Team Scheduling</li>
              <li className="flex items-center"><i className="fab text-xl">&#xf77a;</i> Time Clock</li>
              <li className="flex items-center"><i className="fab text-xl">&#xf77a;</i> Geofence</li>
              <li className="flex items-center"><i className="fab text-xl">&#xf77a;</i> One-click Payroll</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-row h-screen w-full">
        <div className="flex justify-center items-center w-1/2 bg-[#fefeff] p-5 box-border">
          <div>
            <p className="font-semibold text-[#0D134C] text-lg uppercase tracking-widest mb-5">Scheduling and Time tracking</p>
            <h2 className="text-[#0D134C] text-4xl text-left m-0">Full control, from scheduling to payroll</h2>
            <p className="text-[#0D134C] text-base text-left">Easily create & send schedules, accurately track work hours to digital timesheets, and get pay right, time and again.</p>
            <ul className="text-[#0D134C] text-base font-semibold columns-2">
              <li className="flex items-center"><i className="fab text-xl">&#xf77a;</i> Team Scheduling</li>
              <li className="flex items-center"><i className="fab text-xl">&#xf77a;</i> Time Clock</li>
              <li className="flex items-center"><i className="fab text-xl">&#xf77a;</i> Geofence</li>
              <li className="flex items-center"><i className="fab text-xl">&#xf77a;</i> One-click Payroll</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center items-center w-1/2">
          <div className="h-[500px] w-[600px] rounded-[7%] bg-[#CBE2B5] m-5"></div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
