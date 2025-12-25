import React from 'react'
import "./Header.css"
import {Link} from 'react-router-dom';
const Header = () => {
  return (
    <div className='header'>
        <div className='container'>
            <div className='header__container'>
                <Link className='header__logo' to={"home"}>Finsweet</Link>
                <ul className='header__list'>
                    <li className='header__item'>
                        <Link className='header__link' to={"about"}>About Us</Link>
                    </li>
                    <li className='header__item'>
                        <Link className='header__link' to={"careers"}>Careers</Link>
                    </li>
                    <li className='header__item'>
                        <Link className='header__link' to={"servic"}>Services</Link>
                    </li>
                    <li className='header__item'>
                        <Link className='header__link' to={"blog"}>Blog</Link>
                    </li>
                    <li className='header__item'>
                        <Link className='header__link' to={"contact"}>Contact us</Link>
                    </li>
                </ul>
                <button className='header__btn'>Clone project</button>
            </div>
        </div>
    </div>
  )
}

export default Header