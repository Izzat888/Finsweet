import React from 'react'
import "./Header.css"
const Header = () => {
  return (
    <div className='header'>
        <div className='container'>
            <div className='header__container'>
                <a className='header__logo' href="#">Finsweet</a>
                <ul className='header__list'>
                    <li className='header__item'>
                        <a className='header__link' href="#">About Us</a>
                    </li>
                    <li className='header__item'>
                        <a className='header__link' href="#">Careers</a>
                    </li>
                    <li className='header__item'>
                        <a className='header__link' href="#">Services</a>
                    </li>
                    <li className='header__item'>
                        <a className='header__link' href="#">Blog</a>
                    </li>
                    <li className='header__item'>
                        <a className='header__link' href="#">Contact us</a>
                    </li>
                </ul>
                <button className='header__btn'>Clone project</button>
            </div>
        </div>
    </div>
  )
}

export default Header