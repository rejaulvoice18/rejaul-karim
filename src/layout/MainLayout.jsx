import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

const MainLayout = () => {
    return (
        <div className='px-8 md:max-w-screen-xl mx-auto'>
            <NavBar></NavBar>
            <div className='min-h-[calc(100vh-70px)]'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;