import React from 'react';
import './Page404.css';
import {Link} from 'react-router-dom';
import Stop from './stop.png';

const Page404 = ({location}) => {
    return (
        <div className='main'>
            <h2>Note: <code>{location.pathname}</code> is an invalid address!</h2>
            <p>Please return to <Link to='/'>Homepage</Link></p> 
            <img src={Stop} alt='stop' />
        </div>
    );
}

export default Page404;