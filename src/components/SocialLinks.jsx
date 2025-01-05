import React from 'react';
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SocialLinks = () => {
    return (
        <div className='flex gap-3'>
            <Link to={'https://www.linkedin.com/in/md-rejaul-karim'} target='_blank' rel="noopener noreferrer"><FaLinkedinIn className='p-2 rounded-full hoverEffect border 
            border-orange-500 hover:bg-orange-500 text-orange-500 hover:text-white' size={35}/>
            </Link>
            <Link to={'https://github.com/rejaulvoice18'} target='_blank' rel="noopener noreferrer"><FaGithub className='p-2 rounded-full hoverEffect border 
            border-orange-500 hover:bg-orange-500 text-orange-500 hover:text-white' size={35}/>
            </Link>
            <Link to={'https://www.facebook.com/rejaulvoice'} target='_blank' rel="noopener noreferrer"><FaFacebookF className='p-2 rounded-full hoverEffect border 
            border-orange-500 hover:bg-orange-500 text-orange-500 hover:text-white' size={35}/>
            </Link>
        </div>
    );
};

export default SocialLinks;