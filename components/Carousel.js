import React from "react";
import Image from "next/image";

export default function Carousel() {
  return (
    <>
      <img src="/images/pool.jpg" alt="" className="carousel" />

      <style jsx>{`
        .carousel {
          position: relative;
          flex: 0.8;
          height: 100vh;
          width: 80vw;
          z-index: -1;
        }
      `}</style>
    </>
  );
}
