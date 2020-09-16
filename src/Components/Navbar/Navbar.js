import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import {MdHome} from 'react-icons/md';
import {BiSearch} from 'react-icons/bi';
import {AiOutlineBook} from 'react-icons/ai';
import {GiFoodChain} from 'react-icons/gi';
import {FaHamburger} from 'react-icons/fa';
import {MdContactMail} from 'react-icons/md';

const Navbar = () => {
   const [value, setValue] = useState(false);
   const handleToggle = () => {
       setValue(!value);
   }
   const toggleMenu = (
       <div className='nav-menu-div'>
        <ul className='nav-menu'>
        <li className='nav-menu-links'><Link className='toggle-link' to='/'><MdHome className='toggle-link-icons'/>Home</Link></li>
        <li className='nav-menu-links'><Link className='toggle-link' to='search'><BiSearch className='toggle-link-icons'/>Search</Link></li>
        <li className='nav-menu-links'><Link className='toggle-link' to='plan'><AiOutlineBook className='toggle-link-icons'/>Plan</Link></li>
        <li className='nav-menu-links'><Link className='toggle-link' to='/contact'><MdContactMail className='toggle-link-icons'/> Contact Us</Link></li>
        </ul>       
        </div>
   );
    return (
        <>
        <nav>
            <h3>JUP<GiFoodChain size='3.3rem'/>TER!</h3>
            <div>
            <FaHamburger
                className='toggle-button'
                onClick={handleToggle}
            />
            {value && toggleMenu}
            </div>
            <ul className='nav-link'>
            <li className='nav-links'><Link className='link' to='/'><MdHome className='nav-links-icons'/>Home</Link></li>
            <li className='nav-links'><Link className='link' to='/search'><BiSearch className='nav-links-icons'/>Search</Link></li>
            <li className='nav-links'><Link className='link' to='/plan'><AiOutlineBook className='nav-links-icons'/>Plan</Link></li>
            <li className='nav-links'><Link className='link' to='/contact'><MdContactMail className='nav-links-icons'/> Contact Us</Link></li>
            </ul>
        </nav>
        </>
);
}

export default Navbar;
