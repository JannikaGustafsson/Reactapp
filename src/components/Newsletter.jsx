import React from 'react'
import Bell from '../assets/images/icons/bell.svg'
import Letter from '../assets/images/icons/letter-small.svg'

const Newsletter = () => {
  return (
    <section>
        <div id="newsletter" className="flex">
            <div className="flex bell-img">         
                <img src={Bell} alt="Bell icon" />
                <h2>Subscribe to our newsletter to stay informed about latest updates</h2> 
            </div>        
        <div className="input-container">
            <div className="flex">            
                <img src={Letter} alt="Envelope icon" />
                <input className="input-c" type="email" placeholder="Your Email" aria-label="Email address" />
                <button className="style" aria-label="Subscribe to newsletter">Subscribe</button>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Newsletter