import React from 'react'
import './about.css'
import ME from '../../assets/parth.webp'
import {VscFolderLibrary} from 'react-icons/vsc'
import {FaAward} from 'react-icons/fa'
const about = () => {
  return (
    <section id='about'>
      <h5 data-aos="zoom-in-up" data-aos-duration="1000">Get To Know</h5>
      <h2 data-aos="zoom-in-up" data-aos-duration="1000">About Me</h2>
      <div className="container about__container">
        <div className="about__me" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
          <div className="about__me-image" >
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card" data-aos="zoom-in-up"
      data-aos-duration="1000">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>Freshser</small>
            </article>
            <article className="about__card" data-aos="zoom-in-up"
      data-aos-duration="1000">
              <VscFolderLibrary className="about__icon"/>
              <h5>Projects</h5>
              <small>2+</small>
            </article>
          </div>
          <p data-aos="zoom-in-up" data-aos-duration="1000"> Hello! My name is Parth and I'm Student. I enjoy creating things that live on the internet.I love to share my knowledge and discuss Tech. stuff with my friends and colleagues.<br></br>— after creating some projects that taught me a lot about HTML &amp; CSS!</p>
          <a href="#contact" className='btn btn-primary' data-aos="zoom-in-up">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about