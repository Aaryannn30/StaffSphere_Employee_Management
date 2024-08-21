// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainContent from './MainContent'; // Import the MainContent component
import Dashboard from './components/Dashboard';
import DashboardSidebar from './components/Dashboard_Sidebar'
import { useState } from 'react';

const App = () => {
  // const [details, setDetails] = useState([]);

  // useEffect(() => {
  //   let data;
  //   axios.get(`http://127.0.0.1:8000/`)
  //     .then(res => {
  //       data = res.data;
  //       setDetails(data);
  //     })
  //     .catch(err=>{
  //       console.log(err)
  //     })
  // }, []); // Empty dependency array to run only on mount

  // return (
  //   <div className='App'>
  //     <header>
  //       Django Generated Data:
  //     </header>
  //     <hr />
  //     {details.map((output, id) => (
  //       <div key={id}>
  //         <div>
  //           <h2>
  //             {output.employee}
  //           </h2>
  //           <h3>
  //             {output.department}
  //           </h3>
  //         </div>
  //       </div>
  //     ))}
  //   </div>
  // );
  const [sidebarToggle,setSidebarToggle] = useState(false)
  return (
    // <>
    //   <Navbar />
    //   <MainBanner/>
    //   <Cards/>
    //   <Pricing />
    //   <LoginForm/>
    //   <Footer/>

    // </>
  <Router>
    <Navbar />
      <MainContent />  {/* Use the MainContent component to handle routes */}
    <Footer />

    {/* for admin dashboard */}

    <div className="flex">
<Dashboard sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle}/>
<DashboardSidebar sidebarToggle={sidebarToggle}/>
    </div>
  </Router>
  );

}

export default App;
