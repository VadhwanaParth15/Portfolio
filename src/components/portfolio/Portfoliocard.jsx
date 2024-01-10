import React from 'react'
import { Col } from "react-bootstrap";
import { motion } from "framer-motion"
// import {AiFillGithub} from "react-icons/ai";
// import {BsArrowUpRightCircleFill} from "react-icons/bs";
const portfoliocard  = ({ title, imgUrl,  link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div  data-aos="fade-up"
       data-aos-duration="1000">
      
      <motion.article className='portfolio__item' 
       whileHover={{ scale: 1.2 }}
  onHoverStart={e => {}}
  onHoverEnd={e => {}} >
        <div className="portfolio__item-image"  >
          <img src={imgUrl} alt="" />
        </div>
        <h3>{title}</h3>
        <div className='portfolio__item-cta'>
        <a href="https://github.com/VadhwanaParth15" className="btn" target="_blank">GitHub</a>
        <a href={link} className="btn btn-primary" target="_blank">LIVE</a>
        </div>
      </motion.article>
        </div>
    </Col>
  )
}

export default portfoliocard