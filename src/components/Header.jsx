import React, { useState } from 'react'
import './Header.scss'
import logo from '../assets/logo/bell-canada-logo.png';
import ham from '../assets/icons/menu.png'
import webinar from '../assets/images/webinar.png.jpg'
import { Link } from 'react-router-dom';
const Header = () => {
    const [hamOpen, setHamOpen] = useState(false);
  return (
    <div>
        <nav className='navBar'>
            <Link to={'/'}>
                <img className='navBar_logo' src={logo} alt="bell-logo" />
            </Link>
            <p className='navBar_para'>Events and Courses by 'Bell and Bytes'</p>
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
        <section className='hero'>
            <img className='hero' src={webinar} alt="heroimg" />
            <div className='hero__eventCard'>
                <p className='hero_para'>Date: November-10-2024</p>
                <p className='hero_para'>Mode: In-person</p>
                <p className='hero_para'>Time: 9.30 am EST</p>
            </div>
        </section>
        
    </div>
  )
}

export default Header