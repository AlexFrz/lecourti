import React, { useState } from "react";
import Image from "next/image";
import SidebarOption from "./SidebarOption";
import { device } from "../javascripts/device";
import styled from "styled-components";

const MobileHeader = styled.div`
  position: relative;
  z-index: 999;
  top: 0;
  left: 0;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #fafafa;
  @media ${device.mobileL} {
    padding-top: 7.4vh;
    width: 100vw;
    height: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 7.5vh;
  }
  @media ${device.laptop} {
    display: none;
  }
`;

const StyledSidebar = styled.div`
  @media ${device.mobileL} {
    position: absolute;
    width: 100vw;
  }
  @media ${device.laptop} {
    flex: 0.2;
    width: 20vw;
    position: fixed;
  }
  height: 100vh;
  z-index: 999;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
  background-color: #fafafa;

  .sidebar__options {
    @media ${device.mobileL} {
      margin-top: 10vh;
    }
    @media ${device.laptop} {
      margin-top: 65px;
    }
  }
`;

const SidebarHeader = styled.div`
  top: 0;
  left: 0;
  padding-left: 20px;
  padding-right: 20px;
  @media ${device.mobileL} {
    width: 100vw;
    display: flex;
    height: 120px;
    justify-content: space-between;
    align-items: center;
  }
  @media ${device.laptop} {
    height: auto;
    width: auto;
  }
`;

const Hamburger = styled.div`
  > div {
    width: 25px;
    height: 2px;
    background-color: #29524e;
    margin-bottom: 5px;
    border-radius: 5px;
  }

  @media ${device.mobileL} {
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
    display: none;
  }
  @media ${device.desktop} {
  }
`;

const SidebarLogo = styled.img`
  @media ${device.mobileL} {
    width: 130px;
    display: flex;
    margin: 0 auto;
    transform: translateY(-3.5px);
    transform: translateX(-12.5%);
  }
  @media ${device.laptop} {
    height: 75px;
    width: 175px;
    margin-top: 45px;
    margin: 50px auto;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: contain;

  padding-left: -5px;
`;

const ReservationButton = styled.img`
  @media ${device.mobileL} {
    width: 25px;
    height: 25px;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
    display: none;
  }
  @media ${device.desktop} {
  }
`;

const SidebarBottom = styled.div`
  display: flex;
  position: relative;
  padding: 20px;

  height: 35px;
  justify-content: space-between;

  @media ${device.mobileL} {
    position: absolute;
    bottom: 60px;
  }
  @media ${device.laptop} {
    position: absolute;
    bottom: 40px;
  }

  .sidebar__bottom-localisation .flex {
    display: flex;
  }

  .sidebar__bottom-localisationIcon {
    @media ${device.mobileL} {
      width: 14px;
      height: 19px;
    }
    @media ${device.laptop} {
      width: 22.5px;
      height: 22.5px;
    }
    margin-top: 4px;

    object-fit: contain;
  }

  .sidebar__bottom-localisationIcon-round {
    @media ${device.mobileL} {
      width: 19px;
      height: 19px;
    }
    width: 22.5px;
    height: 22.5px;
    border-radius: 100%;
    padding: 5px;
    background-color: #29524e;
    margin: 7.5px;
  }

  .sidebar__bottom-localisationAdress {
    @media ${device.mobileL} {
      width: 90vw;
    }
    @media ${device.laptop} {
      width: 18vw;
    }
    display: flex;
    justify-content: space-between;
  }

  .justifybetween-left {
    display: flex;
  }

  .justifybetween-right {
    display: inline-block;
  }

  .phone {
    @media ${device.mobileL} {
      width: 15px;
      height: 15px;
    }
    width: 20px;
    height: 20px;
    margin-left: 2px;
  }

  .localisation {
    display: flex;
    height: 35px;
    font-size: 12px;
    align-items: center;

    p {
      line-height: 4px;
      margin-left: 5px;

      align-self: center;
    }

    .bold {
      font-weight: 600;
    }

    .flex {
      display: flex;
    }

    .block {
      display: block;
      p {
        color: #29524e;
      }
    }
  }
`;

export default function Sidebar() {
  const [toggleMenu, setToggleMenu] = useState(true);

  return (
    <>
      {toggleMenu ? (
        <StyledSidebar>
          <SidebarHeader>
            <Hamburger onClick={() => setToggleMenu(!toggleMenu)}>
              <div></div>
              <div></div>
              <div></div>
            </Hamburger>
            <SidebarLogo src="/logo/LeCourti_logo.png" alt="" />
          </SidebarHeader>

          <div className="sidebar__options">
            <SidebarOption title="Accueil" path="/" />
            <SidebarOption title="Le Domaine" path="/ledomaine" />
            <SidebarOption title="Les chambres" path="/leschambres" />
            <SidebarOption title="Offres & tarifs" path="" />
            <SidebarOption title="Aux alentours" path="" />
          </div>

          <SidebarBottom>
            <div className="localisation">
              <div className="sidebar__bottom-localisationAdress">
                <div className="justifybetween-left">
                  <div className="block">
                    <div className="flex">
                      <img
                        src="/logo/localisation.png"
                        className="sidebar__bottom-localisationIcon"
                      />

                      <div className="block">
                        <p className="bold">Le Barcarès, 66420</p>
                        <p>France</p>
                      </div>
                    </div>
                    <div className="flex">
                      <img
                        src="/logo/phone.png"
                        className="sidebar__bottom-localisationIcon phone"
                      />
                      <p className="bold">+33 6 17 72 83 72</p>
                    </div>
                  </div>
                </div>
                <div className="justifybetween-right">
                  <div className="">
                    <img
                      src="/logo/fb.png"
                      className="sidebar__bottom-localisationIcon-round"
                    />
                  </div>
                  <img
                    src="/logo/instagram.png"
                    className="sidebar__bottom-localisationIcon-round"
                  />
                </div>
              </div>
            </div>
          </SidebarBottom>
        </StyledSidebar>
      ) : (
        <MobileHeader>
          <Hamburger onClick={() => setToggleMenu(!toggleMenu)}>
            <div></div>
            <div></div>
            <div></div>
          </Hamburger>
          <SidebarLogo src="/logo/LeCourti_logo.png" alt="" />
        </MobileHeader>
      )}

      <style jsx>{``}</style>
    </>
  );
}
