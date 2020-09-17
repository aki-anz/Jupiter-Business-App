import React from 'react';
import './Page404.css';
import {Link} from 'react-router-dom';
import Stop from './stop.png';

const Page404 = () => {
    return (
        <div className='main'>
            <h2>You have just entered an invalid address!</h2>
            <p>Please return to the Homepage <Link to='/jupiter-business-app'>here</Link>.</p> 
            <img src={Stop} alt='stop' />
        </div>
    );
}

export default Page404;