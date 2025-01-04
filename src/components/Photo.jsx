import React from 'react';
import profile from '../assets/rejaul karim.png'
import { motion } from 'motion/react';

const Photo = () => {
    return (
        <div className='w-full h-full flex items-center justify-center relative'>

            <motion.div initial={{opacity:0}} 
            animate={{opacity:1, transition:{delay:2.4, duration:0.4, ease: 'easeInOut'}}}>
                <div className='w-[250px] h-[250px] lg:w-[400px] lg:h-[420px] 
            mix-blend-lighten overflow-hidden rounded-full border border-orange-600 bg-orange-500/50'>
                    <img className='object-contain w-full h-full' src={profile} alt="" />
                </div>
            </motion.div>
        </div>
    );
};

export default Photo;