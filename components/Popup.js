import React, { useEffect, useRef, useState } from "react";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

import { gsap } from "gsap";

export default function Popup() {
  const popup = useRef();

  useEffect(() => {
    open
      ? gsap.fromTo(
          [popup.current],
          {
            x: 520,
          },
          { x: 0 },
          { duration: 0.1 }
        )
      : gsap.fromTo(
          [popup.current],
          {
            x: 0,
          },
          { x: 520 },
          { duration: 0.1 }
        );
  });
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="popup" ref={popup}>
        <div className="popup__head" onClick={(e) => setOpen(!open)}>
          {open ? (
            <ArrowRightIcon fontSize="large" style={{ color: "#fafafa" }} />
          ) : (
            <ArrowLeftIcon fontSize="large" />
          )}
        </div>
        <div className="popup__body">
          <p className="popup__body-headline">PROMOTION DE DERNIÈRE MINUTE !</p>
          <p className="popup__body-subtitle">
            15% de réduction jusqu’au 31/02/21 inclus.
          </p>
        </div>
      </div>
      <style jsx>
        {`
          .popup {
            width: 550px;
            height: 120px;
            position: fixed;
            right: 0;
            bottom: 100px;
            background-color: #f7f7f7;
            z-index: 999;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .popup__head {
            width: 35px;
            height: 120px;
            position: relative;
            left: 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: ${open ? "#29524e" : "#fafafa"};
            cursor: pointer;
          }

          .popup__body {
            height: 35px;
            width: 500px;
            display: inline-block;
            justify-content: center;
            align-items: center;
          }

          .popup__body-headline {
            padding-left: 30px;
            margin-top: -8px;
            font-size: 20px;
            font-weight: 500;
          }

          .popup__body-subtitle {
            font-size: 16px;
            font-weight: 300;
            padding-left: 30px;
            margin-top: -12.5px;
          }
        `}
      </style>
    </>
  );
}
