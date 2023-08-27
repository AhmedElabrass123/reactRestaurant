import React from 'react'
import "./aboutTwo.css"
import aboutimg2 from "../imgs/2.png"
const About2 = () => {
  return (

      <div className="about2">
       <div className="container">
        <div className="row">
            
            <div className="right col-md-6 col-sm-12">
            <h2>We make everything by hand with the best possible ingredients.</h2>
            <p>
                We pride ourselves on making real food from the best ingredients.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et 
                purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus
                </p>
                <button className="btn  b1">Learn More</button>
            </div>
            <div className="left col-md-6 col-sm-12">
            <img  src={aboutimg2}/>
            </div>

        </div>
    </div>
    </div>
  )
}

export default About2
