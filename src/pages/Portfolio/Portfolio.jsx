import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination } from 'swiper/modules';

// Import Swiper styles

import 'swiper/css';
import 'swiper/css/pagination';
import Slide1 from '../../components/Slide1';
import Slide2 from '../../components/Slide2';



const Portfolio = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      };
    return (
        <div className='mt-7 md:mt-14'>
            <Swiper
            pagination={pagination}
            modules={[Pagination]}
            className="mySwiper"
        >   
            <SwiperSlide><Slide1></Slide1></SwiperSlide>
            <SwiperSlide><Slide2></Slide2></SwiperSlide>
            
            
            
        </Swiper>
        </div>
    );
};

export default Portfolio;