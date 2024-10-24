import React from 'react'
import AppLogo from '../assets/images/icons/appstore-light.svg'
import AppLogo from '../assets/images/icons/googleplay-light.svg'
import Iphones from '../assets/images/phones.svg'


const Hero = () => {
  return (
    <section className="Hero"> 
        <div className="Showcase">
            <h2 className="d-4 margin">Manage All Your Money in One App</h2>           
            <p className="text-lg text-2">We offer you a new generation of the mobile banking.</p>               
            <p className="text-lg text-2">Save, spend & manage money in your pocket.</p>                
        <div className="market-btns">
            <a href="#" className="store-btn">
                <span className="sr-only">Download on App Store</span>
                <img src={AppLogo} />        
            </a>                        
        <a href="#" className="store-btn">
            <div className="sr-only">Get it on Google Play</div>
            <img src={AppLogo} />
        </a>               
        </div>        
        <div className="more">
            <a href="#features" className="btn-round btn-white">
                <i className="fa-solid fa-chevron-down"></i>
            </a>
        </div>
            <span>Discover more</span>
        </div>
            <img src={Iphones} />
    </section>
)
}

export default Hero