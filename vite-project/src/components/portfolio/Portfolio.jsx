import React from 'react'
import './Portfolio.css'
import ReactPlayer from 'react-player'
import travelPack from '../../assets/TRAVEL PACK.png'
import meetingAgenda from '../../assets/meeting.png'
import research from '../../assets/research.png'
import video1 from '../../assets/ADVERT VIDEO.mp4'
import video2 from '../../assets/AQMBZN_zPOzLGMtaZUK4IySwjZ8y9puUQYfMCO9UF_sadulFMikLkvHjlKi8IqVkXoxl2h6K1K1zt1vYSXAMGua5.mp4'
import video3 from '../../assets/AQMLB-Yz3r2BJ-2NxVnRSocusEeUPI8NgIK2lS6-3Ki6Hi2bI_0tsyqS7d2kaN2yOFvxwhfNjadfTFgFVFk7y_8M.mp4'
import video4 from '../../assets/AQNDjl51TStXSj-DQ15jraeypsz6hdwU0waK-e2YLm-kp8OgDgMIo7EedNaPrUUz49zQ76AnFJejfqnnpeom2GMH.mp4'
import video5 from '../../assets/AQPIEeU-rPSmU2eYc8y1mLpEyWXylVohdGBjXKGTFblKA8BP6NVzjAHE7M11evVynPXCvKHVCenbdbhqUBBVpbC8.mp4'
import project1 from '../../assets/ADAORAHS ECOMMERCE BLUEPRINT.pdf'
import project2 from '../../assets/project management2.png'
import video6 from '../../assets/ELECTIVES VIDEO.mp4'

const Portfolio = () => {
  return (
    <section id='Portfolio'>
  <h5 className='header1'>My Recent Work</h5>
  <h2 className='header1'>Portfolio</h2>
    <div className="container portfolio__container">
      <article className="portfolio__item">
      <h3>Travel Itenary Pack</h3>
      <a href='https://docs.google.com/presentation/d/10HpTQN9bW-SFdVTPcB_wJHFr_W6rPcc5oH_II-KoMl4/edit?usp=sharing'><img src={travelPack}></img></a>
      </article>
      <article className="portfolio__item">
      <h3>MEETING AGENDA</h3>
      <a href='https://docs.google.com/document/d/1W-Bno-NmVxNoX7iEz09AoXuXpzPMn3cKbUTMzRNZxBo/edit?usp=sharing'><img src={meetingAgenda}></img></a>
      </article>
      <article className="portfolio__item">
      <h3>Research</h3>
    <img src={research}></img>
      </article>     
      <article className="portfolio__item">
      <h3>PROJECT MANAGEMENT</h3>
    <img src={project2} alt="" />
      </article>   
      <article className="portfolio__item">
      <h3>Video Editing</h3>
      <ReactPlayer className = 'video'
            url={video1}
            controls // Add controls to make the player usable
            width="100%"
            height="100%"
            config={{
              file: {
                attributes: {
                  onContextMenu: (e) => e.preventDefault(), // Disable right-click on the player
                },
              },
            }}
          />
      </article>

     <article className="portfolio__item">
     <ReactPlayer className = 'video'
            url={video2}
            controls // Add controls to make the player usable
            width="100%"
            height="100%"
            config={{
              file: {
                attributes: {
                  onContextMenu: (e) => e.preventDefault(), // Disable right-click on the player
                },
              },
            }}
          />
     </article>
<article className="portfolio__item">
<ReactPlayer  className = 'video'
            url={video3}
            controls // Add controls to make the player usable
            width="90%"
            height="90%"
            config={{
              file: {
                attributes: {
                  onContextMenu: (e) => e.preventDefault(), // Disable right-click on the player
                },
              },
            }}
          />    
</article>
 
 <article className="portfolio__item">
 <ReactPlayer className = 'video'
            url={video4}
            controls // Add controls to make the player usable
            width="90%"
            height="90%"
            config={{
              file: {
                attributes: {
                  onContextMenu: (e) => e.preventDefault(), // Disable right-click on the player
                },
              },
            }}
          />
 </article>
 <article className="portfolio__item">
 <ReactPlayer className = 'video'
            url={video5}
            controls // Add controls to make the player usable
            width="90%"
            height="90%"
            config={{
              file: {
                attributes: {
                  onContextMenu: (e) => e.preventDefault(), // Disable right-click on the player
                },
              },
            }}
          />
    
 </article>    
 <article className="portfolio__item">
 <h3>MUCKUP</h3>
 <ReactPlayer className = 'video'
            url={video6}
            controls // Add controls to make the player usable
            width="90%"
            height="90%"
            config={{
              file: {
                attributes: {
                  onContextMenu: (e) => e.preventDefault(), // Disable right-click on the player
                },
              },
            }}
          />
    
 </article>   
    </div>
   
    
    </section>
  )
}

export default Portfolio