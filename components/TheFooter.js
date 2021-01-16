import React from "react";
import styled from "styled-components";

const Footer = styled.div`
  display: flex;
  position: relative;

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

  > img {
    margin: 10px;
    width: 10px;
    height: 10px;
  }
`;

export default function TheFooter() {
  return (
    <>
      <Footer>
        <img src="/logo/copyright.png" alt="" />
        <p>2021 - Tous droits réservés | Mentions légales | Plan du site </p>
      </Footer>
    </>
  );
}
