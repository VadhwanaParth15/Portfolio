import React from 'react'
import './skill.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'
function Skill() {
  return (
    <section id='experience'>
    <h5 data-aos="zoom-in-up" data-aos-duration="1300">What Skills I Have</h5>
    <h2 data-aos="zoom-in-up" data-aos-duration="1300">My Skills</h2>

    <div className="container experience__container">
      <div className="experience__frontend" data-aos="zoom-in-up" data-aos-duration="1300">
        <h3>Frontend Development</h3>
        <div className="experience__content">
          <article className="experience__details">
          <BsFillPatchCheckFill className="experience__details-icon" />
          <div>
            <h4>HTML</h4>
            <small className="text-light">Experienced</small>
          </div>
          </article>
          <article className="experience__details">
          <BsFillPatchCheckFill className="experience__details-icon"/>
          <div>
            <h4>CSS</h4>
            <small className="text-light">Intermediate</small>
          </div>
          </article>
          <article className="experience__details">
          <BsFillPatchCheckFill className="experience__details-icon"/>
          <div>
            <h4>JavaScript</h4>
            <small className="text-light">Intermediate</small>
          </div>
          </article>
          <article className="experience__details">
          <BsFillPatchCheckFill className="experience__details-icon"/>
          <div>
            <h4>Bootstrap</h4>
            <small className="text-light">Basic</small>
          </div>
          </article>
          <article className="experience__details">
          <BsFillPatchCheckFill className="experience__details-icon"/>
          <div>
            <h4>React</h4>
            <small className="text-light">Intermediate</small>
          </div>
          </article>
        </div>
      </div>
      <div className="experience__backend" data-aos="zoom-in-up" data-aos-duration="1300">
        <h3>Backend Development</h3>
        <div className="experience__content">
          <article className="experience__details">
          <BsFillPatchCheckFill className="experience__details-icon"/>
          <div>
            <h4>PHP</h4>
            <small className="text-light">Basic</small>
          </div>
          </article>
          <article className="experience__details">
          <BsFillPatchCheckFill className="experience__details-icon"/>
          <div>
            <h4>MongoDB</h4>
            <small className="text-light">Intermediate</small>
          </div>
          </article>
          <article className="experience__details">
          <BsFillPatchCheckFill className="experience__details-icon"/>
          <div>
            <h4>MySQL</h4>
            <small className="text-light">Intermediate</small>
          </div>
          </article>
          <article className="experience__details">
          <BsFillPatchCheckFill className="experience__details-icon"/>
          <div>
            <h4>Python</h4>
            <small className="text-light">Basic</small>
          </div>
          </article>
          <article className="experience__details">
          <BsFillPatchCheckFill className="experience__details-icon"/>
          <div>
            <h4>JAVA</h4>
            <small className="text-light">Intermediate</small>
          </div>
          </article>
          <article className="experience__details">
          <BsFillPatchCheckFill className="experience__details-icon"/>
          <div>
            <h4>NodeJS</h4>
            <small className="text-light">Intermediate</small>
          </div>
          </article>
        </div>
      </div>
    </div>

  </section>
  )
}

export default Skill