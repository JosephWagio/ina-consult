import React from 'react';
import { FaAngleRight } from 'react-icons/fa';

import './article.css';

const Article = ({imgUrl, title, text }) => {
  return (
    <div className='blog-container_article'>
      <div className='blog-container_article-image'>
        <i>{imgUrl}</i>
      </div>
      <div className='blog-container_article-content'>
        <div>
          <h4>{title}</h4>
          <p>{text}</p>
        </div>
        <p>Learn More <i><FaAngleRight /></i></p>
      </div>
    </div>
  )
}

export default Article;