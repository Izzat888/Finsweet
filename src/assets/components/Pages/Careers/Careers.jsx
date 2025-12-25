import React from 'react'
import "./Careers.css"
import one from "./images/careersone.png"
import two from "./images/careerstwo.png"
const Careers = () => {
  return (
    <div className='careers-hero'>
        <div className='container'>
            <div className='careers-hero__container'>
                <div className='careers__box'>
                    <h1 className='careers-hero__title'>We hired people who are very passionate about what they do</h1>
                    <p className='careers-hero__text'>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw.</p>
                    <button className='careers-hero__btn'>View Positions</button>
                </div>
                <div className='img__box'>
                    <img className='careers-hero-one__img' src={one} alt="" />
                    <img className='careers-hero-two__img' src={two} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Careers