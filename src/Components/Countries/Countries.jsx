import React from 'react'

import './Countries.css'

const Countries = ( {Img, title} ) => {
  return (
    <div className='countries'>
        <img src={Img} alt="country" />
        <h3>{title}</h3>
    </div>
  )
}

export default Countries;