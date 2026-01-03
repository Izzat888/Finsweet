import React from 'react'
import { FaFacebookF, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";
import {Link} from 'react-router-dom';
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='footer__container'>
          <div className='footer__box'>
            <h6 className='footer__title'>Finsweet</h6>
          <p className='footer__text'>Bespoke software solutions</p>
          <div style={{ display: "flex", gap: "15px" }}>
             <a className='footer-icon__link' href="#"><FaFacebookF size={24} /></a>
             <a className='footer-icon__link' href="#"><FaYoutube size={24} /></a>
             <a className='footer-icon__link' href="#"><FaInstagram size={24} /></a>
             <a className='footer-icon__link' href="#"><FaTwitter size={24} /></a>
          </div>
          <p className='footer-two__text'>© All rights reserved – Finsweet</p>
          </div>
          <ul className='footer-one__list'>
            <li className='footer-one__item'>
              <span className='title__span'>Company</span>
            </li>
            <li className='footer-one__item'><Link className='footer__link' to= {"about"}>About Us</Link></li>
            <li className='footer-one__item'><Link className='footer__link' to={"careers"}>Careers</Link></li>
            <li className='footer-one__item'><Link className='footer__link' to= {"servic"}>Services</Link></li>
            <li className='footer-one__item'><Link className='footer__link' to= {"blog"}>Blog</Link></li>
          </ul>
          <ul className='footer-two__list'>
            <li className='footer-two__item'><span className='title__span'>Connect</span></li>
            <li className='footer-two__item'><a className='footer__links' href="#">hi@finsweet.com</a></li>
            <li className='footer-two__item'><a className='footer__links' href="#">+(123) 456-7890</a></li>
          </ul>
          <ul className='footer-three__list'>
            <li className='footer-three__item'><span className='title__span'>Join Newsletter</span></li>
            <li className='footer-three__item'>
              <form action="#">
                <input className='footer__inp' type="text" placeholder='Type email here' required />
                <button className='footer__btn'>Subscribe</button>
              </form>
              <a className='footer-two__link' href="#">Privacy Policy</a>
              <a className='footer-two__link' href="#">Terms & Conditions</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer