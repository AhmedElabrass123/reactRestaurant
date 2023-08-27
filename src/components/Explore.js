import React from 'react'
import Data from './Data'
import "./explore.css"
const Explore = () => {
    const foodItems=Data.map((item,index)=>{
        return(
            <div className="food col-lg-4 col-md-6 col-sm-12">
                <img src={item.img}/>
                <h6>{item.title}</h6>
                <p className="time">{item.time}</p>
                <p className="price">{item.price}</p>
                <hr/>
                <button className="btn btn-primary">{item.butt}</button>
            </div>
            
        )
       
    })
  return (
    <div className="explore" id="explore">
    <div className="container">
    <div className="head">
        <h1>Explore Our Foods</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et 
        purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. 
        Far far away, behind the word mountains, far from the countries 
        Vokalia and Consonantia, there live the blind texts. Separated they live 
        in Bookmarksgrove.</p>
    </div>
        <div className="row">
            {foodItems}
            
        </div>
    </div>
    </div>
  )
}

export default Explore
