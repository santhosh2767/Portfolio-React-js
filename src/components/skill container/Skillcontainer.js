import React from 'react'
import{Element} from "react-scroll"

import "./Skillcontainer.css"

const Skillcontainer = () => {
  return (
    <Element className='Skillcontainer' id='skills'>
        <div className='Skillcontainer_img'>
            <img src= "https://c4.wallpaperflare.com/wallpaper/773/663/764/programming-php-code-developer-wallpaper-preview.jpg" alt=""/>
             </div>
             <div className='Skillcontainer_text'>
                <h2>SKILLSET</h2>
                <div className='Skillcontainer_skillset'> 
                <h5> HTML</h5>
                
                </div>

                <div className='Skillcontainer_skillset'> 
                <h5> CSS</h5>
                </div>

                <div className='Skillcontainer_skillset'> 
                <h5> JAVA SCRIPT</h5>
                </div>

                <div className='Skillcontainer_skillset'> 
                <h5> REACT JS</h5>
                </div>

                {/* <div className='Skillcontainer_skillset'> 
                <h5> Json</h5>
                </div> */}
       </div>
    </Element>
  )
}

export default Skillcontainer
