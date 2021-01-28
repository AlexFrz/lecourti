import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { EffectFade, Navigation, Pagination } from "swiper";
import { device } from "../javascripts/device";

SwiperCore.use([EffectFade, Navigation, Pagination]);

const AllFeatures = styled.div`
  margin-left: 20vw;
  width: 80vw;
  height: 100vh;

  @media ${device.mobileL} {
    margin-left: 0;
    width: 100vw;
    height: 260px;
    margin-top: 100px;
  }
`;

const TheSwiper = styled.div`
  width: 55vw;

  @media ${device.mobileL} {
    width: 100vw;
    margin-top: -10px;
    height: 300px;
    }
  }

  img {
    width: 55vw;
    @media ${device.mobileL} {
      width: 100vw;
      height: 300px;
      margin-top: -10px;
    }
  }
`;

const Feature = styled.div`
  height: 300px;
  display: flex;

  @media ${device.mobileL} {
    display: flex;
    flex-direction: column;
    flex-flow: ${(props) => (props.unpair ? "column-reverse" : null)};
    height: 500px;
  }

  > .description {
    width: 55vw;
    background-color: ${(props) => (props.unpair ? "#29524e" : "#fafafa")};
    z-index: 12;
    @media ${device.mobileL} {
      margin-top: -20px;
      width: 100vw;
      text-align: center;
    }

    > .icons {
      z-index: 20;
      position: relative;
      display: flex;
      margin-left: 35px;
      @media ${device.mobileL} {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-left: 0;
        margin-top: 25px;
        padding-bottom: 25px;
      }

      > .icon {
        height: 28px;
        width: 28px;
        border-radius: 100%;
        background-color: ${(props) => (props.pair ? "#29524e" : "#fafafa")};
        margin: 15px;

        @media ${device.mobileL} {
          height: 18px;
          width: 18px;
          margin: 13px;
        }
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
      @media ${device.mobileL} {
        border-left: 2px solid
          ${(props) => (props.unpair ? "#fafafa" : "#29524e")};
        display: flex;
        justify-content: left;
        padding-left: 10px;
        margin-left: 130px;
        padding-top: 5px;

        &.common {
          margin-left: 70px;
        }

        &.loisir {
          margin-left: 80px;
        }
      }
    }

    > .paragraph {
      margin-top: 25px;
      margin-left: 50px;
      width: 245px;
      font-size: 16px;
      color: ${(props) => (props.unpair ? "#fafafa" : "#29524e")};
      @media ${device.mobileL} {
        border: none;
        display: flex;
        justify-content: center;
        padding-left: 0;
        margin: 0 auto;
        padding-top: 20px;
        width: 80vw;
        font-size: 12px;
      }
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
          <TheSwiper>
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
          </TheSwiper>
        </Feature>
        <Feature pair>
          <TheSwiper>
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
          </TheSwiper>
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
            <h1 className="title green common">Espaces communs</h1>
            <p className="paragraph green">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
              nobis minus nesciunt? Velit minima illum hic.
            </p>
            <div className="icons">
              <div className="icon"></div> <div className="icon"></div>{" "}
              <div className="icon"></div> <div className="icon"></div>{" "}
            </div>
          </div>
          <TheSwiper>
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
          </TheSwiper>
        </Feature>
        <Feature pair>
          <TheSwiper>
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
          </TheSwiper>
          <div className="description  white">
            <h1 className="title loisir">Loisirs & détente</h1>
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
    </>
  );
}
