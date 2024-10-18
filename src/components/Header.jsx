import React, { useState } from 'react'
import './Header.scss'
import logo from '../assets/logo/bell-canada-logo.png';
import ham from '../assets/icons/menu.png'
import webinar from '../assets/images/webinar.png.jpg';
import { useLocation } from 'react-router-dom';

import { Link } from 'react-router-dom';
const Header = () => {
    const [hamOpen, setHamOpen] = useState(false);
    const location = useLocation();
  return (
    <div>
        <nav className='navBar'>
            <Link to={'/'}>
                <img className='navBar_logo' src={logo} alt="bell-logo" />
            </Link>
            <p className='navBar__paraevents'>Events and Courses by 'Bell and Bytes'</p>
            <button
                className='navBar__ham-toggle'
                onClick={() => setHamOpen((prev) => !prev)}
            >
                <img className='navBar__menu' src={ham} alt="menu" />
            </button>
            {/* <ul className={`navBar__menu-nav ${hamOpen ? 'navBar__menu-nav--show' : ''}`}>
                <li>Log out</li>
            </ul> */}
            
        </nav>
        <div className='banner'>
            <p className='banner__heading'>Event Details</p>
        </div>
        {/* {!location.pathname.startsWith('/course/') && ( */}
        <section className='hero'>
            <img className='hero' src={webinar} alt="heroimg" />
            <div className='hero__eventCard'>
                <p className='hero__para'>Date: November-1st2024</p>
                <p className='hero__para'>Mode: Online</p>
                <p className='hero__para'>Time: 9.30 am EST</p>
            </div>
        </section>
         {/* )} */}
    </div>
  )
}

export default Header