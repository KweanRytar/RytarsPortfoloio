import React from 'react'
import './Footer.css'
import { BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
 <section id='Footer'>
  <a href="
  " className="footer__logo"></a>
  <ul className="permalinks">
    <li><a href="#top">Top</a></li>
    <li><a href="#about">about</a></li>
    <li><a href="#experience">Experience</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#Portfolio">Portfolio</a></li>
    <li><a href="#Testimonial">Testimonials</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
 <div className="footer__socials">
  <a href="https://www.linkedin.com/in/ritanoble-udeh"><BsLinkedin /></a>
  <a href="https://www.facebook.com/profile.php?id=100013446570698"><FaFacebook /></a>
 </div>
 <div className="footer__copyright">
  <small>&copy; {new Date().getFullYear()} Ritanoble Udeh. All rights reserved.</small>
  
 </div>
 
 </section>
  )
}

export default Footer