const express = require("express");
const helmet = require("helmet");
const { json } = require("body-parser");
const cors = require("cors");

const { config } = require("./config");

const { userRouter, songRouter } = require("./routes");

const app = express();

app.use(helmet());
app.use(json());
app.use(
  cors({
    origin: config.client.URL,
  })
);

app.use("/users", userRouter);
app.use("/songs", songRouter);

app.get("/", (req, res) => {
  res.status(200).send({
    data: "root page!",
  });
});

module.exports = app;
