import React from 'react'
import "./header.css"
import {Container,Link} from 'react-bootstrap'
const Header = () => {
  return (
    <header>
    <div className="container" id="home">
    <div className="row">
        <div className="left col-md-6 col-sm-12">
        <h1>Good food choices are good investments.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Etiam et purus a odio finibus bibendum amet leo.</p>
        <div className="button">
            <button className="btn  b1">order now</button>
            <button className="btn btn-primary b2">learn more</button>
        </div>
    </div>
    <div className="right col-md-6 col-sm-12">

    </div>
    </div>
    </div>

    </header>
  )
}

export default Header
