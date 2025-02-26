import React from 'react'
import './Header.css'
import CTA from './CTA'
import Dp from '../../assets/REAL_RYTAR.png'
import HeaderSocials from './Headersocials'

const Header = () => {
  return (
    <header>
       <div className="container header__container">
        <h5>Hello i'm</h5>
        <h1>Rita Udeh</h1>
        <h5 className='text-light'>VIRTUAL ASSISTANT-FRONTEND WEB DEVELOPER</h5>
        <CTA></CTA>
        <HeaderSocials></HeaderSocials>
        <div className="me">
          <img src={Dp}/>
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
        </div>

    </header>
   
  )
}

export default Header