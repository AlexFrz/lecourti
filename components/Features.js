import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { EffectFade, Navigation, Pagination } from "swiper";

SwiperCore.use([EffectFade, Navigation, Pagination]);

const AllFeatures = styled.div`
  margin-left: 20vw;
  width: 80vw;
  height: 100vh;
`;

const Feature = styled.div`
  height: 300px;
  display: flex;

  > .description {
    width: 55vw;
    background-color: ${(props) => (props.unpair ? "#29524e" : "#fafafa")};
    z-index: 12;

    > .icons {
      z-index: 20;
      position: relative;
      display: flex;
      margin-left: 35px;

      > .icon {
        height: 28px;
        width: 28px;
        border-radius: 100%;
        background-color: ${(props) => (props.pair ? "#29524e" : "#fafafa")};
        margin: 15px;
      }
    }

    > .title {
      font-size: 24px;
      line-height: 30px;
      font-family: Lora;
      color: ${(props) => (props.unpair ? "#fafafa" : "#29524e")};
      margin-top: 50px;
      margin-left: 50px;
      padding-left: 25px;
      border-left: 2px solid
        ${(props) => (props.unpair ? "#fafafa" : "#29524e")};
    }

    > .paragraph {
      margin-top: 25px;
      margin-left: 50px;
      width: 245px;
      font-size: 16px;
      color: ${(props) => (props.unpair ? "#fafafa" : "#29524e")};
    }
  }
`;

export default function Features() {
  return (
    <>
      <AllFeatures>
        <Feature unpair>
          <div className="description">
            <h1 className="title green">Le jardin</h1>
            <p className="paragraph green">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
              nobis minus nesciunt? Velit minima illum hic.
            </p>
            <div className="icons">
              <div className="icon"></div> <div className="icon"></div>{" "}
              <div className="icon"></div> <div className="icon"></div>{" "}
            </div>
          </div>
          <div className="swiper">
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
                <img src="/images/jardin.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/garden.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/highsize.jpg" alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </Feature>
        <Feature pair>
          <div className="swiper">
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
                <img src="/images/piscine.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/pool.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/mer.jpg" alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="description white">
            <h1 className="title">La piscine</h1>
            <p className="paragraph green">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
              nobis minus nesciunt? Velit minima illum hic.
            </p>
            <div className="icons">
              <div className="icon"></div> <div className="icon"></div>{" "}
              <div className="icon"></div> <div className="icon"></div>{" "}
            </div>
          </div>
        </Feature>
        <Feature unpair>
          <div className="description">
            <h1 className="title green">Espaces intérieurs</h1>
            <p className="paragraph green">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
              nobis minus nesciunt? Velit minima illum hic.
            </p>
            <div className="icons">
              <div className="icon"></div> <div className="icon"></div>{" "}
              <div className="icon"></div> <div className="icon"></div>{" "}
            </div>
          </div>
          <div className="swiper">
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
                <img src="/images/salon.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/bedroom.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/clay.jpg" alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </Feature>
        <Feature pair>
          <div className="swiper">
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
                <img src="/images/veranda.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/living.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/villa.jpg" alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="description  white">
            <h1 className="title">La véranda</h1>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
              nobis minus nesciunt? Velit minima illum hic.
            </p>
            <div className="icons">
              <div className="icon"></div> <div className="icon"></div>
              <div className="icon"></div> <div className="icon"></div>
            </div>
          </div>
        </Feature>
      </AllFeatures>

      <style jsx>{`
        img {
          width: 55vw;
          object-fit: cover;
          height: 300px;
        }

        .swiper {
          width: 55vw;
        }
      `}</style>
    </>
  );
}
