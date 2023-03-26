import React from "react";
import Image from "next/image";
import styles from "@/styles/carousel.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

export const Banner = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 4000,
      }}
      modules={[Autoplay]}
    >
      <SwiperSlide>
        <div className={styles.carouselSlide}>
          <Image
            src="/images/banner1.jpg"
            alt="carousel banner"
            priority
            fill
            className={styles.slideImage}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.carouselSlide}>
          <Image
            src="/images/banner2.jpg"
            alt="carousel banner"
            priority
            fill
            className={styles.slideImage}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.carouselSlide}>
          <Image
            src="/images/banner3.jpg"
            alt="carousel banner"
            priority
            fill
            className={styles.slideImage}
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
