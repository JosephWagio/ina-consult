import React from 'react'

// import quote from '../../Assets/Quote.png';
import star from '../../Assets/star.svg';
import './Posts.css';

const Posts = ({ title, comment, img, name }) => {
  return (
    <div className='posts'>
        <div className='posts_comment'>
            <div className='posts_comment-title'>
                <h4>{title}</h4>    
            </div>
            <div className='posts_comment-text'>
                <p className='quote'>“</p>
                <p>{comment}</p>    
            </div>
        </div>
        
        <div className='line'></div>

        <div className='posts_profile'>
            <div className='posts_profile-img'>
                <img src={img} alt="user" />    
            </div>
            <div className='posts_profile-text'>
                <h5>{name}</h5>
                <div className='star'><img src={star} alt='star' /><img src={star} alt='star' /><img src={star} alt='star' /><img src={star} alt='star' /><img src={star} alt='star' /></div>
            </div>
        </div>
    </div>
  )
}

export default Posts;