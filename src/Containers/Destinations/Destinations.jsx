import React from 'react'

import Europe from '../../Assets/Europe.svg';
import USA from '../../Assets/USA.svg';
import Canada from '../../Assets/Canada.svg';
import Australia from '../../Assets/Australia.svg';


import Countries from '../../Components/Countries/Countries';
import './Destinations.css';

const Destinations = () => {
  return (
    <div className='destinations section__padding'>
      <div className='destinations-content'>
        <h1>Top Destinations</h1>
        <p>We have quality partners in variety of destinations around the globe. </p>
      </div>
        <div className='destinations-countries'>
          <Countries Img={Europe} title={"Europe/eea"} />
          <Countries Img={USA} title={"USA"} />
          <Countries Img={Canada} title={"Canada"} />
          <Countries Img={Australia} title={"Australia/New Zealand"} />
      </div>
    </div>
  )
}

export default Destinations;