import React from 'react'

import Aboutus from '../../Assets/Aboutus.svg';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className='aboutus section__padding' id='aboutus'>
      <div className='aboutus-image'>
        <img src={Aboutus} alt="student" />
      </div>
      <div className='aboutus-content'>
        <h4>ABOUT US & EXPERIENCE</h4>
        <h1>Moving beyond product innovation to gain a competitive advantage</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div className='counter'>
          <div className='exp'>
            <h3>15</h3>
            <p>Years of Experience</p>
          </div>
          <div className='visa'>
            <h3>875</h3>
            <p>VISA Approved</p>
          </div>
          <div className='admission'>
            <h3>93%</h3>
            <p>Admission success</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs;