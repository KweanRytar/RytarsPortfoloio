import React from 'react'
import './Testimonial.css'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {name: 'Adaorah Edeh', 
  review: 'she understood my need and this made the experience an amazing one as we did not have to go through the same thing over and over again. Thanks Rita for this wonderfull experience'},
  {name: 'laughing kidney',
  review: 'she made my content creation less a hassle for me as i only needed to provide her with ideas and she turned it to an engaging video Thanks Rita!'
  },
  {
    name: 'Noblekonnect',
    review: 'Making Rita incharge of my Online store is one of the best decisons as i had no idea how to manage or set up a site but she took care of it, my business have been running smoothly since then with no complaints. thanks for the facebook advert setup to think it came as a bonus'
  }
]


const Testimonial = () => {
  return (
    
    <section id='Testimonial'>
      <h5>REVIEW FROM CLIENTS</h5>
      <h2>Testimonials</h2>
      <Swiper className='container testimonials__container' modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}   
      >
       {data.map(({name, review}, index) => {

        return (
          <SwiperSlide key ={index}className='testimonial'>
          <h5 className="client__name">
            {name}
          </h5>
          <small className='client__review'>{review}</small>
        </SwiperSlide>
        )
       })
       
     
       }
      </Swiper>

    
    
    </section>
  )
}

export default Testimonial