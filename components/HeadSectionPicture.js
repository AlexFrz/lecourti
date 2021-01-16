import React from "react";

export default function HeadSectionPicture({ imageSrc }) {
  return (
    <>
      <img src={imageSrc} alt="" className="headsectionpicture" />

      <style jsx>{`
        .headsectionpicture {
          margin-left: 20vw;
          height: 90vh;
          width: 80vw;
          z-index: -1;
          object-fit: cover;
        }
      `}</style>
    </>
  );
}
