import React, { useEffect, useRef, useState } from "react";
import { getCurrentDate } from "../javascripts/getCurrentDate";
import styled from "styled-components";
import { device } from "../javascripts/device";

import { gsap } from "gsap";

const StyledReservation = styled.div`
  @media ${device.mobileL} {
    position: absolute;
    top: 120px;
    width: 100vw;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
    position: fixed;
    width: 245px;
    background-color: #fafafa;
    top: 0;
    height: 50px;
    right: 35px;
    z-index: 999;
  }
  @media ${device.desktop} {
  }

  .reservation__header {
    @media ${device.tablet} {
    }
    @media ${device.laptop} {
    }
    @media ${device.desktop} {
    }
  }

  .reservation__header {
    position: relative;
    cursor: pointer;
    width: 100%;
    height: 50px;
    width: 245px;
    background-color: #fafafa;
    z-index: 20 !important;
    display: flex;
    justify-content: center;
    align-items: center;
    @media ${device.mobileL} {
      width: 100vw;
      box-shadow: 1px #c4c4c4;
    }
  }

  .reservation__header h3 {
    margin-left: 3px;
    font-size: 18px;
    font-weight: 500;
    color: #29524e;
  }

  .reservation__body {
    position: relative;
    z-index: 10 !important;
    height: 230px;
    background-color: #f3f3f3;
  }

  .formgroup {
    display: flex;
    margin: 12.5px;
  }

  .formgroup--block {
    padding-top: 20px;
    margin: 10px;
  }

  .form__firstgroup--second {
    margin-left: -7px;
    margin-top: 17.5px;
  }

  .form__secondgroup {
    margin-top: -7.5px;
  }

  form {
    margin-top: 0;
    margin: -5px 5px;
    display: block;
  }

  fieldset {
    display: flex !important;
    border: none;
    justify-content: center;
    align-items: center;
    margin: 0;

    padding: 0;
  }

  label {
    width: 35px;
    height: 35px;
    background-color: #29524e;
  }
  input {
    padding-left: 7.5px;
  }
  select {
    font-family: "Montserrat";
  }
  option {
    font-family: "Montserrat";
    padding-left: 5px;
  }

  .label__date {
    padding: 10px;
    display: flex;
    color: #fafafa;
    width: 110px;

    font-size: 12px;
    align-items: center;
    @media ${device.mobileL} {
      width: 50vw;
    }
  }

  .label__date img {
    margin: 10px;
  }

  .form__icon {
    display: flex;
    width: 15px;
    margin: 10px auto;
  }

  .calendar {
    display: flex;
    width: 110px;
    height: 50px;
    border-radius: 0;

    justify-content: center;
    align-items: center;
    padding: 0 7.5px;
    font-size: 14px;
    font-family: "Montserrat";
    @media ${device.mobileL} {
      width: 50vw;
    }
  }

  .nights {
    width: 60px;
    height: 35px;
    border-radius: 0;
    @media ${device.mobileL} {
      width: 27.5vw;
    }
  }
  .persons {
    width: 60px;
    height: 35px;
    border-radius: 0;
    @media ${device.mobileL} {
      width: 27.5vw;
    }
  }

  .beds {
    border-radius: 0;
    height: 35px;
    width: 185px;
    @media ${device.mobileL} {
      width: 90vw;
    }
  }

  button {
    width: 215px;
    height: 40px;
    font-size: 14px;
    background-color: #29524e;
    color: #fafafa;
    font-family: "Montserrat";
    font-weight: 500;
    margin: 12px;
    margin-top: 0;
    @media ${device.mobileL} {
      width: 90vw;
    }
  }

  .flex {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .green-calendar {
    margin-right: 10px;
    width: 18px;
    height: 18px;
    display: flex;
    justify-content: center;
    text-align: center;
  }
`;

export default function Reservation() {
  const [date, setDate] = useState(getCurrentDate());
  const [nights, setNights] = useState(1);
  const [persons, setPersons] = useState(1);
  const [room, setRoom] = useState(" Sélectionnez...");
  const [open, setOpen] = useState(true);

  const reservationBody = useRef();

  useEffect(() => {
    open
      ? gsap.fromTo(
          [reservationBody.current],
          {
            y: -300,
          },
          { y: 4 },
          { duration: 0.1 }
        )
      : gsap.fromTo(
          [reservationBody.current],
          {
            y: 4,
          },
          { y: -300 },
          { duration: 0.1 }
        );
  });

  return (
    <>
      <StyledReservation>
        <div className="reservation__header" onClick={(e) => setOpen(!open)}>
          {open ? (
            <h3>Réservation</h3>
          ) : (
            <div className="flex">
              <img src="/logo/calendargreen.png" className="green-calendar" />
              <h3>Réservation</h3>
            </div>
          )}
        </div>
        <div className="reservation__body" ref={reservationBody}>
          <form action="">
            <fieldset>
              <div className="form__firstgroup--first">
                <div className="formgroup--block">
                  <label htmlFor="date" className="label__date">
                    <img src="/logo/Calendar.png" className="form__icon" />
                    Arrivée
                  </label>
                  <input
                    type="date"
                    id="date"
                    className="calendar unstyled"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
              </div>
              <div className="form__firstgroup--second">
                <div className="formgroup">
                  <label htmlFor="nights">
                    <img src="/logo/night.png" className="form__icon" />
                  </label>
                  <input
                    type="number"
                    id="nights"
                    className="nights"
                    value={nights}
                    onChange={(e) => setNights(e.target.value)}
                  />
                </div>
                <div className="formgroup">
                  <label htmlFor="persons">
                    <img src="/logo/people.png" className="form__icon" />
                  </label>
                  <input
                    type="number"
                    id="persons"
                    className="persons"
                    value={persons}
                    onChange={(e) => setPersons(e.target.value)}
                  />
                </div>
              </div>
            </fieldset>
            <div className="form__secondgroup">
              <div className="formgroup">
                <label htmlFor="beds">
                  <img src="/logo/bed.png" className="form__icon" />
                </label>
                <select
                  name="beds"
                  id="beds"
                  className="beds"
                  value={room}
                  onChange={(e) => setRoom(e.target.value)}
                >
                  <option value="double">Selectionnez...</option>
                  <option value="double">Simple</option>
                </select>
              </div>
            </div>
            <button type="submit" className="reservez">
              RÉSERVEZ
            </button>
          </form>
        </div>
      </StyledReservation>

      <style jsx>{``}</style>
    </>
  );
}
