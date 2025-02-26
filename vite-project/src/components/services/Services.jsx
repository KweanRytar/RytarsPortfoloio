import React from 'react'
import './services.css'
import { useState } from 'react'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  }
  const renderArticles = (articles) => {
    return showMore ? articles : articles.slice(0, 2);
  }
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>WEB DEVELOPMENT</h3>
            </div>
            <ul className="service__list">
            {renderArticles ([

<li key={'WB1'}>
  <BiCheck className='service__list-icon'/>
  <h2>Responsive Landing Page</h2>
</li>,
<li key={'WB2'}>
  <BiCheck className='service__list-icon'/>
  <h2>BLOG</h2>
</li>,
<li key={'WB3'}>
  <BiCheck className='service__list-icon'/>
  <h2>School Website</h2>
</li>,
<li key={'WB4'}>
  <BiCheck className='service__list-icon'/>
  <h2>E-Commerce Website</h2>
</li>, 
<li key={'WB5'}>
  <BiCheck className='service__list-icon'/>
  <h2>SEO SERVICES</h2>
</li>,
<li key={'WB6'}>
  <BiCheck className='service__list-icon'/>
  <h2>SHOPIFY ASSISTANCE</h2>
</li>


]) }
</ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Virtual Assistant</h3>
            </div>
            <ul className="service__list">
            {renderArticles ([

<li key={'VA1'}>
  <BiCheck className='service__list-icon'/>
  <h2>TRANSCRIPTION</h2>
</li>,
<li key={'VA2'}>
  <BiCheck className='service__list-icon'/>
  <h2>EMAIL/CALENDER MANAGEMENT</h2>
</li>,
<li key={'VA3'}>
  <BiCheck className='service__list-icon'/>
  <h2>SCHEDULING</h2>
</li>,
<li key={'VA4'}>
  <BiCheck className='service__list-icon'/>
  <h2>PROJECT MANAGEMENT</h2>
</li>, 
<li key={'VA5'}>
  <BiCheck className='service__list-icon'/>
  <h2>DATA ENTRY</h2>
</li>,
<li key={'VA6'}>
  <BiCheck className='service__list-icon'/>
  <h2>TRAVEL RESEARCH AND BOOKING</h2>
</li>,
<li key={'VA6'}>
  <BiCheck className='service__list-icon'/>
  <h2>CREATE TRAVEL ITINERARIES</h2>
</li>, 
<li key={'VA7'}>
  <BiCheck className='service__list-icon'/>
  <h2>EXPENSE TRACKING</h2>
</li>, 
<li key={'VA8'}>
  <BiCheck className='service__list-icon'/>
  <h2>CREATING SLIDES AND PRESENTATIONS</h2>
</li>,
<li key={'VA9'}>
  <BiCheck className='service__list-icon'/>
  <h2>VIDEO EDITING</h2>
</li>,
<li key={'VA10'}>
  <BiCheck className='service__list-icon'/>
  <h2>INTERNET RESEARCH</h2>
</li>,
<li key={'VA11'}>
  <BiCheck className='service__list-icon'/>
  <h2>CUSTOMER SERVICE</h2>
</li>,
<li key={'VA12'}>
  <BiCheck className='service__list-icon'/>
  <h2>FACEBOOK AD</h2>
</li>,
<li key={'VA13'}>
  <BiCheck className='service__list-icon'/>
  <h2>LIVE WEBINAR ASSISTANCE</h2>
</li>


]) }
</ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>ONLINE INSTRUCTOR</h3>
            </div>
            <ul className="service__list">
            {renderArticles ([

<li key={'WB1'}>
  <BiCheck className='service__list-icon'/>
  <h2>WEB DEVELOPMENT</h2>
</li>,
<li key={'WB2'}>
  <BiCheck className='service__list-icon'/>
  <h2>ANIMATION</h2>
</li>,
<li key={'WB3'}>
  <BiCheck className='service__list-icon'/>
  <h2>VIDEO EDITING</h2>
</li>,
<li key={'WB4'}>
  <BiCheck className='service__list-icon'/>
  <h2>HOW TO CREATE RESUMES/CV</h2>
</li>, 
<li key={'WB5'}>
  <BiCheck className='service__list-icon'/>
  <h2>IGCSE COMPUTER SCIENCE PREPARATION</h2>
</li>


]) }
</ul>
        </article>
      </div>
      <button className=' show' onClick={handleShowMore}>
          {showMore ? 'Show Less' : 'See More'}
        </button>
    </section>
  )
}

export default Services