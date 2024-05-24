import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaXTwitter} from 'react-icons/fa6'

const headerSocial = () => {
  return (
    <div className="header__social" >
        <a href="https://www.linkedin.com/in/parth-vadhwana-74b623220" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/VadhwanaParth15" target="_blank"><BsGithub/></a>
        <a href="https://x.com/pxrth_15?t=0N2Tq4XcJBixtMHkRc-pAw&s=09" target="_blank"><FaXTwitter /></a>
    </div>
  )
}

export default headerSocial