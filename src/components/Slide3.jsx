import React from 'react';
import port3 from '../assets/portfolio/port3.png'

const Slide3 = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 border border-orange-500/30 p-5 rounded-md'>
            <div className='flex flex-col gap-4'>
                <h1 className='text-7xl'>02</h1>
                <h2 className='text-2xl text-orange-500 font-bold'>Raw JavaScript Project</h2>
                <p className='text-xs text-gray-400'>This is an interactive website project called "Peddy-Adoption" 
                    where people can adopt adorable pets such as dogs, cats, rabbits, and more. Users will be able to choose pets by 
                    reviewing the available details on the website, helping them find the perfect pet to adopt.</p>
                <div className='flex gap-3 text-orange-500 text-xs'>
                    <h3>JavaScript</h3>
                    <h3>Tailwind CSS</h3>
                    <h3>Daisy UI</h3>
                </div>
                <div className='border-b border-gray-600 my-5'></div>
                <div className='flex gap-3'>
                    <a href='https://peddy-adoption-reja.netlify.app' target='_blank' rel="noopener noreferrer" className='text-xs p-2 bg-orange-500/20 rounded-md cursor-pointer hover:bg-orange-500/50'>Web</a>
                    <a href='https://github.com/rejaulvoice18/peddy-adoption' target='_blank' rel="noopener noreferrer" className='text-xs p-2 bg-orange-500/20 rounded-md cursor-pointer hover:bg-orange-500/50'>Git Client</a>
                </div>
            </div>
            <div>
                <img className='h-[400px] w-full py-5' src={port3} alt="" />
            </div>
        </div>
    );
};

export default Slide3;