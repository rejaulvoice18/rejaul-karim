import React from 'react';
import port1 from '../assets/portfolio/port1.png'

const Slide1 = ({img}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 border border-orange-500/30 p-5 rounded-md'>
            <div className='flex flex-col gap-4'>
                <h1 className='text-7xl'>01</h1>
                <h2 className='text-2xl text-orange-500 font-bold'>Full Stack Project</h2>
                <p className='text-xs text-gray-400'>The web app aims to provide a seamless platform for users to book language lessons with tutors build with React.js and Node.js, enhancing accessibility to personalized 
                    learning and enabling tutors to manage their offerings efficiently.</p>
                <div className='flex gap-3 text-orange-500 text-xs'>
                    <h3>React.js</h3>
                    <h3>JavaScript</h3>
                    <h3>Tailwind CSS</h3>
                    <h3>Daisy UI</h3>
                    <h3>Node.js</h3>
                </div>
                <div className='border-b border-gray-600 my-10'></div>
                <div className='flex gap-3'>
                    <a href='https://e-tutor-4ed42.web.app/' target='_blank' rel="noopener noreferrer" className='text-xs p-2 bg-orange-500/20 rounded-md cursor-pointer hover:bg-orange-500/50'>Web</a>
                    <a className='text-xs p-2 bg-orange-500/20 rounded-md cursor-pointer hover:bg-orange-500/50'>Git</a>
                </div>
            </div>
            <div>
                <img className='h-[400px] w-full py-5' src={port1} alt="" />
            </div>
        </div>
    );
};

export default Slide1;