import React from 'react';
import port2 from '../assets/portfolio/port2.png'
const Slide2 = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 border border-orange-500/30 p-5 rounded-md'>
            <div className='flex flex-col gap-4'>
                <h1 className='text-7xl'>02</h1>
                <h2 className='text-2xl text-orange-500 font-bold'>Full Stack Project</h2>
                <p className='text-xs text-gray-400'>Online Equipment Store <br />
                I developed a full-stack website for an online equipment store using React.js, Node.js, JavaScript, Express.js, 
                MongoDB, Tailwind CSS, and DaisyUI. The platform allows users to browse products,  
                and enjoy a smooth shopping experience. Administrators can dynamically add new products, which are then 
                stored securely in a MongoDB database. 
                This project highlights my ability to create efficient, user-friendly, and scalable web applications.</p>
                <div className='flex gap-3 text-orange-500 text-xs'>
                    <h3>React.js</h3>
                    <h3>JavaScript</h3>
                    <h3>Tailwind CSS</h3>
                    <h3>Daisy UI</h3>
                    <h3>Node.js</h3>
                </div>
                <div className='border-b border-gray-600 my-5'></div>
                <div className='flex gap-3'>
                    <a href='https://equisports-lisboa.web.app' target='_blank' rel="noopener noreferrer" className='text-xs p-2 bg-orange-500/20 rounded-md cursor-pointer hover:bg-orange-500/50'>Web</a>
                    <a href='https://github.com/rejaulvoice18/e-tutor-client' target='_blank' rel="noopener noreferrer" className='text-xs p-2 bg-orange-500/20 rounded-md cursor-pointer hover:bg-orange-500/50'>Git Client</a>
                    <a href='https://github.com/rejaulvoice18/e-tutor-server' target='_blank' rel="noopener noreferrer" className='text-xs p-2 bg-orange-500/20 rounded-md cursor-pointer hover:bg-orange-500/50'>Git Server</a>
                </div>
            </div>
            <div>
                <img className='h-[400px] w-full py-5' src={port2} alt="" />
            </div>
        </div>
    );
};

export default Slide2;