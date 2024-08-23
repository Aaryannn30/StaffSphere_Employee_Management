import React from 'react'
import Sidebar from './Sidebar'
import Dnav from './DNav'
import DView from './Dashboard/DView'
import { BrowserRouter as Router } from 'react-router-dom'

const Dasbboard = () => {

    return (
        <>
            <div className="">
                <Router>
                    <Sidebar />                
                </Router>
            </div>
        </>
    )
}

export default Dasbboard;
