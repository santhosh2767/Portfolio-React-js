import React from 'react';
import { Link } from 'react-scroll';
import "./Topcontent.css";
const Topcontent = () => {
  return (
    <div className='Topcontent'>
        <div className='Topcontent_container'> 
        <h1> Santhosh kumar </h1>
        <p> A professional Frontend developer</p>
        <a href="https://drive.google.com/file/d/1mRmu9oYdkxJ54LkUh9rHzRcVohWMIxYd/view?usp=sharing" target='blank'> <button className='Topcontent_db'> Download Cv</button></a>
        <a href='https://github.com/santhosh2767' target='_blank' rel='noopener noreferrer'>
        <button className='Topcontent_mw'>My Work</button>
        </a>
        </div>
    </div>
  )
}

export default Topcontent;
