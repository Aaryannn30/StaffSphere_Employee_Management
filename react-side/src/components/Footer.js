import React from "react";
import SocialCard from "./SocialMedia"; // Assuming SocialCard is correctly exported

const Footer = () => {
    return (
        <div className="text-white bg-gray-800">
            <div className="px-4 py-12 sm:py-16 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-between gap-6">
                    <div className="flex-1 min-w-[200px] lg:w-1/5 mb-6">
                        <h4 className="mb-4 text-lg font-bold">Company</h4>
                        <a href="/employer" className="block mb-2 text-gray-400 hover:text-white">
                            About Us
                        </a>
                        <a href="/healthplan" className="block mb-2 text-gray-400 hover:text-white">
                            Contact Us
                        </a>
                        <a href="/individual" className="block text-gray-400 hover:text-white">
                            Pricing
                        </a>
                    </div>

                    <div className="flex-1 min-w-[200px] lg:w-1/5 mb-6">
                        <h4 className="mb-4 text-lg font-bold">Privacy & Support</h4>
                        <a href="/resource" className="block mb-2 text-gray-400 hover:text-white">
                            Privacy Policy
                        </a>
                        <a href="/resource" className="block mb-2 text-gray-400 hover:text-white">
                            FAQs
                        </a>
                        <a href="/resource" className="block text-gray-400 hover:text-white">
                            Terms &  Conditions
                        </a>
                        <a href="/resource" className="block text-gray-400 hover:text-white">
                            Troubleshooting Guide
                        </a>
                    </div>

                    <div className="flex-1 min-w-[200px] lg:w-1/5 mb-6">
                        <h4 className="mb-4 text-lg font-bold">Product</h4>
                        <a href="/employer" className="block mb-2 text-gray-400 hover:text-white">
                            Task Management 
                        </a>
                        <a href="/terms" className="block mb-2 text-gray-400 hover:text-white">
                            Employee Profile
                        </a>
                        <a href="/privacy" className="block mb-2 text-gray-400 hover:text-white">
                            Dashboard
                        </a>
                        {/* <a href="/security" className="block mb-2 text-gray-400 hover:text-white">
                            Security
                        </a>
                        <a href="/cookie" className="block text-gray-400 hover:text-white">
                            Cookie Declaration
                        </a> */}
                    </div>

                    <div className="flex-1 min-w-[200px] lg:w-1/5 mb-6">
                        <h4 className="mb-4 text-lg font-bold">Connect With Us</h4>
                        <SocialCard />
                    </div>
                </div>

                <hr className="my-6 border-t border-gray-700" />

                <div className="flex items-center justify-center sm:justify-between">
                    <p className="text-sm font-semibold">
                        &copy; copyright 2024.All Rights Reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
