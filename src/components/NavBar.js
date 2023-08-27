import React from 'react'
import logo from '../imgs/logo.png'
import "./Nav.css"
import {Container,Nav,Navbar,Link,Form,FormControl,Button} from 'react-bootstrap'
import { HashLink } from 'react-router-hash-link';
const NavBar = () => {
  return (
    <>
<Navbar  expand="lg">
<Container>
<Navbar.Brand href="#home"><img src={logo}/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#about">About Us</Nav.Link>
      <Nav.Link href="#explore">Explore Foods</Nav.Link>
      <Nav.Link href="#subcribe">subcribe</Nav.Link>
      <Nav.Link href="#question">FAQ</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link className='last-nav'>01208448853</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Container>
  
</Navbar>
    </>
  )
}

export default NavBar
