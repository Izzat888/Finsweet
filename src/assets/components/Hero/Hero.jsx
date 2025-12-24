import React from 'react'
import one from "./images/heroimg.png"
import two from "./images/heroone.svg"
import three from "./images/herotwo.svg"
import four from "./images/herothree.svg"
import "./Hero.css"
const Hero = () => {
  return (
    <div className='hero'>
        <div className='container'>
            <div className='hero__container'>
                <div className='hero__box'>
                    <h1 className='hero__title'>Prosper with our bespoke solutions</h1>
                    <p className='hero__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique</p>
                    <button className='hero-one__btn'>See our services</button>
                    <button className='hero-two__btn'>See All Services </button>
                    <p className='hero-one__text'>Worked with 100+ Companies</p>
                    <div className='hero__wrapper'>
                        <img className='hero__logotip' src={two} alt="logo"/>
                        <img className='hero__logotip' src={three} alt="logo"/>
                        <img className='hero__logotip' src={four} alt="logo"/>
                    </div>
                </div>
                <img className='hero__img' src={one} alt="img" />
            </div>
        </div>
    </div>
  )
}

export default Hero