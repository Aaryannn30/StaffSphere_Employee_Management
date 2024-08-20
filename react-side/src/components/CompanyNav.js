import React, { useState, useEffect } from "react";
import { NavLink, useNavigate  } from "react-router-dom";
import GetStartedButton from "./GetStarted";

const CompanyNav = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const LoadLogoClick = (e) => {
        e.preventDefault();
        navigate("/App", {replace : true});
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-white shadow-lg border-b-2 border-gray-200 py-2"
                : "bg-transparent py-3"
                }`}
        >
            <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
                <div className="flex items-center space-x-4">
                    <div className="text-xl font-bold text-indigo-600">
                        <a href="/App" onClick={LoadLogoClick}>Logo</a>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <a
                        href="/App" onClick={LoadLogoClick}
                        className="text-gray-600 hover:text-indigo-600 transition-colors"
                    >
                        Home
                    </a>
                    <NavLink
                        to="/about-us"
                        className="text-gray-600 hover:text-indigo-600 transition-colors"
                    >
                        About Us
                    </NavLink>
                    <NavLink
                        to="/contact-us"
                        className="text-gray-600 hover:text-indigo-600 transition-colors"
                    >
                        Contact US
                    </NavLink>
                    <NavLink
                        to="/pricing"
                        className="text-gray-600 hover:text-indigo-600 transition-colors"
                    >
                        Pricing
                    </NavLink>
                    <GetStartedButton/>
                </div>
            </div>
        </nav>
    );

};

export default CompanyNav;