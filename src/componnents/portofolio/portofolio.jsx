import React from 'react'
import './portofolio.css'
import IMG1 from '../../assets/InSight.jpg'
import IMG2 from '../../assets/MaK.jpg'

const isi = [
  {
    id: 1,
    image: IMG1,
    title: 'InSight App',
    github: 'https://github.com/yosua08/InSight',
    about: 'https://youtu.be/8fZoMrwUWtc'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Merdeka atau Kalah Game',
    github: 'https://github.com/yosua08/Merdeka-atau-Kalah',
    about: 'https://yozu-8.itch.io/merdeka-atau-kalah'
  }
]

const portofolio = () => {
  return (
    <section id='portofolio'>
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>
      
      <div className="container portofolio__container">
        {
          isi.map(({id, image, title, github, about}) => {
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