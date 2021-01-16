import React from "react";
import Image from "next/image";
import SidebarOption from "./SidebarOption";

export default function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <img className="sidebar__logo" src="/logo/LeCourti_logo.png" alt="" />
        <div className="sidebar__options">
          <SidebarOption title="Accueil" path="/" />
          <SidebarOption title="Le Domaine" path="/ledomaine" />
          <SidebarOption title="Les Chambres" path="/leschambres" />
          <SidebarOption title="Tarifs" path="" />
          <SidebarOption title="Contact" path="" />
        </div>

        <div className="sidebar__bottom">
          <div className="sidebar__bottom-localisation">
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
                      className="sidebar__bottom-localisationIcon"
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
        </div>
      </div>
      <style jsx>{`
        .sidebar {
          height: 100vh;
          z-index: 999;
          flex: 0.2;
          width: 20vw;
          height: 100vh;
          background-color: #fafafa;
          position: fixed;
        }

        .sidebar__logo {
          display: flex;
          justify-content: center;
          align-items: center;
          object-fit: contain;
          height: 90px;
          margin: 50px auto;
          margin-top: 45px;
          margin-right: auto;
        }

        .sidebar__options {
          margin-top: 65px;
        }

        .sidebar__bottom {
          display: flex;
          position: relative;
          padding: 15px;
          bottom: -100px;
          height: 35px;
          justify-content: space-between;
        }

        .sidebar__bottom-localisation {
          display: flex;
          height: 35px;
          font-size: 12px;
          align-items: center;
        }

        .sidebar__bottom-localisation p {
          line-height: 4px;
          margin-left: 5px;

          align-self: center;
        }

        .bold {
          font-weight: 600;
        }
        .block {
          display: block;
        }

        .flex {
          display: flex;
        }

        .sidebar__bottom-localisationIcon {
          margin-top: 4px;
          width: 22.5px;
          height: 22.5px;
        }

        .sidebar__bottom-localisationIcon-round {
          width: 22.5px;
          height: 22.5px;
          border-radius: 100%;
          padding: 5px;
          background-color: #29524e;
          margin: 7.5px;
        }

        .sidebar__bottom-localisationAdress {
          width: 18vw;
          display: flex;
          justify-content: space-between;
        }

        .justifybetween-left {
          display: flex;
        }

        .justifybetween-right {
          display: inline-block;
        }
      `}</style>
    </>
  );
}
