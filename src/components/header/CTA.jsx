import React from 'react'
import CV from '../../assets/resume.pdf'
const CTA = () => {
  return (
    <div className='CTA'>
        <a href={CV} download className='btn' data-aos="zoom-in-up" data-aos-duration="1000">Resume</a>
        <a href="#contact" className='btn btn-primary' data-aos="zoom-in-up" data-aos-duration="1000">Let's Talk </a>
    </div>
  )
}

export default CTA