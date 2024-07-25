import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import backgroundImage from '../../assets/Rectangle 4287-1.png'

const Root = () => {

    
    return (
        <div className="sm:m-1 md:m-3 lg:m-5 xl:m-8">
            <Header></Header>
            <div className='max-w-6xl justify-center flex align-middle items-center mx-auto'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;