import React from 'react';
import "./temoignage.css";
import { Data } from './Data';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from 'swiper';


const Temoignage = () => {
  return (
    <section className="testimonial container section">
          <h2 className="section_title">Clients</h2>
          <span className="section_subtitle">introduction</span>

          <Swiper className="testimonial_container"
                  loop={true}
                  grabCursor={true}
                  spaceBetween={24}
                  pagination={{
                    clickable: true,
                  }}
                  breakpoints={{
                    576:{
                        slidesPerView: 2,
                    },
                    768:{
                        slidesPerView: 2,
                        spaceBetween: 48,   
                    },
                  }}
                  modules={[Pagination]}
          >
            {Data.map(({id, image, title, description})=>{
                return(
                    <SwiperSlide className="testimonial card" key={id}>
                        <img src={image} alt="" className="testimonial_img" />

                        <h3 className="testimonial_name">{title}</h3>
                        <p className="testimonial_description">{description}</p>
                    </SwiperSlide>
                )
            })}
          </Swiper>
    </section>
  )
}

export default Temoignage