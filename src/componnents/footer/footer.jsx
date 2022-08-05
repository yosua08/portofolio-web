import React from 'react'
import './footer.css'
import {FiInstagram} from 'react-icons/fi'
import {FaFacebookF} from 'react-icons/fa'
import {IoLogoTwitter} from 'react-icons/io'

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>YOZU-8</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portofolio">Portofolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/yozuapratama/" target='_block'><FiInstagram/></a>
        <a href="https://www.facebook.com/yozua.pratama" target='_block'><FaFacebookF/></a>
        <a href="https://twitter.com/YozuPratama" target='_block'><IoLogoTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; YOZU. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default footer