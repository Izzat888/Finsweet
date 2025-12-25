import React from 'react'
import "./About.css"
import one from "./images/aboutone.png"
import two from "./images/abouttwo.png"
const About = () => {
  return (
    <div className='about-hero'>
        <div className='container'>
            <div className='about-hero__container'>
                <div className='about__box'>
                    <h1 className='about-hero__title'>We value human, organizational, and operational intelligence, not just artificial</h1>
                    <p className='about-hero__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.</p>
                    <button className='about-hero__btn'>Work With Us</button>
                </div>
                <div className='img__box'>
                    <img className='about-hero-one__img' src={one} alt="" />
                    <img className='about-hero-two__img' src={two} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About