import React from 'react'
import "./Servic.css"
import one from "./images/servicone.png"
import two from "./images/servictwo.png"
const Servic = () => {
  return (
    <div className='servic-hero'>
        <div className='container'>
            <div className='servic-hero__container'>
                <div className='servic__box'>
                    <h1 className='servic-hero__title'>We serve clients with ground breaking solutions</h1>
                    <p className='servic-hero__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.</p>
                    <button className='servic-hero__btn'>Work With Us</button>
                </div>
                <div className='img__box'>
                    <img className='servic-hero-one__img' src={one} alt="" />
                    <img className='servic-hero-two__img' src={two} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Servic