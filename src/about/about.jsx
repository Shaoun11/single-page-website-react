import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const About = () => {
   const navigate=useNavigate();
    const handlehome=()=>{
       navigate('/')
    }
    return (
        
        <div className=' '>
            <img className='rounded-xl' src="https://i.ibb.co/zJ85PbC/IMG-20230701-195846.jpg" alt="" />
            <h1 className='text-4xl font-semibold mt-48'>
                There is no content Here ......
            </h1>
            <button onClick={handlehome}  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            View Details
            </button>
        </div>

    );
};

export default About;