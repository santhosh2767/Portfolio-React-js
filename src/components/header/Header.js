import React from 'react';
import {Link } from 'react-scroll';
import "./header.css"

const Header = () => {
  return (
    <div className='header'>
      <div className='header_left'> 
      <h1> Frontend <span> Developer</span></h1></div>

      <div className='header_right'> 
      <Link to='about' smooth={true} duration={500}>    
      <h4> About me</h4></Link>
      <Link to='skills' smooth={true} duration={500}>    
      <h4> skills</h4></Link>
      <Link to='exp' smooth={true} duration={500}>    
      <h4> Experience</h4> </Link>
      <Link to='contact' smooth={true} duration={500}>    
      <h4> Contact</h4></Link>
      
      </div>
    </div>

    
  );
};

export default Header;
