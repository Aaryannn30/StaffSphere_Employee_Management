import React, { useState } from 'react';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        jobName: '',
        company: '',
        phoneNumber: '',
        country: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        // Add your form submission logic here
    };

    return (
        <div className="min-h-full flex justify-center items-center">
            <div className="w-full max-w-7xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
                <div className="flex flex-col py-5 justify-center pl-14 bg-gradient-to-b from-purple-900 to-indigo-900 text-white">
                    <h2 className="text-4xl font-bold mb-4 text-center uppercase border-b-2 border-purple-400 pb-6">
                        Trusted By Over 20,000 Companies
                    </h2>
                    <blockquote className="text-xl border-l-4 border-purple-400 pl-5 my-4 italic leading-relaxed">    
                        "StaffSphere has revolutionized our workflow and improved our team dynamics immensely."
                        <footer className="text-xs text-gray-300 mt-1">
                            — Alex Johnson, CEO of Tech Innovations
                        </footer>
                    </blockquote>
                    <blockquote className="text-xl border-l-4 border-purple-400 pl-5 my-4 italic leading-relaxed">
                        "The best decision we made was integrating StaffSphere into our operations."
                        <footer className="text-xs text-gray-300 mt-1">
                            — Maria Garcia, HR Director at Global Solutions
                        </footer>
                    </blockquote>
                    <blockquote className="text-xl border-l-4 border-purple-400 pl-5 my-4 italic leading-relaxed">
                        "StaffSphere's intuitive design and powerful features make it an invaluable tool for any organization."
                        <footer className="text-xs text-gray-300 mt-1">
                            — Brian Lee, Project Manager at Creative Minds
                        </footer>
                    </blockquote>
                </div>
                <div className="flex justify-center items-center py-10 bg-gradient-to-b from-purple-900 to-indigo-900 text-white">
                    <form
                        onSubmit={handleSubmit}
                        className="bg-purple-500 p-6 rounded-lg shadow-2xl w-full max-w-md"
                    >
                        <h2 className="text-xl font-semibold mb-4 text-center">Register</h2>
                        <div className="mb-3">
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                                className="w-full p-2 border border-gray-300 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-600 focus:bg-blue-50"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                                className="w-full p-2 border border-gray-300 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-600 focus:bg-blue-50"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full p-2 border border-gray-300 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-600 focus:bg-blue-50"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                id="jobName"
                                name="jobName"
                                placeholder="Job Name"
                                value={formData.jobName}
                                onChange={handleChange}
                                required
                                className="w-full p-2 border border-gray-300 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-600 focus:bg-blue-50"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                id="company"
                                name="company"
                                placeholder="Company"
                                value={formData.company}
                                onChange={handleChange}
                                required
                                className="w-full p-2 border border-gray-300 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-600 focus:bg-blue-50"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                id="phoneNumber"
                                name="phoneNumber"
                                placeholder="Phone Number"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                required
                                className="w-full p-2 border border-gray-300 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-600 focus:bg-blue-50"
                            />
                        </div>
                        <div className="mb-4">
                            <select
                                id="country"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                required
                                className="w-full p-2 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:border-blue-600 focus:bg-blue-50"
                            >
                                <option value="" disabled>
                                    Select your country
                                </option>
                                <option value="USA">United States</option>
                                <option value="Canada">Canada</option>
                                <option value="UK">United Kingdom</option>
                                <option value="Australia">Australia</option>
                                <option value="Germany">Germany</option>
                                <option value="France">France</option>
                                <option value="India">India</option>
                                <option value="China">China</option>
                                <option value="Japan">Japan</option>
                            </select>
                        </div>
                        <button
                            type="submit"
                            className="w-full p-2 bg-gradient-to-r from-purple-700 to-pink-500 text-white rounded-md shadow-md hover:shadow-lg transition-transform transform hover:scale-105 active:scale-95"
                        >
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
