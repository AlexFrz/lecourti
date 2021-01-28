import React from "react";
import Sidebar from "../components/Sidebar";
import Reservation from "../components/Reservation";
import Popup from "../components/Popup";
import TheFooter from "../components/TheFooter";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { EffectFade, Navigation, Pagination } from "swiper";

SwiperCore.use([EffectFade, Navigation, Pagination]);

import styled from "styled-components";

const Room = styled.section`
  margin-left: 20vw;
  display: flex;
  height: 87.5vh;
  max-width: 100vw;
  background-color: ${(props) => (props.pair ? "#fafafa" : "#29524e")};

  > .description {
    width: 45%;

    > .textwrapper {
      width: 500px;
      height: 500px;

      margin-left: 50px;
      margin-top: 105px;
      color: ${(props) => (props.unpair ? "#fafafa" : "#29524e")};

      > .headlines {
        border-left: 2px solid
          ${(props) => (props.unpair ? "#fafafa" : "#29524e")};
        padding-left: 50px;
        width: 500px;
        height: 130px;

        > .title {
          font-family: Lora;
          font-size: 40px;
          line-height: 50px;
        }

        > .subtitle {
          margin-top: -30px;
          font-weight: 300;
          font-size: 20px;
        }

        > .paragraph {
          margin-top: -10px;
          font-size: 14px;
          padding-right: 100px;
        }

        > .equipments {
          margin-top: -10px;
        }
      }

      > .infos {
        > h3 {
          margin-top: 50px;

          font-size: 24px;
          font-family: Lora;
        }
        > .groups {
          display: flex;

          > .group {
            display: flex;
            align-items: center;
            justify-content: left;
            margin-right: 0px;
            margin-bottom: -10px;
            width: 200px;

            > img {
              height: 22px;
              width: 30px;
              margin-right: 20px;
              object-fit: contain;
            }

            > p {
              font-size: 14px;
            }
          }
        }
      }
    }
  }
`;

