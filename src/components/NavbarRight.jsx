import React from 'react'
import LogoType from '../assets/images/icons/icon-signin.svg'

const NavbarRight = () => {
  return (
    <div className="right-navigation">
    <div id="darkmode-toggle">
        <span>Dark Mode</span>
        <label className="toggle" />
        <input id="darkmode-switch" type="checkbox" />
        <span className="slider"></span>                    
    </div>                
        <a href="#" className="btn btn-primary btn-login">
        <img src={LogoType} />
        <span>Sing in / up</span>
        </a>
</div> 
  )
}

export default NavbarRight