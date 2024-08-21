import React, { useState, useEffect } from "react";
import GetStartedButton from "./GetStarted";
import ThemeToggle from "./ThemeToggle";

const Navbar = (props) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const allowScroll = (props.scrolll === 'true')
    useEffect(() => {
        if (props.scroll === 'true') {
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
        }
        else {
            setIsScrolled(false)
        }
    },[props.scroll]);


return (
    <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? "bg-white shadow-lg border-b-2 border-gray-200 py-2"
            : allowScroll ? "bg-transparent py-3" :"py-3"
            }`}
    >
        <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
            <div className="flex items-center space-x-4">
                <div className="text-xl font-bold text-indigo-600">Logo</div>
            </div>
            <div className="flex items-center space-x-4">
                <a
                    href="#pricing"
                    className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                    Pricing
                </a>
                <a
                    href="#login"
                    className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                    Log In
                </a>
                <ThemeToggle />
                <GetStartedButton />
            </div>
        </div>
    </nav>
);
};

export default Navbar;
