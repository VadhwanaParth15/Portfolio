import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import { BsInstagram} from 'react-icons/bs'
import {FaXTwitter} from 'react-icons/fa6'
const footer = () => {
  return (
    <footer className="footer">
    <div className="icons">
       
        <a href="https://www.linkedin.com/in/parth-vadhwana-74b623220" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/VadhwanaParth15" target="_blank"><BsGithub/></a>
        <a href="https://x.com/pxrth_15?t=0N2Tq4XcJBixtMHkRc-pAw&s=09" target="_blank"><FaXTwitter /></a>
        <a href="https://instagram.com/pxrth.02?igshid=ZDdkNTZiNTM=" target="_blank"><BsInstagram/></a>
    </div>
        <p className="company-name">
    Copyright {new Date().getFullYear()}. Parth All Rights Reserved
</p>
</footer>
  )
}

export default footer