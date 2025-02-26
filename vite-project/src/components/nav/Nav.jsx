import React from 'react'
import './Nav.css'
import { FaHome } from "react-icons/fa";
import { MdMapsHomeWork } from "react-icons/md";
import { FaUserCheck } from "react-icons/fa6";
import { MdAssuredWorkload } from "react-icons/md";
import { MdMedicalServices } from "react-icons/md";
import { IoIosContacts } from "react-icons/io";
import { MdReviews } from "react-icons/md";
import { BsSendArrowDownFill } from "react-icons/bs";
import { useState } from 'react';
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a href='#' className={activeNav === '#'? 'active' : ""}><FaHome /></a>
      <a href='#about' onClick={() => setActiveNav('#about')}className={activeNav === '#about'? 'active' : ""}><FaUserCheck /></a>
      <a href='#experience'onClick={() => setActiveNav('#experience')}className={activeNav === '#experience'? 'active' : ""}><MdAssuredWorkload /></a>
      <a href='#services'onClick={() => setActiveNav('#services')}className={activeNav === '#services'? 'active' : ""}><MdMedicalServices /></a>
      <a href='#contact'onClick={() => setActiveNav('#contact')}className={activeNav === '#contact'? 'active' : ""}><IoIosContacts /></a>
    <a href='#Portfolio'onClick={() => setActiveNav('#Portfolio')}className={activeNav === '#Portfolio'? 'active' : ""}><MdMapsHomeWork /></a>
    <a href='#Testimonial'onClick={() => setActiveNav('#Testimonial')}className={activeNav === '#Testimonial'? 'active' : ""}><MdReviews /></a>
    <a href='#Footer'onClick={() => setActiveNav('#Footer')}className={activeNav === '#Footer'? 'active' : ""}><BsSendArrowDownFill /></a>
    </nav>
  )
}

export default Nav