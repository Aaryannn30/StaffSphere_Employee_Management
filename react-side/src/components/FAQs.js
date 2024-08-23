import React, { useState } from "react";

const Accordion = () => {
    return (
        <section className="py-16 px-4 bg-gradient-to-r from-purple-700 to-blue-600 text-white text-center">
            <div className="container mx-auto">
                <div className="text-center mb-10">
                    <span className="text-lg font-semibold uppercase">FAQ</span>
                    <h2 className="text-4xl font-bold mt-2">Any Questions? Look Here</h2>
                    <p className="text-base mt-4 max-w-xl mx-auto">
                        Find answers to the most frequently asked questions. If you still have questions, feel free to reach out.
                    </p>
                </div>

                <div className="grid gap-8 justify-items-center">
                    <AccordionItem
                        header="How long does it take to deliver your first blog post?"
                        text="It takes 2-3 weeks to get your first blog post ready. That includes in-depth research and the creation of your monthly content marketing strategy."
                    />
                    <AccordionItem
                        header="What is the pricing structure?"
                        text="Our pricing is flexible based on your needs. We offer various packages ranging from one-time blog posts to monthly subscription services."
                    />
                    <AccordionItem
                        header="Can I request revisions?"
                        text="Absolutely! We offer up to two rounds of revisions for each blog post to ensure it meets your expectations."
                    />
                    <AccordionItem
                        header="Do you provide content for other platforms?"
                        text="Yes, we provide content for websites, social media, and newsletters in addition to blog posts."
                    />
                    <AccordionItem
                        header="How do I get started?"
                        text="You can get started by contacting us through our website. We'll schedule an initial consultation to discuss your content needs."
                    />
                    <AccordionItem
                        header="What if I need more than one blog post per week?"
                        text="We can accommodate more frequent content requests. Just let us know your requirements, and we’ll tailor our services accordingly."
                    />
                </div>
            </div>
        </section>
    );
};

const AccordionItem = ({ header, text }) => {
    const [active, setActive] = useState(false);

    const handleToggle = () => {
        setActive(!active);
    };

    return (
        <div
            className={`rounded-lg bg-white/20 backdrop-blur-lg p-6 transition-transform ease-in-out duration-300 cursor-pointer w-full max-w-3xl ${active ? "bg-white text-gray-900 scale-105" : "text-white"}`}
            onClick={handleToggle}
        >
            <button className="w-full flex justify-between items-center bg-transparent border-none outline-none">
                <h4 className="text-lg font-semibold">{header}</h4>
                <div className="icon transition-transform ease-in-out duration-300">
                    <svg
                        className={`fill-current transform ${active ? "rotate-180" : ""}`}
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M10 12.5l-6-6h12l-6 6z" />
                    </svg>
                </div>
            </button>
            {active && (
                <div className="pl-2 overflow-hidden transition-max-height duration-300 ease-in-out">
                    <p className="mt-4 text-gray-900">{text}</p>
                </div>
            )}
        </div>
    );
};

export default Accordion;
