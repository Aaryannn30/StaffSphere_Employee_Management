import React from 'react';

const Cards = () => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row h-screen w-full">
                <div className="w-1/2 flex justify-center items-center bg-sky-50 box-border">
                    <div className="h-80 w-80 rounded-lg m-0 bg-cyan-500"></div>
                </div>
                <div className="w-1/2 flex justify-center items-center bg-slate-50 box-border ">
                    <h2 className="text-black text-center text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
                        repellendus sunt ipsa, explicabo, voluptatem fugiat iusto dolorem,
                        porro perspiciatis quidem esse asperiores consequuntur. Obcaecati,
                        possimus amet! Necessitatibus accusantium deleniti odit?
                    </h2>
                </div>
            </div>

            <div className="flex flex-row h-screen w-full">
                <div className="w-1/2 flex justify-center items-center bg-sky-50 box-border">
                    <h2 className="text-black text-center text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
                        repellendus sunt ipsa, explicabo, voluptatem fugiat iusto dolorem,
                        porro perspiciatis quidem esse asperiores consequuntur. Obcaecati,
                        possimus amet! Necessitatibus accusantium deleniti odit?
                    </h2>
                </div>
                <div className="w-1/2 flex justify-center items-center bg-slate-50  box-border">
                    <div className="h-80 w-80 rounded-lg m-5 bg-pink-500"></div>
                </div>
            </div>

            <div className="flex flex-row h-screen w-full">
                <div className="w-1/2 flex justify-center items-center bg-sky-50 box-border">
                    <div className="h-80 w-80 rounded-lg m-5 bg-yellow-300"></div>
                </div>
                <div className="w-1/2 flex justify-center items-center bg-slate-50  box-border">
                    <h2 className="text-black text-center text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
                        repellendus sunt ipsa, explicabo, voluptatem fugiat iusto dolorem,
                        porro perspiciatis quidem esse asperiores consequuntur. Obcaecati,
                        possimus amet! Necessitatibus accusantium deleniti odit?
                    </h2>
                </div>
            </div>

            <div className="flex flex-row h-screen w-full">
                <div className="w-1/2 flex justify-center items-center bg-sky-50 box-border">
                    <h2 className="text-black text-center text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
                        repellendus sunt ipsa, explicabo, voluptatem fugiat iusto dolorem,
                        porro perspiciatis quidem esse asperiores consequuntur. Obcaecati,
                        possimus amet! Necessitatibus accusantium deleniti odit?
                    </h2>
                </div>
                <div className="w-1/2 flex justify-center items-center bg-slate-50 box-border">
                    <div className="h-80 w-80 rounded-lg m-5 bg-teal-400"></div>
                </div>
            </div>
        </div>
    );
};

export default Cards;
