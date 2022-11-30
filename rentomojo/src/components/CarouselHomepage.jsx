import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import styles from "../styles/homepage.module.css";
import { useNavigate } from 'react-router-dom';

const CarouselHomepage = () => {
  const navigate = useNavigate()
    return (
        <div>
            <div className={styles.carousel_container}>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{delay:4000}}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide onClick={()=>navigate("/electronics")}><img className={styles.image_set} src="https://s.rmjo.in/Paytm%20CB%20Web%20Banner%20Desktop%20(1).png" alt="" /></SwiperSlide>
        <SwiperSlide onClick={()=>navigate("/electronics")}><img className={styles.image_set} src="https://s.rmjo.in/WP-Web.png" alt="" /></SwiperSlide>
        <SwiperSlide onClick={()=>navigate("/electronics")}><img className={styles.image_set} src="https://s.rmjo.in/AirOKWeb%20(1).png" alt="" /></SwiperSlide>
        <SwiperSlide onClick={()=>navigate("/electronics")}><img className={styles.image_set} src="https://s.rmjo.in/AC%20Offer%20Banner%20HP_.jpg" alt="" /></SwiperSlide>
      </Swiper>
      </div>
      </div>
      );
}

export default CarouselHomepage