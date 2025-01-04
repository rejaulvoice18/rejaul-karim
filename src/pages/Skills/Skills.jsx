import React from 'react';
import react from '../../assets/logoskills/react.png'
import javascript from '../../assets/logoskills/javascript.png'
import tail from '../../assets/logoskills/tail.png'
import nodejs from '../../assets/logoskills/nodejs.png'
import mongodb from '../../assets/logoskills/mongo-db.png'
import express from '../../assets/logoskills/expressjs.png'


const Skills = () => {
    return (
        <div className='mt-5 md:mt-10 border border-orange-600/30 bg-orange-500/15 p-3 rounded-md'>
            <h2 className='text-orange-500'>Technical Skills</h2>
            <div className='grid grid-cols-12 gap-5 my-5'>
                <div className='col-span-1'>
                    <img src={react} alt="" />
                </div>
                <div className='col-span-11'>
                    <div className='flex justify-between'>
                        <h3>ReactJS</h3>
                        <span>90%</span>
                    </div>
                    
                    <progress className="progress progress-info w-full" value="90" max="100"></progress>
                </div>
            </div>
            <div className='grid grid-cols-12 gap-5 my-5'>
                <div className='col-span-1'>
                    <img src={javascript} alt="" />
                </div>
                <div className='col-span-11'>
                    <div className='flex justify-between'>
                        <h3>JavaScript</h3>
                        <span>88%</span>
                    </div>
                    <progress className="progress progress-warning w-full" value="88" max="100"></progress>
                </div>
            </div>
            <div className='grid grid-cols-12 gap-5 my-5'>
                <div className='col-span-1'>
                    <img src={tail} alt="" />
                </div>
                <div className='col-span-11'>
                    <div className='flex justify-between'>
                        <h3>Tailwind</h3>
                        <span>80%</span>
                    </div>
                    <progress className="progress progress-info w-full" value="80" max="100"></progress>
                </div>
            </div>
            <div className='grid grid-cols-12 gap-5 my-5'>
                <div className='col-span-1'>
                    <img src={nodejs} alt="" />
                </div>
                <div className='col-span-11'>
                    <div className='flex justify-between'>
                        <h3>Node.js</h3>
                        <span>85%</span>
                    </div>
                    <progress className="progress progress-accent w-full" value="85" max="100"></progress>
                </div>
            </div>
            <div className='grid grid-cols-12 gap-5 my-5'>
                <div className='col-span-1'>
                    <img src={mongodb} alt="" />
                </div>
                <div className='col-span-11'>
                    <div className='flex justify-between'>
                        <h3>MongoDB</h3>
                        <span>75%</span>
                    </div>
                    <progress className="progress progress-accent w-full" value="75" max="100"></progress>
                </div>
            </div>
            <div className='grid grid-cols-12 gap-5 my-5'>
                <div className='col-span-1'>
                    <img src={express} alt="" />
                </div>
                <div className='col-span-11'>
                    <div className='flex justify-between'>
                        <h3>Expressjs</h3>
                        <span>70%</span>
                    </div>
                    <progress className="progress w-full" value="70" max="100"></progress>
                </div>
            </div>
        </div>
    );
};

export default Skills;