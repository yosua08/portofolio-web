import React from 'react'
import './portofolio.css'

const portofolio = () => {
  return (
    <section id='portofolio'>
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>

      <div className="container portofolio__container">
        <article className='portofolio__item'>
          <div className='portofolio__item-image'></div>
          <h3>This is a portofolio item title</h3>
          <a href="https://github.com" className='btn' target='_blank'>GitHub</a>
        </article>
      </div>
    </section>
  )
}

export default portofolio