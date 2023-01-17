import React from 'react'
import './about.css'
import ME from '../../assets/parth.png'
import {VscFolderLibrary} from 'react-icons/vsc'
import {FaAward} from 'react-icons/fa'
const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>Freshser</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon"/>
              <h5>Projects</h5>
              <small>2+</small>
            </article>
          </div>
          <p > Hello! My name is Parth and I'm Student. I enjoy creating things that live on the internet.I love to share my knowledge and discuss Tech. stuff with my friends and colleagues.<br></br>— after creating some projects that taught me a lot about HTML &amp; CSS!</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about