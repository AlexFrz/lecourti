import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { EffectFade, Navigation, Pagination } from "swiper";

SwiperCore.use([EffectFade, Navigation, Pagination]);

export default function Carousel({ typeOf }) {
  // const slides = [];
  // for (let i = 0; i < 5; i += 1) {
  //   slides.push(
  //     <SwiperSlide key={`slide-${i}`}>
  //       <img src="/images/pool.jpg" alt="" className="carousel" />
  //     </SwiperSlide>
  //   );
  // }
  return (
    <>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        effect="fade"
        navigation
        pagination
      >
        <SwiperSlide>
          <img src="/images/pool.jpg" alt="" className={typeOf} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/kitchen.jpg" alt="" className={typeOf} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/living.jpg" alt="" className={typeOf} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/garden.jpg" alt="" className={typeOf} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/pexels.jpg" alt="" className={typeOf} />
        </SwiperSlide>
      </Swiper>

      <style jsx>{`
        .bigcarousel {
          position: relative;
          flex: 0.8;
          height: 100vh;
          width: 80vw;
          margin-left: 20vw;
          z-index: -1;
        }
      `}</style>
    </>
  );
}
