import React from 'react'

import Europe from '../../Assets/Europe.svg';
import USA from '../../Assets/USA.svg';
import Canada from '../../Assets/Canada.svg';
import Australia from '../../Assets/Australia.svg';

import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/autoplay"

import { Autoplay } from "swiper";

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
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4
            }
          }}
          className="mySwiper3"
        >
          <div>
            <SwiperSlide>
              <Countries Img={Europe} title={"Europe/eea"} />
            </SwiperSlide>
            <SwiperSlide>
              <Countries Img={USA} title={"USA"} />
            </SwiperSlide>
            <SwiperSlide>
              <Countries Img={Canada} title={"Canada"} />
            </SwiperSlide>
            <SwiperSlide>
              <Countries Img={Australia} title={"Australia/New Zealand"} />
            </SwiperSlide>
            {/* <SwiperSlide></SwiperSlide> */}
          </div>
        </Swiper>    
      </div>
    </div>
  )
}

export default Destinations;