import React from 'react'
import './Header.scss'
import logo from '../assets/logo/bell-canada-logo.png';
import ham from '../assets/icons/menu.png'
import webinar from '../assets/images/webinar.png.jpg';
import { useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
  return (
    <div>
        <nav className='navBar'>
            <img className='navBar_logo' src={logo} alt="bell-logo" />
            <p className='navBar__paraevents'>Events and Courses by 'Bell and Bytes'</p>
            <img className='navBar__menu' src={ham} alt="menu" />
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