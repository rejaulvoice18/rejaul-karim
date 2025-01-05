import React from 'react';
import rejaul from '../../assets/portfolio/Rejaul_PT.jpeg';
import Title from '../../components/Title';

const AboutMe = () => {
    Title('About Me')
    return (
        <div className='grid grid-cols-1 md:grid-cols-6 gap-5 mt-8 md:mt-14'>
            <div className='col-span-2'>
                <div>
                    <h3 className='font-bold'>Md Rejaul Karim</h3>
                    <h5 className='text-2xl font-bold text-orange-500'>Full Stack Web Developer</h5>
                    <p><span className='font-bold'>Nationality:</span> Bangladesh</p>
                    <p><span className='font-bold'>Address:</span> Rua Leite De Vasconcelos 27, Lisboa, Portugal</p>
                    <p><span className='font-bold'>Languages:</span> English, Portuguese</p>
                    <img className='border-2 my-5' src={rejaul} alt="" />
                </div>
            </div>
            <div className='col-span-4'>
                <p>I am a passionate Full Stack Developer with hands-on experience in building 
                    dynamic and user-friendly websites. I enjoy creating sites that are both visually 
                    appealing and highly functional, 
                    with the goal of delivering solutions that truly make a difference.</p><br/>
                <p>To bring my ideas to life, I utilize modern tools and technologies. For the 
                    front-end, I work with React.js, JavaScript, Tailwind CSS, and Daisy UI to 
                    design interactive and responsive user interfaces. On the back-end, 
                    I rely on Express.js, Node.js and MongoDB to build robust and secure systems 
                    that handle data efficiently.</p><br/>
                <p>I thrive on taking on new challenges, whether it involves crafting sleek designs, 
                    managing databases, or ensuring smooth functionality. I am committed to delivering 
                    high-quality work that meets the needs of my clients and users.</p><br/>
                <p>Beyond coding, I love to travel and explore the natural beauty of different places. 
                    I also enjoy reading books that expand my knowledge and spark my creativity. 
                    One of my favorite aspects of being a developer is solving problems—I never 
                    tire of the process of debugging. For me, fixing issues is not just a task; 
                    it is an opportunity to learn and grow.</p>
            </div>
        </div>
    );
};

export default AboutMe;