import React from 'react'
import './portofolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const isi = [
  {
    id: 1,
    image: IMG1,
    title: 'This is project 1',
    github: 'https://github.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'This is project 2',
    github: 'https://github.com'
  },
  {
    id: 3,
    image: IMG3,
    title: 'This is project 3',
    github: 'https://github.com'
  },
  {
    id: 4,
    image: IMG4,
    title: 'This is project 4',
    github: 'https://github.com'
  },
  {
    id: 5,
    image: IMG5,
    title: 'This is project 5',
    github: 'https://github.com'
  },
  {
    id: 6,
    image: IMG6,
    title: 'This is project 6',
    github: 'https://github.com'
  }
]

const portofolio = () => {
  return (
    <section id='portofolio'>
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>
      
      <div className="container portofolio__container">
        {
          isi.map(({id, image, title, github}) => {
            return(
              <article key={id} className='portofolio__item'>
              <div className='portofolio__item-image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='portofolio__item-cta'>
                <a href={github} className='btn' target='_blank'>GitHub</a>
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