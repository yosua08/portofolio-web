import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const headerSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/yosua-pratama/" target='__blank'><BsLinkedin/></a>
        <a href="https://github.com/yosua08" target='__blank'><BsGithub/></a>
        <a href="https://twitter.com/YozuPratama" target='__blank'><BsTwitter/></a>
    </div>
  )
}

export default headerSocials