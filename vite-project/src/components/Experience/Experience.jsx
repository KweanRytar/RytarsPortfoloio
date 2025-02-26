import React, { useState } from 'react'
import './Experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const renderArticles = (articles) => {
    return showMore ? articles : articles.slice(0, 2);
  };

  return (
    <section id='experience'>
      <h5>My Skill Set</h5>
      <h2>Experience</h2>

      <div className="container experience__container">
        
        {/* Web Development Section */}
        <div className="experience__Programming">
          <h3>Web Development</h3>
          <div className="experience__content">
            {renderArticles([
              <article key="html" className='experience__details'>
                <BsPatchCheckFill className = 'icon' />
                <h4>HTML</h4>
                <small>Experienced</small>
              </article>,
              <article key="css" className='experience__details'>
                <BsPatchCheckFill className = 'icon' />
                <h4>CSS</h4>
                <small>Experienced</small>
              </article>,
              <article key="javascript" className='experience__details more'>
                <BsPatchCheckFill className = 'icon' />
                <h4>JAVASCRIPT</h4>
                <small>INTERMEDIATE</small>
              </article>,
              <article key="bootstrap" className='experience__details more'>
                <BsPatchCheckFill className = 'icon' />
                <h4>BOOTSTRAP</h4>
                <small>Experienced</small>
              </article>,
              <article key="react" className='experience__details more'>
                <BsPatchCheckFill className = 'icon' />
                <h4>REACT</h4>
                <small>INTERMEDIATE</small>
              </article>,
              <article key="node" className='experience__details more'>
                <BsPatchCheckFill className = 'icon' />
                <h4>NODE JS</h4>
                <small>INTERMEDIATE</small>
              </article>,
              <article key="express" className='experience__details'>
                <BsPatchCheckFill className = 'icon' />
                <h4>EXPRESS JS</h4>
                <small>Experienced</small>
              </article>,
              <article key="wordpress" className='experience__details'>
                <BsPatchCheckFill className = 'icon' />
                <h4>WORDPRESS</h4>
                <small>Experienced</small>
              </article>,
              <article key="mongo" className='experience__details'>
                <BsPatchCheckFill className = 'icon' />
                <h4>MONGO DB</h4>
                <small>Experienced</small>
              </article>
            ])}
          </div>
        </div>

        {/* Video Editing Section */}
        <div className="experience__videoEditing">
          <h3>Vitual Assistant</h3>
          <div className="experience__content">
            {renderArticles([
              <article key="canva-video" className='experience__details'>
                <BsPatchCheckFill className = 'icon' />
                <h4>CANVA</h4>
                <small>Experienced</small>
              </article>,
              <article key="capcut" className='experience__details'>
                <BsPatchCheckFill className = 'icon' />
                <h4>CAPCUT</h4>
                <small>Experienced</small>
              </article>,
              <article key="shotcut" className='experience__details'>
                <BsPatchCheckFill className = 'icon' />
                <h4>SHOTCUT</h4>
                <small>Experienced</small>
              </article>,
              <article key="adobe" className='experience__details'>
                <BsPatchCheckFill className = 'icon' />
                <h4>ADOBE EXPRESS</h4>
                <small>Experienced</small>
              </article>,
               <article key="adobe1" className='experience__details'>
               <BsPatchCheckFill className = 'icon' />
               <h4>EXPENSIFY</h4>
               <small>Experienced</small>
             </article>,
              <article key="adobe2" className='experience__details'>
              <BsPatchCheckFill className = 'icon' />
              <h4>OTTER AI</h4>
              <small>Experienced</small>
            </article>,
             <article key="adobe3" className='experience__details'>
             <BsPatchCheckFill className = 'icon' />
             <h4>SLACK/ASANA/TRELLO</h4>
             <small>Experienced</small>
           </article>,
            <article key="adobe4" className='experience__details'>
            <BsPatchCheckFill className = 'icon' />
            <h4>GOOGLE WORKSPACE/MICROSOFT OFFICE</h4>
            <small>Experienced</small>
          </article>,
           <article key="adobe5" className='experience__details'>
           <BsPatchCheckFill className = 'icon' />
           <h4>CALENDLY/SAVVYTIME</h4>
           <small>Experienced</small>
         </article>,
          <article key="adobe" className='experience__details'>
          <BsPatchCheckFill className = 'icon' />
          <h4>ZOOM/TEAM/MEET</h4>
          <small>Experienced</small>
        </article>
            ])}
          </div>
        </div>

        {/* Graphic Design Section */}
        <div className="experience__graphicDesign">
          <h3>ONLINE CODING INSTRUCTOR</h3>
          <div className="experience__content">
            {renderArticles([
              <article key="canva-design" className='experience__details'>
                <BsPatchCheckFill className = 'icon' />
                <h4>GOOGLE CLASSROOM</h4>
                <small>Experienced</small>
              </article>,
              <article key="coreldraw" className='experience__details'>
                <BsPatchCheckFill className = 'icon' />
                <h4>ZOOM/TEAM</h4>
                <small>INTERMEDIATE</small>
              </article>
            ])}
          </div>
        </div>

        {/* Project Management Section */}
        <div className="experience__ProjectManagement">
          <h3>Project Management</h3>
          <div className="experience__content">
            {renderArticles([
              <article key="notion" className='experience__details'>
                <BsPatchCheckFill className = 'icon' />
                <h4>NOTION</h4>
                <small>INTERMEDIATE</small>
              </article>,
              <article key="clickup" className='experience__details'>
                <BsPatchCheckFill className = 'icon' />
                <h4>CLICKUP</h4>
                <small>INTERMEDIATE</small>
              </article>,
              <article key="trello" className='experience__details'>
                <BsPatchCheckFill className = 'icon' />
                <h4>TRELLO</h4>
                <small>INTERMEDIATE</small>
              </article>,
              <article key="asana" className='experience__details'>
                <BsPatchCheckFill className = 'icon' />
                <h4>ASANA</h4>
                <small>INTERMEDIATE</small>
              </article>,
               <article key="asanaa" className='experience__details'>
               <BsPatchCheckFill className = 'icon' />
               <h4>MONDAY</h4>
               <small>INTERMEDIATE</small>
             </article>
            ])}
          </div>
        </div>

        {/* Virtual Assistant Section */}

        {/* Show More / Show Less Button */}
        
      </div>
      <button className=' show' onClick={handleShowMore}>
          {showMore ? 'Show Less' : 'See More'}
        </button>
    </section>
  )
}

export default Experience
