import React from 'react'
import Bell from '../assets/images/icons/bell.svg'
import Letter from '../assets/images/icons/letter-small.svg'

const Newsletter = () => {
  return (
    <section>
        <div id="newsletter" className="flex">
            <div className="flex bell-img">         
                <img src={Bell} />
                <h2>Subscribe to our newsletter to stay informed about latest updates            
                </h2> 
            </div>        
        <div className="input-container">
            <div className="flex">            
                <img src={Letter} />
                <input className="input-c" type="text" placeholder="Your Email" />
                <button className="style">Subscribe</button>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Newsletter