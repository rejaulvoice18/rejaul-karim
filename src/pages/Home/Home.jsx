import React from 'react';
import { MdOutlineFileDownload } from 'react-icons/md';
import { Link } from 'react-router-dom';
import SocialLinks from '../../components/SocialLinks';
import Photo from '../../components/Photo';
import Title from '../../components/Title';

const Home = () => {
    Title('Home')
    return (
        <div className='py-10 grid grid-cols-1 md:grid-cols-2 gap-5 mt-10'>
            <div className='flex flex-col items-center md:items-start gap-5 md:gap-7 text-center md:text-start'>
                <div className='flex flex-col gap-3'>
                    <h3 className='font-semibold tracking-wider'>Full Stack Developer</h3>
                    <h2 className='text-3xl md:text-5xl mb-2'>Hello I&apos;m</h2>
                    <h1 className='text-orange-500 text-5xl md:text-7xl tracking-normal'>Rejaul Karim</h1>
                </div>
                <p className='w-auto md:max-w-[500px] font-thin leading-6'>I use modern tools and technologies to bring my ideas to life. For the front-end, I work with React.js, JavaScript, Tailwind CSS, and Daisy UI to design interactive and responsive user interfaces. For the back-end, I rely on Express.js, Node.js and MongoDB to 
                    build robust and secure systems that handle data efficiently.</p>
                <a download href={'/CV-Md Rejaul Karim.pdf'} className='mb-5 bg-transparent rounded-full border border-orange-500/50 
                flex items-center px-6 py-2.5 gap-2 text-sm text-orange-600 hover:bg-orange-500 hover:text-white hoverEffect'>
                    Download cv <MdOutlineFileDownload className='w-4 h-4' />
                </a>
                <SocialLinks></SocialLinks>
            </div>
            {/* Portfolio photo */}
            <Photo></Photo>
        </div>
    );
};

export default Home;