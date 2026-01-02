import React, { useEffect, useState } from 'react';
import one from "./images/heroimg.png"
import two from "./images/heroone.svg"
import three from "./images/herotwo.svg"
import four from "./images/herothree.svg"
import five from "./images/sectionone.png"
import six from "./images/sectiontwo.png"
import seven from "./images/sectionthree.png"
import eight from "./images/feauresone.png"
import nine from "./images/feaurestwo.png"
import ten from "./images/feauresthree.png"
import eleven from "./images/aboutone.png"
import "./Home.css"
const Home = () => {

    const [count15, setCount15] = useState(0);
const [count500, setCount500] = useState(0);

useEffect(() => {
  // 15+
  let current15 = 0;
  const interval15 = setInterval(() => {
    current15++;
    setCount15(current15);

    if (current15 >= 15) {
      clearInterval(interval15);
      setCount15(15);
    }
  }, 100);

  // 500+
  let current500 = 0;
  const interval500 = setInterval(() => {
    current500++;
    setCount500(current500);

    if (current500 >= 500) {
      clearInterval(interval500);
      setCount500(500);
    }
  }, 10);

  return () => {
    clearInterval(interval15);
    clearInterval(interval500);
  };
}, []);

  return (
    <>
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
{/* --------------------section----------------------------- */}
<div className='section'>
    <div className='container'>
        <div className='section__container'>
            <h2 className='section__title'>We help more than 1500 companies from all sectors</h2>
            <p className='section__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.</p>
            <ul className='section__list'>
                <li className='section__item'>
                    <img className='section__img' src={five} alt="" />
                    <h3 className='section-list__title'>Business strategy</h3>
                    <p className='section-list__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, </p>
                    <button className='section-list__btn'>Learn More → </button>
                </li>
                <li className='section__item'>
                    <img className='section__img' src={six} alt="" />
                    <h3 className='section-list__title'>Digitalization</h3>
                    <p className='section-list__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, </p>
                    <button className='section-list__btn'>Learn More → </button>
                </li>
                <li className='section__item'>
                    <img className='section__img' src={seven} alt="" />
                    <h3 className='section-list__title'>Risk assessment</h3>
                    <p className='section-list__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, </p>
                    <button className='section-list__btn'>Learn More → </button>
                </li>
            </ul>
        </div>
    </div>
</div>
<div className='feaures'>
    <div className='container'>
        <div className='feaures__container'>
            <div className='feaures__box'>
                <h3 className='feaures__title'>We are building software solution that solves your business challenges</h3>
                <p className='feaures__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.</p>
            </div>
            <ul className='feaures__list'>
                <li className='feaures__item'>
                    <img className='feaures__img' src={eight} alt="" />
                    <h4 className='feaures-list__title'>Invoicing</h4>
                    <p className='feaures-list__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, </p>
                </li>
                <li className='feaures__item'>
                    <img className='feaures__img' src={nine} alt="" />
                    <h4 className='feaures-list__title'>Support</h4>
                    <p className='feaures-list__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, </p>
                </li>
                <li className='feaures__item'>
                    <img className='feaures__img' src={ten} alt="" />
                    <h4 className='feaures-list__title'>Surveying</h4>
                    <p className='feaures-list__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, </p>
                </li>
            </ul>
        </div>
    </div>
</div>
{/* ----------------------------about--------------- */}
<div className='about'>
    <div className='container'>
        <div className='about__container'>
            <div className='about__box'>
                <h3 className='about__title'>The energy of a start-up combined with 30 years of experience.</h3>
                <p className='about__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.</p>
                <ul className='about__list'>
                    <li className='about__item'>
                        <span className='about__span'>{count15}+</span>
                        <p className='about-one__text'>Awards received</p>
                        <p className='about-two__text'>Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.</p>
                    </li>
                    <li className='about__item'>
                        <span className='about__span'>{count500}+</span>
                        <p className='about-one__text'>Awards received</p>
                        <p className='about-two__text'>Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.</p>
                    </li>
                </ul>
            </div>
            <img className='about__img' src={eleven} alt="" />
        </div>
    </div>
</div>
    </>
  )
}

export default Home