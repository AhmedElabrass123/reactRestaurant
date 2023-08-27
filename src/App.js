import React from 'react'
import "./App.css"
import Header from './components/Header.js'
import NavBar from './components/NavBar.js'
import About from './components/About.js'
import About1 from './components/About1.js'
import About2 from './components/About2.js'
import Watch from './components/Watch'
import Explore from './components/Explore'
import Question from './components/Question'

const App = () => {
  return (
    <div>
     <NavBar/>
    <Header/>
     <About/>
     <About1/>
     <About2/>
     <Watch/>
     <Explore/>
     <Question/>

      
    </div>
  )
}

export default App
