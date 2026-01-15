import React, { useEffect, useState } from 'react'
import "./About.css"
import one from "./images/aboutone.png"
import two from "./images/abouttwo.png"
import three from "./images/aboutthree.png"
import four from "./images/aboutfour.png"
import five from "./images/aboutfive.png"
import six from "./images/aboutsix.png"
import seven from "./images/aboutseven.png"
import eight from "./images/abouteight.png"
import nine from "./images/aboutnine.png"
import ten from "./images/aboutten.png"
import eleven from "./images/abouteleven.png"
import twelve from "./images/abouttwelve.png"
import thirteen from "./images/aboutthirteen.png"

const About = () => {

    const [count15, setCount15] = useState(0);
    const [count500, setCount500] = useState(0);
    const [count34, setCount34] = useState(0);
    const [count130, setCount130] = useState(0);

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

        let current34 = 0;
        const interval34 = setInterval(() => {
            current34++;
            setCount34(current34);

            if (current34 >= 34) {
                clearInterval(interval34);
                setCount34(34);
            }
        }, 10);

        let current130 = 0;
        const interval130 = setInterval(() => {
            current130++;
            setCount130(current130);

            if (current130 >= 130) {
                clearInterval(interval130);
                setCount130(130);
            }
        }, 10);

        return () => {
            clearInterval(interval15);
            clearInterval(interval500);
            clearInterval(interval34);
            clearInterval(interval130);
        }
    }, []);


    return (
        <>
            <div className='about-hero'>
                <div className='container'>
                    <div className='about-hero__container'>
                        <div className='about__box'>
                            <h1 className='about-hero__title'>
                                We value human, organizational, and operational intelligence, not just artificial
                            </h1>
                            <p className='about-hero__text'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <button className='about-hero__btn'>Work With Us</button>
                        </div>

                        <div className='img__box'>
                            <img className='about-hero-one__img' src={one} alt="" />
                            <img className='about-hero-two__img' src={two} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* features */}
            <div className='about__features'>
                <div className='container'>
                    <div className='about-features__container'>
                        <div className='about-features__box'>
                            <h2 className='about-features__title'>The energy of a start-up combined with 30 years of experience</h2>
                            <p className='about-features__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.</p>
                        </div>
                        <ul className='about-features__list'>
                            <li className='about-features__item'>
                                <span className='about-features__span'>{count15}+</span>
                                <h4 className='about-features-list__title'>Awards received</h4>
                                <p className='about-features-list__text'>Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.</p>
                            </li>

                            <li className='about-features__item'>
                                <span className='about-features__span'>{count500}+</span>
                                <h4 className='about-features-list__title'>Happy clients</h4>
                                <p className='about-features-list__text'>Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.</p>
                            </li>
                            <li className='about-features__item'>
                                <span className='about-features__span'>{count34}</span>
                                <h4 className='about-features-list__title'>Happy clients</h4>
                                <p className='about-features-list__text'>Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.</p>
                            </li>
                            <li className='about-features__item'>
                                <span className='about-features__span'>{count130}+</span>
                                <h4 className='about-features-list__title'>Happy clients</h4>
                                <p className='about-features-list__text'>Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* ------------------Section----------------- */}
            <div className='about__section'>
                <div className='container'>
                    <div className='about-section__container'>
                        <div className='about-section__box'>
                            <h3 className='about-section__title'>We want to get local identification in every corner of the world in this era of global citizenship.</h3>
                            <p className='about-section__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.</p>
                        </div>
                        <img className='about-section-one__img' src={three} alt="image" />
                        <img className='about-section-two__img' src={four} alt="image" />
                    </div>
                </div>
            </div>
            {/* -----------------team------------------- */}
            <div className='team'>
                <div className='container'>
                    <div className='team__container'>
                        <h3 className='team__title'>Teamwork is the only way we work</h3>
                        <p className='team__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.</p>
                        <ul className='team__list'>
                            {[five, six, seven, eight].map((img, index) => (
                                <li className='team__item' key={index}>
                                    <img src={img} alt="team" />

                                    <div className='team__modal'>
                                        <h4 className='team__role'>Support Assist</h4>
                                        <h3 className='team__name'>Selby Stuart</h3>
                                        <p className='team__desc'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros.
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>
            </div>
{/* ------------------------------article------------------------- */}
<div className='about__article'>
    <div className='container'>
        <div className='about-article__container'>
            <div className='about-article__box'>
                <h4 className='about-article__title'>Finsweet was a dream to work with</h4>
                <p className='about-article__text'>Maecenas efficitur scelerisque lorem, et varius lacus tincidunt vel. Pellentesque a arcu vitae diam dapibus mattis vel vel orci. Vivamus eleifend nec felis vel auctor.</p>
                <ul className='about-article-box__list'>
                    <li className='about-article-box__item'>
                        <img className='article-box__img' src={ten} alt="" />
                    </li>
                    <li className='about-article-box__item'>
                        <h5 className='about-article-box__title'>Chikelu Neo</h5>
                        <p className='about-article-box__text'>CEO at MazeAI</p>
                    </li>
                </ul>
            </div>
            <img className='about-article__img' src={nine} alt="" />
        </div>
    </div>
</div>
{/* ------------------------------------aside---------------------------- */}
<div className='about__aside'>
    <div className='container'>
        <div className='about-aside__container'>
            <h5 className='about-aside__title'>Latest Blog & News</h5>
            <ul className='about-aside__list'>
                <li className='about-aside__item'>
                    <img className='about-section__img' src={eleven} alt="" />
                    <h3 className='about-aside-list__title'>Why you have to digitalize in 2021</h3>
                    <p className='about-aside-list__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, </p>
                    <button className='about-aside-list__btn'>Learn More → </button>
                </li>
                <li className='about-aside__item'>
                    <img className='about-section__img' src={twelve} alt="" />
                    <h3 className='about-aside-list__title'>Our internal process and longerm vision</h3>
                    <p className='about-aside-list__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, </p>
                    <button className='aside-list__btn'>Learn More → </button>
                </li>
                <li className='about-aside__item'>
                    <img className='about-section__img' src={thirteen} alt="" />
                    <h3 className='about-aside-list__title'>Helping the next generation of leaders</h3>
                    <p className='about-aside-list__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, </p>
                    <button className='about-aside-list__btn'>Learn More → </button>
                </li>
            </ul>
        </div>
    </div>
</div>
        </>
    )
}

export default About
