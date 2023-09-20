import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate=useNavigate();
    const handlenavigate=()=>{
        navigate("/")
    }
    return (
        <div >
        <div className='flex justify-center items-start h-screen  '>
        <div class="w-full max-w-sm bg-gray-600  shadow-blue-500 shadow-lg border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700">
    <div class="flex justify-end px-4 pt-4">
        <button id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
            <span class="sr-only">Open dropdown</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
            </svg>
        </button>
       
    </div>
    <div class="flex flex-col items-center pb-10">
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://i.ibb.co/Y3fSgyy/375065849-292997916686323-1875057545455869565-n.jpg" alt="Bonnie image"/>
        <h5 class="mb-1 text-2xl font-semibold text-white">MD.Shaoun</h5>
        <span class="text-base font-semibold mb-1 text-gray-300 dark:text-gray-400">Fontend Developer</span>
        <span class="text-sm ml-2 text-gray-200 dark:text-gray-400">hey,I am a junior web Developer eager to contribute my skills and enthusiasm to the world of software development. With a solid foundation in programming languages such as React.js,Next.js,MongoDB,css framework,javascript framework I'm committed to learning and growing in this dynamic field. I have experience in these community, and I'm excited to collaborate with experienced developers to create innovative solutions and deliver high-quality software. My goal is to continually expand my knowledge and expertise while making a meaningful impact on projects and contributing to the success of the team."</span>
        <div class="flex mt-4 space-x-3 md:mt-6">
            <a href="https://www.instagram.com/shaoun_._/" target="_blank" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a>
            <a href="https://www.instagram.com/direct/inbox/" target="_blank" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</a>
        </div>
    </div>
</div>
        </div>

              <div className='items-center lg:ml-[1340px]'>
              <button onClick={handlenavigate} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Go to home
            </button>
              </div>

        </div>
    );
};

export default Profile;