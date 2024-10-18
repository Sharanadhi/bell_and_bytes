import React from 'react'
import './Header.scss'
import logo from '../assets/logo/bell-canada-logo.png';
import ham from '../assets/icons/menu.png'
import webinar from '../assets/images/webinar.png.jpg'
const Header = () => {
  return (
    <div>
        <nav className='navBar'>
            <img className='navBar_logo' src={logo} alt="bell-logo" />
            <p className='navBar_para'>Events and Courses by 'Bell and Bytes'</p>
            <img className='navBar__menu' src={ham} alt="menu" />
        </nav>
        <div className='banner'>
            <p className='banner__heading'>Event Details</p>
        </div>
        <section className='hero'>
            <img className='hero' src={webinar} alt="heroimg" />
            <div className='hero__eventCard'>
                <p className='hero_para'>Date: November-1st 2024</p>
                <p className='hero_para'>Mode: Online</p>
                <p className='hero_para'>Time: 9.30 am EST</p>
            </div>
        </section>
        
    </div>
  )
}

export default Header