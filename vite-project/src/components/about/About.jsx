import React from 'react'
import './about.css'
import me from '../../assets/REAL_RYTAR.png'
import { FaAward } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";
import { MdOutlineWork } from "react-icons/md";

const About = () => {
  return (
    <section id='about'>
      <h5>Uncover</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
<div className="about__me-image">
<img src={me}/>
</div>
        </div>
        <div className="about__content">
      <div className="about__cards">
        <article className="about__card">
        <FaAward className='about__icon'/>
          <h5>Experience</h5>
          <small>2+ years</small>

        </article>
       
        <article className="about__card">
        <FaUsers className='about__icon'/>
          <h5>Client</h5>
          <small>15</small>
          </article>
          <article className="about__card">
        <MdOutlineWork className='about__icon'/>
          <h5>Projects</h5>
          <small>20+ completed</small>    
        </article>
       

      </div>
      <h2 className='Profession'>Professional Summary</h2>
        <h5>I am Udeh Rita Nneka, a versatile web developer, video editor, and virtual assistant specializing in responsive websites with WordPress, JavaScript, and frameworks like React and Node.js. I provide digital assistance to enhance business efficiency. A fast learner and adaptable tech enthusiast. I deliver tailored solutions and high quality results. I am eager to explore new opportunities to support your business needs.
</h5>
<a  href="#contact" className="btn btn-primary">Let's Connect</a>
      </div>
      </div>
      </section>
  )
}

export default About