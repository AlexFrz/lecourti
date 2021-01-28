import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { EffectFade, Navigation, Pagination } from "swiper";
import { device } from "../javascripts/device";

SwiperCore.use([EffectFade, Navigation, Pagination]);

export default function Carousel({ typeOf }) {
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
          height: 100vh;
          width: auto;
          margin-left: 20vw;
          z-index: -1;
        }

        @media ${device.mobileL} {
          .bigcarousel {
            margin-left: 0;
            height: 86vh;
            width: auto;
            object-fit: cover;
            margin-left: -50%;
          }
        }
      `}</style>
    </>
  );
}
