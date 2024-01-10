import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/dev1.webp'
import HeaderSocial from './headerSocial'
const header = () => {
  return (
    <header id='home'>
       <div className="container header___container">
        <h5 data-aos="zoom-in-up" data-aos-duration="1000">Hello i'm</h5>
        <h1 data-aos="zoom-in-up" data-aos-duration="1000">Parth Vadhwana</h1>
        <h5 className="text-light" data-aos="zoom-in-up" data-aos-duration="1000">Web Developer</h5>
        <CTA/>
        <HeaderSocial/>
        <div className="me" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
           <img src={ME} alt="me" /> 
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
       </div>
    </header>
  )
}

export default header
