import React from 'react';
import { Link } from 'react-scroll';
import "./Topcontent.css";
const Topcontent = () => {
  return (
    <div className='Topcontent'>
        <div className='Topcontent_container'> 
        <h1> Santhosh kumar </h1>
        <p> A professional Frontend developer</p>
        <a href='https://drive.google.com/file/d/1XuS_rJnMfH-y8xo8dL-xfc1rMsNy8opd/view?usp=sharing' target='blank'> <button className='Topcontent_db'> Download Cv</button></a>
        <Link to =' project' smooth={true} duration={500}> 
        <button className='Topcontent_mw'> My Work</button>
        </Link>
        </div>
    </div>
  )
}

export default Topcontent;
