import React from 'react'
import CV from '../../assets/UDEHRITANNEKASCV(3).pdf'

const CTA = () => {
  return (
    <div className='cta'>
       <a href={CV} className="btn" download>
  Download CV
</a>
        <a href='#contact' className='btn btn-primary'>Let's discuss</a>
    </div>
  )
}

export default CTA