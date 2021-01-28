import React from "react";
import styled from "styled-components";
import { device } from "../javascripts/device";

const Footer = styled.div`
  display: flex;
  position: relative;
  padding-left: 50px;
  bottom: 0;
  margin-top: -4px;
  z-index: 100;
  height: 50px;
  margin-left: 20vw;
  width: 80vw;
  background-color: #505050;
  color: #fafafa;
  justify-content: left;
  align-items: center;

  @media ${device.mobileL} {
    display: none;
  }

  > img {
    margin: 10px;
    width: 10px;
    height: 10px;
  }

  > p {
    > span {
      margin-left: 10px;
      margin-right: 10px;
    }
  }
`;

export default function TheFooter() {
  return (
    <>
      <Footer>
        <img src="/logo/copyright.png" alt="" />
        <p>
          2021 - <span>Tous droits réservés</span> |
          <span>Mentions légales</span> | <span>Plan du site </span>
        </p>
      </Footer>
    </>
  );
}
