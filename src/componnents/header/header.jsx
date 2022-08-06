import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/yosua-no-bg.png'
import HeaderSocials from './headerSocials'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Yosua Putra Pratama</h1>
        <h5 className='text-light'>Cloud Engineer</h5>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <img src={ME} alt="me" className='me__img'/>
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header