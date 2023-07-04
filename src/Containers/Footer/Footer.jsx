import React from 'react'
import FaWhatsapp from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-regular-svg-icons';

import whatsapp from '../../Assets/whatsapp.svg';
import instagram from '../../Assets/instagram.svg';
import mail from '../../Assets/Mail.svg';
import newsletter from '../../Assets/newslater.png';
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer section__padding'>
      <div className='footer__newsletter'>
        <div className='footer__newsletter-content'>
          <div className='footer__newsletter-content-img'>
            <img src={newsletter} alt="" />  
          </div>
          <div className='footer__newsletter-content-text'>
            <h2>Subscribe to our newsletter</h2>
            <p>Enter your mail address to get our updates, offer and study abroad related all updates</p>
          </div>
        </div>
        <div className='footer__newsletter-content-input'>  
          <input type="email" placeholder='Your Email Address' />
          <button type='button'><i><FontAwesomeIcon icon={faBell} /></i> Get Started</button>
        </div>
      </div>

      <div className='line3'></div>

      <div className='footer__links'>
        <div className='footer__links-content col'>
          <h2>Nolani consult</h2>
          <p>"Unlocking Potential, Igniting Success: Empowering Minds, Transforming Futures."</p>
        </div>
        <div className="footer-links-link-socials-container">
           <div className='footer__links-links col'>
            <h2>Links</h2>
            <p><a href="home">Home</a></p>
            <p><a href="aboutus">About</a></p>
            <p><a href="testimonials">Testimonials</a></p>
            <p><a href="faq">FAQ</a></p>
          </div>
          <div className='footer__links-socials col'>
            <h2>Contact Us</h2>
            <p><img src={whatsapp} alt="whatsapp" /> 08020304080</p>
            <p><img src={instagram} alt="instagram" /> @example </p>
            <p><img src={mail} alt="email" /> example@gmail.com </p>
          </div>
        </div>
      </div>

      <div className='line3'></div>

      <div className='footer__copyright'>
        <p>© 2023 Nolani Consult. All rights reserved | Developed By <a href="https://twitter.com/joseph_wagio">Joseph Wagio</a></p>
      </div>

    </div>
  )
}

export default Footer;