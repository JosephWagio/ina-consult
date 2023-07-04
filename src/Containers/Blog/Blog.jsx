import React from 'react'
import { FaBookReader, FaSchool, FaCcVisa, FaUserGraduate } from 'react-icons/fa';
import { GiCommercialAirplane } from 'react-icons/gi';
import { MdSchool } from 'react-icons/md';
// import { FaCcVisa } from 'react-icons/bi';

import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/autoplay"

import { Autoplay } from "swiper";

import Article from '../../Components/article/Article';
import './Blog.css';

const Blog = () => {
  return (
    <div className='blog section__padding'>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        autoplay={true}
        modules={[Autoplay]} 
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3
          }
        }}
        className="mySwiper"
      >
        <div className='blog-container'>
          <SwiperSlide><Article imgUrl= {<FaBookReader color='#764af1' />} title={"Educational Consulting Service"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."} /></SwiperSlide>
          <SwiperSlide><Article imgUrl={<FaSchool color='#FFB55E' />} title={"High School Boarding"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."} /></SwiperSlide>
          <SwiperSlide><Article imgUrl={<MdSchool color='#008000' />} title={"Bachelor/Master Programmes"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."} /></SwiperSlide>
          <SwiperSlide><Article imgUrl={<GiCommercialAirplane color='#c9184a' />} title={"Travel/Tours"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."} /></SwiperSlide>
          <SwiperSlide><Article imgUrl={<FaCcVisa color='#00b4d8' />} title={"Vocational/Job Seeker Visas"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."} /></SwiperSlide>
          <SwiperSlide><Article imgUrl={<FaUserGraduate color='#b5179e' />} title={"PHD Fellowship/Doctoral Degree Programs"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."} /></SwiperSlide>
        </div>
      </Swiper>
    </div>
  )
}

export default Blog;