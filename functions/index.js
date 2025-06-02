const {https} = require("firebase-functions/v2");
// const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
// -API

// -APP Config
const app = express();

// - Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// -API Routes
app.get("/", (req, res) => res.status(200).send("Hello World"));

app.post("/payments/create", async (req, res) => {
  const total =req.query.total;


  console.log("Payment request received ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  // If okay created
  console.log("PaymentIntent client secret:", paymentIntent.client_secret)
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen Commands
exports.api = https.onRequest(app);

