import React from 'react';
import './portofolio.css';
import {Data} from './data';

const portofolio = () => {
  return (
    <section id='portofolio'>
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>
      
        <div className="container portofolio__container">
          {
            Data.map(({id, image, title, github, about}) => {
              return(
                <article key={id} className='portofolio__item'>
                <div className='portofolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portofolio__item-cta'>
                  <a href={github} className='btn' target='_blank'>GitHub</a>
                  <a href={about} className='btn btn-primary' target='_blank'>About</a>
                </div>
              </article>
              )
            })
          }
        </div>
      
    </section>
  )
}

export default portofolio