import React from "react";
import styled from "styled-components";
import { device } from "../javascripts/device";

const HeadsectionPicture = styled.img`
  margin-left: 20vw;
  height: 90vh;
  width: 80vw;
  z-index: -1;
  object-fit: cover;

  @media ${device.mobileL} {
    width: 100vw;
    height: 75vh;
    margin-left: 0;
  }
`;

export default function HeadSectionPicture({ imageSrc }) {
  return (
    <>
      <HeadsectionPicture
        src={imageSrc}
        alt=""
        className="headsectionpicture"
      />
    </>
  );
}
