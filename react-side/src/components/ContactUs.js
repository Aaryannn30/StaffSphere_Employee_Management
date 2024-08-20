import React from 'react';
import './Company.css';

const ContactUs = () => {
    return (
        <div className="contact-us-container">
            <header className="contact-us-header">
                <h1>Contact Us</h1>
            </header>
            
            <section className="contact-us-content">
                <h2>Let's Start a Conversation</h2>
                <p className="note">Please note: all fields are required.</p>
                
                <div className="help-section">
                    <div className="help-column">
                        <h3>Ask how we can help you:</h3>
                        <ul>
                            <li><strong>See our platform in action</strong></li>
                            <p>Request a personalized demo of TUNE’s partner marketing platform.</p>
                            <li><strong>Master performance marketing</strong></li>
                            <p>From <a href="#">TUNE Academy courses</a> to industry <a href="#">research</a> and <a href="#">insights</a>, learn how to grow your business through performance-based partnerships.</p>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;
