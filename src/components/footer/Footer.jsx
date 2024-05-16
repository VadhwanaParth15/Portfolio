import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import { BsTwitter , BsInstagram} from 'react-icons/bs'
const footer = () => {
  return (
    <footer className="footer">
    <div className="icons">
       
        <a href="https://www.linkedin.com/in/parth-vadhwana-74b623220" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/VadhwanaParth15" target="_blank"><BsGithub/></a>
        <a href="https://www.linkedin.com/in/parth-vadhwana-74b623220" target="_blank"><BsTwitter/></a>
        <a href="https://instagram.com/pxrth.02?igshid=ZDdkNTZiNTM=" target="_blank"><BsInstagram/></a>
    </div>
        <p className="company-name">
    Copyright {new Date().getFullYear()}. Parth All Rights Reserved
</p>
</footer>
  )
}

export default footer