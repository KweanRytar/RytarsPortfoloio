import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const Headersocials = () => {
  return (
    <div className='Header__socials'>
        <a href='https://www.linkedin.com/in/ritanoble-udeh' target='_blank'><BsLinkedin /></a>
        <a href='https://www.facebook.com/profile.php?id=100013446570698' target='_blank'><FaFacebook /></a>
    </div>
  )
}

export default Headersocials