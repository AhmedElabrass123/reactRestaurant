import React from 'react'
import "./about1.css"
import aboutimg from '../imgs/1.png'
const About1 = () => {
  return (
    <div className="about1" id="about">
       <div className="container">
        <div className="row">
            <div className="left col-md-6 col-sm-12">
            <img  src={aboutimg}/>

            </div>
            <div className="right col-md-6 col-sm-12">
            <h2>We pride ourselves on making real food from the best ingredients.</h2>
            <p>
                We pride ourselves on making real food from the best ingredients.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et 
                purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus
                </p>
                <button className="btn  b1">Learn More</button>
            </div>

        </div>
    </div>
    </div>
  )
}

export default About1
