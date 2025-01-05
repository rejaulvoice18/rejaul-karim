import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {

    const navLinks = <>
        <li><NavLink to="/">HOME</NavLink></li>
        <li><NavLink to="/experience" className='uppercase'>Experience</NavLink></li>
        <li><NavLink to="/education" className='uppercase'>Education</NavLink></li>
        <li><NavLink to="/skills" className='uppercase'>Skills</NavLink></li>
        <li><NavLink to="/portfolio" className='uppercase'>portfolio</NavLink></li>
        <li><NavLink to="/contact" className='uppercase'>contact</NavLink></li>
        <li><NavLink to="/about" className='uppercase'>about me</NavLink></li>
    </>
    return (
        <div className="navbar bg-bodyColor border-b border-b-orange-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-slate-900 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <a className="ml-0 pl-0 text-xl hover:text-orange-600 hoverEffect"><span className='text-orange-600 font-bold'>R</span>ejaul</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
            <Link to={'/CV-Md Rejaul Karim.pdf'} target='_blank' rel="noopener noreferrer" className='uppercase text-sm bg-orange-500/10 px-4 py-2 rounded-md border border-orange-500/10'>hire me</Link>
            </div>
        </div>
    );
};

export default NavBar;