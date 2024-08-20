import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CompanyNav from './CompanyNav.js';
import AboutUS from './AboutUs.js';
import ContactUs from './ContactUs.js';
import Pricing from './Pricing.js';
import App from "../App.js";

const Company = () => {
    return (
        // <BrowserRouter>
        //     <Routes>
        //         <Route path="/App" element={<App />} />
        //         <Route 
        //         path="/*"
        //         element={
        //             <>
        //             <CompanyNav />
        //                 <Routes>
        //                     <Route path="/" element={<AboutUS />} />
        //                     <Route path="/contact-us" element={<ContactUs />} />
        //                     <Route path="/pricing" element={<Pricing />} />
        //                 </Routes>
        //             </>
        //         } />
        //     <Route path="*" element={<Navigate to="/" replace />} />
        //     </Routes>
        // </BrowserRouter>

        <div>
            <h1>Company!!</h1>
        </div>
    );
}

export default Company;