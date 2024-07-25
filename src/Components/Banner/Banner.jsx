import React from 'react';
import backgroundImage from '../../assets/Rectangle 4287.png'

const Banner = () => {
    return (
        <>
        <div style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover', // Ensures the image covers the entire area
        height: '100vh',
        width: '100vw',
      }}>
            <h1 className='text-5xl text-black align-middle pt-48 justify-center flex font-bold'>I Grow By Helping People In Need</h1>

            <div className="flex mt-6 items-center w-10/12 mx-auto justify-center gap-1">
                <input type="text" placeholder='search here' className='bg-white p-2 border w-3/12 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' />
                <button className="p-2 bg-blue-500 w-2/12  text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Search</button>
            </div>
        </div>
        </>
    );
};

export default Banner;