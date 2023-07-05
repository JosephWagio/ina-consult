import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/autoplay"

import { Autoplay } from "swiper";

import student01 from '../../Assets/student (1).png'
import student02 from '../../Assets/student (2).png'
import student03 from '../../Assets/student (3).png'
import Posts from '../../Components/Posts/Posts';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <div className='testimonials section__padding' id='testimonials'>
      <div className='testimonials_heading'>
        <h4>Testimonials</h4>
        <h2>Our client shared their success stories</h2>
      </div>

      <div className='testimonials_posts'>
        <Swiper
          slidesPerView={3}
          spaceBetween={15}
          autoplay={true}
          modules={[Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 1,
            },
            730: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3
            }
          }}
          className="mySwiper2"
        >
            <SwiperSlide>
              <Posts title={"Great Platform"} comment={"The exceptional service provided by this platform is truly remarkable! With its user-friendly interface, comprehensive features, and top-notch customer support, it has significantly enhanced my experience. I can't recommend it highly enough!"} img={student01} name={"Joe Rogan"} />
            </SwiperSlide>
            <SwiperSlide>
              <Posts title={"Great Platform 2"} comment={"The exceptional service provided by this platform is truly remarkable! With its user-friendly interface, comprehensive features, and top-notch customer support, it has significantly enhanced my experience. I can't recommend it highly enough!"} img={student01} name={"Joe Rogan"} />
            </SwiperSlide>
            <SwiperSlide>
              <Posts title={"Great Platform 3"} comment={"The exceptional service provided by this platform is truly remarkable! With its user-friendly interface, comprehensive features, and top-notch customer support, it has significantly enhanced my experience. I can't recommend it highly enough!"} img={student01} name={"Joe Rogan"} />
            </SwiperSlide>
            <SwiperSlide>
              <Posts title={"Great Platform 4"} comment={"The exceptional service provided by this platform is truly remarkable! With its user-friendly interface, comprehensive features, and top-notch customer support, it has significantly enhanced my experience. I can't recommend it highly enough!"} img={student01} name={"Joe Rogan"} />
            </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Testimonials;