import port4 from '../assets/portfolio/port4.png'

const Slide4 = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 border border-orange-500/30 p-5 rounded-md'>
            <div className='flex flex-col gap-4'>
                <h1 className='text-7xl'>04</h1>
                <h2 className='text-2xl text-orange-500 font-bold'>Full Stack Project</h2>
                <p className='text-xs text-gray-400'>This Employee Management System is a comprehensive web application designed to help 
                    companies efficiently monitor employee workload, manage salaries, and maintain 
                    contract records. Employees can update their workflow, ensuring transparency in task completion. The HR Executive 
                    oversees employee activities, verifies tasks, and manages salary requests, while the Admin has full control over monitoring all functionalities, 
                    including employee verification, promotions, and salary approvals.</p>
                <div className='flex gap-3 text-orange-500 text-xs'>
                    <h3>React.js</h3>
                    <h3>Node.js</h3>
                    <h3>JavaScript</h3>
                    <h3>Tailwind CSS</h3>
                    <h3>Daisy UI</h3>
                </div>
                <div className='border-b border-gray-600 my-5'></div>
                <div className='flex gap-3'>
                    <a href='https://fintrack-solutions.web.app' target='_blank' rel="noopener noreferrer" className='text-xs p-2 bg-orange-500/20 rounded-md cursor-pointer hover:bg-orange-500/50'>Web</a>
                    <a href='https://github.com/rejaulvoice18/fintrack-solutions' target='_blank' rel="noopener noreferrer" className='text-xs p-2 bg-orange-500/20 rounded-md cursor-pointer hover:bg-orange-500/50'>Git Client</a>
                    <a href='https://github.com/rejaulvoice18/fintrack-solutions-server' target='_blank' rel="noopener noreferrer" className='text-xs p-2 bg-orange-500/20 rounded-md cursor-pointer hover:bg-orange-500/50'>Git Server</a>
                </div>
            </div>
            <div>
                <img className='h-[400px] w-full py-5' src={port4} alt="" />
            </div>
        </div>
    );
};

export default Slide4;