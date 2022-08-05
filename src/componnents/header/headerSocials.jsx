import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const headerSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target='__blank'><BsLinkedin/></a>
        <a href="https://github.com" target='__blank'><BsGithub/></a>
        <a href="https://twitter.com" target='__blank'><BsTwitter/></a>
    </div>
  )
}

export default headerSocials