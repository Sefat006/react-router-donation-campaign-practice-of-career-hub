import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
             <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <Link to="/">
                <button className='btn btn-success'>Go To Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;