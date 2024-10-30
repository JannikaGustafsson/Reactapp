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
         </div>                  
         <div className="right-navigation">
             <div id="darkmode-toggle">
                 <span>Dark Mode</span>
                 <label className="toggle" >
                 <input id="darkmode-switch" type="checkbox" />
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