import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Homepages from './homepages';

const Homepage = () => {
    const {products}=useLoaderData();
    const navigate=useNavigate();
    const handlenavigator=()=>{
        navigate("/")
    }
    return (
       <div>
         <div className='grid lg:grid-cols-3 grid-cols-1 md:grid-cols-3'>
            {
                products.map(product=><Homepages product={product} key={product.id} ></Homepages>)
            }
        </div>
        <div>
        <button onClick={handlenavigator} className="text-white mt-5 lg:ml-14 bg-pink-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Go to home
              </button>
        </div>
       </div>
      
    );
};

export default Homepage;