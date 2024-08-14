import React from 'react';
import { motion } from 'framer-motion';

const MainBanner = () => {
    const containerVariants = {
        hidden: {
            y: 10,
            opacity: 0
        },
        visible: {
            y: 2,
            opacity: 1,
            transition: {
                delay: 0.3,
                duration: 0.5
            }
        }
    };

    return (
        <motion.div
            className="bg-white text-center pt-28 pb-20 px-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <h1>
                Hello
            </h1>
            <h1 className="text-5xl font-bold text-blue-800 mb-4">Manage your entire team in one App</h1>
            <p className="text-lg mb-6">Connecteam simplifies everyday work with deskless teams and keeps them connected, so you can focus on growing the business.</p>
            <div className="space-x-4">
                <button
                    className="bg-blue-500 text-sm text-white font-bold py-[10px] px-[12px] rounded-full hover:bg-blue-700 transition-all duration-300"
                >
                    Start 14-day free trial
                </button>
                <button
                    className="bg-transparent text-sm text-blue-500 border border-blue-500 font-bold py-[10px] px-[32px] rounded-full hover:border-blue-700 hover:text-blue-700 transition-all duration-300"
                >
                    Book a demo
                </button>
            </div>
        </motion.div>
    );
};

export default MainBanner;
