import React from 'react'
import "./Careers.css"
import one from "./images/careersone.png"
import two from "./images/careerstwo.png"
import three from "./images/careersthree.png"
import four from "./images/careersfour.png"
import five from "./images/careersfive.png"
const Careers = () => {
  return (
    <>
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
{/* -------------------------section-------------------------- */}
<div className='careers__section'>
    <div className='container'>
        <div className='careers-section__container'>
            <h2 className='careers-section__title'>See our open positions </h2>
            <ul className='careers-section__list'>
                <li className='careers-section__item'>
                    <h3 className='careers-section-list__title'>Full Stack Developer</h3>
                    <p className='careers-section-list__text'>Bengaluru · Full Time </p>
                    <a className='careers-section-list__link' href="#">Apply Now</a>
                </li>
                <li className='careers-section__item'>
                    <h3 className='careers-section-list__title'>Full Stack Developer</h3>
                    <p className='careers-section-list__text'>Bengaluru · Full Time </p>
                    <a className='careers-section-list__link' href="#">Apply Now</a>
                </li>
                <li className='careers-section__item'>
                    <h3 className='careers-section-list__title'>Full Stack Developer</h3>
                    <p className='careers-section-list__text'>Bengaluru · Full Time </p>
                    <a className='careers-section-list__link' href="#">Apply Now</a>
                </li>
                <li className='careers-section__item'>
                    <h3 className='careers-section-list__title'>Full Stack Developer</h3>
                    <p className='careers-section-list__text'>Bengaluru · Full Time </p>
                    <a className='careers-section-list__link' href="#">Apply Now</a>
                </li>
                <li className='careers-section__item'>
                    <h3 className='careers-section-list__title'>Full Stack Developer</h3>
                    <p className='careers-section-list__text'>Bengaluru · Full Time </p>
                    <a className='careers-section-list__link' href="#">Apply Now</a>
                </li>
            </ul>
        </div>
    </div>
</div>
{/* --------------------------aside--------------------------- */}
<div className='careers__aside'>
    <div className='container'>
        <div className='careers-aside__container'>
            <h5 className='careers-aside__title'>Latest Blog & News</h5>
            <ul className='careers-aside__list'>
                <li className='careers-aside__item'>
                    <img className='careers-section__img' src={three} alt="" />
                    <h3 className='careers-aside-list__title'>Why you have to digitalize in 2021</h3>
                    <p className='careers-aside-list__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, </p>
                    <button className='careers-aside-list__btn'>Learn More → </button>
                </li>
                <li className='careers-aside__item'>
                    <img className='careers-section__img' src={four} alt="" />
                    <h3 className='careers-aside-list__title'>Our internal process and longerm vision</h3>
                    <p className='careers-aside-list__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, </p>
                    <button className='careers-aside-list__btn'>Learn More → </button>
                </li>
                <li className='careers-aside__item'>
                    <img className='careers-section__img' src={five} alt="" />
                    <h3 className='careers-aside-list__title'>Helping the next generation of leaders</h3>
                    <p className='careers-aside-list__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, </p>
                    <button className='careers-aside-list__btn'>Learn More → </button>
                </li>
            </ul>
        </div>
    </div>
</div>
    </>
  )
}

export default Careers