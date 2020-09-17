import React from 'react';
import './Home.css';
import {FaInstagram} from 'react-icons/fa';
import {FaFacebookSquare} from 'react-icons/fa';
import {FaTwitterSquare} from 'react-icons/fa';
import {FaPinterestSquare} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';


const Home = () => (
        <>
          <div className='home-image'></div>
          <p className='home-text'>We are Jupiter, 
             a startup from the Netherlands
             established in 2018, with the goal of 
             providing competitive recipe services
             to our customers, of
             which we are known for.</p>
             <div className='home-icons-container'>
                <a href='https://facebook.com'><FaFacebookSquare color='blue' className='home-icons'/></a>
                <a href='https://instagram.com'><FaInstagram color='#964b00' className='home-icons' /></a>
                <a href='https://youtube.com'><FaYoutube color='red' className='home-icons'/></a>
                <a href='https://twitter.com'><FaTwitterSquare color='blue' className='home-icons'/></a>
                <a href='https://pinterest.com'><FaPinterestSquare color='red' className='home-icons'/></a>
            </div>
        </>
    );

export default Home;
