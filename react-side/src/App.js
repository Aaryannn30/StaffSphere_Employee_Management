// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import './App.css';
import Pricing from './components/Pricing';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

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

  return (
    <>
      <Navbar />
      <Pricing />
      <Pricing />
      <Footer/>
    </>
  );

}

export default App;
