import React from 'react'
import Header from './componnents/header/header'
import Nav from './componnents/nav/nav'
import About from './componnents/about/about'
import Experience from './componnents/experience/experience'
import Portofolio from './componnents/portofolio/portofolio'
import Contact from './componnents/contact/contact'
import Footer from './componnents/footer/footer'

const App = () => {
  return (
    <div>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Portofolio/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App