import React from "react";
import Sidebar from "../components/Sidebar";
import Reservation from "../components/Reservation";
import Popup from "../components/Popup";
import TheFooter from "../components/TheFooter";

import styled from "styled-components";

const Room = styled.section`
  margin-left: 20vw;
  display: flex;
  height: 600px;
  width: 100vw;
  background-color: ${(props) => (props.pair ? "#fafafa" : "#29524e")};

  > .description {
    width: 45%;

    > .textwrapper {
      width: 500px;
      height: 500px;

      margin-left: 50px;
      margin-top: 105px;
      color: white;

      > .headlines {
        border-left: 2px solid #fafafa;
        padding-left: 50px;
        width: 500px;
        height: 180px;

        > .title {
          font-family: Lora;
          font-size: 50px;
          line-height: 45px;
        }

        > .subtitle {
          margin-top: -30px;
          font-weight: 300;
          font-size: 30px;
        }

        > .paragraph {
          margin-top: -20px;
          font-size: 16px;
          padding-right: 50px;
        }
      }
    }
  }

  > .swiper {
  }
`;

const leschambres = () => {
  return (
    <>
      {" "}
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
                  <img src="/logo/beds.png" className="icon"></img>
                  <p>1 lit double</p>
                </div>
                <div className="group">
                  <img src="/logo/canape.png" className="icon"></img>
                  <p>1 canapé convertible</p>
                </div>
              </div>
              <h3 className="equipments">Équipements</h3>
              <div className="groups">
                <div className="group"></div>
                <div className="group"></div>
                <div className="group"></div>
                <div className="group"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper"></div>
      </Room>
      <Room pair>
        <div className="description"></div>
        <div className="swiper"></div>
      </Room>
      <TheFooter />
    </>
  );
};

export default leschambres;
