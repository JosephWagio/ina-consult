import React, { useState } from 'react';
import { FaMinus, FaPlus }  from 'react-icons/fa';

import './Accordion.css'


const faqData = [
    {
      question: "How is get admission in abroad university?",
      answer: "Norway, USA, UK, Germany & Italy is most safest country in the world for Bangladeshi students for higer study."
    },  {
      question: "Do you offer complete solution for students?",
      answer: "Norway, USA, UK, Germany & Italy is most safest country in the world for Bangladeshi students for higer study."
    },  {
      question: "Which country is safe and better for higher study? ",
      answer: "Norway, USA, UK, Germany & Italy is most safest country in the world for Bangladeshi students for higer study."
    },  {
      question: "Which country offer PR after study getting job?",
      answer: "Norway, USA, UK, Germany & Italy is most safest country in the world for Bangladeshi students for higer study."
    },  {
      question: "Can i get scholarship with my low cGPA? ",
      answer: "Norway, USA, UK, Germany & Italy is most safest country in the world for Bangladeshi students for higer study."
    },
  ];
  
  const Accordion = () => {
    const [accordion, setActiveAccordion] = useState(-1);

    function toggleAccordion(index) {
        if (index === accordion) {
                setActiveAccordion(-1);
                return;
        }
        setActiveAccordion(index);
    }

    return (
        <div className='faq_accordion'>
            {faqData.map((item, index) => (
            <div key={index} onClick={() => toggleAccordion(index)} className='faq_accordion-content'>
                <div className='faq_accordion-question'>
                    <h3 className={accordion === index ? "active" : ""}>{item.question}</h3>
                    <div className='faq_accordion-icon'>
                        {accordion === index ? (<><span className='verticle'><FaMinus /></span></>) : (<><span className='verticle'><FaPlus /></span></>) }  
                    </div>
                </div>
                <div className='faq_accordion-answer'> 
                    <p className={accordion === index ? "active" : "inactive"}>{item.answer}</p>
                </div>
            </div>
            ))}
        </div>
    )
  }
  
  export default Accordion; 