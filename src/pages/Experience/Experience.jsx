import React from 'react';
import Title from '../../components/Title';

const Experience = () => {
    Title('Experience')
    return (
        <div className='mt-5 md:mt-10 pb-5'>
            <h2 className='text-orange-500 my-3'>Professional Experience</h2>
            <div className='border border-orange-500/20 rounded-b-md p-5'>
                <div className=''>
                    <div className='flex justify-between'>
                        <h3 className='font-bold text-orange-500'>E-commerce Advisor</h3>
                        <p className='text-gray-500'>May, 2023 - Aug, 2024</p>
                    </div>
                    <p className='text-gray-300 text-xs'>Foundever, Lisbon, Portugal</p>
                    <p className='py-5'>As an e-commerce advisor at Foundever, I managed client emails, addressed queries about refunds (full and partial),
                        resolved complaints about sellers, and ensured clients were informed once their issues were successfully resolved.
                    </p>
                </div>
            </div>
            <div className='border border-orange-500/20 rounded-b-md p-5 my-5'>
                <div className=''>
                    <div className='flex justify-between'>
                        <h3 className='font-bold text-orange-500'>Frontend Developer</h3>
                        <p className='text-gray-500'>Jan, 2019 - Oct, 2020</p>
                    </div>
                    <p className='text-gray-300 text-xs'>Top Soft It, sylhet, Bangladesh</p>
                    <p className='py-5'>Writing and maintaining code in HTML, CSS, and JavaScript to create user-facing parts of websites or applications.
                        Working with tool React for efficient development.
                        Ensuring designs look good and function well across devices using CSS frameworks.
                        Communicating with designers, back-end developers, and project managers to align on features and requirements.
                        Fixing UI bugs, testing for cross-browser compatibility, and ensuring smooth functionality.
                        Using Git for tracking changes and collaborating with the team.
                        Staying updated with the latest tools, technologies, and industry trends.
                    </p>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-5 gap-5'>
                    <h3 className='bg-orange-500 py-2 px-3 rounded-md'>React.js</h3>
                    <h3 className='bg-orange-500 py-2 px-3 rounded-md'>Javascript</h3>
                    <h3 className='bg-orange-500 py-2 px-3 rounded-md'>Bootstrap</h3>
                    <h3 className='bg-orange-500 py-2 px-3 rounded-md'>Express.js</h3>
                    <h3 className='bg-orange-500 py-2 px-3 rounded-md'>MongoDB</h3>
                </div>
            </div>
            <div className='border  border-orange-500/20 rounded-b-md p-5'>
                <div className=''>
                    <div className='flex justify-between'>
                        <h3 className='font-bold text-orange-500'>Lecturer (ICT) </h3>
                        <p className='text-gray-500'>Jan, 2018 - Dec, 2018</p>
                    </div>
                    <p className='text-gray-300 text-xs'>Laxmipur, Paschim Banglabazar, Dowarabazar, Sunamganj, Bangladesh</p>
                    <p className='py-5'>Applied knowledge to students and assist students with the learning
                        Process. Evaluation on Data Communication and Network, Surveillance Security
                        System, Programming Essential, Graphics Design, Web Development, Computer Application, Object Oriented Programming,
                        Database Management System, IT Support, Lab Work and Supervising several student projects, Maintain Weekly programming contest.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Experience;