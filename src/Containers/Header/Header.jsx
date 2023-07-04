import React from 'react'
import { Article } from '../../Components/article/Article';

import './Header.css';
import header from '../../Assets/header-img.png';

const Header = () => {
  return (
    <div className='header section__padding' id='home'>
      <div className='header-content'>
        <h1 className="gradient__text">Your success journey start with us!</h1>
        <p>INA CONSULT Can Fulfil Your International Education Dream As Per Your Best Fit with world top universities and collages.</p>
        <div className='header-content__apply'>
          <button type='button'>Apply Online</button>
        </div>
      </div>
      <div className='header-image'>
        <img src={header} alt="person" />
      </div>
    </div>
  )
}

export default Header;