import React from 'react';
import Title from '../../components/Title';

const Education = () => {
    Title('Education')
    return (
        <div className='mt-5 md:mt-10 pb-5'>
            <h2 className='text-orange-500 my-3'>Educational Background</h2>
            <div className='border border-orange-500/20 rounded-b-md p-5 my-5'>
                <div className=''>
                    <div className='flex justify-between'>
                        <h3 className='font-bold text-orange-500'>BSc in Computer Science and Engineering</h3>
                        <p className='text-gray-500'>2013 - 2018</p>
                    </div>
                    <p className='text-gray-300 text-xs'>Leading University, sylhet, Bangladesh</p>
                    <p className='py-5'>This encompasses the foundational principles of computer science and engineering, focusing on programming, algorithms,
                        data structures, systems design, and hardware-software integration
                    </p>
                </div>
                <div className='grid grid-cols-1'>
                    <h3 className='bg-orange-500 py-2 px-3 rounded-md'>Project: Student Information System</h3>
                </div>
            </div>
            <div className='border border-orange-500/20 rounded-b-md p-5 my-5'>
                <div className=''>
                    <div className='flex justify-between'>
                        <h3 className='font-bold text-orange-500'>Master's in Data Science and Advanced Analytics</h3>
                        <p className='text-gray-500'>2020 - Running</p>
                    </div>
                    <p className='text-gray-300 text-xs'>Leading University, sylhet, Bangladesh</p>
                    <p className='py-5'>1st Year:
                        Data Mining, Data Visualization, Statistics for Data Science, Programming for Data Science,
                        Computational Intelligence for Optimization, Storing & Retrieving Data, Big Data Analytics, Big Data Modelling & Management, Deep Learning, Text Mining.
                        Ongoing Courses:
                        Machine Learning
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Education;