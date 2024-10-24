import React from 'react'
import LogoType from '../assets/images/icons/logo.svg'


const NavbarLeft = () => {
  return (
                   
        <div className="left-navigation">
            <a href="/"></a>
            <img src={LogoType} />                
            <a href="#" className="nav-link">Features
            </a>
        </div> 

  )
}

export default NavbarLeft