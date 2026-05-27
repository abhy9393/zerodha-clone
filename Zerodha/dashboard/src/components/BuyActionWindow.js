


import React, {
  useState,
  useContext,
} from "react";

import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {

  const [stockQuantity, setStockQuantity] =
    useState(1);

  const [stockPrice, setStockPrice] =
    useState(0);

  const { closeBuyWindow } =
    useContext(GeneralContext);

  /* ---------------- BUY ---------------- */

  const handleBuyClick = async () => {

    try {

      await axios.post(

        "http://localhost:3002/newOrder",

        {
          name: uid,
          qty: Number(stockQuantity),
          price: Number(stockPrice),
          mode: "BUY",
        },

        {
          headers: {
            Authorization:
              localStorage.getItem("token"),
          },
        }

      );

      console.log("BUY SUCCESS");

      closeBuyWindow();

    } catch (err) {

      console.log(
        "BUY ERROR",
        err.message
      );

    }
  };

  /* ---------------- SELL ---------------- */

  const handleSellClick = async () => {

    try {

      await axios.post(

        "http://localhost:3002/newOrder",

        {
          name: uid,
          qty: Number(stockQuantity),
          price: Number(stockPrice),
          mode: "SELL",
        },

        {
          headers: {
            Authorization:
              localStorage.getItem("token"),
          },
        }

      );

      console.log("SELL SUCCESS");

      closeBuyWindow();

    } catch (err) {

      console.log(
        "SELL ERROR",
        err.message
      );

    }
  };

  /* ---------------- CANCEL ---------------- */

  const handleCancelClick = () => {

    closeBuyWindow();

  };

  return (

    <div
      className="container"
      id="buy-window"
      draggable="true"
    >

      <div className="regular-order">

        <div className="inputs">

          <fieldset>

            <legend>Qty</legend>

            <input
              type="number"
              value={stockQuantity}
              onChange={(e) =>
                setStockQuantity(
                  e.target.value
                )
              }
            />

          </fieldset>

          <fieldset>

            <legend>Price</legend>

            <input
              type="number"
              step="0.05"
              value={stockPrice}
              onChange={(e) =>
                setStockPrice(
                  e.target.value
                )
              }
            />

          </fieldset>

        </div>

      </div>

      <div className="buttons">

        <span>Place Order</span>

        <div>

          <button
            className="btn btn-blue"
            onClick={handleBuyClick}
          >
            Buy
          </button>

          <button
            className="btn btn-red"
            onClick={handleSellClick}
          >
            Sell
          </button>

          <button
            className="btn btn-grey"
            onClick={handleCancelClick}
          >
            Cancel
          </button>

        </div>

      </div>

    </div>
  );
};

export default BuyActionWindow;