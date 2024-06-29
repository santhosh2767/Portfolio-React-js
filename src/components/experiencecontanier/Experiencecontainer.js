import React from 'react'
import { Element } from 'react-scroll'
import Experience from '../experiencebox/Experience'
import "./Experiencecontaier.css";

const Experiencecontainer = () => {
  return (
   <Element className='experiencecontainer' id="exp">
    <h1> Experience</h1>
    <div className='container_info'>
        <Experience number ="1 year"title="At flexelectronics As a Trainee"/>
        <Experience number ="4 years"title="At HCL As a Associates"/>
        
    </div>
   </Element>
  )
}

export default Experiencecontainer
