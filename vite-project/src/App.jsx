import { useState } from 'react'
import Header from './components/Header/Header'
import Nav from './components/nav/Nav'
import Services from './components/services/Services'
import About from './components/about/About'
import Contacts from './components/contacts/Contacts'
import Experience from './components/Experience/Experience'
import Footer from './components/Footer/Footer'
import Portfolio from './components/portfolio/Portfolio'
import Testimonial from './components/Testimonial/Testimonial'
function App() {
  
  return (
    <>
      
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Testimonial/>
      <Contacts/>
      <Footer/>
      
      
    </>
  )
}

export default App
