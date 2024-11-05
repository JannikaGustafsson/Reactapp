import React from 'react'
import Logotype from '../assets/images/icons/logo.svg'
import IconSignIn from '../assets/images/icons/icon-signin.svg'

const Header = () => {

  return (
    <header>
        <nav className="main-navigation">               
         <div className="left-navigation">
             <a href="/">
             <img src={Logotype} alt="App Logo" />                
             </a>
             <a href="#" className="nav-link">Features</a>
             <a href="#" className="nav-link">Contact</a>
         </div>                  
         <div className="right-navigation">
                 <span>Dark Mode</span>
             <div id="darkmode-toggle">
                 <label className="toggle">
                 <input id="darkmode-switch" type="checkbox" aria-label="darkmode toggle" onChange="toggleDarkMode()" />
                 <span className="slider"></span>
                 </label>                   
             </div>                
                <a href="#" className="btn btn-primary btn-login">
                    <img src={IconSignIn} alt="Sign in Icon" />
                    <span>Sing in / up</span>
                </a>
         </div>        
     </nav>        
 </header>
  )
}

export default Header

