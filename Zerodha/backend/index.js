
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

/* ---------------- MODELS ---------------- */

const { HoldingsModel } = require("./model/HoldingsModel");

const { PositionsModel } = require("./model/PositionsModel");

const { OrdersModel } = require("./model/OrdersModel");

/* ---------------- AUTH ---------------- */

const authRoutes = require("./routes/authRoutes");

const dashboardRoutes = require(
  "./routes/dashboardRoutes"
);

const authMiddleware = require(
  "./middleware/authMiddleware"
);

/* ---------------- APP CONFIG ---------------- */

const app = express();

const PORT = process.env.PORT || 3002;

const uri = process.env.MONGO_URL;

/* ---------------- MIDDLEWARE ---------------- */

app.use(cors());

app.use(express.json());

app.use(bodyParser.json());

/* ---------------- AUTH APIs ---------------- */

app.use("/api/auth", authRoutes);

app.use("/api", dashboardRoutes);

/* ---------------- HOLDINGS API ---------------- */

app.get(
  "/allHoldings",
  authMiddleware,
  async (req, res) => {
    try {
      const data =
        await HoldingsModel.find({});

      res.json(data);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
);

/* ---------------- POSITIONS API ---------------- */

app.get(
  "/allPositions",
  authMiddleware,
  async (req, res) => {
    try {
      const data =
        await PositionsModel.find({});

      res.json(data);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
);

/* ---------------- BUY / SELL ORDER ---------------- */

app.post(
  "/newOrder",
  authMiddleware,
  async (req, res) => {
    try {
      const { name, qty, price, mode } =
        req.body;

      /* SAVE ORDER */

      await OrdersModel.create({
        name,
        qty: Number(qty),
        price: Number(price),
        mode,
      });

      /* FIND HOLDING */

      let holding =
        await HoldingsModel.findOne({
          name,
        });

    /* ---------------- BUY ---------------- */

if (mode === "BUY") {

  if (holding) {

    holding.qty =
      Number(holding.qty) +
      Number(qty);

    holding.price =
      Number(price);

    await holding.save();

  } else {

    await HoldingsModel.create({

      name,

      qty: Number(qty),

      avg: Number(price),

      price: Number(price),

      net: "0%",

      day: "0%",

    });

  }
}

      /* ---------------- SELL ---------------- */

      if (mode === "SELL") {
        if (holding) {
          holding.qty -= Number(qty);

          if (holding.qty <= 0) {
            await HoldingsModel.deleteOne({
              name,
            });
          } else {
            await holding.save();
          }
        }
      }

      res.send(
        "Order Processed Successfully"
      );

    } catch (err) {

      console.log(err);

      res.status(500).send(err.message);
    }
  }
);

/* ---------------- START SERVER ---------------- */

app.listen(PORT, async () => {
  try {

    await mongoose.connect(uri);

    console.log("DB Connected!");

    console.log(
      `Server running on port ${PORT}`
    );

  } catch (err) {

    console.log(err.message);

  }
});