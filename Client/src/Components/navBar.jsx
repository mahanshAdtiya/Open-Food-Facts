import React from 'react'
import {Link} from "react-router-dom";

function navBar() {
  return (
    <div className='navbar-wrapper'>
      <div className='container'>
        <div className='left'>
          <Link to='/'><img className='logo' src='/img/logo.png' alt='Logo'/></Link>
        </div>
        <div className='right'>
          <Link to='/'><li>About us</li></Link>
          <Link to='/search'><li>Search</li></Link>
          <Link to='/predict'><li>Predict</li></Link>
          <Link to='/contact-us'><li>Contact Us</li></Link>
          <a
            href="https://cosylab.iiitd.edu.in/"
            target="_blank"
          >
            CoSyLab
          </a>
        </div>
      </div>
    </div>
  )
}

export default navBar