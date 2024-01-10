import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const headerSocial = () => {
  return (
    <div className="header__social" >
        <a href="https://www.linkedin.com/in/parth-vadhwana-74b623220" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/VadhwanaParth15" target="_blank"><BsGithub/></a>
        <a href="https://www.linkedin.com/in/parth-vadhwana-74b623220" target="_blank"><BsTwitter/></a>
    </div>
  )
}

export default headerSocial