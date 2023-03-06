import React from "react";
import './Testimonials.css'
import { Data } from "./Data";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay } from "swiper";

const Testemunial = () => {
  return(
    <section className="testimonials section container" id="testimonials">
      
      <h2 className="section__title">My clients say</h2>
      <span className="section__subtitle">Testimonial</span>

      <Swiper
        loop = {true}
        grabCursor = {true}
        spaceBetween={24}
        autoplay = {{
          delay: 2550,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          }
        }}
        modules={[Autoplay, Pagination]}

        className="testimonial__container">
        {Data.map(({id, image, title, description}) => {
          return (
            <SwiperSlide className="testimonial__card" key={id}>
              <img src={image} alt="" className="testimonial__img"/>
              <h3 className="testimonial__name">{title}</h3>
              <p className="testimonial__description">{description}</p>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testemunial
