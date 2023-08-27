import React from 'react'
import "./question.css"
import Carousel from 'react-bootstrap/Carousel';
import person1 from '../imgs/person1.jpg'
import person2 from '../imgs/person2.jpg'
import person3 from '../imgs/customer-1.jpg'
import person4 from '../imgs/customer-2.jpg'
import person5 from '../imgs/customer-3.jpg'



const Question = () => {
  return (
    <>
         <div className="question" id="question">
    <h1>Testimonials</h1>
    <Carousel className='carsol'>
      <Carousel.Item className='img1'>
        <img
         src={person1}
        />
        <Carousel.Caption className='caption'>
          <p>"Far far away, behind the word mountains, far from the countries Vokalia 
          and Consonantia, there live the blind texts. Separated they live."
          </p>
          <h6 class="author">Simab Dave - Web Designer</h6>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='img1'>
        <img
         src={person2}
        />

        <Carousel.Caption className='caption'>
          <p>"Far far away, behind the word mountains, far from the countries Vokalia 
          and Consonantia, there live the blind texts. Separated they live far from 
          the countries Vokalia."
          </p>
          <h6 class="author">Johnthan Doe - UX Designer</h6>
        </Carousel.Caption>
      </Carousel.Item>
       <Carousel.Item className='img1'>
        <img
         src={person3}
        />

        <Carousel.Caption className='caption'>
          <p>"Far far away, behind the word mountains, far from the countries Vokalia 
          and Consonantia, there live the blind texts. Separated they live far from 
          the countries Vokalia."
          </p>
          <h6 class="author">Johnthan Doe - UX Designer</h6>
        </Carousel.Caption>
      </Carousel.Item>
       <Carousel.Item className='img1'>
        <img
         src={person4}
        />

        <Carousel.Caption className='caption'>
          <p>"Far far away, behind the word mountains, far from the countries Vokalia 
          and Consonantia, there live the blind texts. Separated they live far from 
          the countries Vokalia."
          </p>
          <h6 class="author">Johnthan Doe - UX Designer</h6>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    {/* =========================contact====================== */}
    <div class="contact" id="subcribe">
      <h2>Hurry up! Subscribe our newsletter<br/>
         get 25% Off</h2>
         <p>Limited time offer for this month. No credit card required.</p>
         <div className='send'>
              <input type="Email" placeholder="Enter Your Email"/>
              <button className="btn">Subscribe</button>
         </div>
    </div>
    {/* =========================footer============================ */}
    <footer>
      <div className="links">
        <a href="#">Regitser</a>
        <a href="#">Forum</a>
        <a href="#">Affiliate</a>
        <a href="#">FQA</a>
      </div>
      <div className="social">
      <i class="fa-brands fa-instagram"></i>
      <i class="fa-brands fa-twitter"></i>
      <i class="fa-brands fa-facebook"></i>
      <i class="fa-brands fa-linkedin"></i>
      </div>
      <p>© 2021. Ahmed Elabrass. All rights reserved.</p>
    </footer>
    </>
 
  )
}

export default Question
