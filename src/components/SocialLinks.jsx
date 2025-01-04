import React from 'react';
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SocialLinks = () => {
    return (
        <div className='flex gap-3'>
            <Link><FaLinkedinIn className='p-2 rounded-full hoverEffect border 
            border-orange-500 hover:bg-orange-500 text-orange-500 hover:text-white' size={35}/>
            </Link>
            <Link><FaGithub className='p-2 rounded-full hoverEffect border 
            border-orange-500 hover:bg-orange-500 text-orange-500 hover:text-white' size={35}/>
            </Link>
            <Link><FaFacebookF className='p-2 rounded-full hoverEffect border 
            border-orange-500 hover:bg-orange-500 text-orange-500 hover:text-white' size={35}/>
            </Link>
        </div>
    );
};

export default SocialLinks;