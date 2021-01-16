import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Navigation, Pagination } from "swiper";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
SwiperCore.use([EffectFade, Navigation, Pagination]);

export default function DomainPresentation() {
  return (
    <>
      <div className="domain">
        <div className="domain__headsection">
          <div className="domain__headsection-button">
            <h4>PRÉSENTATION</h4>
            <ArrowDropDownIcon fontSize="large" />
          </div>
        </div>

        <div className="section welcome">
          <h3 className="welcome__title">Bienvenue au Courti,</h3>
          <h5 className="welcome__subtitle">
            Maison d'hôte entre terre & mer.
          </h5>
          <div className="paragraphs">
            <p className="first_paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              aperiam dicta tenetur? Alias eligendi eveniet.
            </p>
            <p className="second_paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              aperiam dicta tenetur? Alias eligendi eveniet fugiat neque.
            </p>
          </div>
        </div>
        <div className="swiper__one">
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
              <img src="/images/villa.jpg" alt="" className="firstRowOfSlide" />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/cheminée.jpg"
                alt=""
                className="firstRowOfSlide"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/living.jpg"
                alt=""
                className="firstRowOfSlide"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/garden.jpg"
                alt=""
                className="firstRowOfSlide"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/pexels.jpg"
                alt=""
                className="firstRowOfSlide"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="section desc">
          <h4 className="desc__title">
            Lorem ipsum dolor sit amet consectetur.
          </h4>

          <div className="paragraphs">
            <p className="first_paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              aperiam dicta tenetur? Alias eligendi eveniet. Lorem ipsum dolor,
              sit amet consectetur adipisicing elit. Blanditiis, dolor? Lorem
              ipsum dolor sit amet.
            </p>
            <p className="second_paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              aperiam dicta tenetur? Alias eligendi eveniet fugiat neque. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
              dolor sit amet.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .domain {
          margin-left: 23vw;
        }
        .domain__headsection-button {
          position: absolute;
          height: 75px;
          width: 300px;
          top: 50%;
          left: 50%;
          background-color: #fafafa;
          z-index: 10;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: 600;
          color: #29524e;
        }

        .section {
          font-weight: 400;
          border-left: solid 2px #29524e;
          margin-top: 50px;
          margin-left: 10px;
          padding-left: 25px;
          margin-bottom: 50px;
        }

        .welcome__title {
          font-family: LoraBold;
          color: #29524e;
          font-size: 44px;
          margin-top: 10px;
          line-height: 10px;
        }

        .welcome__subtitle {
          font-size: 18px;
          font-weight: 500;
          margin-top: -25px;
          color: #29524e;
        }

        .paragraphs {
          display: flex;
        }

        .first_paragraph {
          width: 400px;
          margin-top: -15px;
          padding-right: 30px;
        }
        .second_paragraph {
          width: 400px;
          margin-top: -15px;
          padding-right: 30px;
        }

        .swiper__one {
          width: 80vw;
          margin-left: -43px;
        }

        .firstRowOfSlide {
          position: relative;
          width: 80vw;
          height: 300px;
          object-fit: cover;
        }

        .desc__title {
          font-family: LoraBold;
          font-size: 24px;
          color: #29524e;
        }
      `}</style>
    </>
  );
}
