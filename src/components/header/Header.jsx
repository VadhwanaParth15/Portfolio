import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/parth-2.png'
import HeaderSocial from './headerSocial'
const header = () => {
  return (
    <header id='home'>
       <div className="container header___container">
        <h5>Hello i'm</h5>
        <h1>Parth Vadhwana</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA/>
        <HeaderSocial/>
        <div className="me">
          {/* <img src={ME} alt="me" /> */}
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
       </div>
    </header>
  )
}

export default header