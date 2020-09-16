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
          <FaFacebookSquare color='blue' className='home-icons'><a href='#'></a></FaFacebookSquare>
          <FaInstagram color='#964b00' className='home-icons'><a href='#'></a></FaInstagram>
          <FaYoutube color='red' className='home-icons'><a href='#'></a></FaYoutube>
          <FaTwitterSquare color='blue' className='home-icons'><a href='#'></a></FaTwitterSquare>
          <FaPinterestSquare color='red' className='home-icons'><a href='#'></a></FaPinterestSquare>
            </div>
        </>
    );

export default Home;
