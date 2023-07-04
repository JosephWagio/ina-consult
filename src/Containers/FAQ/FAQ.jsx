import React from 'react'

import Accordion from '../../Components/Accordion/Accordion';
import './FAQ.css'

const FAQ = () => {
  return (
    <div className='faq section__padding' id='faq'>
      <div className='faq-content'>
        <h4>FAQs</h4>
        <h2>Frequently asked questions</h2>
        <div className='line2'></div>
        <p>Still do you have any questions to know? <br /> Feel free to ask our experts here.</p>
        <button>ASK YOUR QUESTIONS</button>
      </div>

      <div className='accordion'>
        <Accordion />
      </div>
    </div>
  ) 
}

export default FAQ; 