const leschambres = () => {
  return (
    <>
      <Sidebar />
      <Reservation />
      <Popup />
      <Room unpair>
        <div className="description">
          <div className="textwrapper">
            <div className="headlines">
              <h2 className="title">Chambre I.</h2>
              <h4 className="subtitle">La Sauvageonne</h4>
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor inci di dunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
            <div className="infos">
              <h3 className="beds">Couchages</h3>
              <div className="groups">
                <div className="group">
                  <img src="/logo/beds.png"></img>
                  <p>1 lit double</p>
                </div>
                <div className="group">
                  <img src="/logo/canape.png"></img>
                  <p>1 canapé convertible</p>
                </div>
              </div>
              <h3 className="equipments">Équipements</h3>
              <div className="groups">
                <div className="group">
                  <img src="/logo/wifi.png"></img> <p>Wi-Fi</p>
                </div>

                <div className="group">
                  <img src="/logo/douche.png"></img>
                  <p>Douche italienne</p>
                </div>
              </div>

              <div className="groups">
                <div className="group">
                  <img src="/logo/bath.png"></img>
                  <p>Baignoire</p>
                </div>
                <div className="group">
                  <img src="/logo/gels.png"></img>
                  <p>Équipements de base</p>
                </div>
              </div>
            </div>
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
              <img src="/images/bedroom.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images//bedroom3.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images//bedroom1.jpg" alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </Room>
      <Room pair>
        <div className="description">
          <div className="textwrapper">
            <div className="headlines">
              <h2 className="title">Chambre II.</h2>
              <h4 className="subtitle">La Terre & Mer</h4>
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor inci di dunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
            <div className="infos">
              <h3 className="beds">Couchages</h3>
              <div className="groups">
                <div className="group">
                  <img src="/logo/greenbed.png"></img>
                  <p>1 lit double</p>
                </div>
                <div className="group">
                  <img src="/logo/greencanape.png"></img>
                  <p>1 canapé convertible</p>
                </div>
              </div>
              <h3 className="equipments">Équipements</h3>
              <div className="groups">
                <div className="group">
                  <img src="/logo/greenwifi.png"></img> <p>Wi-Fi</p>
                </div>

                <div className="group">
                  <img src="/logo/greenshower.png"></img>
                  <p>Douche italienne</p>
                </div>
              </div>

              <div className="groups">
                <div className="group">
                  <img src="/logo/greenbath.png"></img>
                  <p>Baignoire</p>
                </div>
                <div className="group">
                  <img src="/logo/greengels.png"></img>
                  <p>Équipements de base</p>
                </div>
              </div>
            </div>
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
              <img src="/images/bedroom4.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images//bedroom.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images//bedroom5.jpg" alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </Room>
      <Room unpair>
        <div className="description">
          <div className="textwrapper">
            <div className="headlines">
              <h2 className="title">Chambre III.</h2>
              <h4 className="subtitle">La Sauterelle</h4>
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor inci di dunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
            <div className="infos">
              <h3 className="beds">Couchages</h3>
              <div className="groups">
                <div className="group">
                  <img src="/logo/beds.png"></img>
                  <p>1 lit double</p>
                </div>
                <div className="group">
                  <img src="/logo/canape.png"></img>
                  <p>1 canapé convertible</p>
                </div>
              </div>
              <h3 className="equipments">Équipements</h3>
              <div className="groups">
                <div className="group">
                  <img src="/logo/wifi.png"></img> <p>Wi-Fi</p>
                </div>

                <div className="group">
                  <img src="/logo/douche.png"></img>
                  <p>Douche italienne</p>
                </div>
              </div>

              <div className="groups">
                <div className="group">
                  <img src="/logo/bath.png"></img>
                  <p>Baignoire</p>
                </div>
                <div className="group">
                  <img src="/logo/gels.png"></img>
                  <p>Équipements de base</p>
                </div>
              </div>
            </div>
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
              <img src="/images/bedroom5.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images//bedroom3.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images//bedroom1.jpg" alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </Room>
      <Room pair>
        <div className="description">
          <div className="textwrapper">
            <div className="headlines">
              <h2 className="title">Chambre IV.</h2>
              <h4 className="subtitle">La Septième Ciel</h4>
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor inci di dunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
            <div className="infos">
              <h3 className="beds">Couchages</h3>
              <div className="groups">
                <div className="group">
                  <img src="/logo/greenbed.png"></img>
                  <p>1 lit double</p>
                </div>
                <div className="group">
                  <img src="/logo/greencanape.png"></img>
                  <p>1 canapé convertible</p>
                </div>
              </div>
              <h3 className="equipments">Équipements</h3>
              <div className="groups">
                <div className="group">
                  <img src="/logo/greenwifi.png"></img> <p>Wi-Fi</p>
                </div>

                <div className="group">
                  <img src="/logo/greenshower.png"></img>
                  <p>Douche italienne</p>
                </div>
              </div>

              <div className="groups">
                <div className="group">
                  <img src="/logo/greenbath.png"></img>
                  <p>Baignoire</p>
                </div>
                <div className="group">
                  <img src="/logo/greengels.png"></img>
                  <p>Équipements de base</p>
                </div>
              </div>
            </div>
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
              <img src="/images/bedroom3.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images//bedroom.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images//bedroom5.jpg" alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </Room>
      <Room unpair>
        <div className="description">
          <div className="textwrapper">
            <div className="headlines">
              <h2 className="title">Chambre V.</h2>
              <h4 className="subtitle">La Lune de Miel</h4>
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor inci di dunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
            <div className="infos">
              <h3 className="beds">Couchages</h3>
              <div className="groups">
                <div className="group">
                  <img src="/logo/beds.png"></img>
                  <p>1 lit double</p>
                </div>
                <div className="group">
                  <img src="/logo/canape.png"></img>
                  <p>1 canapé convertible</p>
                </div>
              </div>
              <h3 className="equipments">Équipements</h3>
              <div className="groups">
                <div className="group">
                  <img src="/logo/wifi.png"></img> <p>Wi-Fi</p>
                </div>

                <div className="group">
                  <img src="/logo/douche.png"></img>
                  <p>Douche italienne</p>
                </div>
              </div>

              <div className="groups">
                <div className="group">
                  <img src="/logo/bath.png"></img>
                  <p>Baignoire</p>
                </div>
                <div className="group">
                  <img src="/logo/gels.png"></img>
                  <p>Équipements de base</p>
                </div>
              </div>
            </div>
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
              <img src="/images/bedroom.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images//bedroom.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images//bedroom5.jpg" alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </Room>
      <TheFooter />

      <style jsx>{`
        .swiper {
          width: 44vw;
        }

        .swiper img {
          width: 44vw;
          object-fit: cover;
          height: 67.5vh;
          margin-top: 75px;
        }
      `}</style>
    </>
  );
};

export default leschambres;
