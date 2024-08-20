import React from "react";
import { NavLink } from "react-router-dom";
import SocialCard from "./SocialMedia"; // Assuming SocialCard is correctly exported

const Footer = () => {

    return (
        <div className="bg-gray-800 text-white">
            <div className="py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
                <div className="flex flex-wrap gap-6 justify-between">
                    <div className="flex-1 min-w-[200px] lg:w-1/5 mb-6">
                        <h4 className="text-lg font-bold mb-4">Company</h4>
                        <NavLink to="/about-us" className="block text-gray-400 hover:text-white mb-2">
                        About Us
                        </NavLink>
                        <NavLink to="/contact-us" className="block text-gray-400 hover:text-white mb-2">
                        Contact Us
                        </NavLink>
                        <NavLink to="/pricing" className="block text-gray-400 hover:text-white">
                        Pricing
                        </NavLink>
                    </div>

                    <div className="flex-1 min-w-[200px] lg:w-1/5 mb-6">
                        <h4 className="text-lg font-bold mb-4">Resources</h4>
                        <a href="/resource" className="block text-gray-400 hover:text-white mb-2">
                            Resource Center
                        </a>
                        <a href="/resource" className="block text-gray-400 hover:text-white mb-2">
                            Resource Center
                        </a>
                        <a href="/resource" className="block text-gray-400 hover:text-white">
                            Resource Center
                        </a>
                    </div>

                    <div className="flex-1 min-w-[200px] lg:w-1/5 mb-6">
                        <h4 className="text-lg font-bold mb-4">Partners</h4>
                        <a href="/employer" className="block text-gray-400 hover:text-white mb-2">
                            Swing Tech
                        </a>
                        <a href="/terms" className="block text-gray-400 hover:text-white mb-2">
                            Terms & Conditions
                        </a>
                        <a href="/privacy" className="block text-gray-400 hover:text-white mb-2">
                            Privacy
                        </a>
                        <a href="/security" className="block text-gray-400 hover:text-white mb-2">
                            Security
                        </a>
                        <a href="/cookie" className="block text-gray-400 hover:text-white">
                            Cookie Declaration
                        </a>
                    </div>

                    <div className="flex-1 min-w-[200px] lg:w-1/5 mb-6">
                        <h4 className="text-lg font-bold mb-4">Coming Soon on</h4>
                        <SocialCard />
                    </div>
                </div>

                <hr className="border-t border-gray-700 my-6" />

                <div className="flex justify-center sm:justify-between items-center">
                    <p className="text-sm font-semibold">
                        All rights reserved
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
