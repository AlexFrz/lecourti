import React from "react";

export default function Reservation() {
  return (
    <>
      <div className="reservation">
        <div className="reservation__header">
          <h3>Réservation</h3>
        </div>
        <div className="reservation__body">
          <form action="">
            <fieldset>
              <div className="form__firstgroup--first">
                <div className="formgroup--block">
                  <label for="date" className="label__date">
                    <img src="/logo/Calendar.png" className="form__icon" />
                    Arrivée
                  </label>
                  <input
                    type="date"
                    id="date"
                    className="calendar unstyled"
                    value="2020-01-08"
                  />
                </div>
              </div>
              <div className="form__firstgroup--second">
                <div className="formgroup">
                  <label for="nights">
                    <img src="/logo/night.png" className="form__icon" />
                  </label>
                  <input
                    type="number"
                    id="nights"
                    className="nights"
                    placeholder={1}
                  />
                </div>
                <div className="formgroup">
                  <label for="persons">
                    <img src="/logo/people.png" className="form__icon" />
                  </label>
                  <input
                    type="number"
                    id="persons"
                    className="persons"
                    placeholder={1}
                  />
                </div>
              </div>
            </fieldset>
            <div className="form__secondgroup">
              <div className="formgroup">
                <label for="beds">
                  <img src="/logo/bed.png" className="form__icon" />
                </label>
                <select name="beds" id="beds" className="beds">
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
      </div>
      <style jsx>
        {`
          .reservation {
            position: absolute;
            width: 245px;
            height: 285px;
            background-color: #fafafa;
            top: 0;
            right: 35px;
            z-index: 999;
          }

          .reservation__header {
            width: 100%;
            height: 60px;
            display: flex;
            justify-content: center;
            align-items: center;

            h3 {
              font-size: 18px;
              color: #29524e;
            }
          }

          .reservation__body {
            height: 210px;
            background-color: rgba(200, 200, 200, 0.25);
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
          }

          .label__date {
            padding: 10px;
            display: flex;
            color: #fafafa;
            width: 110px;

            font-size: 12px;
            align-items: center;

            img {
              margin: 10px;
            }
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
          }

          .nights {
            width: 60px;
            height: 35px;
            border-radius: 0;
          }
          .persons {
            width: 60px;
            height: 35px;
            border-radius: 0;
          }

          .beds {
            border-radius: 0;
            height: 35px;
            width: 185px;
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
          }
        `}
      </style>
    </>
  );
}
